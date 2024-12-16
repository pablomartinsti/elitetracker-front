import { ComponentProps } from 'react';

import styles from './styles.module.css';

type ButtonProps = ComponentProps<'button'>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.content}>
      {children}
    </button>
  );
}

export default Button;
