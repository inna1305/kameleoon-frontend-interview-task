import React, {createContext, useState} from 'react';
import {Dashboard} from './pages/dashboard/Dashboard';
import {ISearchContext, ISitesContext, ITestsContext, Site, Test} from './types';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ResultsPage} from './pages/resultsPage/ResultsPage';

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

export default function App() {
    const [sites, setSites] = useState<Site[]>([]);
    const [tests, setTests] = useState<Test[]>([]);
    const [searchWord, setSearchWord] = useState<string>('');

    return (
        <SitesContext.Provider value={{sites, setSites}}>
            <TestsContext.Provider value={{tests, setTests}}>
                <SearchWordContext.Provider value={{searchWord, setSearchWord}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="dashboard"/>}/>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route
                            path="results/:testId"
                            element={<ResultsPage typeOfResultsPage={'results'}/>}
                        />
                        <Route path="finalize/:testId"
                               element={<ResultsPage typeOfResultsPage={'finalize'}/>}
                        />
                    </Routes>
                </SearchWordContext.Provider>
            </TestsContext.Provider>
        </SitesContext.Provider>
    );
}

