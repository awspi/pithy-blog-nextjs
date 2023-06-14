import classNames from "classnames";
import React, { useState } from "react";

type TabProps = {
  tabs: {
    title: string,
    comp: React.ReactNode
  }[]
}

export default function Tabs({ tabs }: TabProps) {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <>
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
        {tabs[tabIndex].comp}
      </ul>
    </>
  )

}
