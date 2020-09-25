import React from 'react';

export default function ToggleRenderPropsCollection({ onToggle, children }) {
  const [on, setOn] = React.useState(false);

  // onToggle reusable function
  React.useEffect(() => {
    typeof onToggle === 'function' && onToggle(on);
  }, [on]);

  const toggle = () => setOn((on) => !on);

  const stateAndHelpers = () => ({
    on,
    toggle,
    togglerProps: {
      onClick: toggle,
      'aria-pressed': on
    }
  });
  // Use Render Props with React and Children

  return children(stateAndHelpers());
}
