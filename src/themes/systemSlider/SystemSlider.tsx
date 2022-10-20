import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  BoxProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
} from '@shopify/restyle';
import { Theme } from '../theme';
import Slider from '@react-native-community/slider';
import { SliderProps } from 'react-native';

export type StyledSliderProps = SliderProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BoxProps<Theme> &
  BackgroundColorProps<Theme>;

export const SystemSlider = createRestyleComponent<StyledSliderProps, Theme>(
  [spacing, layout, border, backgroundColor],
  Slider
);
