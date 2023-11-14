import React from 'react';
import data from '../../data/data.json';

export const Helper = () => {

  return (
    <div>
        Helper
        {
            data.map((item, index) => {
                return (
                    <div key={index}> 
                        {item.name}
                        {item.zxc && (
                            <div>
                                {item.zxc.map((names, i) => (
                                    <div>{names}</div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            })
        }
    </div>
  )
}
