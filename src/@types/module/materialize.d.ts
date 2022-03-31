/* eslint-disable @typescript-eslint/no-unused-vars */
import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    chatBubble?: {
      default?: React.CSSProperties['color'];
      opposite?: React.CSSProperties['color'];
    };
  }
  interface PaletteOptions {
    chatBubble: ChatBubblePaletteColorOptions;
  }
  interface ChatBubblePaletteColorOptions {
    default?: string;
    opposite?: string;
  }
}
