export function ButterflyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C12 2 8 6 4 8C2 9 1 12 3 14C5 16 8 15 10 13C11 12 12 10 12 10C12 10 13 12 14 13C16 15 19 16 21 14C23 12 22 9 20 8C16 6 12 2 12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 10C12 10 10 14 8 17C7 19 8 21 10 22C11 22.5 12 22 12 22C12 22 13 22.5 14 22C16 21 17 19 16 17C14 14 12 10 12 10Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="12" cy="6" r="0.5" fill="currentColor" />
    </svg>
  )
}
