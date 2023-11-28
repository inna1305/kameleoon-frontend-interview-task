import React, {Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState} from 'react';
import styles from './Table.module.scss';
import {
    createRows,
    filterContextTestsByName,
} from './helpers/helpers';
import {getData} from '../../core/helpers';
import {sortByAlphabet, sortByStatus} from './helpers/sortHelpers';
import {NoResults} from '../noResults/NoResults';
import {SearchWordContext, SitesContext, TestsContext} from '../../contexts';

export interface TableProps {
    setCountOfFoundedTests: Dispatch<SetStateAction<number>>
}

export const Table = (props: TableProps): ReactElement => {
    const testsContext = useContext(TestsContext);
    const sitesContext = useContext(SitesContext);
    const searchContext = useContext(SearchWordContext);
    const [sortDirection, setSortDirection] = useState(true);
    const [rowsElements, setRowsElements] = useState<ReactElement[]>([]);

    useEffect(() => {
        Promise.all([
            getData('http://localhost:3100/sites'),
            getData('http://localhost:3100/tests'),
        ])
            .then(([sites, tests]) => {
                sitesContext.setSites(sites);
                testsContext.setTests(tests);
                props.setCountOfFoundedTests(tests.length);
                return [sites, tests];
            })
            .then(([sites, tests]) => createRows(tests, sites))
            .then((result) => setRowsElements(result));
    }, []);

    useEffect(() => {
        if (testsContext.tests && sitesContext.sites) {
            filterContextTestsByName(testsContext.tests, searchContext.searchWord)
                .then((tests) => {
                    props.setCountOfFoundedTests(tests.length);
                    createRows(tests, sitesContext.sites!)
                        .then((result) => setRowsElements(result));
                })
            ;
        }
    }, [searchContext.searchWord]);

    return (
        <>
            {rowsElements.length === 0
                ? searchContext.searchWord === '' ? (<h3>Loading...</h3>) : (<NoResults/>)
                : (
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th className={styles.tableHeader}
                                onClick={() => {
                                    setRowsElements(sortByAlphabet(rowsElements, 'name', sortDirection));
                                    setSortDirection(!sortDirection);
                                }}>Name
                            </th>
                            <th onClick={() => {
                                setRowsElements(sortByAlphabet(rowsElements, 'type', sortDirection));
                                setSortDirection(!sortDirection);
                            }}>Type
                            </th>
                            <th onClick={() => {
                                setRowsElements(sortByStatus(rowsElements, sortDirection));
                                setSortDirection(!sortDirection);
                            }}>
                                Status
                            </th>
                            <th onClick={() => {
                                setRowsElements(sortByAlphabet(rowsElements, 'siteName', sortDirection));
                                setSortDirection(!sortDirection);
                            }}>Site
                            </th>
                        </tr>
                        </thead>
                        <tbody>{rowsElements}</tbody>
                    </table>
                )
            }
        </>
    );
}
