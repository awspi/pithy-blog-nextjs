import { PageObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { dbId, notion } from ".";
import { to } from "../utils";
import { errorHandler } from "./error";
console.log('dbId', dbId);
export async function getPages(body?: Omit<QueryDatabaseParameters, 'database_id'>) {


  const [err, data] = await to(notion.databases.query({
    database_id: dbId,
    ...body
  }))
  if (err) {
    errorHandler(err)
    return
  }
  return data.results as PageObjectResponse[]
}

export const getPublicPages = async (body?: Omit<QueryDatabaseParameters, 'database_id'>) => {
  // // filter out the pa

  return await getPages({
    filter: Object.assign({
      property: 'Status',
      status: {
        equals: "public"
      }
    }, body?.filter),
    ...body
  })
}

// 根据标题搜索页面列表
export const getPagesByTitle = async (query?: string) => {
  const [err, data] = await to(notion.search({
    query,
    filter: {
      value: 'page',
      property: 'object'
    },
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time'
    },
  }));
  if (err) {
    errorHandler(err)
    return
  }
  return data.results as PageObjectResponse[]
}
