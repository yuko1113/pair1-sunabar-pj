import axios from "axios";
import React,{ useState } from "react";

export default function spaAcc() {
    const [depositSpAccount, setdepositSpAccount] = useState<string>("");
    const [paymentAmount, setpaymentAmount] = useState<string>("");

    const postSpa = () => {
        axios.post('api/spAccount', {
            depositSpAccount,
            paymentAmount
        })
    }

    return(
        <div>
            <h1>つかいわけ口座振替</h1>
            <br></br>
            <label>何用？</label>
            <select value={depositSpAccount} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setdepositSpAccount(e.currentTarget.value)}>
                <option value="0">用途</option>
                <option value={"SP50220278959"}>おこづかい</option>
                <option value={"saving"}>貯金</option>
                <option value={"investing"}>投資</option>
            </select>
            <br></br>
            <label>何円振り替える？</label>
            <select value={paymentAmount} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setpaymentAmount(e.currentTarget.value)}>
                <option value="A">金額</option>
                <option value={"1000"}>1000円</option>
                <option value={"3000"}>3000円</option>
                <option value={"5000"}>5000円</option>
                <option value={"10000"}>10000円</option>
                <option value={"15000"}>15000円</option>
                <option value={"20000"}>20000円</option>
            </select>
            <br></br>
            <button onClick = {postSpa}>つかいわけ口座振替！！！！</button>
        </div>       
    )
}
