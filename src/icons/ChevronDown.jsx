import { cn } from "@/lib/utils"

const ChevronDown = ({className, ...props}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("w-4 h-4 group-hover:-rotate-180 transition-transform duration-500", className)} role="img">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3z"></path>
    </svg>
  )
}

export default ChevronDown