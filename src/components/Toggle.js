import React from 'react';
import Switch from './Switch';
import PropTypes from 'prop-types';

const ToggleContext = React.createContext();

export default function Toggle({ onToggle, children }) {
  const [on, setOn] = React.useState(false);

  // onToggle reusable function
  React.useEffect(() => {
    typeof onToggle === 'function' && onToggle(on);
  }, [on]);

  const toggle = () => setOn((on) => !on);

  // return <Switch on={on} toggle={toggle} />;

  // Write Compound Components
  // return React.Children.map(children, (child) =>
  //   React.cloneElement(child, {
  //     on,
  //     toggle
  //   })
  // );

  // Make Compound React Components Flexible
  return (
    <ToggleContext.Provider
      value={{
        on,
        toggle
      }}>
      {children}
    </ToggleContext.Provider>
  );
}
// Write Compound Components
// Toggle.On = ({ on, children }) => (on ? children : <></>);
// Toggle.Off = ({ on, children }) => (on ? <></> : children);
// Toggle.Button = ({ on, toggle, ...props }) => <Switch on={on} toggle={toggle} {...props} />;

// function ToggleConsumer(props) {
//   return (
//     <ToggleContext.Consumer {...props}>
//       {(context) => {
//         if (!context)
//           throw new Error(
//             'Toggle compound components must be rendered within the Toggle component'
//           );
//         return props.children(context);
//       }}
//     </ToggleContext.Consumer>
//   );
// }
// ToggleConsumer hooks version:
const ToggleConsumer = ({ children }) => {
  const context = React.useContext(ToggleContext);
  if (!context)
    throw new Error('Toggle compound components must be rendered within the Toggle component');
  return children(context);
};

// Make Compound React Components Flexible
// Toggle.On = ({ children }) => (
//   <ToggleContext.Consumer>
//     {(contextValue) => (contextValue.on ? children : null)}
//   </ToggleContext.Consumer>
// );
// Toggle.Off = ({ children }) => (
//   <ToggleContext.Consumer>
//     {(contextValue) => (contextValue.on ? null : children)}
//   </ToggleContext.Consumer>
// );
// Toggle.Button = (props) => {
//   <ToggleContext.Consumer>
//     {(contextValue) => <Switch on={contextValue.on} toggle={contextValue.toggle} {...props} />}
//   </ToggleContext.Consumer>;
// };

// Hooks version:
// Toggle.On = ({ children }) => (React.useContext(ToggleContext).on ? children : null);
// Toggle.Off = ({ children }) => (React.useContext(ToggleContext).on ? null : children);
// Toggle.Button = (props) => {
//   const contextValue = React.useContext(ToggleContext);
//   return <Switch on={contextValue.on} toggle={contextValue.toggle} {...props} />;
// };

// Validate Compound Component Context Consumers
Toggle.On = ({ children }) => {
  console.log('Toggle.On');
  return <ToggleConsumer>{({ on }) => (on ? children : null)}</ToggleConsumer>;
};
Toggle.Off = ({ children }) => {
  console.log('Toggle.Off');
  return <ToggleConsumer>{({ on }) => (on ? null : children)}</ToggleConsumer>;
};
Toggle.Button = (props) => {
  console.log('Toggle.Button');

  return (
    <ToggleConsumer>
      {({ on, toggle }) => <Switch on={on} onChange={toggle} {...props} />}
    </ToggleConsumer>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func
};
