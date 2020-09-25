import React from 'react';

// const callAll = I'm going to c reate a function called Call All
// (...fns) And that is going to accept any number of functions
// => (...args) And in return that function will accept any number of arguments
// => fns.Foreach And then I say, that "for each" function
// (fn => fn && fn(...args)) And If that function exists I will call it with the arguments
const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

export default function ToggleRenderPropsWithReducer({
  onToggle = () => {},
  initialOn = false,
  onReset = () => {},
  children
}) {
  const initialState = initialOn;

  const [on, setOn] = React.useState(initialState);

  // onToggle reusable function
  React.useEffect(() => {
    typeof onToggle === 'function' && onToggle(on);
  }, [on]);

  const toggle = () => setOn((on) => !on);
  const reset = () => {
    setOn(initialState);
    onReset();
  };

  const getTogglerProps = ({ onClick, className = '', ...props }) => {
    return {
      'aria-pressed': on,
      // onClick: (...args) => {
      //   onClick && onClick(...args);
      //   toggle();
      // },
      // Refactored with callAll:
      className: `custom-class-name ${className}`,
      onClick: callAll(onClick, toggle),
      ...props
    };
  };

  const stateAndHelpers = () => ({
    on,
    toggle,
    reset,
    getTogglerProps
  });
  // Use Render Props with React and Children
  return children(stateAndHelpers());
}
