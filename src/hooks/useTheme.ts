import { useState } from "react";
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

let matchMedia: MediaQueryList | null = null;



export function useTheme() {

  const [theme, setTheme] = useState<Theme>(Theme.SYSTEM)

  const watchSystemThemeChange = () => {
    // 只需要初始化一次
    if (matchMedia) return;
    matchMedia = window.matchMedia('(prefers-color-scheme:dark)');

    matchMedia.onchange = () => {
      changeTheme(Theme.SYSTEM);
    };
  };



  const changeTheme = (theme: Theme, event: MouseEvent | null = null) => {
    let className = theme
    // @ts-expect-error: Transition API
    if (!event || !document.startViewTransition) {
      setTheme(theme);
      if (theme === Theme.SYSTEM) {
        watchSystemThemeChange();
        className = matchMedia!.matches
          ? Theme.DARK
          : Theme.LIGHT
      }
      document.querySelector('html')!.className = className
      document.querySelector('html')!.style.colorScheme = className
      return
    }
    // https://paco.me/writing/disable-theme-transitions
    const css = document.createElement('style')
    css.type = 'text/css'
    css.appendChild(
      document.createTextNode(
        `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`
      )
    )
    document.head.appendChild(css)

    //animation
    const x = event!.clientX
    const y = event!.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      setTheme(theme);
      if (theme === Theme.SYSTEM) {
        watchSystemThemeChange();
        className = matchMedia!.matches
          ? Theme.DARK
          : Theme.LIGHT
      }
      document.querySelector('html')!.className = className
      document.querySelector('html')!.style.colorScheme = className
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: className === Theme.DARK ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement:
            className === Theme.DARK
              ? '::view-transition-new(root)'
              : '::view-transition-old(root)',
        },
      )
    }).then(() => {
      // Calling getComputedStyle forces the browser to redraw
      const _ = window.getComputedStyle(css).opacity
      document.head.removeChild(css)
    })


  }
  return {
    theme,
    changeTheme
  }
}
export default useTheme
