import {
  AudioPlayerComponentsOrder,
  AudioPlayerVariation,
  TimeOption,
  TimePosition,
} from 'material-ui-audio-player/dist/components/AudioPlayer';

interface IAudioPlayerProps {
  src: string | string[];
  rounded?: boolean;
  elevation?: number;
  useStyles?: any;
  width?: string;
  height?: string;
  download?: boolean;
  volume?: boolean;
  variation?: keyof typeof AudioPlayerVariation;
  preload?: AudioPlayerPreload;
  loop?: boolean;
  order?: keyof typeof AudioPlayerComponentsOrder;
  displaySlider?: boolean;
  displayCloseButton?: boolean;
  autoplay?: boolean;
  debug?: boolean;
  spacing?: GridSpacing;
  icons?: Icons;
  time?: keyof typeof TimeOption;
  timePosition?: keyof typeof TimePosition;
  onPlayed?: (event: any) => void;
  onPaused?: (event: any) => void;
  onFinished?: (event: any) => void;
}
