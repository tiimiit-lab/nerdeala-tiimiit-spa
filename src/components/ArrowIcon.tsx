import { useTheme } from '@tresdoce-test/core'
import { SVGProps } from 'react'

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme()
  return (
    <svg
      width={13}
      height={11}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >∫
      <path
        d="M7.015.34a.6.6 0 0 0-.06.786l.054.062 3.66 3.712H1.303a.6.6 0 0 0-.075 1.195l.075.005h9.366L7.01 9.812a.6.6 0 0 0-.048.788l.054.06a.6.6 0 0 0 .787.049l.061-.054L12.53 5.92a.6.6 0 0 0 .053-.781l-.053-.061L7.863.345A.6.6 0 0 0 7.015.34Z"
        fill={`${theme.colors.bg.default}`}
      />
    </svg>
  )
}

export default ArrowIcon
