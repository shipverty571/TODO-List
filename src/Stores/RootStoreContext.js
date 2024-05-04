import {createContext, useContext} from "react";

export const RootStoreContext = createContext(null);
export const useStores = () => {
    return useContext(RootStoreContext);
}