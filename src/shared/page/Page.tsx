import React, { type ComponentPropsWithoutRef, type CSSProperties } from 'react'

type Props = ComponentPropsWithoutRef<'div'> & {
  pt?: CSSProperties['marginTop']
}

export const Page = ({ className, style, pt = '36px', ...rest }: Props) => {
  const styles: CSSProperties = { paddingTop: pt, ...style }
  const classes = className
  return <div className={classes} style={styles} {...rest} />
}
