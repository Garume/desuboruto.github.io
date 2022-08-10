import Link, { LinkProps } from 'next/link'
import { MouseEventHandler } from 'react'

const TextLink: React.VFC<React.PropsWithChildren<LinkProps>> = (props) => {
  return (
    <Link {...props}>
      <a href={String(props.href)}>{props.children}</a>
    </Link>
  )
}

export default TextLink
