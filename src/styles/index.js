import { StyleSheet, Platform } from 'react-native'

const fonts = {
  fontMain: {
    fontFamily: Platform.select({
      ios: 'Avenir-Light',
      android: 'Roboto'
    })
  }
}

const colors = {
  blue: {
    lightest: '#e8f6fe',
    veryLight: '#a4d9f9',
    light: '#60bdf5',
    main: '#1ca1f1',
    dark: '#1471a9',
    veryDark: '#0b4060',
    darkest: '#031018'
  },
  grey: {
    lightest: '#e6f5f5',
    veryLight: '#99d6d6',
    light: '#4db8b8',
    main: '#009999',
    dark: '#006b6b',
    veryDark: '#002e2e',
    darkest: '#000f0f'
  },
  red: {
    main: '#ff0000'
  }
}

const text = {
  headingText: {
    ...fonts.fontMain,
    fontSize: 24
  },
  subheadingText: {
    ...fonts.fontMain,
    fontSize: 20
  },
  copyText: {
    ...fonts.fontMain,
    fontSize: 16
  },
  inputText: {
    ...fonts.fontMain,
    fontSize: 16
  }
}

const states = {
  activeElement: {
    color: colors.blue.main
  },
  errorElement: {
    color: colors.red.main
  },
  normalElement: {
    color: colors.grey.main
  }
}

const components = {
  containerComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...text.headingText
  },
  headingComponent: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    ...text.headingText
  },
  welcomeComponent: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    ...text.headingText
  }
}

export const styles = {
  componentStyles: StyleSheet.create(components),
  states,
  colors,
  text
}
