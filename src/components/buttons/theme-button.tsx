import useLoaded from "@/hooks/useLoaded";
import classNames from "classnames";
import { useTheme } from 'next-themes';
import { CiDark, CiLight } from "react-icons/ci";
type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;
export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const isLoaded = useLoaded();
  const { theme, setTheme } = useTheme()
  return (
    <button
      className={classNames(className)}
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' && isLoaded ? <CiDark /> : <CiLight />}
    </button>
  );
}
