import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res:NextApiResponse<Data>) {

    const { depositSpAccount, paymentAmount } = req.body

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json;charset=UTF-8");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");
    myHeaders.append("x-access-token", "ZDRjNDFkOTFmZjJlYzRhNTA0ZWI3MDkz");
    
    const raw = JSON.stringify({ "depositSpAccountId":depositSpAccount,"debitSpAccountId":"SP30110005067","currencyCode":"JPY","paymentAmount":paymentAmount});
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    const response = await fetch("https://api.sunabar.gmo-aozora.com/personal/v1/transfer/spaccounts-transfer", requestOptions);
    const data = await response.json(); 
    res.status(200).json({data});                  
}


    
