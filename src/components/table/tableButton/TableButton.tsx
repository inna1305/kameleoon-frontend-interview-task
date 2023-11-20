import React, {ReactElement} from 'react';
import {CapitalizedStatus} from '../../../types';
import styles from './../Table.module.scss';

export interface TableButtonProps {
    testStatus: CapitalizedStatus;
    handler: (status: CapitalizedStatus) => void;
}

export const TableButton = (props: TableButtonProps): ReactElement => {
    const resultsColor = getComputedStyle(document.documentElement).getPropertyValue('--additional-color');
    const finalizeColor = getComputedStyle(document.documentElement).getPropertyValue('--inactive-color');

    const value = props.testStatus === CapitalizedStatus.DRAFT ? 'Finalize' : 'Results';
    const buttonColor = value === 'Finalize' ? finalizeColor : resultsColor;
    return (
        <button className={styles.button}
                style={{backgroundColor: buttonColor}}
                onClick={() => props.handler(props.testStatus)}>{value}
        </button>);
}
