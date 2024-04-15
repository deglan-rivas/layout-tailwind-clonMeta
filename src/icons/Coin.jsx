import { cn } from "@/lib/utils"

const Coin = ({className, ...props}) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("w-4 h-4", className)} role="img">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 3a9 9 0 1 1-9 9 1 1 0 1 0-2 0c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1c-2.659 0-5.099.944-7 2.514V2a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H6.343A8.959 8.959 0 0 1 12 3zm-1.548 7.35c0-.286.097-.446.253-.56.188-.139.54-.263 1.12-.263h.117c.625 0 1.146.132 1.732.475a.75.75 0 0 0 .757-1.296 4.78 4.78 0 0 0-1.641-.61.82.82 0 0 0 .002-.053V7.25a.75.75 0 0 0-1.5 0v.805c-.556.06-1.065.224-1.476.526-.57.42-.864 1.045-.864 1.769 0 .669.261 1.237.758 1.641.463.378 1.074.566 1.715.65l1.028.136.007.001c.54.06.823.193.964.316.11.097.201.245.201.565 0 .204-.083.39-.293.547-.226.168-.631.321-1.268.321h-.134c-.705 0-1.283-.198-1.854-.627a.75.75 0 0 0-.902 1.199c.65.488 1.343.784 2.118.887v.764a.75.75 0 1 0 1.5 0v-.776c.556-.085 1.045-.273 1.437-.566.571-.426.896-1.049.896-1.749 0-.66-.213-1.256-.713-1.693-.467-.41-1.098-.6-1.777-.678l-1.014-.134c-.504-.066-.804-.195-.964-.326-.128-.104-.205-.235-.205-.478z"></path>
    </svg>
  )
}

export default Coin