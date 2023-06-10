import UnstyledLink from "@/links/unstyled-link";
import { navAtom } from "@/store";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function HeaderNav() {
  const navVal = useRecoilValue(navAtom)
  const router = useRouter()
  // const [currentPath, setCurrentPath] = useState(router.pathname)
  // useEffect(() => {
  //   setCurrentPath(router.pathname)
  // }, [router.pathname])



  return (
    <div className='flex h-full w-full mr-20 flex-row items-center justify-end gap-[24px]'>
      {navVal.map((item) => {
        return (
          <div key={item.name}>
            <UnstyledLink href={item.link}>
              <span className={
                classNames("hover:text-gray-900 dark:hover:text-white",
                  router.pathname === item.link ?
                    'text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300')}>
                {item.name}
              </span>
            </UnstyledLink>
          </div>
        );
      })}
    </div>
  )
}
