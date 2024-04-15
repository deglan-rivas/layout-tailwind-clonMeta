const ChevronDown = ({w = 4}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`w-${w} h-${w} group-hover:-rotate-180 transition-transform duration-500`} role="img">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3z"></path>
    </svg>
  )
}

export default ChevronDown