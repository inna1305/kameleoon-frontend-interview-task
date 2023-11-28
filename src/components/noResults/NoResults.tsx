import React, {ReactElement, useContext} from 'react';
import styles from './NoResults.module.scss';
import {SearchWordContext} from '../../contexts';

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
