import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 8,
    width: '100%',
  },
  cardHeader: {
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },
  cardBody: {
    marginVertical: 5,
  },
});

export default styles;
