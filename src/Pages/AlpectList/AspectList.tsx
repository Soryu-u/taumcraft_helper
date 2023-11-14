import React from 'react';
import styles from './AspectList.module.css';
import data from '../../data/data.json';

export const AspectList = () => {
  return (
    <div className={styles.container}>
        <div className={styles.basics}>
            {
                data.map((item) => {
                    if (item.type === 'basic') {
                        return (
                            <div>
                                {item.name}
                            </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}
