import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Component
import { StoryCard } from './StoryCard';
import { Box } from '../../themes/box/Box';

const storyData = [
  {
    id: 'test-story-one',
    title: 'Test title',
    avatar: 'https://picsum.photos/id/237/200/300',
    endAdornmentIconName: 'ellipsis-v',
    isStoryPlaying: false,
    onEndAdornmentPress: action('End adornment pressed'),
  },
  {
    id: 'test-story-two',
    title: 'This is a longer test title hey there',
    isStoryPlaying: false,
    avatar: '',
    endAdornmentIconName: 'play-circle',
  },
  {
    id: 'test-story-three',
    title:
      'This is a long title story, lets make this one go for ages! Hello there. I have the high ground. Hello there again',
    isStoryPlaying: true,
    avatar: '',
    endAdornmentIconName: 'play-circle',
  },
];

storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('Story card', () => (
    <Box flex={1} backgroundColor="white" margin="m">
      {storyData.map(story => (
        <Box key={story.id} marginTop="s">
          <StoryCard
            avatar={story.avatar}
            title={story.title}
            isStoryPlaying={story.isStoryPlaying}
            interviewer="John Smith"
            endAdornmentIconName={story.endAdornmentIconName}
            onEndAdornmentPress={story.onEndAdornmentPress}
            onPress={action('Story card pressed')}
          />
        </Box>
      ))}
    </Box>
  ));
