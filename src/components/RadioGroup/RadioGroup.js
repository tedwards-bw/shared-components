import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioButton from './RadioButton';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 1 auto;
  min-height: 53px;
`;

class RadioGroup extends React.Component {
  static propTypes = {
    choices: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(PropTypes.node),
    ]).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,

    disabled: PropTypes.bool,
    required: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    required: false,
  };

  choicesToButtons = () => {
    const { choices, value, onChange, disabled, required } = this.props;
    if (choices instanceof Array) {
      return choices.map((choice) => (
        <RadioButton
          checked={choice === value}
          name={name}
          label={choice}
          value={choice}
          key={choice}
          disabled={disabled}
          required={required}
          onChange={() => onChange(choice)}
        />
      ));
    } else if (typeof choices === 'object') {
      return Object.keys(choices).map((key) => {
        const choice = choices[key];

        return (
          <RadioButton
            checked={key === value}
            name={name}
            value={key}
            label={key}
            content={choice}
            key={key}
            disabled={disabled}
            required={required}
            onChange={() => onChange(key)}
          />
        );
      });
    } else {
      return 'invalid choices';
    }
  };

  render() {
    return (
      <Container>
        {this.choicesToButtons()}
      </Container>
    );
  }
}

RadioGroup.usage = `
RadioGroup is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in \`value\` and \`onChange\` props. It's a controlled component, so it won\'t update its own value.

\`\`\`
<RadioGroup value="a" onChange={handleChange} choices={['a', 'b']} />
\`\`\`
`;

RadioGroup.Button = RadioButton;
export default RadioGroup;