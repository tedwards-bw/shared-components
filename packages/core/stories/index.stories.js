import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonStory, { settings as buttonSettings } from './Button';
import TypographyStory, { settings as typographySettings } from './Typography';


storiesOf('Styles', module)
  .addDecorator(withInfo)
  .add('Typography',TypographyStory, typographySettings)

storiesOf('Components', module)
  .addDecorator(withInfo)
  .add('Button',ButtonStory,buttonSettings)
