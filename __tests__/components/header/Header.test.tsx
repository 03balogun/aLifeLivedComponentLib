import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { Header } from '../../../src/components/header/Header';

const onIconPressMock = jest.fn();
const onAvatarPressMock = jest.fn();

const setup = (iconName?: IconProp) =>
  render(
    <Header
      fullName="John Smith"
      avatarUrl=""
      avatarTestID="avatar-test-id"
      iconTestID="icon-test-id"
      iconName={iconName}
      onIconPress={onIconPressMock}
      onAvatarPress={onAvatarPressMock}
    />
  );

describe('Given header is rendered', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should find welcome message', () => {
    const { getByText } = setup();
    expect(getByText('John Smith')).toBeDefined();
  });

  test('Should find avatar by test id', () => {
    const { getByTestId } = setup();
    expect(getByTestId('avatar-test-id')).toBeDefined();
  });

  describe('Given icon name is provided', () => {
    test('Should find icon by test id', () => {
      const { getByTestId } = setup('search');
      expect(getByTestId('icon-test-id')).toBeDefined();
    });

    describe('Given user presses search icon', () => {
      test('Should fire on search icon press', () => {
        const { getByTestId } = setup('search');
        fireEvent.press(getByTestId('icon-test-id'));
        expect(onIconPressMock).toBeCalledTimes(1);
      });
    });
  });

  describe('Given icon name is NOT provided', () => {
    test('Should NOT render icon', () => {
      const { queryByTestId } = setup();
      expect(queryByTestId('icon-test-id')).toBeNull();
    });
  });

  describe('Given user presses avatar', () => {
    test('Should fire on avatar press', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId('avatar-test-id'));
      expect(onAvatarPressMock).toBeCalledTimes(1);
    });
  });
});
