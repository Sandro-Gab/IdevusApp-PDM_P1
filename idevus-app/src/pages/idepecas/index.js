import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../../components/header/index';
import {styles} from '../../pages/idepecas/styles';
import Texto from '../../components/texto/index';
import Footer from '../../components/footer/index';
import Produto from '../../components/produto/index';

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: 'PC gamer top intel core i5 Com 4 Fans RGB/ 16gb de ram/ SSD 480Gb/ CPU para jogos pesados, Roda tudo',
      preco: 'R$ 0,10',
      imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9P-ztJDf213P2KSk52ZtyLEpqA-5DFEl2-O8yZyQC_eY2yxaOvlMOhkKV4Sj125YdsAit8ZzBQwy5t67k3rGlY6UUab0duWXgqLgZTKQ&usqp=CAE',
    },
    {
      id: 2,
      nome: 'Notebook Gamer ROG Strix G16, NVidia RTX4060, CORE I9, 16 GB, 512 GB, Windows 11 Home, Eclipse Gray - G614JV-N3094W',
      preco: 'R$ 0,20',
      imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJKYjMRVspchE767GT0rHeWH-PWjUXZAkE84tU_XuhBkPmbGKt1fW1aRy9w3G35h1q4qnftWCBxihQPpKwthYErUHUzZYSPsThB1YBhu6Q281VlVv2uGO_BA&usqp=CAE',
    },
    {
      id: 3,
      nome: 'Havit HV-H2232d - Fone de Ouvido, Gamer, Iluminação RGB, com Microfone, Falante de 50mm, Conector 3.5mm',
      preco: 'R$ 0,15',
      imagem: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLZa9WOUVu8ukQ_6rg7uXpPyOfryfS85lcmtXzFRfcrAR8RA-LrEKC_ePpMb7B6dbMH8zshJVExmA8i_4n0bkAq1l-HetpuCS5e0yX0M56_WTb-wrLfTcy4Q&usqp=CAE',
    },
    {
      id: 4,
      nome: 'Kit Amd Ryzen 7 5700x + B550m Aorus Elite AM4 + 16gb 3200mhz',
      preco: 'R$ 2,50',
      imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSO920SGwpb-d9ovLG4fIAQRO-sStTo0k88qp1smVE2xMopmK9_M_K3L8gtqS7lurfGBYATPg8Mcv4w4QPBPVR6qyjSn72dQSfH071bBecSnQG3dJ9pSCRp4g&usqp=CAE',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.background}>
    <Header/>
    <View style={styles.container}>
      <View style={styles.banner}>
        <Texto titulo='IdePeças' texto='Monte seu computador por um preço justo!' ticor='#E63946' txcor='#FFF'/>
      </View>
      <View style={styles.grid}>
          {produtos.map((produto) => (
            <Produto
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              cor="#1E1E1E"
            />
          ))}
        </View>
      <Footer corTudo='#FFF'/>
      </View>
    </ScrollView>
  );
}