import React from "react";
import Icon from "../../Icon";

export default function AddBroken({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M12 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12H11.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
