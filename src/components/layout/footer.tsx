import CustomLink from "@/links/custom-link";

export default function Footer() {
  return (
    <footer className='my-16 text-right text-zinc-400'>
      <section className='flex flex-col items-end'>
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
            href='https://github.com/Chocolate1999'
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
  )
}
