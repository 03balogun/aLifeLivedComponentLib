import React from 'react';

// UI
import { Box } from '../../themes/box/Box';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { Avatar } from '../avatar/Avatar';

// Types
import { Icon } from '../icon/Icon';

type StoryCardProps = {
  onPress: () => void;
  title: string;
  avatar: string;
  interviewer: string;
  isStoryPlaying: boolean;
  testID?: string;
  endAdornmentIconName: 'play-circle' | 'ellipsis-v' | 'plus-circle';
  onEndAdornmentPress?: () => void;
  endAdornmentIconTestId?: string;
};

export const StoryCard: React.FC<StoryCardProps> = ({
  title,
  avatar,
  isStoryPlaying,
  interviewer,
  testID,
  onPress,
  endAdornmentIconName,
  onEndAdornmentPress,
  endAdornmentIconTestId,
}) => {
  return (
    <SystemButton
      testID={testID}
      onPress={onPress}
      backgroundColor={isStoryPlaying ? 'backgroundContrastLow' : 'white'}
      borderRadius="medium"
      paddingHorizontal="s"
      paddingVertical="s"
    >
      <Box>
        <Box
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          justifyContent="space-between"
        >
          <Avatar
            source={{ uri: avatar, priority: 'normal' }}
            width={55}
            height={55}
          />
          <Box width="70%">
            <Text variant="body" numberOfLines={1}>
              {title}
            </Text>
            <Text variant="bodyXSmall" marginTop="xs" numberOfLines={1}>
              {interviewer}
            </Text>
          </Box>
          {isStoryPlaying ? (
            <SystemAnimatedLottieBox
              source={require('../../assets/lottie/music-playing.json')}
              autoPlay={true}
              width={25}
              height={25}
            />
          ) : (
            <SystemButton
              onPress={onEndAdornmentPress}
              disabled={!onEndAdornmentPress}
            >
              <Icon
                icon={endAdornmentIconName}
                testID={endAdornmentIconTestId}
                color="backgroundContrastMid"
                size={17}
              />
            </SystemButton>
          )}
        </Box>
      </Box>
    </SystemButton>
  );
};
