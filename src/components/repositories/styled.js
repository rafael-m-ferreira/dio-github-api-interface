import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  margin-top: 16px;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  padding: 4px 0;
  margin: 0;
  gap: 8px;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  //border-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid var(--bg-color);
  padding: 16px;
  min-width: 120px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: var(--bg-color);

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid var(--dark-grey-color);
    background-color: var(--dark-grey-color);
    color: var(--white-color);
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid var(--grey-color);
  display: none;
  margin-top: -5px;
  background-color: var(--dark-grey-color);

  &.is-selected {
    display: block;
    min-height: 55vh;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
