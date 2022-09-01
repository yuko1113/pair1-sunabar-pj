// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { brotliDecompressSync } from 'zlib';

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { transferAmount, beneficiaryId } = req.body;
  let beneficiaryBranchCode;
  let accountNumber;
  let beneficiaryName;

  if (beneficiaryId === "A") {
    beneficiaryBranchCode = "101";
    accountNumber = "0005050";
    beneficiaryName = "ｽﾅﾊﾞｶｽﾞﾔ(ｶ";
  } else if (beneficiaryId === "B") {
    beneficiaryBranchCode = "301";
    accountNumber = "0005135";
    beneficiaryName = "ｽﾅﾊﾞﾄｼﾋｺ";    
  } else if (beneficiaryId === "C") {
    beneficiaryBranchCode = "101";
    accountNumber = "0005050";
    beneficiaryName = "ｽﾅﾊﾞｶｽﾞﾔ(ｶ";     
  }

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json;charset=UTF-8");
  myHeaders.append("Content-Type", "application/json;charset=UTF-8");
  myHeaders.append("x-access-token", "OWY0MDg2MThhOTE3MzMzNjhkMDQ2N2Jk");

  const raw = JSON.stringify({
    "accountId":"302010005050",
    "transferDesignatedDate":"2022-09-01",
    "transferDateHolidayCode":"1", 
    "totalCount":"1",
    "totalAmount": transferAmount,
    "transfers":
        [{
            "itemId":"1",
            "transferAmount": transferAmount,
            "beneficiaryBankCode":"0310",
            "beneficiaryBranchCode": beneficiaryBranchCode,
            "accountTypeCode":"1",
            "accountNumber": accountNumber,
            "beneficiaryName": beneficiaryName}]
        }
  );

  const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };

  const response = await fetch("https://api.sunabar.gmo-aozora.com/personal/v1/transfer/request",requestOptions);
  const posts = await response.json();

  res.status(200).json({ posts });

}
