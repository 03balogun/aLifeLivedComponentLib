import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  BoxProps,
  color,
  ColorProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
} from '@shopify/restyle';
import React from 'react';
import { BlurView, BlurViewProperties } from '@react-native-community/blur';
import { Theme } from '../theme';

export type StyledBlurViewProps = BlurViewProperties &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  BoxProps<Theme> &
  ColorProps<Theme> & {
    children?: React.ReactNode;
  };

export const BlurLayout = createRestyleComponent<StyledBlurViewProps, Theme>(
  [spacing, layout, border, backgroundColor, color],
  BlurView
);
