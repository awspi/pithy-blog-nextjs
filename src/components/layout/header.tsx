import UnstyledLink from "@/links/unstyled-link";
import { VscActivateBreakpoints } from 'react-icons/vsc';
import HeaderNav from "./header-nav";
import Icons from "./icons";
export default function Header() {
  return (
    <header className='
    sticky top-0 z-50 w-full bg-transparent
    solid border-b border-black/10 
    dark:border-b dark:border-black bg-white  dark:bg-dark'>
      <section className='layout'>
        <div className='mx-8 flex h-[60px] items-center justify-between leading-[60px]'>
          <UnstyledLink href='/' className='dark:text-white text-[22px]'>
            <VscActivateBreakpoints />
          </UnstyledLink>
          <HeaderNav />
          <Icons />
        </div>
      </section>
    </header >
  )
}
