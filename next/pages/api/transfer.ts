import type { NextApiRequest, NextApiResponse } from 'next'

import transfer from "../transfer.json";
type Transfer = typeof transfer;

export default async function handler(
  req : NextApiRequest,
  res: NextApiResponse
) {

  const { transferAmount, beneficiaryId } = req.body;
  let beneficiaryBranchCode;
  let accountNumber;
  let beneficiaryName;

  if (beneficiaryId === "A") {
    beneficiaryBranchCode = "302";
    accountNumber = "0005111";
    beneficiaryName = "ｽﾅﾊﾞ ｼﾕｳｼﾞ";
  } else if (beneficiaryId === "B") {
    beneficiaryBranchCode = "301";
    accountNumber = "0005111";
    beneficiaryName = "ｽﾅﾊﾞ ﾐｳ";    
  } else if (beneficiaryId === "C") {
    beneficiaryBranchCode = "301";
    accountNumber = "0005128";
    beneficiaryName = "ｽﾅﾊﾞ ﾘﾎ";     
  }

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json;charset=UTF-8");
  myHeaders.append("Content-Type", "application/json;charset=UTF-8");
  myHeaders.append("x-access-token", "OGY0ZGM4YTJmNmQxMDBlNjNjZDhmNjk4");

  const raw = JSON.stringify({
    "accountId": "302010005104",
    "transferDesignatedDate": "2022-09-02",
    "transferDateHolidayCode": "1", 
    "totalCount": "1",
    "totalAmount": transferAmount,
    "transfers":
        [{
            "itemId": "1",
            "transferAmount": transferAmount,
            "beneficiaryBankCode": "0310",
            "beneficiaryBranchCode": beneficiaryBranchCode,
            "accountTypeCode": "1",
            "accountNumber": accountNumber,
            "beneficiaryName": beneficiaryName}]
        }
  );

  const response = await fetch("https://api.sunabar.gmo-aozora.com/personal/v1/transfer/request",{
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  });

  const posts = await response.json();
  res.status(200).json({ posts });
}
