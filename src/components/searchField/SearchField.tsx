import {ReactElement, useContext} from 'react';
import styles from './SearchField.module.scss';
import {SearchWordContext} from '../../App';

export interface SearchFieldProps {
    countOfFounded: number,
}

export const SearchField = (props: SearchFieldProps): ReactElement => {
    const searchWordContext = useContext(SearchWordContext);
    return (<>
            <div className={styles.form}>
                <img src={process.env.PUBLIC_URL + '/assets/search.svg'} alt="search icon"
                     className={styles.search}></img>
                <input
                    value={searchWordContext.searchWord}
                    name="s" placeholder="What test are you looking for?"
                    type="search" className={styles.input}
                    onChange={(e) => {
                        searchWordContext.setSearchWord(e.target.value);
                    }
                    }>
                </input>
                <span className={styles.counter}>{props.countOfFounded} tests</span>
            </div>
        </>
    );
}
