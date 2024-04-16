import { cn } from "@/lib/utils"

const Close = ({className, ...props}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("w-6 h-6", className)} role="img"><path d="M5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-1.414-1.414L12 10.586 5.707 4.293z"></path></svg>
  )
}

export default Close