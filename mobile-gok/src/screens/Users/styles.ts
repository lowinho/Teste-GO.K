import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.secondaryWhite2
  },
  boxTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    marginTop: 20,
    backgroundColor: theme.colors.secondaryWhite,
  },

  image: {
    width: 98.92,
    height: 40,
    justifyContent: 'flex-start',
    marginLeft: 20,
  },

  containerButton: {
    width: 154,
    height: 32,
    backgroundColor: theme.colors.primary,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.colors.secondaryWhite,
    // fontFamily: theme.fonts.text500, // Mulish
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  titleButton: {
    flex: 1,
    color: theme.colors.secondaryWhite,
    // fontFamily: theme.fonts.text500, // Mulish
    fontSize: 16,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 20,
    width: '100%'
  }

  
});