import { render, screen } from '@testing-library/react';
import { fetchApi } from '../../../utils/fetchApi';
import Users from './Users';
// setting up mock for fetchApi
// mocking a module with an automocked version when needed
jest.mock('../../../utils/fetchApi');
// test suite = group of related test specs
describe('Users', () => {
  /* The following is NOT RECOMMENDED */
  /*

   it('has \'Unit Testing Examples\' as heading', () => {
    // Act
    render(<UnitTestingDemo />);
    const heading = screen.getByText('Unit Testing Examples');
    
    // Assert
    expect(heading).toBeInTheDocument();
  }); 
  */

  /* 3 Disadvantages / Challenges in testing  */

  it('[MOCKING]: fetches userlist properly via API call [MOCKING]', async () => {
    const mockUserList = [
      {
        id: 1,
        name: 'Steve',
        phone: '3453464342'
      },
      {
        id: 2,
        name: 'John',
        phone: '9876531434'
      }
    ];

    // 2. resolve the req with the above mock data
    // 2.1 setup mock for fetchApi ( See before describe block)
    // 2.2 resolve the req
    fetchApi.mockResolvedValue(mockerUserList);
    //3. render the comp
    render(<Users />);
    const userNameEl = await screen.findByText('Steve');
    expect(userNameEl).toBeInTheDocument();
  });

  // NEGATIVE SPEC
  it('[MOCKING]: renders error properly during API Call', async () => {
    // preparing mock error obj
    const error = {
      errorCode: '101',
      errorInfo: 'Sorry! Unable to fetch users! Try again later.'
    };

    fetchApi.mockRejectedValue(error);
    render(<Users />);
    expect(
      await screen.findByText(/Sorry! Unable to fetch users! Try again later./i)
    ).toBeInTheDocument();
  });
});
