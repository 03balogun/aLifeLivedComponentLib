import React from 'react';
import ProgressBar from 'react-native-animated-progress';

// Components
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';

// UI
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { BlurLayout } from '../../themes/systemBlurLayout/SystemBlurLayout';
import { Text } from '../../themes/text/Text';
import { useTheme } from '../../themes/hooks/useTheme';

type MiniPlayerTypes = {
  isDisabled: boolean;
  title: string;
  username: string;
  avatar: string;
  mediaControlIcon: 'play' | 'pause';
  audioProgress: number;
  mediaControlTestID?: string;
  miniPlayerTestID?: string;
  isHeadphonesConnected?: boolean;
  mediaControlAction: () => void;
  onMiniPlayerPress: () => void | null;
};

export const MiniPlayer: React.FC<MiniPlayerTypes> = ({
  isDisabled,
  title,
  username,
  avatar,
  mediaControlIcon,
  audioProgress,
  mediaControlTestID,
  miniPlayerTestID,
  isHeadphonesConnected = false,
  onMiniPlayerPress,
  mediaControlAction,
}) => {
  const theme = useTheme();
  return (
    <SystemButton
      disabled={isDisabled}
      onPress={() => onMiniPlayerPress()}
      testID={miniPlayerTestID}
    >
      <BlurLayout
        intensity={100}
        tint="dark"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
        borderTopRightRadius="large"
        borderTopLeftRadius="large"
        paddingTop="s"
        paddingBottom="s"
        overflow="hidden"
      >
        <Box
          width="100%"
          position="absolute"
          top={0}
          backgroundColor="textError"
          borderTopRightRadius="large"
          borderTopLeftRadius="large"
          testID="progress-bar-container"
        >
          <ProgressBar
            progress={audioProgress}
            backgroundColor={theme.colors.secondary}
            trackColor={theme.colors.backgroundContrastMid}
            height={4}
          />
        </Box>
        <Box
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          paddingHorizontal="s"
          paddingTop="s"
        >
          <Box
            flexDirection="row"
            alignContent="center"
            alignItems="center"
            width="65%"
          >
            <Avatar
              source={{ uri: avatar, priority: 'normal' }}
              variant="roundAvatar"
              height={40}
              width={40}
              testID="miniPlayer-avatar"
            />
            <Box marginLeft="s">
              <Text variant="body" numberOfLines={1} color="white">
                {title ? title : 'Nothing playing'}
              </Text>
              <Text marginTop="s" variant="bodySmall" color="white">
                {username}
              </Text>
            </Box>
          </Box>

          <Box flexDirection="row">
            {isHeadphonesConnected && (
              <Icon
                icon="headphones"
                color="primary"
                size={25}
                marginRight="m"
                testID="headphone-test-id"
              />
            )}
            <SystemButton
              disabled={isDisabled}
              testID={mediaControlTestID}
              marginRight="s"
              onPress={() => mediaControlAction()}
            >
              <Icon
                icon={mediaControlIcon}
                size={25}
                color="white"
                testID="mediaControl-icon"
              />
            </SystemButton>
          </Box>
        </Box>
      </BlurLayout>
    </SystemButton>
  );
};
