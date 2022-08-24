import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { DiscoverHeader } from '../../../src/components/discoverHeader/DiscoverHeader';

const onSearchIconPressMock = jest.fn();
const onAvatarPressMock = jest.fn();

const setup = () =>
  render(
    <DiscoverHeader
      fullName="John Smith"
      avatarUrl=""
      avatarTestID="avatar-test-id"
      searchTestID="search-icon-test-id"
      onSearchIconPress={onSearchIconPressMock}
      onAvatarPress={onAvatarPressMock}
    />
  );

describe('Given discover header is rendered', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should find welcome message', () => {
    const { getByText } = setup();
    expect(getByText('Hi, John Smith')).toBeDefined();
  });

  test('Should find avatar by test id', () => {
    const { getByTestId } = setup();
    expect(getByTestId('avatar-test-id')).toBeDefined();
  });

  test('Should find search icon by test id', () => {
    const { getByTestId } = setup();
    expect(getByTestId('search-icon-test-id')).toBeDefined();
  });

  describe('Given user presses avatar', () => {
    test('Should fire on avatar press', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId('avatar-test-id'));
      expect(onAvatarPressMock).toBeCalledTimes(1);
    });
  });

  describe('Given user presses search icon', () => {
    test('Should fire on search icon press', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId('search-icon-test-id'));
      expect(onSearchIconPressMock).toBeCalledTimes(1);
    });
  });
});
