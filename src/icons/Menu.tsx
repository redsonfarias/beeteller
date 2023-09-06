import { IIcon } from '@/@types'

export function Menu({ className = '', color, size = 24 }: IIcon) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_841_5230"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_841_5230)">
        <path
          d="M4 15V13H20V15H4ZM4 11V9H20V11H4Z"
          fill={color || 'var(--primary-pure)'}
        />
      </g>
    </svg>
  )
}
