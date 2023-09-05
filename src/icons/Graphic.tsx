import { IIcons } from '@/@types'

export function Graphic({ className = '', color, size = 24 }: IIcons) {
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
        id="mask0_2034_164"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2034_164)">
        <path
          d="M3 20V7L7 10L12 3L17 7H21V20H3ZM8 17L12 11.5L19 16.95V9H16.3L12.4 5.875L7.45 12.825L5 11V14.6L8 17Z"
          fill={color || 'var(--primary-pure)'}
        />
      </g>
    </svg>
  )
}
