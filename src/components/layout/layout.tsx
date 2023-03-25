import useMobileTerminal from "@/hooks/useMobileTerminal";
import classNames from "classnames";
import Footer from "./footer";
import Header from "./header";
import Plum from "./Plum";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useMobileTerminal()
  return (
    <div className="h-screen fixed top-0 left-0 w-screen bg-white  overflow-y-auto dark:bg-dark">
      <Header />
      <div className={classNames('m-auto', isMobile ? ' mx-auto w-full' : 'w-[750px]')}>
        <div className='mx-8'>
          {children}
          <Footer />
        </div>
      </div>
      <Plum />
    </div>
  )
}
