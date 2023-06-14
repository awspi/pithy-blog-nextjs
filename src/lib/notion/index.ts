import { Client } from "@notionhq/client";
export const dbId = process.env.NOTION_DATABASE_ID as string
console.log(dbId);

export const notion = new Client({ auth: process.env.NOTION_KEY })
