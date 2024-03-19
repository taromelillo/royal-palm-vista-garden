import { create } from 'zustand'

interface State {
    isSideMenuOpened: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
    isSideMenuOpened: false, 
    openSideMenu: () => set({isSideMenuOpened: true}),
    closeSideMenu: () => set({isSideMenuOpened: false})
}))