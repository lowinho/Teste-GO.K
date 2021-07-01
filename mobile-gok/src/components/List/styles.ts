import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

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
    marginBottom: 10
  },

  titleCardTop: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  
  star: {
    backgroundColor: theme.colors.secondaryYellow,
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  cardMiddle1: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 10
  },

  textCardMiddle1: {
    fontSize: 14,
  },

  cardMiddle2: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  tags: {
    width: 96,
    height: 21,
    backgroundColor: theme.colors.secondaryWhite3,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    marginBottom: 5
  },

  textTags: {
    fontSize: 12,
    marginBottom: 3
  },

  edit: {
    backgroundColor: theme.colors.secondaryBlue,
    width: 16,
    height: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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