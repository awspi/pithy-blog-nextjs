import CustomLink from "@/links/custom-link";
import { useRouter } from "next/router";

const Cd = () => {
  const router = useRouter()
  return <>
    <CustomLink href=''
      className="text-zinc-500 dark:text-zinc-200 font-bold "
      onClick={() => {
        window.history.length > 2
          ? router.back()
          : router.push('/')
      }}>
      <span className="mr-2">
        {'>'}
      </span>
      <span>
        {"cd .."}
      </span>
    </CustomLink>
  </>
}

export default function Footer() {
  return (
    < >
      <footer className='mt-16   text-zinc-400'>
        <Cd />
        <section className='text-right flex flex-col items-end'>
          <div>
            <a
              href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
              rel='noreferrer'
              target='_blank'
            >
              CC BY-NC-SA 4.0
            </a>{' '}
            {new Date().getFullYear()}
            <a
              href='https://github.com/awspi'
              target='_blank'
              className='pl-1'
              rel='noreferrer'
            >
              © Supeng Wen
            </a>
          </div>
          <CustomLink href='https://beian.miit.gov.cn/' className="text-zinc-400">
            备案号XXX
          </CustomLink>
        </section>
      </footer>
    </>

  )
}
