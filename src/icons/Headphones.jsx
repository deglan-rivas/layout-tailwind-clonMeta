import { cn } from "@/lib/utils"

const Headphones = ({className, ...props}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("w-5 h-5 hover:text-blue-500 cursor-pointer", className)} role="img"><path fillRule="evenodd" clipRule="evenodd" d="M12 4C8.96 4 6.45 6.26 6.054 9.19A3.001 3.001 0 0 1 8 12v3c0 1.267-.785 2.35-1.895 2.79A3.001 3.001 0 0 0 9 20h1.085a1.5 1.5 0 0 1 1.415-1h1a1.5 1.5 0 0 1 0 3H9a5.001 5.001 0 0 1-4.927-4.146A2.994 2.994 0 0 1 2 15v-3c0-1.323.856-2.445 2.044-2.844a8.001 8.001 0 0 1 15.912 0A3.001 3.001 0 0 1 22 12v3a3 3 0 1 1-6 0v-3c0-1.286.809-2.383 1.946-2.81A6.001 6.001 0 0 0 12 4zM6 15a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3zm14-3v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0z"></path></svg>
  )
}

export default Headphones