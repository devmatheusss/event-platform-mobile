import { Text, TextProps } from './Themed';

type SansTextProps = TextProps & {
  weight?: "Roboto" | "RobotoMedium" | "RobotoBold"
}

function SansText(props: SansTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: props.weight ?? "Roboto" }]} />;
}

export { SansText }