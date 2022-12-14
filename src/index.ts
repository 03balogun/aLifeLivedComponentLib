import { library } from '@fortawesome/fontawesome-svg-core';

// Assets
import Listen from './assets/svg/listen.svg';
import Record from './assets/svg/record.svg';
import Preserve from './assets/svg/preserve.svg';
import MyselfRecordSVG from './assets/svg/myself-recording.svg';
import SomeoneElseRecordSVG from './assets/svg/someone-else-recording.svg';
import CovidThemeSVG from './assets/svg/covid-theme.svg';
import DraftsSVG from './assets/svg/drafts.svg';
import LifeStoryThemeSVG from './assets/svg/life-story-theme.svg';
import MyStoriesSVG from './assets/svg/my-stories.svg';
import TravelThemeSVG from './assets/svg/travel-theme.svg';
import SessionChecklistSVG from './assets/svg/session-checklist.svg';
import LoadingAnimation from './assets/lottie/loading.json';

// Components
import { ThemeProvider } from './themes/ThemeProvider';
import { EditAndDeleteBottomSheet } from './components/editAndDeleteBottomSheet/EditAndDeleteBottomSheet';
import { Icon } from './components/icon/Icon';
import { StoryCard } from './components/storyCard/StoryCard';
import { Avatar } from './components/avatar/Avatar';
import { MiniPlayer } from './components/miniPlayer/MiniPlayer';
import { TopicCard } from './components/topicCard/TopicCard';
import { UserCard } from './components/userCard/UserCard';
import { DraftStoryCard } from './components/draftStoryCard/DraftStoryCard';
import { ThemeCard } from './components/themeCard/ThemeCard';
import { Selector } from './components/selector/Selector';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';
import { UserCardSkeleton } from './components/userCard/UserCardSkeleton';
import { SelectBox } from './components/selectBox/SelectBox';
import { OnboardingContent } from './components/onboardingContent/OnboardingContent';
import { MyRecordingCard } from './components/myRecordingCard/MyRecordingCard';
import { RecorderActionBar } from './components/recorderActionBar/RecorderActionBar';
import { DirectionButton } from './components/directionButton/DirectionButton';
import { FaqCard } from './components/faqCard/FaqCard';
import { Header } from './components/header/Header';
import { MediaSlider } from './components/mediaSlider/MediaSlider';
import { MediaControls } from './components/mediaControls/MediaControls';

// UI
import { Box } from './themes/box/Box';
import { Text } from './themes/text/Text';
import { iconList } from './themes/systemIcon/IconList';
import { useTheme } from './themes/hooks/useTheme';
import { BlurLayout } from './themes/systemBlurLayout/SystemBlurLayout';
import { CardContainer } from './themes/card/CardContainer';
import { CardHeader } from './themes/card/CardHeader';
import { CardOverlay } from './themes/card/CardOverlay';
import { CardContent } from './themes/card/CardContent';
import { SystemFlatList } from './themes/systemFlatList/SystemFlatList';
import { SystemPressable } from './themes/systemPressable/SystemPressable';
import { SystemScrollView } from './themes/systemScrollView/SystemScrollView';
import { SystemBottomSheet } from './themes/systemBottomSheet/SystemBottomSheet';
import { SystemKeyboardAvoidingView } from './themes/systemKeyboardAvoidingView/SystemKeyboardAvoidingView';
import { SystemAnimatedLottieBox } from './themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import { SystemAnimatableBox } from './themes/systemAnimatableBox/SystemAnimatableBox';
import { SystemButton } from './themes/systemButton/SystemButton';

library.add(iconList);

export {
  SystemAnimatableBox,
  LoadingAnimation,
  Header,
  FaqCard,
  SystemAnimatedLottieBox,
  SystemPressable,
  StoryCard,
  UserCardSkeleton,
  SelectBox,
  DirectionButton,
  Button,
  Selector,
  UserCard,
  SystemFlatList,
  SystemScrollView,
  Avatar,
  Input,
  useTheme,
  Icon,
  MiniPlayer,
  BlurLayout,
  ThemeProvider,
  Box,
  Text,
  TopicCard,
  EditAndDeleteBottomSheet,
  DraftStoryCard,
  ThemeCard,
  OnboardingContent,
  SystemKeyboardAvoidingView,
  Record,
  Listen,
  Preserve,
  MyselfRecordSVG,
  SomeoneElseRecordSVG,
  CardContainer,
  CardHeader,
  CardContent,
  CardOverlay,
  CovidThemeSVG,
  DraftsSVG,
  LifeStoryThemeSVG,
  MyStoriesSVG,
  TravelThemeSVG,
  SessionChecklistSVG,
  SystemBottomSheet,
  MyRecordingCard,
  RecorderActionBar,
  MediaSlider,
  SystemButton,
  MediaControls,
};
