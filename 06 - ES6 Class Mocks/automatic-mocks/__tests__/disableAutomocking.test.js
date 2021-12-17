import utils from '../utils';

jest.disableAutomock();

test('original implementation', () => {
  expect(utils.authorize()).toBe('token');
});
