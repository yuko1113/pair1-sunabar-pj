// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json;charset=UTF-8");
  myHeaders.append("Content-Type", "application/json;charset=UTF-8");
  myHeaders.append("x-access-token", "OWY0MDg2MThhOTE3MzMzNjhkMDQ2N2Jk");

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

  const response = await fetch("https://api.sunabar.gmo-aozora.com/personal/v1/accounts/balances",requestOptions);
  const balanceData = await response.json();

  res.status(200).json({ balanceData });

  // `props: { posts }` を返すことで
  // Blog コンポーネントはリクエスト時に `posts` を `props` として受け取れる
  // return {
  //     props: {
  //         posts,
  //     },
  // };
}


// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
