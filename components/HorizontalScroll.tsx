import React from 'react'
import styles from './HorizontalScroll.module.scss'

type HorizontalScrollProps = {
  children: any,
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div className={styles.HorizontalScrollWrapper}>
      <div className={styles.HorizontalScroll}>
        {children}
      </div>
    </div>
  )
}
