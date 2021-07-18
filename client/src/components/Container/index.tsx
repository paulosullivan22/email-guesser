import cx from 'classnames'
import React, { useState } from 'react'

import { IUseState } from '../../interfaces'
import Form from '../Form'

import styles from './styles.module.scss'

const Container = () => {
    const [isExpanded, setIsExpanded]: IUseState<boolean> = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={cx(styles.wrapper, { [styles.isExpanded]: isExpanded })}>
                {isExpanded ? <Form /> : <button data-test="start-button" className={styles.startButton} onClick={() => setIsExpanded(true)}>Start</button>}
            </div>
        </div>
    )
}

export default Container