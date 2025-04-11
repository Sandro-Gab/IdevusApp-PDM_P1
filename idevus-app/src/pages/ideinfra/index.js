import { View, ScrollView, Image } from 'react-native';
import Header from '../../components/header/index';
import Texto from '../../components/texto/index';
import {styles} from '../../pages/ideinfra/styles';
import Footer from '../../components/footer/index';

export default function TelaInicial() {
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Header />
      <View style={styles.container}>
      <Texto titulo='IdeInfra' texto='Antes da Idevus ser o que é, ela não era nada além de uma empresa de infraestrutura que ajudava outras empresas a se modernizarem. Foi só depois de muita repercussão que a Idevus abriu todas as suas franquias derivadas.' cor='#FFF'/>

      <Texto titulo='Sobre Nós' texto='A Idevus foi fundada por Miguel Menezes e Sandro Gabriel dos Santos, juntamente com um terceiro membro (atualmente afastado), Rafael Michalewicz. O Sucesso da Idevus também se deve a seus fornecedores, como a PrimeTech. Depois que Idevus ganhou fama o suficiente e abriu suas franquias, tudo que era relacionado com infraestrutura virou IdeInfra' cor='#FFF'/>

      <Texto titulo='Trabalhos Passados' texto='A IdeInfra já trabalhou na infraestrutura de várias empresas renomadas, como Microsoft, Motorola, Oracle, dentre outras.' cor='#FFF'/>

      <Texto titulo='O Que Fazemos' texto='A IdeInfra foca, basicamente, em modernizar prédios de seus clientes. Nós cuidamos de tudo, desde a análise da infraestrutura atual, até treinamento de funcionários, fornecimento de equipamentos e dentre outros.' cor='#FFF'/>

      <Texto titulo='Quanto custa' texto='O preço total dos nossos serviços varia bastante da necessidade do cliente, mas normalmente passa de R$10.000,00.' cor='#FFF'/>

      <Texto titulo='Contato' texto={`Instagram, X/Twitter, Youtube e Facebook: @idevus
WhatsApp: +55 (31) 98112-3771
Telefone: +55 (31) 3332-1178
Linkedin: br.linkedin.com/company/idevus
Website Oficial: idevus.com.br`} cor='#FFF'/>
      </View>
      <Footer corTudo='#FFF'/>
    </ScrollView>
  );
}