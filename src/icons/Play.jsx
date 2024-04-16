import { cn } from "@/lib/utils"

const Play = ({className, ...props}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("w-4 h-4", className)} role="img">
      <path d="m6.964 21.37 13.85-7.618c1.381-.76 1.381-2.745 0-3.504L6.964 2.63C5.63 1.897 4 2.861 4 4.383v15.235c0 1.52 1.63 2.485 2.964 1.752z">
      </path>
    </svg>
  )
}

export default Play