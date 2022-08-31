import { useState, useEffect } from 'react';
import NextLink from "next/link";
import axios, { AxiosResponse, AxiosError } from "axios";

export async function getServerSideProps() {
    const res = await axios.get("https://api.sunabar.gmo-aozora.com/personal/v1/accounts/balances", {
        headers: { 
            'Accept': 'application/json;charset=UTF-8', 
            'Content-Type': 'application/json;charset=UTF-8', 
            'x-access-token': 'OGY0ZGM4YTJmNmQxMDBlNjNjZDhmNjk4'
        }
    });

    const data = await res.data;

    return { 
        props: {
            data: data 
        },
    };
}


export default function balanceList({ data }) {

   console.log(data);
   console.log(typeof data.balances[0].balance);

  return (
    <>
      <h2>残高照会</h2>
      あなたのすべての残高は、{parseInt(data.balances[0].balance).toLocaleString()} 円です！<br/>
      そのうち、<br/>
      メイン口座の残高は、{parseInt(data.spAccountBalances[0].odBalance).toLocaleString()}円です！<br/>
      子口座の残高は、{parseInt(data.spAccountBalances[1].odBalance).toLocaleString()}円です！
    </>
  );
}