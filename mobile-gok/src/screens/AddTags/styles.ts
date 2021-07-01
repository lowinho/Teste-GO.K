import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondaryGray3,
  },

  card: {
    flex: 1,
    backgroundColor: theme.colors.secondaryWhite,
    width: 100,
    marginHorizontal: 15,
    borderRadius: 8,
    flexWrap: 'wrap'
  },

  align: {
    marginHorizontal: 27.44,
    marginVertical: 32
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  input: {
    marginTop: 10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: theme.colors.secondaryGray,
    borderLeftColor: theme.colors.secondaryGray,
    borderTopColor: theme.colors.secondaryGray,
    borderRightColor: theme.colors.secondaryGray,
    borderWidth: 1,
    marginBottom: 5
  },

  glass: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.secondaryWhite,
    
    borderRadius: 4,
  },

  magnifyingGlass: {
  },

  containerInput: {
    width: 290,
    height: 40,
    backgroundColor: theme.colors.secondaryWhite,
    color: theme.colors.secondaryGray2,
    borderRadius: 4,
    fontSize: 16,
    borderBottomColor: theme.colors.secondaryWhite,
    borderRightColor: theme.colors.secondaryWhite,
    borderTopColor: theme.colors.secondaryWhite,
    borderLeftColor: theme.colors.secondaryWhite,
    borderWidth: 1,
    paddingLeft: 10 
  },

  cardInside: {
    width: '100%',
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    marginBottom: 10
  },

  titleCardInside: {
    fontSize: 16,
    color: theme.colors.secondaryGray2,
    marginBottom: 15
  },

  tagsAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },

  tags: {
    backgroundColor: theme.colors.secondaryWhite3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 5,
    flexWrap: 'wrap',
    marginBottom: 2
  },

  titleTags: {
    color: theme.colors.primary,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 3
  },
  
  plus: {
    backgroundColor: theme.colors.secondaryWhite,
    width: 18,
    height: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6
  },
  
});