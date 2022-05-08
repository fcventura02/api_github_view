import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const Wrapped_Tabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  padding: 16px;
`;

export const Wrapped_Tab_List = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;
Wrapped_Tab_List.arguments = "TabList";

export const Wrapped_Tab = styled(Tab)`
  background-color: var(--color-neon-secondary);
  border-radius: 16px;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 0 8px;
  &:hover, &.is-selected{
    background-color: #fff;
    color: var(--color-neon-secondary);
  }
  &:focus {
    outline: none;
  }
`;
Wrapped_Tab.arguments = "Tab";

export const Wrapped_Tab_Panel = styled(TabPanel)`
  border: 1px solid "#ccc";
  display: none;
  &.is-selected {
    display: block;
  }
`;
Wrapped_Tab_Panel.arguments = "TabPanel";

export const Wrapped_List = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;