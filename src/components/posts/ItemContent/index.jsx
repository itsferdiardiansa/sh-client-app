import React from 'react'
import styles from './index.module.scss'

const ItemContent = ({body}) => (
  <div className={styles['Content']}>{body}</div>
)

export default ItemContent