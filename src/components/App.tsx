import React, { createContext, useState } from 'react';
import MainPage from './pages/MainPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/ProductPage';
import ProductPage from './pages/ProductPage';
import { IStore } from './types';
import BasketPage from './pages/BasketPage';

const DEFAULT_STORE: IStore = {
    products: [],
}

function useStoreData() {
    const store = useState<IStore>(DEFAULT_STORE);
    return store;
}
type UseStoreDataReturnType = ReturnType<typeof useStoreData>

export const Store = createContext<UseStoreDataReturnType | null>(null);

export default function App() {
    const store = useState<IStore>(DEFAULT_STORE);
    return (
        <Store.Provider value={store}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="basket" element={<BasketPage/>} />
                <Route path="*" element={<StartPage />} />
            </Routes>
        </Store.Provider>
    );
}
