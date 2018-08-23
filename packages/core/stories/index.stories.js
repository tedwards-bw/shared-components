import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonStory, { settings as buttonSettings } from './Button';

storiesOf('Components', module)
  .addDecorator(withInfo)
  .add('Button',ButtonStory,buttonSettings);
