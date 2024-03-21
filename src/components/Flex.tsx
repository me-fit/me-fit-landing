import React, { ReactNode, CSSProperties } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignContent?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  gap?: string;
  columnGap?: string;
  rowGap?: string;
}

const Flex: React.FC<FlexProps> = ({ className, children, ...flexProps }) => {
  const flexStyles: CSSProperties = {
    display: "flex",
    ...flexProps,
  };

  return <div className={className} style={flexStyles}>{children}</div>;
};

export default Flex;
