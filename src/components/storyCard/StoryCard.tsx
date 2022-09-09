import React from 'react';

// UI
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { Avatar } from '../avatar/Avatar';

// Types
import { Icon } from '../icon/Icon';

type StoryCardProps = {
  onPress: () => void;
  onBookmarkPress: () => void;
  onLikePress: () => void;
  hasUserLikedStory: boolean;
  hasUserBookmarkedStory: boolean;
  story: {
    id: string;
    title: string;
    likes: number;
    avatar: string;
    topic: string;
  };
};

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  onPress,
  onBookmarkPress,
  onLikePress,
  hasUserBookmarkedStory,
  hasUserLikedStory,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        alignSelf="center"
        justifyContent="space-between"
        paddingBottom="s"
        marginBottom="l"
        backgroundColor="white"
        marginTop="s"
        padding="s"
        borderRadius="medium"
        borderWidth={0.5}
        boxShadow="md"
        borderColor="borderColor"
      >
        <Box width="100%">
          <Box flexDirection="row" alignItems="center">
            <Avatar
              source={{ uri: story.avatar, priority: 'normal' }}
              width={40}
              height={40}
            />
            <Box width="80%" marginLeft="s">
              <Text variant="body" numberOfLines={1}>
                {story.title}
              </Text>
            </Box>
          </Box>

          <Box alignItems="center">
            <Box
              backgroundColor="secondary"
              alignSelf="flex-start"
              marginTop="s"
              padding="xs"
              borderRadius="medium"
              paddingLeft="s"
              paddingRight="s"
            >
              <Text
                variant="bodyXSmall"
                color="textContrastHigh"
                numberOfLines={1}
              >
                {story.topic}
              </Text>
            </Box>
          </Box>

          <Box
            borderBottomWidth={1}
            borderColor="backgroundContrastMid"
            marginTop="s"
            marginBottom="s"
          />

          <Box flexDirection="row" alignItems="center" marginLeft="s">
            <SystemButton flexDirection="row" width="20%" onPress={onLikePress}>
              <Icon
                icon={[hasUserLikedStory ? 'fas' : 'far', 'heart']}
                color="secondary"
                testID="story-card-heart-icon"
              />
              <Text variant="bodyXSmall" marginLeft="s">
                {story.likes}
              </Text>
            </SystemButton>

            <SystemButton onPress={onBookmarkPress}>
              <Icon
                icon={[hasUserBookmarkedStory ? 'fas' : 'far', 'bookmark']}
                marginLeft="m"
                color="primaryContrast"
                testID="story-card-bookmark-icon"
              />
            </SystemButton>
          </Box>
        </Box>
      </Box>
    </SystemButton>
  );
};
