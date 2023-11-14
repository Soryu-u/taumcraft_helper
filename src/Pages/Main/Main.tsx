import React from 'react'
import styles from './Main.module.css';
import { Header } from '../../Components/Header/Header';
import { Helper } from '../../Components/Helper/Helper';

export const Main = () => {
  return (
    <div className={styles.main}>
        <Header />
        Main
        <Helper />
    </div>
  )
}
