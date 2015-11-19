import * as React from 'react';

export interface State {};

export interface Props {
  increment?: React.MouseEventHandler;
  incrementIfOdd?: React.MouseEventHandler;
  incrementAsync?: React.MouseEventHandler;
  decrement?: React.MouseEventHandler;
  counter?: number;
};

export default class Counter extends React.Component<Props, State> {

  constructor () {
    super();
  }

  render () {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
        <p>
          Clicked: {counter} times
          {' '}
          <button onClick={increment}>+</button>
          {' '}
          <button onClick={decrement}>-</button>
          {' '}
          <button onClick={incrementIfOdd}>Increment if odd</button>
          {' '}
          <button onClick={incrementAsync}>Increment async</button>
        </p>
      );
  }
}
