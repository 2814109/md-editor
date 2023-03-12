type SpacerProps = {
  size: number;
};
export const Spacer = ({ size }: SpacerProps): JSX.Element => (
  <div style={{ width: "auto", height: size, flexShrink: 0 }} />
);
