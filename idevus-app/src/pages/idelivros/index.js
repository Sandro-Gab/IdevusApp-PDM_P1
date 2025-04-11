import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Header from '../../components/header/index';
import {styles} from '../../pages/idelivros/styles';
import Texto from '../../components/texto/index';
import Footer from '../../components/footer/index';

const books = [
  {
    id: 1,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    price: 'R$ 39.90',
    image: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg',
    description: 'Uma jornada épica pela Terra Média.',
    details: 'Editora HarperCollins | 1216 páginas | ISBN: 978-0000000001',
    rating: 4.9,
    category: 'Fantasia',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    price: 'R$ 34.90',
    image: 'https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg',
    description: 'Uma distopia sobre um regime totalitário.',
    details: 'Editora Companhia das Letras | 416 páginas | ISBN: 978-0000000002',
    rating: 4.7,
    category: 'Ficção',
  },
  {
    id: 3,
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    price: 'R$ 29.90',
    image: 'https://m.media-amazon.com/images/I/719esIW3D7L.jpg',
    description: 'Um clássico do romance inglês.',
    details: 'Editora Penguin | 352 páginas | ISBN: 978-0000000003',
    rating: 4.6,
    category: 'Romance',
  },
  {
    id: 4,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    price: 'R$ 24.90',
    image: 'https://images.tcdn.com.br/img/img_prod/1271663/dom_casmurro_edicao_de_luxo_almofadada_89_1_038fb70c564eb50f71ea49f6027e827a.jpg',
    description: 'Um romance psicológico brasileiro.',
    details: 'Editora Ática | 208 páginas | ISBN: 978-0000000004',
    rating: 4.5,
    category: 'Clássico',
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 'R$ 49.90',
    image: 'https://m.media-amazon.com/images/I/71-ghLb8qML.jpg',
    description: 'Uma análise da história da humanidade.',
    details: 'Editora L&PM | 456 páginas | ISBN: 978-0000000005',
    rating: 4.8,
    category: 'Não-Ficção',
  },
  {
    id: 6,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    price: 'R$ 39.90',
    image: 'https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg',
    description: 'O início da jornada do jovem bruxo.',
    details: 'Editora Rocco | 224 páginas | ISBN: 978-0000000006',
    rating: 4.9,
    category: 'Fantasia',
  },
  {
    id: 7,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    price: 'R$ 19.90',
    image: 'https://m.media-amazon.com/images/I/81SVIwe5L9L._UF894,1000_QL80_.jpg',
    description: 'Uma fábula sobre amor e amizade.',
    details: 'Editora Agir | 96 páginas | ISBN: 978-0000000007',
    rating: 4.8,
    category: 'Fábula',
  },
  {
    id: 8,
    title: 'O Alquimista',
    author: 'Paulo Coelho',
    price: 'R$ 34.90',
    image: 'https://m.media-amazon.com/images/I/81slUinjTlS.jpg',
    description: 'Uma jornada em busca de um sonho.',
    details: 'Editora Rocco | 208 páginas | ISBN: 978-0000000008',
    rating: 4.4,
    category: 'Ficção',
  },
  {
    id: 9,
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    price: 'R$ 29.90',
    image: 'https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg',
    description: 'Uma crítica política disfarçada de fábula.',
    details: 'Editora Companhia das Letras | 152 páginas | ISBN: 978-0000000009',
    rating: 4.6,
    category: 'Ficção',
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(5)].map((_, i) => (
        <Text
          key={i}
          style={[styles.star, i < fullStars ? {} : i === fullStars && hasHalfStar ? {} : styles.emptyStar]}
        >
          ★
        </Text>
      ))}
    </View>
  );
};

export default function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openBookModal = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  const renderBook = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openBookModal(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
      <StarRating rating={item.rating} />
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ListHeaderComponent={
        <View style={{ marginTop: 20 }}>
          <Texto titulo='IdeLivros' texto='Desde clássicos até peças de conhecimento. Você encontra tudo aqui!' ticor='#1E3A8A' txcor='#FFF'/>
        </View>
      }
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={{ paddingVertical: 10 }}
        columnWrapperStyle={styles.row}
        ListFooterComponent={
        <View style={{ marginTop: 20 }}>
          <Footer corTudo="#FFF" />
        </View>
      }
      />
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedBook && (
              <>
                <Image source={{ uri: selectedBook.image }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedBook.title}</Text>
                <Text style={styles.modalAuthor}>{selectedBook.author}</Text>
                <Text style={styles.modalDescription}>{selectedBook.description}</Text>
                <Text style={styles.modalDetails}>{selectedBook.details}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={{ color: '#fff' }}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}