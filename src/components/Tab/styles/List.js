import styled from 'styled-components';
import TabContainer from './Container';

const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  user-select: none;
  padding: unset;
  margin: unset;
  overflow: visible;

  ${TabContainer} > & {
    flex: 0 0 auto;
  }

  ${TabContainer.Vertical} > & {
    flex: 0 0 auto;
  }
`;

TabList.Vertical = styled(TabList)`
  flex-direction: column;
`;

export default TabList;
