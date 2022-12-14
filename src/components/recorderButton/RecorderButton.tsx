import React, { useMemo, useRef } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import { Loader } from '../loader/Loader';

// UI
import { Box } from '../../themes/box/Box';

type RecorderButtonProps = {
  isRecording: boolean;
  isRecordingPaused: boolean;
  testID?: string;
  loaderTestID?: string;
  isLoading?: boolean;
  onRecorderPress: () => void;
};

export const RecorderButton: React.FC<RecorderButtonProps> = ({
  isRecording,
  isRecordingPaused,
  onRecorderPress,
  isLoading,
  testID,
  loaderTestID,
}) => {
  const lottieRef = useRef<AnimatedLottieView>(null);

  useMemo(
    () =>
      !isRecording || isRecordingPaused
        ? lottieRef?.current?.reset()
        : lottieRef?.current?.play(),
    [isRecording, isRecordingPaused]
  );

  return isLoading ? (
    <Box
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      width={100}
      height={100}
    >
      <Loader testID={loaderTestID} />
    </Box>
  ) : (
    <TouchableWithoutFeedback
      onPress={onRecorderPress}
      testID={testID}
      disabled={isLoading}
    >
      <SystemAnimatedLottieBox
        ref={lottieRef}
        source={require('../../assets/lottie/record-button.json')}
        loop={false}
        autoPlay={false}
        width={100}
        height={100}
      />
    </TouchableWithoutFeedback>
  );
};
