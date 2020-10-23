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
  children,
  stateReducer = (state, changes) => changes
}) {
  const initialState = initialOn;

  const firstUpdate = React.useRef(true);

  const [on, setOn] = React.useState(initialState);

  const internalSetState = (changes, callback) => {
    setOn((on) => {
      const changesObject = typeof changes === 'function' ? changes(on) : changes;
      const reducedChanges = stateReducer(on, changesObject);
      return reducedChanges;
    }, callback);
  };

  // onToggle reusable function
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    typeof onToggle === 'function' && onToggle(on);
  }, [on]);

  const toggle = () => internalSetState((on) => !on);
  const reset = () => {
    internalSetState(initialState);
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
