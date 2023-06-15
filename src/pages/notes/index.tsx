import { getPublicPages } from "@/lib/notion/getPages";
import { formatLocalDate } from "@/lib/utils";
import CustomLink from "@/links/custom-link";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import classNames from "classnames";


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getPublicPages()
  console.log(data);

  return {
    props: { data }
  }

}

const DocsList = ({ data }: { data: PageObjectResponse[] }) => {
  return (
    <>
      <ul>
        {
          data?.map((item: PageObjectResponse) => {
            return (
              <li className="my-3 p-0.5" key={item.id}>
                {/* Tag */}
                <i className="p-0.5 mr-2">
                  {item.icon?.type === 'emoji'
                    ? item.icon.emoji
                    : item.icon?.type === 'external'
                      ? '🔗'
                      : ''}
                </i>
                {/* Title */}
                <CustomLink href={'/notes/' + item.id}>
                  <span className="text-lg font-bold">
                    {/* @ts-ignore */}
                    {item.properties.Title.title[0]?.plain_text}
                  </span>
                </CustomLink>
                {/* Tags */}
                <span>
                  {item.properties.Cates.type === 'multi_select'
                    && item.properties.Cates.multi_select.map((cate) => {
                      return (
                        <span
                          className={
                            classNames('rounded-sm  px-1 py-0.5 mx-1 font-mono text-xs text-white')
                          }
                          style={
                            {
                              backgroundColor: cate.color,
                            }
                          }
                          key={cate.id}>{cate.name}</span>
                      )

                    })}
                </span>
                {/* created_time */}
                <span className="text-sm font-semibold text-zinc-300 dark:text-zinc-400">
                  {formatLocalDate(item.created_time, 'MMM D')}
                </span>
              </li>
            )
          })
        }
      </ul>
    </>
  )

}

export default function Notes({ data }: { data: PageObjectResponse[] }) {
  return (
    <div className="m-auto mb-8">
      <h1 className="mt-4 mb-8">Notes</h1>
      <DocsList data={data} />
    </div>
  )
}
