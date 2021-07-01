import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,  
  },

  imageArrowView: {
    marginBottom: 60,
  },
  
  arrow: {
    width: 32,
    height: 32,
    marginBottom: 20
  },

  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  
  image: {
    width: 197.85,
    height: 80,
  },

  largeText: {
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },

  smallText: {
    fontSize: 16,
    marginBottom: 40,
    color: theme.colors.secondaryGray2
  },

  input: {
    marginTop: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderColor: theme.colors.secondaryGray,
    borderWidth: 1,
    width: '100%',
  },

  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.secondaryWhite,
    borderColor: theme.colors.secondaryGray,
    borderWidth: 1,
    width: 295,
  },

  userCircle: {
    marginLeft: 16,
    marginRight: 10,
    borderRadius: 4,
  },

  containerInput: {
    width: '80%',
    height: 56,
    backgroundColor: theme.colors.secondaryWhite,
    color: theme.colors.secondaryGray2,
    borderRadius: 4,
    justifyContent: 'center',
    fontSize: 13,
  },

  termsText: {
    fontSize: 16,
    marginTop: 150,
    color: theme.colors.secondaryGray2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }, 
});

