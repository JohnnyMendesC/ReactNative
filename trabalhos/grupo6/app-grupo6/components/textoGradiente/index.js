import { LinearGradient, Stop, Svg, Defs, Text as SvgText } from 'react-native-svg';

export default function GradientText({ text, style }) {
  return (
    <Svg height="100" width="300">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#858f8d" stopOpacity="1" />
          <Stop offset="1" stopColor="#9bcfc4" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#grad)"
        fontSize="30"
        fontWeight="bold"
        x="0"
        y="40"
        textAnchor="middle"
      >
        {text}
      </SvgText>
    </Svg>
  );
}
