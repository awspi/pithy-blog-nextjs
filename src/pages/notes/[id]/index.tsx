import { getBlocks } from "@/lib/notion/getBlocks";
import { getPage } from "@/lib/notion/getPage";
import { formatLocalDate } from "@/lib/utils";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import { useRouter } from "next/router";


// This gets called on every request
export async function getServerSideProps({ params }: { params: { id: string } }) {
  // 不要使用await
  const bc = getBlocks(params.id);
  const p = getPage(params.id);
  const [blocks, pageInfo] = await Promise.all([bc, p]);
  console.log(pageInfo);


  return {
    props: { id: params.id, pageInfo }
  }

}

// 页面 首部
const Header = ({ pageInfo, }: {
  pageInfo: PageObjectResponse
}) => {


  console.log(pageInfo.created_by);

  const title = pageInfo?.properties.Title.type == 'title'
    ? pageInfo?.properties.Title.title[0]?.plain_text
    : ''
  return (
    <>
      <div className="w-full h-[25vh] absolute left-0 top-0">
        <Image
          placeholder="blur"
          blurDataURL={
            pageInfo?.cover?.type === 'external'
              ? pageInfo.cover.external.url
              : pageInfo?.cover?.type === 'file'
                ? pageInfo.cover.file.url
                : ''
          }
          className="w-full h-[25vh] object-cover block duration-200"
          width={1920}
          height={450}
          src={
            pageInfo?.cover?.type === 'external'
              ? pageInfo.cover.external.url
              : pageInfo?.cover?.type === 'file'
                ? pageInfo.cover.file.url
                : ''
          }
          alt="cover image"
        />
      </div>
      <div className="mt-[13vh] relative">
        <div className="text-7xl max-w-full relative -bottom-2 -left-5">{pageInfo?.icon?.type === 'emoji' && <span>{pageInfo.icon.emoji}</span>}</div>
        <div className="my-10">
          <h1 className="text-4xl leading-3 font-bold">{title}</h1>
        </div>
      </div>
      <div className="meta border-b-2 broder-zinc-700 pb-3 mb-2">
        <div className="flex my-1 ">
          <p className="mr-3">
            发布时间
          </p>
          <p>
            {formatLocalDate(pageInfo.created_time, 'dd, MM-D, YYYY')}
          </p>
        </div>
        <div className="flex my-1 ">
          <p className="mr-3">
            最近修改
          </p>
          <p>
            {formatLocalDate(pageInfo.last_edited_time, 'dd, MM-D, YYYY')}
          </p>
        </div>
        <div className="flex my-1 ">
          <p className="mr-3">
            类别
          </p>
          {/* @ts-ignore */}
          <p>{pageInfo?.properties?.Cates?.multi_select?.map(v => {
            return <span key={v.id}
              style={
                {
                  backgroundColor: v.color,
                }
              }
              className="px-1 py-0.5  rounded-sm mr-2">{v.name}</span>
          })}</p>
        </div>
        <div className="flex my-1 ">
          <p className="mr-3">
            标签
          </p>
          {/* @ts-ignore */}
          <p>{pageInfo?.properties?.Tags?.multi_select?.map(v => {
            return <span key={v.id}
              style={
                {
                  backgroundColor: v.color,
                }
              }
              className="px-1 py-0.5  rounded-sm mr-2">{v.name}</span>
          })}</p>
        </div>


      </div>
    </>
  )
}
const Main = () => {
  return (
    <div>main</div>
  )
}
export default function NotePage(
  { pageInfo }: {
    pageInfo: PageObjectResponse,
  }) {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <Header pageInfo={pageInfo} />
      <Main />
    </>
  )
}
