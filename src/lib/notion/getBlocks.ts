import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { notion } from ".";
import { to } from "../utils";
import { errorHandler } from "./error";



export async function getBlocks(block_id: string, start_cursor?: string) {
  const [err, data] = await to(notion.blocks.children.list({
    block_id,
    start_cursor,
  }))
  if (err) {
    errorHandler(err)
    return
  }
  console.log(data);

  let results = data.results as BlockObjectResponse[]
  if (data.has_more) {
    const moreResults = await getBlocks(block_id, data.next_cursor!)
    results = [...results, ...moreResults!]
  }
  return results
}
