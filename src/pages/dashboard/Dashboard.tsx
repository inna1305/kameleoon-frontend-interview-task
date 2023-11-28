import React, {ReactElement, useContext, useState} from 'react';
import styles from './Dashboard.module.scss';
import {SearchField} from '../../components/searchField/SearchField';
import {Table} from '../../components/table/Table';
import {TestsContext} from '../../contexts';

export const Dashboard = (): ReactElement => {
    const countOfTests = useContext(TestsContext);
    const [countOfFoundedTests, setCountOfFoundedTests] = useState(countOfTests.tests.length);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>
            {<main>
                <SearchField countOfFounded={countOfFoundedTests}/>
                <Table setCountOfFoundedTests={setCountOfFoundedTests}/>
            </main>}
        </div>
    );
}
