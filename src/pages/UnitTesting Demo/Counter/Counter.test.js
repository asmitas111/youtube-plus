import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('has counter with initial value 0', () => {
    render(<Counter />);

    const counterValueElement = screen.getByTestId('counterValue');
    expect(counterValueElement.textContent).toEqual('0');
  });

  it('has properly working increment button', () => {
    render(<Counter />);

    // fetching counter value
    const counterValueElement = screen.getByTestId('counterValue');
    expect(counterValueElement.textContent).toEqual('0');

    // find the increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the click
    fireEvent.click(incrementBtn);
    // fetch the counter value again -- find whether it is incremented or not
    expect(counterValueElement.textContent).toEqual('1');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValueElement.textContent).toEqual('3');
  });

  // TODO: has properly working decreement button
  it('has properly working decrement button', () => {
    render(<Counter />);

    // fetching counter value
    const counterValueElement = screen.getByTestId('counterValue');
    expect(counterValueElement.textContent).toEqual('0');

    // find the increment button
    const decrementBtn = screen.getByTestId('decrementBtn');

    // trigger the click
    fireEvent.click(decrementBtn);
    // fetch the counter value again -- find whether it is decremented or not
    expect(counterValueElement.textContent).toEqual('0');

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(counterValueElement.textContent).toEqual('0');
  });

  it('can have counter with max value of 10 upon increments and min value of 0 upon decrements', () => {
    render(<Counter />);

    const counterValueElement = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }
    // trigger the click 11th time
    fireEvent.click(incrementBtn);
    expect(counterValueElement.textContent).toEqual('10');

    for (let i = 10; i > 0; i--) {
      fireEvent.click(decrementBtn);
    }
    fireEvent.click(decrementBtn);
    expect(counterValueElement.textContent).toEqual('0');
  });
});
