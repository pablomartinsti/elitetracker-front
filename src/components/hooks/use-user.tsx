import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../../services/api';

export type userData = {
  id: string;
  name: string;
  avatarUrl: string;
  token: string;
};
type UserContextProps = {
  getUserInfo: (githubCode: string) => Promise<void>;
  userData: userData;
};

type UserProviderProps = {
  children: ReactNode;
};

export const userLocalStorageKey = `${import.meta.env.VITE_LOCALSTORAGE_KEY}:userData`;

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<userData>({} as userData);

  function putUserData(data: userData) {
    setUserData(data);

    localStorage.setItem(userLocalStorageKey, JSON.stringify(data));
  }

  async function getUserInfo(githubCode: string) {
    const { data } = await api.get<userData>('/auth/callback', {
      params: {
        code: githubCode,
      },
    });
    putUserData(data);
  }

  async function loadUserData() {
    const localData = localStorage.getItem('elitetracker:userData');

    if (localData) {
      setUserData(JSON.parse(localData) as userData);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, getUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext');
  }
  return context;
}
