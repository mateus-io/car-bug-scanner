import { Text, TextProps } from '../Themed';

export function PrimaryText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
