/// <reference types="vite/client" />

interface importMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_LOCALSTORAGE_KEY: string;
}

interface importMeta {
  readonly env: ImportMetaEnv;
}
