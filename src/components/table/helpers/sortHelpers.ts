import {ReactElement} from 'react';
import {CapitalizedStatus, TableRowPropsKeys} from '../../../types';

export const sortByAlphabet = (rows: ReactElement[], sortType: TableRowPropsKeys, direction: boolean): ReactElement[] => {
    const copyRows = rows.concat();
    return copyRows.sort((a, b) =>
        direction
            ? a.props[sortType].localeCompare(b.props[sortType])
            : b.props[sortType].localeCompare(a.props[sortType]));
}

export const getOrder = (status: CapitalizedStatus): number => {
    switch (status) {
        case CapitalizedStatus.ONLINE:
            return 0;
        case CapitalizedStatus.PAUSED:
            return 1;
        case CapitalizedStatus.STOPPED:
            return 2;
        case CapitalizedStatus.DRAFT:
            return 3;
        default:
            throw new Error('Unknown status');
    }
}

export const sortByStatus = (rows: ReactElement[], direction: boolean): ReactElement[] => {
    const copyRows = rows.concat();
    if (direction) {
        return copyRows.sort((a, b) => (getOrder(a.props.status) - getOrder(b.props.status)));
    }
    return copyRows.sort((a, b) => (getOrder(b.props.status) - getOrder(a.props.status)));
}
