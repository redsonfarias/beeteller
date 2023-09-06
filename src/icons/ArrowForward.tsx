import { IIcon } from '@/@types'

export function ArrowForward({ className = '', color, size = 24 }: IIcon) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2034_40"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2034_40)">
        <path
          d="M8.00002 13.3333L7.05002 12.4L10.7834 8.66667H2.66669V7.33334H10.7834L7.05002 3.60001L8.00002 2.66667L13.3334 8.00001L8.00002 13.3333Z"
          fill={color || 'var(--primary-pure)'}
        />
      </g>
    </svg>
  )
}
