import {ReactElement, useContext, useRef} from 'react';
import styles from './SearchField.module.scss';
import {SearchWordContext} from '../../contexts';

export interface SearchFieldProps {
    countOfFounded: number,
}

export const SearchField = (props: SearchFieldProps): ReactElement => {
    const searchWordContext = useContext(SearchWordContext);
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={styles.form}>
            <img src={process.env.PUBLIC_URL + '/assets/search.svg'} alt="search icon"
                 className={styles.search}></img>
            <input
                ref={inputRef}
                name="s" placeholder="What test are you looking for?"
                type="search" className={styles.input}
                onChange={() => {
                    if (inputRef.current?.value !== undefined) {
                        searchWordContext.setSearchWord(inputRef.current?.value);
                    }
                }}>
            </input>
            <span className={styles.counter}>{props.countOfFounded} tests</span>
        </div>
    );
}
