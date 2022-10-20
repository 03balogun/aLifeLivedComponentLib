import React, { ReactElement } from 'react';

// UI
import { Box, StyledBoxProps } from '../box/Box';

type CardContentProps = {
  SVG: ReactElement;
  props?: StyledBoxProps;
};

export const CardContent: React.FC<CardContentProps> = ({ SVG, ...props }) => {
  return (
    <Box
      alignContent="center"
      overflow="hidden"
      borderRadius="large"
      {...props}
    >
      {SVG}
    </Box>
  );
};
