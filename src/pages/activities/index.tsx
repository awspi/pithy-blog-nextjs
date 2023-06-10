import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import CustomLink from "@/links/custom-link";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textHandler = (text: string, length: number = 55) => {
  return text.length > length ? text.slice(0, length - 3) + '...' : text
}

const Juejin = () => {
  const [list, setList] = useState([])
  const [cursor, setCursor] = useState(0)
  const triggerRef = useRef(null)
  const isIntersecting = useIntersectionObserver(triggerRef as any)
  const fetchList = async () => {
    const res = await fetch('/api/activities/list?cursor=' + cursor)
    const { data, error_no, err_msg } = await res.json()
    console.log(error_no, err_msg);
    setCursor(cursor + 10)
    if (data) {
      setList([...list, ...data] as any)
    } else {
      console.log('到底了');
    }
  }
  useEffect(() => {
    isIntersecting && fetchList()
  }, [isIntersecting, list])

  return (
    <>
      {
        list.map((item: any) =>
          <li className="my-3" key={item.article_info.article_id}>
            <CustomLink className="text-lg" href={'https://juejin.cn/post/' + item.article_info.article_id}>
              <span>
                {item.article_info.title}
              </span>
            </CustomLink>
            <div className={
              classNames(
                'text-sm pt-1',
                'hover:border-solid text-zinc-900 dark:text-zinc-400',
                'overflow-x-hidden overflow-ellipsis whitespace-nowrap'
              )
            }>
              {item.article_info.brief_content}
            </div>
          </li>
        )
      }
      <div ref={triggerRef}></div>
    </>

  )
}
const Bili = () => {
  const [list, setList] = useState([])
  const [cursor, setCursor] = useState(1)
  const triggerRef = useRef(null)
  const isIntersecting = useIntersectionObserver(triggerRef as any)
  const fetchList = async () => {
    const res = await fetch(
      '/api/activities/bili?pn='
      + cursor //index
      + '&ps=' + 10 //数量
    )
    const { data: { medias }, error_no, err_msg } = await res.json()
    console.log(error_no, err_msg);
    if (medias) {
      setCursor(cursor + 10)
      setList([...list, ...medias] as any)
      console.log(list.length);
    } else {
      console.log('到底了');
    }
  }
  useEffect(() => {
    isIntersecting && fetchList()
  }, [isIntersecting, list])

  return (
    <>
      {
        list.map((item: any) =>
          <li className="my-3" key={item.id}>
            <CustomLink className="text-lg" href={item.link}>
              <span>
                {item.title}
              </span>
            </CustomLink>
            <div className="flex pt-1 h-28">
              <Image width={172.08} height={108} src={item.cover} alt="" />
              <div className="pl-2 flex-1 text-zinc-900 dark:text-zinc-400">
                <div className={
                  classNames(
                    'text-sm',
                    'overflow-x-hidden overflow-ellipsis'
                  )
                }
                >
                  {(textHandler(item.intro)) || '-'}
                </div>
                <div>UP: {item.upper.name}</div>
              </div>
            </div>

          </li >
        )
      }
      <div ref={triggerRef}></div>
    </>

  )
}
export default function Act() {

  const tabs = [
    {
      title: '掘金点赞列表',
      comp: <Juejin />
    },
    {
      title: 'Bilibili收藏列表',
      comp: <Bili />
    }
  ]
  const [tabIndex, setTabIndex] = useState(0)


  return (
    <div className="m-auto mb-8">
      <h1>Activities</h1>
      {/* 解决bilibili图片403问题 */}
      <meta name="referrer" content="no-referrer"></meta>
      <div className="flex mt-6">
        {
          tabs.map((tab, index) => (
            <h3 key={index}
              onClick={() => setTabIndex(index)}
              className={
                classNames(
                  'mx-3 cursor-pointer border-b-2 border-solid border-transparent duration-200',
                  'dark:hover:border-green-200 hover:border-zinc-900  ',
                  index === tabIndex
                    ? 'text-zinc-900 dark:text-white'
                    : 'text-zinc-500 dark:text-zinc-400'
                )}>
              {tab.title}
            </h3>
          ))
        }
      </div>
      <ul className="mt-4">
        {/* <Juejin /> */}
        {tabs[tabIndex].comp}
      </ul>
    </div >
  )
}
