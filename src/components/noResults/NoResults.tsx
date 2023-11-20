import React, {ReactElement, useContext} from 'react';
import {SearchWordContext} from '../../App';
import styles from './NoResults.module.scss';

export const NoResults = (): ReactElement => {
    const searchContext = useContext(SearchWordContext);
    return (
        <div className={styles.container}>
            <p className={styles.message}>Your search did not match any results.</p>
            <button className={styles.resetButton} onClick={() => {
                searchContext.setSearchWord('');
            }
            }>Reset
            </button>
        </div>
    );
}
