import React, { ReactChild } from 'react';
import { Box } from '../../themes/box/Box';
import { useTheme } from '../../themes/hooks/useTheme';
import {
  StyledOpacityProps,
  SystemButton,
} from '../../themes/systemButton/SystemButton';
import { SystemSpinner } from '../../themes/systemSpinner/SystemSpinner';
import { Text } from '../../themes/text/Text';

interface IButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  variant?: 'cta';
  color?: string;
  isLoading?: boolean;
  endAdornmentComponent?: ReactChild;
}

export const Button: React.FC<IButtonProps & StyledOpacityProps> = ({
  title,
  onPress,
  isDisabled,
  color,
  isLoading,
  endAdornmentComponent,
  ...rest
}) => {
  return (
    <SystemButton
      backgroundColor={isDisabled ? 'backgroundContrastMid' : 'primary'}
      onPress={() => onPress()}
      padding="m"
      borderRadius="medium"
      width="100%"
      justifyContent="center"
      alignContent="center"
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <SystemSpinner
          size="small"
          color="white"
          testID="QBYQCQ-button-spinner"
          animating
          hidesWhenStopped={true}
        />
      ) : (
        <Box
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          justifyContent="center"
        >
          {endAdornmentComponent ? (
            <ButtonIconAdornment>{endAdornmentComponent}</ButtonIconAdornment>
          ) : null}
          <Text variant="intro" textAlign="center" color={color}>
            {title.toUpperCase()}
          </Text>
        </Box>
      )}
    </SystemButton>
  );
};

const ButtonIconAdornment: React.FC = React.memo(({ children }) => {
  const { spacing } = useTheme();
  return (
    <Box
      position="absolute"
      left={spacing.m}
      height="100%"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
    >
      {children}
    </Box>
  );
});
