import React from 'react';

export default function ToggleRenderProps({ onToggle, children }) {
  const [on, setOn] = React.useState(false);

  // onToggle reusable function
  React.useEffect(() => {
    typeof onToggle === 'function' && onToggle(on);
  }, [on]);

  const toggle = () => setOn((on) => !on);

  // Use Render Props with React and Children

  return children({ on, toggle });
}
