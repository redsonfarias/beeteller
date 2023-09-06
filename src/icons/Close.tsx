import { IIcon } from '@/@types'

export function Close({ className = '', color, size = 24 }: IIcon) {
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
        d="M14.2535 12.8837L19.7935 18.4237V19.8837H18.3335L12.7935 14.3437L7.25346 19.8837H5.79346V18.4237L11.3335 12.8837L5.79346 7.34367V5.88367H7.25346L12.7935 11.4237L18.3335 5.88367H19.7935V7.34367L14.2535 12.8837Z"
        fill={color || 'var(--primary-pure)'}
      />
    </svg>
  )
}
