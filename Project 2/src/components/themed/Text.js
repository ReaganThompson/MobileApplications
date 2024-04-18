import { useContext } from 'react';
import { Text as DefaultText } from 'react-native';
import { useThemeColors } from '../../hooks/useThemeColors';
import { FontContext } from '../../contexts/Font';

const Text = ({ style, ...rest }) => {
  const { colors } = useThemeColors();
  const { font } = useContext(FontContext);
  return (
    <DefaultText
      style={[
        { color: colors.text, fontFamily: font, fontSize: 16 },
        style,
      ]}
      {...rest}
    />
  );
};

const TextBold = ({ style, ...rest }) => {
  const { colors } = useThemeColors();
  const { font } = useContext(FontContext);

  return (
    <DefaultText
      style={[
        { color: colors.text, fontFamily: font, fontSize: 16 },
        style,
      ]}
      {...rest}
    />
  );
};

export { Text, TextBold };
export default Text;