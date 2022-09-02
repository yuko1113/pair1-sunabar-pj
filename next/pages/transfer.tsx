import { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from "axios";
import styles from '../styles/Home.module.css'

export default function transferList() {
    const [transferAmount, setTransferAmount] = useState<string>("");
    const [beneficiaryId, setBeneficiaryId] = useState<string>("");

    const postTransfer = () => {
        axios.post('/api/transfer', {
            transferAmount,
            beneficiaryId,        
        })
        .then((res: AxiosResponse) => alert("振込依頼が完了しました"))
        .catch((e: AxiosError) => alert("エラーが発生しました"));
    }

    return (
        <>
        <h1 className={styles.zandakadaimei}>振込</h1>
        <div className={styles.hurikomidaimei}>
        <label>  誰に振り込む？ </label>
        <select value={beneficiaryId} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBeneficiaryId(e.currentTarget.value)} className={styles.hurikominyuu}>
            <option value="0">選んでね！</option>
            <option value={"A"}>お父さん</option>
            <option value={"B"}>おばあちゃん</option>
            <option value={"C"}>ピアノ教室</option>
        </select>
        <br/>
        <br/>
        <label>  いくら振り込む？ </label>
        <input type="text" value={transferAmount} className={styles.hurikominyuu} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTransferAmount(e.currentTarget.value)}/> <span>円</span>
        <br/> 
        <br/>
        <button onClick={postTransfer} className={styles.gobutton}>振込！</button>
        <br/>
        <br/> 
        ログインして振込を承認してください！
        <a href="https://sso.sunabar.gmo-aozora.com/b2c/login"><br/>
            <button className={styles.gobutton} >ログイン！</button>
        </a>
        </div>
        </>
    );
}