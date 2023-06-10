/* eslint-disable react/no-unescaped-entities */
import CustomLink from "@/links/custom-link";


export default function Home() {
  return <>
    <main className="px-7 py-20 ">
      <div className="m-auto mb-8">
        <h1 className="mb-0 dark:text-white">Pithy</h1>
      </div>
      <article className="text-lg text-zinc-800 dark:text-zinc-300">
        <p className="mt-3">
          Hey there, I'm Pithy 👋<br />
          I'm a passionate front-end developer with experience in Vue, React. My goal is to become a full-stack developer, and I'm currently learning to achieve that.
        </p>
        <p className="mt-3">
          🌱 Learning<br />
          I'm always seeking new challenges to improve my skills and knowledge. Currently, I'm diving deep into the Vue 3 source code and exploring the features of Next.js.<br />
          I'm also learning about DevOps practices in my team's workflow.
        </p>
        <p className="mt-3">
          🔧 Skills<br />
          <ul className="list-disc ml-5 text-base">
            <li>Vue</li>
            <li>React</li>
            <li>NextJs</li>
            <li>NestJs</li>
            <li>HTML/CSS/JS/TS</li>
            <li>Git</li>
            <li>DevOps</li>
          </ul>
        </p>
        <hr
          className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-zinc-700'
          data-fade='4'
        />
        <p className="mt-3">
          Find me on{' '}
          <CustomLink href='https://github.com/awspi'>
            Github
          </CustomLink>{' '},
          {' '}
          <CustomLink href='https://juejin.cn/user/1275889675144440'>
            掘金
          </CustomLink>{' '},
          {' '}
          <CustomLink href='https://www.yuque.com/pithy'>
            语雀
          </CustomLink>
          .
        </p>
        <hr
          className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-zinc-700'
          data-fade='4'
        />
        <div className="flex justify-end w-full">
          <CustomLink href='' >
            WeChat:wspithy
          </CustomLink>
        </div>
      </article>
    </main>
  </>
}
