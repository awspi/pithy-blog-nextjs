import { ListCommentsParameters } from "@notionhq/client/build/src/api-endpoints"
import { notion } from "../"
import { to } from "../../utils"
import { errorHandler } from "../error"


export async function getPage(reqBody: ListCommentsParameters) {
  const [err, data] = await to(notion.comments.list(reqBody))
  if (err) {
    errorHandler(err)
    return
  }
  return (data)
}
