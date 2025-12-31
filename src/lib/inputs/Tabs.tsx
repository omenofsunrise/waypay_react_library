import type { ReactNode } from 'react';
import styled from 'styled-components';

export interface Tab {
  id: string;
  label: string;
  content?: ReactNode;
}

interface TabsProps<T extends string> {
  tabs: Tab[];
  activeTab: T;
  onChange: (tabId: T) => void;
  addButton?: ReactNode;
  fontSize?: number | string;
}

const Tabs = <T extends string>({ tabs, activeTab, onChange, addButton, fontSize = 14 }: TabsProps<T>) => {
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <>
      <TabsContainer>
        <TabsList>
          {tabs.map((tab) => (
            <TabItem key={tab.id} $isActive={activeTab === tab.id} onClick={() => onChange(tab.id as T)} $fontSize={fontSize}>
              {tab.label}
              {activeTab === tab.id && <ActiveTabIndicator />}
            </TabItem>
          ))}
          {addButton && <AddButtonContainer>{addButton}</AddButtonContainer>}
        </TabsList>
      </TabsContainer>

      {activeTabContent && <TabContentContainer>{activeTabContent}</TabContentContainer>}
    </>
  );
};

const TabsContainer = styled.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`;

const TabsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`;

const TabItem = styled.li<{ $isActive: boolean; $fontSize: number | string }>`
  position: relative;
  padding: 12px 0;
  cursor: pointer;
  font-size: ${(props) => (typeof props.$fontSize === 'number' ? `${props.$fontSize}px` : props.$fontSize)};
  font-weight: ${(props) => (props.$isActive ? '600' : '400')};
  color: ${(props) => (props.$isActive ? 'rgba(0, 125, 136, 1)' : 'rgba(107, 114, 128, 1)')};
  transition: all 0.2s ease;

  &:hover {
    color: rgba(0, 125, 136, 0.8);
  }
`;

const ActiveTabIndicator = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`;

const AddButtonContainer = styled.li`
  margin-left: auto;
  padding: 4px 0;
`;

const TabContentContainer = styled.div`
  margin-top: 20px;
`;

export default Tabs;
