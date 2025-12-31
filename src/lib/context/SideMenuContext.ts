import { createContext } from 'react';

interface SideMenuContextType {
  collapsed: boolean;
  toggleCollapsed: () => void;
  selectedSideMenuItem: string | null;
  setSelectedSideMenuItem: (item: string | null) => void;
  selectedTopMenuItem: string | null;
  setSelectedTopMenuItem: (item: string | null) => void;
}

export const SideMenuContext = createContext<SideMenuContextType>({
  collapsed: false,
  toggleCollapsed: () => {},
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {},
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {},
});
