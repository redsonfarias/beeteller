import { IIcon } from '@/@types'

export function Shop({ className = '', color, size = 24 }: IIcon) {
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
        id="mask0_2034_254"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2034_254)">
        <path
          d="M21.025 11.05V19C21.025 19.55 20.8291 20.0208 20.4375 20.4125C20.0458 20.8042 19.575 21 19.025 21H5.02497C4.47497 21 4.00413 20.8042 3.61247 20.4125C3.2208 20.0208 3.02497 19.55 3.02497 19V11.05C2.64163 10.7 2.3458 10.25 2.13747 9.7C1.92913 9.15 1.92497 8.55 2.12497 7.9L3.17497 4.5C3.3083 4.06667 3.5458 3.70833 3.88747 3.425C4.22913 3.14167 4.62497 3 5.07497 3H18.975C19.425 3 19.8166 3.1375 20.15 3.4125C20.4833 3.6875 20.725 4.05 20.875 4.5L21.925 7.9C22.125 8.55 22.1208 9.14167 21.9125 9.675C21.7041 10.2083 21.4083 10.6667 21.025 11.05ZM14.225 10C14.675 10 15.0166 9.84583 15.25 9.5375C15.4833 9.22917 15.575 8.88333 15.525 8.5L14.975 5H13.025V8.7C13.025 9.05 13.1416 9.35417 13.375 9.6125C13.6083 9.87083 13.8916 10 14.225 10ZM9.72497 10C10.1083 10 10.4208 9.87083 10.6625 9.6125C10.9041 9.35417 11.025 9.05 11.025 8.7V5H9.07497L8.52497 8.5C8.4583 8.9 8.5458 9.25 8.78747 9.55C9.02913 9.85 9.34163 10 9.72497 10ZM5.27497 10C5.57497 10 5.83747 9.89167 6.06247 9.675C6.28747 9.45833 6.42497 9.18333 6.47497 8.85L7.02497 5H5.07497L4.07497 8.35C3.97497 8.68333 4.02913 9.04167 4.23747 9.425C4.4458 9.80833 4.79163 10 5.27497 10ZM18.775 10C19.2583 10 19.6083 9.80833 19.825 9.425C20.0416 9.04167 20.0916 8.68333 19.975 8.35L18.925 5H17.025L17.575 8.85C17.625 9.18333 17.7625 9.45833 17.9875 9.675C18.2125 9.89167 18.475 10 18.775 10ZM5.02497 19H19.025V11.95C18.9416 11.9833 18.8875 12 18.8625 12H18.775C18.325 12 17.9291 11.925 17.5875 11.775C17.2458 11.625 16.9083 11.3833 16.575 11.05C16.275 11.35 15.9333 11.5833 15.55 11.75C15.1666 11.9167 14.7583 12 14.325 12C13.875 12 13.4541 11.9167 13.0625 11.75C12.6708 11.5833 12.325 11.35 12.025 11.05C11.7416 11.35 11.4125 11.5833 11.0375 11.75C10.6625 11.9167 10.2583 12 9.82497 12C9.34163 12 8.90413 11.9167 8.51247 11.75C8.1208 11.5833 7.77497 11.35 7.47497 11.05C7.12497 11.4 6.77913 11.6458 6.43747 11.7875C6.0958 11.9292 5.7083 12 5.27497 12H5.16247C5.1208 12 5.07497 11.9833 5.02497 11.95V19Z"
          fill={color || 'var(--primary-pure)'}
        />
      </g>
    </svg>
  )
}
