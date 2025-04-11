import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
    width: '100%',
  },
  imagemProduto: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nome: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
  preco: {
    fontSize: 14,
    color: '#E63946',
    fontWeight: '600',
  },
});
export {styles}