import { PC_DEVICE_WIDTH } from "@/constants"
import { useWindowSize } from "react-use"

/**
 * 判断是否为移动设备
 * @returns 
 */
export default function useMobileTerminal() {
  const { width } = useWindowSize()
  return width < PC_DEVICE_WIDTH
}
