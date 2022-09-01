import { useState, useEffect } from 'react';
import NextLink from "next/link";
import axios, { AxiosResponse, AxiosError } from "axios";

export default function transferList() {
    const [transferAmount, setTransferAmount] = useState<string>("");
    const [beneficiaryId, setBeneficiaryId] = useState<string>("");

    const postTransfer = () => {
        axios.post('/api/transfer', {
            transferAmount,
            beneficiaryId,        
        })
        .then((res: AxiosResponse) => console.log('Posting data', res))
    }

    return (
        <>
        <h1>振込</h1>
        <label>  誰に振り込む？ </label>
        <select value={beneficiaryId} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBeneficiaryId(e.currentTarget.value)}>
        <option value="0">選んでね！</option>
        <option value={"A"}>お父さん</option>
        <option value={"B"}>おばあちゃん</option>
        <option value={"C"}>ピアノ教室</option>
        </select>
        <br/>
        <label>  いくら振り込む？ </label>
        <input type="text" value={transferAmount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTransferAmount(e.currentTarget.value)}/> <span>円</span>
        <br/>      
        <button onClick={postTransfer}>  振り込む！</button>
        <br/>
        <br/> 
        ログインして振込を承認してください！
        <a href="https://sso.sunabar.gmo-aozora.com/b2c/login?_ga=2.157711802.163650072.1661733632-1080327016.1661733632">
        <br/>
        <button>ログインする</button></a>
        </>
    );
}

