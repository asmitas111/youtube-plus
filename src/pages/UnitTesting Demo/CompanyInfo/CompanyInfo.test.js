import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-router/dist/lib/hooks';
import CompanyInfo from './CompanyInfo';

describe('CompanyInfo', () => {
  it('should have companyName Cognizant', () => {
    render(<CompanyInfo />);
    const companyNameElement = screen.getByTestId('companyName');
    console.log(companyNameElement.textContent);
    expect(companyNameElement.textContent).toBe('Company Name: Cognizant');
  });

  // testing props-- must
  it('receives founderYear prop and displays in JSX', () => {
    // when you are testing prop, render the comp with necessary props
    render(<CompanyInfo foundedYear="2006" />);
    const foundedYearElement = screen.getByTestId('foundedYear');
    expect(foundedYearElement).toHaveTextContent('Founded In: 2006');
  });

  // TODO: test whether the comp is receiving a prop 'employeeCount'
  it('receives employee count', () => {
    render(<CompanyInfo employeeCount="More than 3 lakhs" />);
    const employeeCountElement = screen.getByTestId('employeeCountElement');
    expect(employeeCountElement).toHaveTextContent('Employee :More than 3 lakhs');
  });

  // form input with placeholder
  it('has an input with \'Enter Your Country Name\' as placeholder text', () => {
    render(<CompanyInfo />);
    expect(screen.getByPlaceholderText('Enter Your Country Name')).toBeTruthy();
  });

  // inline styles
  it('has foundedYear with text color green -- inline styles', () => {
    render(<CompanyInfo foundedYear="2006" />);
    const foundedYearElement = screen.getByTestId('foundedYear');
    // recommended to use color code in hexa or rgb -- not the color names
    expect(foundedYearElement).toHaveStyle('color: rgb(0, 255, 0)');
  });

  // TODO: test whether a button has css class btn-primary
  // the button text should be Join Cognizant
  // use data-testid
  // you can have muliple expectations here

  // events and states
  // snapshot test

  // mocks
  it('has button with text Join Cognizant', () => {
    render(<CompanyInfo />);
    const buttonElement = screen.getByTestId('buttonCheck');
    expect(buttonElement).toHaveTextContent('Join Cognizant');
    expect(buttonElement).toHaveClass('btn btn-primary');
  });

  // events and states
  it('displays countryName buy default and updates UI onChange of input', () => {
    render(<CompanyInfo />);
    // find the input element
    const countryNameInput = screen.getByPlaceholderText('Enter Your Country Name');
    // now checking whether the onChange event handler is working or not
    // let's trigger the event -- thru program
    const mockEventObj = {
      // preparing the mock event obj with target value being China
      target: {
        value: 'Japan'
      }
    };
    fireEvent.change(countryNameInput, mockEventObj);
    // finally checking if the input element is showing the change
    expect(countryNameInput.value).toBe('Japan');

    // have expectation
    expect(screen.getByTestId('visitCognizant')).toHaveTextContent('Visit Cognizant Japan Website');
  });

  // snapshot test
  it('has right snapshot with all requirements completed', () => {
    // to take snapshot we need react-test-renderer. // npm i react-test-renderer
    // taking snapshot and also converting into JSON
    // [RECOMMENDED]: Take snapshot with all possible props as well as props children
    renderer.create(<CompanyInfo foundedYear="2006" />).toJSON();
    // let assert with a match toMatchSnapshot()
    expect(snapshootInJson).toMatchSnapshot();
  });
  // mocks
});
