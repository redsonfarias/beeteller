import { IIcon } from '@/@types'

export function HamburguerMenu({ className = '', color, size = 24 }: IIcon) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.67188 6.83606H21.6719V8.83606H3.67188V6.83606ZM3.67188 11.8361H21.6719V13.8361H3.67188V11.8361ZM3.67188 16.8361H21.6719V18.8361H3.67188V16.8361Z"
        fill={color || 'var(--primary-pure)'}
      />
    </svg>
  )
}
