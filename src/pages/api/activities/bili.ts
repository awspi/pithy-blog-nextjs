// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "api.bilibili.com");
myHeaders.append("Connection", "keep-alive");


const getStarList = (pn: string, ps: string) =>
  fetch(`https://api.bilibili.com/x/v3/fav/resource/list?media_id=2317817544&pn=${pn}&ps=${ps}&up_mid=15095444`, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await getStarList(req.query.pn as string || '1', req.query.ps as string || '10')
  const { code: error_no, message: err_msg, data } = await response.json()
  res.status(200).json({
    error_no, err_msg, data
  })
}
