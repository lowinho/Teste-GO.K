import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.secondaryWhite,
    borderRadius: 8,
    marginTop: 10
  },

  card: {
    marginVertical: 20,
    marginHorizontal: 15,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },

  user: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  userGit: {
    fontSize: 14,
  },

  trash: {
    backgroundColor: theme.colors.secondaryGray1,
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  textCardBottom: {
    color: theme.colors.secondaryGray,
    fontSize: 12,
  },
  
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 3
  }

});