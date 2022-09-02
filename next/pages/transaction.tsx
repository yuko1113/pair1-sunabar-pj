import React from "react";
import type { GetServerSideProps } from "next";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json;charset=UTF-8");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");
    myHeaders.append("x-access-token", "OGY0ZGM4YTJmNmQxMDBlNjNjZDhmNjk4");
    
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const res = await fetch("https://api.sunabar.gmo-aozora.com/personal/v1/accounts/transactions?accountId=302010005104&dateFrom=2022-08-01&dateTo=2022-09-02&nextItemKey=0",requestOptions);
    const posts = await res.json();

    // `props: { posts }` を返すことで
    // Blog コンポーネントはリクエスト時に `posts` を `props` として受け取れる
    return {
        props: {
            posts,
        },
    };
}
  

// `posts` は、リクエスト時に `getServerSideProps()` で取得した値が設定される
function Transactions({ posts }: any) {
    console.log(posts.transactions[0])
    posts.transactions.reverse().map((post:any)=> {
        if(post.remarks === "振込 スナバ　シユウジ"){
            post.remarks = "おとうさん"
        }
        else if(post.remarks == "振込 スナバ　ミウ"){
            post.remarks = "おばあちゃん"
        }
        else if(post.remarks === "振込 スナバ　リホ"){
            post.remarks = "ピアノの先生"
        }
    })
    return (
    <div>
        {posts.transactions.map((post:any) => (
            
        <ul>
            日付：{post.transactionDate}<br/><br/>取引金額：{post.amount}円<br/><br/>場所：{post.remarks}<br/><br/>残高：{post.balance}円<hr/>
        </ul>
        ))}
    </div>
    );
}

export default Transactions;
