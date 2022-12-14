import axios,{AxiosResponse} from "axios";
import React,{ useState } from "react";
import styles from '../styles/Home.module.css'

export default function spaAcc() {
    const [depositSpAccount, setdepositSpAccount] = useState<string>("");
    const [paymentAmount, setpaymentAmount] = useState<string>("");

    const postSpa = () => {
        axios.post('api/spAccount', {
            depositSpAccount,
            paymentAmount
        })
        .then((res: AxiosResponse) => alert("振替が完了しました"))
    }

    return(
        <div>
            <h1 className = {styles.zandakadaimei}>つかいわけ口座振替</h1>
            <br></br>
            <div className={styles.hurikomidaimei}>
            <label>何用？</label>
            <select className={styles.hurikominyuu} value={depositSpAccount} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setdepositSpAccount(e.currentTarget.value)}>
                <option value="0">用途</option>
                <option value={"SP50220285148"}>おこづかい</option>
                <option value={"SP50220285155"}>貯金</option>
                <option value={"SP50220285162"}>投資</option>
            </select>
            <br></br>
            <br></br>
            <label>何円振り替える？</label>
            <select className={styles.hurikominyuu} value={paymentAmount} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setpaymentAmount(e.currentTarget.value)}>
                <option value="A">金額</option>
                <option value={"1000"}>1000円</option>
                <option value={"3000"}>3000円</option>
                <option value={"5000"}>5000円</option>
                <option value={"10000"}>10000円</option>
                <option value={"15000"}>15000円</option>
                <option value={"20000"}>20000円</option>
            </select>
            <br></br>
            <br></br>
            <button onClick = {postSpa} className={styles.gobutton}>振替！</button>
            </div>
        </div>       
    )
}
