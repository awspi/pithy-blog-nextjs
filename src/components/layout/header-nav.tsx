import UnstyledLink from "@/links/unstyled-link";
import { navAtom } from "@/store";
import { useRecoilValue } from "recoil";

export default function HeaderNav() {
  const navVal = useRecoilValue(navAtom)
  return (
    <div className='flex h-full w-full mr-20 flex-row items-center justify-end gap-[24px]'>
      {navVal.map((item) => {
        return (
          <div key={item.name}>
            <UnstyledLink href={item.link}>
              <span className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {item.name}
              </span>
            </UnstyledLink>
          </div>
        );
      })}
    </div>
  )
}
