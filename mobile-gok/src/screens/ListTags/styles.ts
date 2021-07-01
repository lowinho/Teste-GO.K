import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  arrow: {
    width: 32,
    height: 32,
    marginLeft: 20
  },

  image: {
    width: 32,
    height: 32,
    marginRight: 20
  },

  input: {
    marginTop: 10,
    borderRadius: 4,
    marginHorizontal: 24, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  glass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.secondaryWhite,
  },

  filter: {
    marginLeft: 10,
  },

  containerInput: {
    width: 260,
    height: 40,
    backgroundColor: theme.colors.secondaryWhite,
    color: theme.colors.secondaryGray2,
    borderRadius: 4,
    fontSize: 13,
    marginLeft: 10,
    paddingRight: 30,
    borderColor: theme.colors.secondaryWhite,
    borderWidth: 1
  },
  
  magnifyingGlass: {
    width: 48,
    height: 40,
    backgroundColor: theme.colors.secondaryWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
 
  list: {
    paddingHorizontal: 20,
    width: '100%'
  }

});