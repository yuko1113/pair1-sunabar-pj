import axios, { AxiosResponse, AxiosError } from "axios";
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res: AxiosResponse = await axios.get("https://api.sunabar.gmo-aozora.com/personal/v1/accounts/balances", {
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

export default function balanceList({ data }: any) {

  console.log(data);

  return (
    <>
      <h2 className={styles.zandakadaimei}>残高照会</h2>
      <div className={styles.zandakanakami}>
      あなたのすべての残高は、{parseInt(data.balances[0].balance).toLocaleString()} 円です！<br/>
      そのうち、<br/>
      メイン口座の残高は、{parseInt(data.spAccountBalances[0].odBalance).toLocaleString()}円です！<br/>
      おこづかい口座の残高は、{parseInt(data.spAccountBalances[1].odBalance).toLocaleString()}円です！<br/>
      貯金口座の残高は、{parseInt(data.spAccountBalances[2].odBalance).toLocaleString()}円です！<br/>
      投資口座の残高は、{parseInt(data.spAccountBalances[3].odBalance).toLocaleString()}円です！<br/>
      </div>
    </>
  );
}
