import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#7393B2' },
  row: {
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  card: {
    width: 100,
    backgroundColor: '#A9DBF0',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
    marginHorizontal: 5,
  },
  image: { width: 80, height: 120, resizeMode: 'cover', borderRadius: 4 },
  title: { fontSize: 12, fontWeight: 'bold', marginTop: 8, textAlign: 'center' },
  author: { fontSize: 10, color: '#555', textAlign: 'center' },
  price: { marginTop: 4, fontWeight: 'bold', color: '#10B981' },
  star: { color: '#FBBF24', marginHorizontal: 1 },
  emptyStar: { color: '#E5E7EB' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#A9DBF0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  modalAuthor: { fontSize: 14, color: '#666', marginBottom: 10 },
  modalDescription: { textAlign: 'center', marginBottom: 10 },
  modalDetails: { fontSize: 12, color: '#888' },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#1E3A8A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
});
export {styles}