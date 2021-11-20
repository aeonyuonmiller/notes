import * as React from "react";

function Arrow(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M1.156 8h12.25M6.844 1l7 7-7 7"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

const IconArrow = React.memo(Arrow);
export default IconArrow;
