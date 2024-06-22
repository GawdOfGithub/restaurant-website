import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const Footer = ({children}) => (
    <footer className={styles.footer}>
      {children}
      <Link
        href="/"
        passHref
      >
        <a
          target='_blank'
          rel='noopener noreferrer'>
          <div className={styles.footer_copyright}>
            <p className='opensans'>
              Powered by{' '}
            </p>
            <span className={styles.footer_logo}>
            weserveyou.live
            </span> 
          </div>
        </a>
      </Link>
    </footer>
);

export default Footer;