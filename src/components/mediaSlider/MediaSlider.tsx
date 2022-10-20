import React from 'react';
import { Box } from '../../themes/box/Box';
import { useTheme } from '../../themes/hooks/useTheme';
import { SystemSlider } from '../../themes/systemSlider/SystemSlider';
import { Text } from '../../themes/text/Text';

type MediaSliderProps = {
  minValue: number;
  maxValue: number;
  currentNumericPosition: number;
  currentDisplayPosition: string;
  remainingDuration: string;
  testID?: string;
  isDisabled?: boolean;
  onSlideComplete?: (value: number) => void;
  onValueChange?: (value: number) => void;
};

export const MediaSlider: React.FC<MediaSliderProps> = ({
  minValue,
  maxValue,
  currentDisplayPosition,
  currentNumericPosition,
  remainingDuration,
  isDisabled,
  onSlideComplete,
  onValueChange,
  testID,
}) => {
  const theme = useTheme();

  return (
    <Box>
      <SystemSlider
        testID={testID}
        maximumValue={maxValue}
        onSlidingComplete={onSlideComplete}
        onValueChange={onValueChange}
        value={currentNumericPosition}
        minimumValue={minValue}
        thumbTintColor={theme.colors.primary}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.backgroundContrastMid}
        disabled={isDisabled}
      />
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="bodySmall">{currentDisplayPosition}</Text>
        <Text variant="bodySmall">{remainingDuration}</Text>
      </Box>
    </Box>
  );
};
