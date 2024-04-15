const ChevronRight = ({w = 4}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`w-${w} h-${w} text-blue-600 group-hover:text-blue-500/80 transition-colors duration-500`} role="img"><path fillRule="evenodd" clipRule="evenodd" d="M14.207 11.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.086 12 9.793 9.707a1 1 0 0 1 1.414-1.414l3 3z"></path></svg>
  )
}

export default ChevronRight