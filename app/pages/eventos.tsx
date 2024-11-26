import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default ()=> {
return (
    
    <SafeAreaView
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 25,
    }}
    >
        
    <Image 
        style={Estilo.homelogo} 
        source={require('../../assets/images/logogomesdacosta.png')} />
    
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
    <View style={{ height: 'auto' }}>
    
    <Text style={[Estilo.h2, { color: "red" }]}>Eventos</Text>
    
    <Text style={Estilo.pbold}>Festa Junina Gomes da Costa 2024: Diversão para Toda a Família!</Text>
    
    <Text style={Estilo.p}>Preparem-se para uma noite de alegria e tradição! No dia 22 de junho, o ginásio poliesportivo do Colégio Gomes da Costa será o palco de nossa animada Festa Junina. Venha celebrar essa data tão especial com muita diversão para toda a família.</Text>
    <Text style={Estilo.p}>O evento contará com uma programação repleta de atividades imperdíveis. Para os amantes de jogos, teremos um divertido bingo com prêmios incríveis. As apresentações musicais prometem encantar o público com músicas típicas e muita animação. Não poderia faltar a tradicional dança de quadrilha, preparada com muito carinho pelos alunos e professores, além de brincadeiras clássicas como pescaria, boca do palhaço e muito mais. Para completar, uma deliciosa seleção de comidas típicas como pamonha, canjica, pipoca e bolos espera por você.</Text>
    <Text style={Estilo.p}>Não perca! Venha vestido a caráter, traga sua animação e participe dessa festa que promete encantar e divertir a todos!</Text>
    
    <Text style={Estilo.p}></Text>
    <Text style={Estilo.pbold}>Feira Cultural do Colégio Gomes da Costa 2024: A Riqueza Cultural do Brasil</Text>
    
    <Text style={Estilo.p}>No dia 30 de novembro, o ginásio poliesportivo do Colégio Gomes da Costa será palco de um evento especial: a Feira Cultural 2024, com o tema "A Riqueza Cultural do Brasil". Com a participação de alunos do Ensino Fundamental e Médio, o evento promete ser uma celebração vibrante da diversidade cultural brasileira.</Text>
    <Text style={Estilo.p}>Os visitantes poderão explorar a riqueza das diferentes regiões do país por meio de apresentações culturais, exposições temáticas e mostras gastronômicas, tudo cuidadosamente preparado pelos alunos. O objetivo da feira é exaltar a cultura nacional, destacando as tradições, danças, músicas, culinária e história que tornam o Brasil um país único.</Text>
    <Text style={Estilo.p}>Venha prestigiar e se encantar com a criatividade e o talento dos nossos estudantes!</Text>

    <Text style={Estilo.p}></Text>
    <Text style={Estilo.pbold}>Estão abertas as inscrições para a 1ª Olimpíadas de Matemática do Colégio Gomes da Costa</Text>
    
    <Text style={Estilo.p}>O Colégio Gomes da Costa tem o prazer de anunciar que estão abertas as inscrições para a 1ª Olimpíadas de Matemática, que ocorrerá entre os dias 2 e 6 de dezembro de 2024. Este evento inédito promete desafiar os alunos a mostrarem suas habilidades matemáticas em uma competição amigável e estimulante.</Text>
    <Text style={Estilo.p}>Os estudantes de todas as turmas estão convidados a participar. Para se inscrever, basta preencher o formulário disponível na secretaria escolar. Não perca a oportunidade de testar suas habilidades, se divertir e ainda concorrer a prêmios!</Text>
    <Text style={Estilo.p}>As Olimpíadas de Matemática do Colégio Gomes da Costa têm como objetivo promover o interesse pela matemática e incentivar a aprendizagem de forma lúdica e colaborativa. Participe e faça parte dessa grande celebração do conhecimento!</Text>
    <Text style={Estilo.p}>Informações Adicionais:</Text>
    <Text style={Estilo.p}>Datas da Competição: de 2 a 6 de dezembro de 2024</Text>
    <Text style={Estilo.p}>Inscrições: Na secretaria escolar</Text>
    <Text style={Estilo.p}>Venha se desafiar e fazer parte dessa competição emocionante!</Text>
        
            
    <Pressable style={Estilo.botaoBack}>
        <Link href="/">
        <Text style={Estilo.textLink}>Voltar ao Início</Text>
        </Link>
    </Pressable>

    </View>
    </ScrollView>
    </SafeAreaView>

    
);
}

const Estilo = StyleSheet.create({
botaoGo1:{
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginLeft: "auto",
    marginRight: "auto"
},
botaoGo2:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginLeft: "auto",
    marginRight: "auto"
},
botaoGo3:{
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginLeft: "auto",
    marginRight: "auto"
},
botaoBack:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginTop: 19,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
},
textLink:{
    color: "#fff", 
    textAlign: "center" 
},
areView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 25
},
text:{
    color: "blue", 
    textAlign: "center" 
},
textToast:{
    color: "#FFF", 
    textAlign: "center" 
},
safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},
tinyLogo: {
width: 50,
height: 50
},
texthome:{
    color: "black", 
    textAlign: "justify"
},
titlehome:{
    color: "blue",
    textAlign: "center",
    marginTop: 5
},
homelogo: {
    width: 100,
    height: 100,
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex", 
    alignSelf: "center",
    margin: "auto",
    marginBottom: 10
},
titlenoticias:{
    color: "red",
    textAlign: "center",
    marginTop: 5
},
bold: {
    fontWeight: 'bold',
},
calendario: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
},
subtitle:{
    color: "blue",
    textAlign: "center",
    marginTop: 5
},
titlecontato:{
    color: "green",
    textAlign: "center",
    marginTop: 5
},
colegiofoto: {
    width: 300,
    height: 150,
    marginTop: 7,
    marginBottom: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
},
boldcenter: {
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 9,
    fontSize: 14,           
    color: 'black',
    marginVertical: 5,
},
contLogo: {
    width: 25,
    height: 25,
    marginVertical: 6
},
h2: {
    fontSize: 21,           
    fontWeight: 'bold',     
    marginTop: 21,
    marginBottom: 15,
    textAlign: "center"    
},
h3: {
    fontSize: 16,           
    fontWeight: 'bold',     
    color: 'blue',
    marginTop: 25,
    marginBottom: 7,
    textAlign: "center"
},
p: {
    fontSize: 14,           
    color: 'black',
    marginVertical: 7,
    textAlign: "justify",     
},
pbold: {
    fontSize: 14,           
    color: 'black',
    marginVertical: 6,
    textAlign: "justify",
    fontWeight: 'bold',     
},
ul: {
    paddingLeft: 22,         
},
li: {
    flexDirection: 'row',    
    alignItems: 'flex-start',
    marginVertical: 4,       
},
bullet: {
    fontSize: 20,
    color: 'black',
    marginRight: 10,
    textAlign: 'center',         
},
liText: {
    fontSize: 14,
    color: 'black',
    flexShrink: 1,
    marginTop: 5,
    textAlign: "justify", 
}    
});