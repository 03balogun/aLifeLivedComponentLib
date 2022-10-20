import React, { ReactNode } from 'react';

// UI
import { Box } from '../box/Box';
import { ColorThemeTokens } from '../palette';
import { SystemButton } from '../systemButton/SystemButton';

type CardContainerProps = {
  onPress?: () => void;
  backgroundColor?: ColorThemeTokens;
  accessibilityLabel?: string;
  testID?: string;
  isDisabled?: boolean;
  children: ReactNode;
};

export const CardContainer: React.FC<CardContainerProps> = ({
  onPress,
  backgroundColor = 'backgroundXXLow',
  accessibilityLabel,
  isDisabled,
  testID,
  children,
  ...props
}) => {
  return (
    <SystemButton
      onPress={onPress}
      disabled={isDisabled}
      alignContent="space-between"
      borderRadius="large"
      backgroundColor={backgroundColor}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      {...props}
    >
      <Box>{children}</Box>
    </SystemButton>
  );
};
