import React from 'react'
import WebRouter from '@/routes/web'
import Header from '@/components/commons/Header'
import styles from './App.module.scss'

const App = () => (
  <div className={styles['App']}>
    <Header />

    <main className={styles['Content']}>
      <WebRouter />
    </main>
  </div>
)

export default App
