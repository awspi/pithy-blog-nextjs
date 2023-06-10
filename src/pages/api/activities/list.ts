// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "api.juejin.cn");
myHeaders.append("Connection", "keep-alive");


const getGiggList = (cursor: string) =>
  fetch("https://api.juejin.cn/interact_api/v1/digg/query_page", {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "cursor": cursor,
      "user_id": "1275889675144440",
      "item_type": 2,
      "sort_type": 2
    }),
    redirect: 'follow'
  })




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await getGiggList(req.query.cursor as string || '0')
  const { error_no, err_msg, data } = await response.json()
  res.status(200).json({
    error_no, err_msg, data
  })
}
