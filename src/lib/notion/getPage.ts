import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { notion } from ".";
import { to } from "../utils";
import { errorHandler } from "./error";

// 根据 pageId 获取页面内容
export async function getPage(pageId: string) {
  const [err, data] = await to(notion.pages.retrieve({
    page_id: pageId,
  }))
  if (err) {
    errorHandler(err)
    return
  }
  return (data as PageObjectResponse)
}
