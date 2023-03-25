import UnstyledLink from "@/links/unstyled-link";
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import { VscGithubAlt } from 'react-icons/vsc';
import ThemeButton from "../buttons/theme-button";
export default function Icons() {

  return (
    <div className='flex gap-[24px] text-[22px]'>
      <UnstyledLink href='/blog' className='hidden'>
        <MdOutlineArticle />
      </UnstyledLink>
      <UnstyledLink href='/projects' className='hidden'>
        <FaRegLightbulb />
      </UnstyledLink>
      <a
        href='https://github.com/awspi'
        rel='noreferrer'
        target='_blank'
      >
        <VscGithubAlt />
      </a>
      <ThemeButton />
    </div>
  )
}
