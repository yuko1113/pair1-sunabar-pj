import styles from '../styles/Home.module.css';
import Image from 'next/image'

const Header = () => (
    <h1 className={styles.title}>
    ほしぞら ☆ ネットバンク
    <div className={styles.aaaa}>
        <Image src = "/illustrain02-penguin04.png" alt="logo" width={140} height={140} />
    </div>
    </h1>
);
  
export default Header;