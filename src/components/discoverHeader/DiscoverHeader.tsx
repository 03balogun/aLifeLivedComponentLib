import React from 'react';
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';

type DiscoverHeaderProps = {
  fullName: string;
  avatarUrl: string;
  avatarTestID: string;
  searchTestID: string;
  onSearchIconPress: () => void;
  onAvatarPress: () => void;
};

export const DiscoverHeader: React.FC<DiscoverHeaderProps> = ({
  fullName,
  avatarUrl,
  avatarTestID,
  searchTestID,
  onSearchIconPress,
  onAvatarPress,
}) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
    >
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
          Hi, {fullName}
        </Text>
      </Box>
      <SystemButton testID={searchTestID} onPress={onSearchIconPress}>
        <Icon size={24} icon="search" color="backgroundContrastMid" />
      </SystemButton>
    </Box>
  );
};
