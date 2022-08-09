import { createText, ResponsiveValue } from '@shopify/restyle';
import { ColorThemeTokens } from '../palette';
import { RFValue } from 'react-native-responsive-fontsize';
import { Theme } from '../theme';
import { ValueOf } from '../../ts/utils';

const FontFamilies = {
  sfUiTextBold: 'SFUIText-Bold',
  sfUiTextRegular: 'SFUIText-Regular',
  sfUiTextSemiBold: 'SFUIText-Semibold',
  sfUiDisplayRegular: 'SFUIDisplay-Regular',
};

type TextVariantToken =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'intro'
  | 'body'
  | 'bodySmall'
  | 'bodyXSmall'
  | 'bodyXXSmall';

type TextVariant = {
  fontFamily: ValueOf<typeof FontFamilies>;
  fontSize: number | ResponsiveValue<number, Theme>;
  lineHeight?: number | string;
  color: ColorThemeTokens;
};

export const textVariants: Record<TextVariantToken, TextVariant> = {
  h1: {
    fontSize: RFValue(52),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextBold,
  },
  h2: {
    fontSize: RFValue(32),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextBold,
  },
  h3: {
    fontSize: RFValue(24),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextBold,
  },
  h4: {
    fontSize: RFValue(20),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextRegular,
  },
  intro: {
    fontSize: RFValue(16),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextSemiBold,
  },
  body: {
    fontSize: RFValue(18),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiDisplayRegular,
  },
  bodySmall: {
    fontSize: RFValue(16),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiDisplayRegular,
  },
  bodyXSmall: {
    fontSize: RFValue(14),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiDisplayRegular,
  },
  bodyXXSmall: {
    fontSize: RFValue(12),
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiDisplayRegular,
  },
};

export const Text = createText<Theme>();
