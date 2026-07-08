export default function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative w-[280px] h-[572px] rounded-[2.75rem] bg-ink p-2.5 shadow-soft ${className}`}>
      <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-28 h-6 bg-ink rounded-b-2xl z-20" />
      <div className="w-full h-full rounded-[2.25rem] overflow-hidden bg-surface relative">
        {children}
      </div>
    </div>
  )
}
