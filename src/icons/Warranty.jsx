import { cn } from "@/lib/utils"

const Warranty = ({className, ...props}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("w-4 h-4", className)} role="img">
      <path d="M11.532 7.245a.5.5 0 0 1 .936 0l.881 2.344 2.436.156a.5.5 0 0 1 .296.877l-1.906 1.655.61 2.47a.5.5 0 0 1-.763.535L12 13.93l-2.022 1.352a.5.5 0 0 1-.763-.536l.61-2.469-1.906-1.655a.5.5 0 0 1 .296-.877l2.436-.156.881-2.344z"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.73 4.594a17.03 17.03 0 0 1 16.54 0c.45.25.73.726.73 1.241v4.104a12 12 0 0 1-6.172 10.49L12.97 21.46a2 2 0 0 1-1.942 0L9.172 20.43A12 12 0 0 1 3 9.939V5.835c0-.515.28-.99.73-1.24zM5 9.94V6.181a15.03 15.03 0 0 1 14 0V9.94a10 10 0 0 1-5.144 8.742L12 19.712l-1.856-1.031A10 10 0 0 1 5 9.939z">
      </path>
    </svg>
  )
}

export default Warranty