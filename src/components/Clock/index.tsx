import { useEffect, useState, CSSProperties } from 'react'
import { format as dateFormat } from 'date-fns'

interface IProps {
  format?: string
  interval?: number
  className?: string
  style?: CSSProperties
}
function Clock(props: IProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const tick = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
    }, props.interval || 1000)

    return () => clearInterval(tick)
  }, [props.interval])

  return (
    <span className={props.className} style={props.style}>
      {dateFormat(currentTime, props.format || 'h:mm:ss a, MMMM do yyyy')}
    </span>
  )
}
export default Clock
