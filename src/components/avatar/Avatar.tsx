import React from 'react';
import FastImage, { Priority, ResizeMode } from 'react-native-fast-image';
import { Box } from '../../themes/box/Box';
import {
  StyledImageProps,
  SystemImage,
} from '../../themes/systemImage/SystemImage';

type AvatarProps = {
  resizeMode?: ResizeMode;
  source: {
    uri: string;
    priority: Priority;
  };
};

export const Avatar: React.FC<AvatarProps & StyledImageProps> = ({
  source,
  resizeMode = 'cover',
  variant = 'roundAvatar',
  ...rest
}) => {
  return !source.uri ? (
    <Box
      borderWidth={0}
      padding="m"
      borderRadius="xXXlarge"
      alignItems="center"
      justifyContent="center"
      backgroundColor="primary"
      {...rest}
    />
  ) : (
    <SystemImage
      source={{
        uri: source.uri,
        priority: FastImage.priority[source.priority],
      }}
      resizeMode={FastImage.resizeMode[resizeMode]}
      variant={variant}
      {...rest}
    />
  );
};
