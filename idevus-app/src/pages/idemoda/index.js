import { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Animated,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/header/index';
import Texto from '../../components/texto/index';
import {styles} from '../../pages/idemoda/styles';
import Footer from '../../components/footer/index';

const products = [
  {
    name: 'Blazer Slim Fit',
    price: 'R$ 459,90',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'Blazer slim fit com corte moderno e lapelas finas para ocasiões especiais. Versátil para escritório ou eventos sociais.',
    details:
      '70% lã, 30% poliéster | Produzido em Minas Gerais | Limpeza a seco',
    rating: 4.8,
  },
  {
    name: 'Calça Jeans Skinny',
    price: 'R$ 199,90',
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'Calça jeans skinny com elastano para melhor ajuste e conforto no dia a dia. Disponível em vários lavagens.',
    details: '98% algodão, 2% elastano | Santa Catarina | Lavar água fria',
    rating: 4.2,
  },
  {
    name: 'Camiseta Básica Premium',
    price: 'R$ 129,90',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'Camiseta básica de corte reto com acabamento premium e tecido macio. O essencial para qualquer guarda-roupa.',
    details: '100% algodão penteado | Paraná | Lavar na máquina',
    rating: 4.7,
  },
  {
    name: 'Saia Midi Plissada',
    price: 'R$ 239,90',
    image:
      'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'Saia midi plissada com caimento perfeito para looks elegantes e confortáveis.',
    details: '100% poliéster | Produzido no Rio de Janeiro | Lavar a mão',
    rating: 4.3,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <View style={styles.starContainer}>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <Text key={i} style={styles.star}>
              &#9733;
            </Text>
          );
        } else if (i === fullStars && hasHalfStar) {
          return (
            <Text key={i} style={styles.star}>
              &#9733;
            </Text>
          );
        } else {
          return (
            <Text key={i} style={[styles.star, styles.emptyStar]}>
              &#9733;
            </Text>
          );
        }
      })}
    </View>
  );
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const animatePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const animatePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
    <Header/>
      <ScrollView contentContainerStyle={styles.productsContainer}>
      <Texto titulo='IdeModa' texto='Escolha seu look com estilo e modernidade!' cor='#C71585'/>
        {products.map((product) => (
          <Animated.View
            key={product.id}
            style={[styles.productCard, { transform: [{ scale: scaleAnim }] }]}>
            <TouchableOpacity
              onPress={() => openProductModal(product)}
              onPressIn={animatePressIn}
              onPressOut={animatePressOut}
              activeOpacity={0.9}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <View style={styles.priceRating}>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  <StarRating rating={product.rating} />
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+ Carrinho</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
        <Footer corTudo='#C71585'/>
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}>
        <Animated.View style={[styles.modalOverlay, { opacity: fadeAnim }]}>
          <View style={styles.modalContainer}>
            {selectedProduct && (
              <>
                <Image
                  source={{ uri: selectedProduct.image }}
                  style={styles.modalImage}
                />
                <ScrollView style={styles.modalContent}>
                  <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
                  <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
                  <StarRating rating={selectedProduct.rating} />
                  <Text style={styles.modalDescription}>
                    {selectedProduct.description}
                  </Text>

                  <View style={styles.detailsBox}>
                    <Text style={styles.detailsTitle}>Detalhes do Produto</Text>
                    <Text style={styles.detailsText}>
                      {selectedProduct.details}
                    </Text>
                  </View>

                  <Picker
                    selectedValue={selectedSize}
                    onValueChange={(itemValue) => setSelectedSize(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#C71585">
                    <Picker.Item label="Selecione um tamanho" value="" />
                    <Picker.Item label="P" value="P" />
                    <Picker.Item label="M" value="M" />
                    <Picker.Item label="G" value="G" />
                    <Picker.Item label="GG" value="GG" />
                  </Picker>
                </ScrollView>

                <View style={styles.modalFooter}>
                  <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Comprar Agora</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>
                      Adicionar ao Carrinho
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeModal}>
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
}