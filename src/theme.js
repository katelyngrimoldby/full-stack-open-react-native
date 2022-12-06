import { Platform } from "react-native";

const theme = {
  colors: {
    black: '#24292e',
    darkGrey: '#586069',
    blue: '#0366d6',
    lightGrey: '#e6e8eb',
    white: '#fafafa',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 16,
    subheading: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;