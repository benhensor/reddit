import { DefaultTheme } from 'styled-components';

const sharedStyles = {
  fontSizes: {
    heading: {
      fontSize: '3.125rem',
      lineHeight: '1.5rem', 
      fontWeight: '600',
    },
    paragraph: {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      fontWeight: '400',
    },
    interactives: {
      fontSize: '.75rem',
    },
  },
  margins: {
    // Define your margins here
  },
};

export const theme: DefaultTheme = {
  lightTheme: {
    ...sharedStyles,
    colors: {
      background: '#FFFFFF',
      menuBackground: '#FFFFFF',
      elementBackground: '#EAEDEF',
      searchBarBackground: '#E5EBEE',
      searchBarBackgroundHover: '#DBE4E9',
      border: '#CCCCCC',
      icons: '#000000',
      textHeading: '#0F1A1C',
      textParagraph: '#57656A',
      searchBarText: '#889FAA',
      buttonBackground: '#0045AC',
      buttonBackgroundHover: '#1870F4',
      logoRed: '#FF4500',
      logoRedHover: '#FF5A1F',
      white: '#FFFFFF',
      black: '#000000',
    }
  },
  darkTheme: {
    ...sharedStyles,
    colors: {
      background: '#0E1113',
      menuBackground: '#181C1F',
      elementBackground: '#333D42',
      searchBarBackground: '#2A3236',
      searchBarBackgroundHover: '#333D42',
      border: '#3E4142',
      icons: '#CCCED0',
      textHeading: '#FFFFFF',
      textParagraph: '#B5C8D2',
      searchBarText: '#889FAA',
      buttonBackground: '#0045AC',
      buttonBackgroundHover: '#1870F4',
      logoRed: '#FF4500',
      logoRedHover: '#FF5A1F',
      white: '#FFFFFF',
      black: '#000000',
    }
  },
}