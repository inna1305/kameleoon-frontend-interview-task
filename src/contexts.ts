import {ISearchContext, ISitesContext, ITestsContext} from './types';
import {createContext} from 'react';

const initSitesContext: ISitesContext = {
    sites: [],
    setSites: () => {
    }
};

const initTestsContext: ITestsContext = {
    tests: [],
    setTests: () => {
    }
}

const initSearchContext: ISearchContext = {
    searchWord: '',
    setSearchWord: () => {
    }
}
export const TestsContext = createContext(initTestsContext);
export const SitesContext = createContext(initSitesContext);
export const SearchWordContext = createContext(initSearchContext);
