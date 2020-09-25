import React from 'react';
import Switch from './components/Switch';
import Toggle from './components/Toggle';
import ToggleRenderProps from './components/ToggleRenderProps';
import ToggleRenderPropsCollection from './components/ToggleRenderPropsCollection';
import ToggleRenderPropsGetters from './components/ToggleRenderPropsGetters';
import ToggleRenderPropsStateInitializer from './components/ToggleRenderPropsStateInitializer';
import ToggleRenderPropsWithReducer from './components/ToggleRenderPropsWithReducer';

class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error, info });
  }
  render() {
    const { error } = this.state;
    const { children, ...props } = this.props;
    if (error) {
      return (
        <div>
          <h4>Error: {error.message}</h4>
          <p>{error.stack}</p>
        </div>
      );
    }

    return children;
  }
}

const GreenToggle = (props) => (
  <ToggleRenderProps {...props}>
    {({ on, toggle }) => <Switch on={on} onChange={toggle} color="green" />}
  </ToggleRenderProps>
);

export default function App() {
  return (
    <ErrorCatcher>
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 100px)',
          paddingTop: 100
        }}>
        <div>
          <Toggle onToggle={(on) => console.log(on)}>
            {/* Compound pattern */}
            <Toggle.On>The button is on</Toggle.On>
            <Toggle.Off>The button is off</Toggle.Off>
            {/* Make Compound React Components Flexible */}
            <div>
              <Toggle.Button />
            </div>
          </Toggle>
          <hr />
        </div>
        <div>
          <ToggleRenderProps onToggle={(on) => console.log(on)}>
            {({ on, toggle }) => (
              <div>
                <div>{on ? 'The button is on' : 'The button is off'}</div>
                <Switch on={on} onChange={toggle} />
                <div>
                  <button onClick={toggle}>{on ? 'Turn it Off' : 'Turn it On'}</button>
                </div>
              </div>
            )}
          </ToggleRenderProps>
        </div>
        <div>
          <hr />
          <GreenToggle />
        </div>
        <div>
          <hr />
          <ToggleRenderPropsCollection onToggle={(on) => console.log(on)}>
            {({ on, toggle, togglerProps }) => (
              <div>
                <div>{on ? 'The button is on' : 'The button is off'}</div>
                <Switch on={on} onChange={toggle} />
                <div>
                  <button aria-label="custom-button" {...togglerProps}>
                    {on ? 'On' : 'Off'}
                  </button>
                </div>
              </div>
            )}
          </ToggleRenderPropsCollection>
        </div>
        <div>
          <hr />
          <ToggleRenderPropsGetters onToggle={(on) => console.log(on)}>
            {({ on, toggle, getTogglerProps }) => {
              console.log({ ...getTogglerProps });
              return (
                <div>
                  <div>{on ? 'The button is on' : 'The button is off'}</div>
                  <Switch on={on} onChange={toggle} />
                  <div>
                    <button
                      {...getTogglerProps({
                        'aria-label': 'custom-button',
                        id: 'custom-button-id',
                        className: 'lol',
                        onClick: () => alert('clicked')
                      })}>
                      {on ? 'On' : 'Off'}
                    </button>
                  </div>
                </div>
              );
            }}
          </ToggleRenderPropsGetters>
        </div>
        <div>
          <hr />
          <ToggleRenderPropsStateInitializer
            initialOn={true}
            onToggle={(on) => console.log(on)}
            onReset={(...args) => console.log(...args)}>
            {({ on, toggle, reset }) => (
              <div>
                <div>{on ? 'The button is on' : 'The button is off'}</div>
                <Switch on={on} onChange={toggle} />
                <div>
                  <button onClick={reset}>Reset</button>
                </div>
              </div>
            )}
          </ToggleRenderPropsStateInitializer>
        </div>
        <div>
          <hr />
          <ToggleRenderPropsWithReducer
            initialOn={true}
            onToggle={(on) => console.log(on)}
            onReset={(...args) => console.log(...args)}>
            {({ on, toggle, reset }) => (
              <div>
                <div>{on ? 'The button is on' : 'The button is off'}</div>
                <Switch on={on} onChange={toggle} />
                <div>
                  <button onClick={reset}>Reset</button>
                </div>
              </div>
            )}
          </ToggleRenderPropsWithReducer>
        </div>
      </div>
    </ErrorCatcher>
  );
}
