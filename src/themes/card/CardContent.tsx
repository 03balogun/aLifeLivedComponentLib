import React, { ReactElement } from 'react';

// UI
import { Box, StyledBoxProps } from '../box/Box';

type CardContentProps = {
  SVG: ReactElement;
};

export const CardContent: React.FC<CardContentProps & StyledBoxProps> = ({
  SVG,
  ...rest
}) => {
  return (
    <Box alignContent="center" overflow="hidden" borderRadius="large" {...rest}>
      {SVG}
    </Box>
  );
};
