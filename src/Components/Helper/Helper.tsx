import React from 'react';
import data from '../../data/data.json';
import styles from './Helper.module.css';

export const Helper = () => {

  return (
    <div>
        Helper
        {
            data.map((item) => {
                return (
                    <div key={item.id}> 
                        {item.name}
                        {item.aspect && (
                            <div className={styles.aspect}>
                                =
                                {item.aspect.map((names, i) => {
                                    if (i === 0)
                                    {
                                        return (
                                            <div>{names} +</div>
                                        )
                                    } else {
                                        return (
                                            <div>{names}</div>
                                        )
                                    }
                                })}
                            </div>
                        )}
                    </div>
                )
            })
        }
    </div>
  )
}
