import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {
    fontSize: 20,
    marginBottom: 25,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  result: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 10,
    fontSize: 14,
    fontStyle: 'italic',
  },
  switchContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});
export {styles}