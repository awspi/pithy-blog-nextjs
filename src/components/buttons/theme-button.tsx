import useLoaded from "@/hooks/useLoaded";
import classNames from "classnames";
// import { useTheme } from 'next-themes';
import { Theme, useTheme } from "@/hooks/useTheme";
import { CiDark, CiLight } from "react-icons/ci";
type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const isLoaded = useLoaded();
  const { theme, changeTheme } = useTheme()
  return (
    <button
      className={classNames(className)}
      {...rest}
      onClick={(e) => changeTheme(theme === Theme.DARK
        ? Theme.LIGHT
        : Theme.DARK, e as any)}
    >
      {theme === Theme.LIGHT && isLoaded ? <CiDark /> : <CiLight />}
    </button>
  );
}
