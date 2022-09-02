import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Link from 'next/link'

const Header = () => (
    <>
        <h1 className={styles.title}>
        ほしぞら ☆ ネットバンク
        <div className={styles.aaaa}>
            <Image src = "/illustrain02-penguin04.png" alt="logo" width={140} height={140} />
        </div>
        </h1>
        <Link href="/" text-align="center">
            <h3>最初に戻る</h3>
        </Link>
    </>
);
  
export default Header;