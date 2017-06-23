import styled from 'styled-components';
import Item from './ListItem';
import Ordered from './OrderedList';

const UnorderedList = styled.ul.withConfig({ displayName: 'UnorderedList' })`
  margin: 0 0 1em;
  padding: 0;
  list-style: disc outside;

  &:last-child {
    margin-bottom: 0;
  }

  & ul {
    list-style: circle outside;
  }

  & ul ${Item}:first-child,
  & ol ${Item}:first-child {
    margin-top: 0.5em;
  }
`;

UnorderedList.usage = `
A basic bulletted list. Fill with \`Item\` elements.

\`\`\`
<UnorderedList>
  <Item>Foo</Item>
  <Item>Bar</Item>
</UnorderedList>
\`\`\`
`;

UnorderedList.Item = Item;
UnorderedList.Ordered = Ordered;
export default UnorderedList;