import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  banner: {
    alignItems: 'center',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#1E1E1E',
    marginBottom: 16,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  imagemProduto: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  preco: {
    fontSize: 13,
    color: '#00C853',
    marginTop: 4,
  },
});
export {styles}