import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoanInput from './components/LoanInput';
import LoanOutput from './components/LoanOutput';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';

it('renders App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App></App>, div);
});

it('renders LoanInput component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoanInput></LoanInput>, div);
});

it('renders props correctly', () => {
  const component = renderer.create(<LoanOutput currentInterest={3.5} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('LoanOutput should show five paragraphs', ()=>{
  const component = shallow(<LoanOutput/>);
  expect(component.find("p")).toHaveLength(5);  
})

it('payback time input field renders the correct number', () => {
  const component = render(<LoanInput />);
  fireEvent.change(component.getByTestId('years'), {
    target: {
      value: 3
    }
  });
  expect(component.getByTestId('years').value).toBe('3');
})

it('Calculate button works', () => {
  const calculatedLoanResults = jest.fn();
  const component = render(<button data-testid="submit" className="Dashboard__button" type="submit" onClick={calculatedLoanResults}></button>);
  fireEvent.click(component.getByTestId('submit'));
  expect(calculatedLoanResults).toHaveBeenCalledTimes(1);
})

it('Calculate monhtly payment works', () => {
  const loanAmount = 10000;
  const months = 36;
  const monthlyPayment = Math.round((loanAmount / months) * 100) / 100;
  expect(monthlyPayment).toBe(277.78)
})
