import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';

type HeaderProps = {
  fullName: string;
  avatarUrl: string;
  avatarTestID?: string;
  iconTestID?: string;
  iconName?: IconProp;
  onIconPress?: () => void;
  onAvatarPress: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  fullName,
  avatarUrl,
  avatarTestID,
  iconTestID,
  iconName,
  onIconPress,
  onAvatarPress,
}) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
    >
      <Box flexDirection="row" alignContent="center" alignItems="center">
        <SystemButton
          testID={avatarTestID}
          flexDirection="row"
          alignItems="center"
          onPress={onAvatarPress}
        >
          <Avatar
            source={{ uri: avatarUrl, priority: 'high' }}
            iconHeight={40}
            iconWidth={40}
          />
        </SystemButton>
        <Box marginLeft="s" width="75%">
          <Text variant="h4" numberOfLines={1}>
            {fullName}
          </Text>
        </Box>
      </Box>
      {iconName && (
        <SystemButton testID={iconTestID} onPress={onIconPress}>
          <Icon size={24} icon={iconName} color="backgroundContrastMid" />
        </SystemButton>
      )}
    </Box>
  );
};
