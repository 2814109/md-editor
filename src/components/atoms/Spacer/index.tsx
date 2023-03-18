type SpacerProps = {
  size: number;
  horizontal?: boolean;
};
export const Spacer = ({
  size,
  horizontal = false,
}: SpacerProps): JSX.Element => (
  <>
    {horizontal ? (
      <div
        style={{
          width: size,
          height: "auto",
          display: "inline-block",
          flexShrink: 0,
        }}
      />
    ) : (
      <div style={{ width: "auto", height: size, flexShrink: 0 }} />
    )}
  </>
);
