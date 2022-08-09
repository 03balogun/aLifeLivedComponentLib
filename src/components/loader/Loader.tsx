import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';

type LoaderProps = {
  testID?: string;
};

export const Loader: React.FC<LoaderProps> = ({ testID }) => {
  return (
    <SystemAnimatedLottieBox
      source={require('../../assets/lottie/loading.json')}
      testID={testID}
      loop={true}
      autoPlay={true}
      width={RFValue(50)}
      height={RFValue(50)}
    />
  );
};
