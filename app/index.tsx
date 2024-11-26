import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
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
        source={require('../assets/images/logogomesdacosta.png')} />
    
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <View style={{ height: 'auto' }}>
    
      <Text style={[Estilo.h2, { color: "blue" }]}>Bem-vindo ao Aplicativo Escolar do Colégio Gomes da Costa!</Text>
      
      <Text style={Estilo.p}></Text>
      <Text style={Estilo.p}>Olá, estudantes, pais e educadores!</Text>
      <Text style={Estilo.p}>É com grande alegria que apresentamos o nosso aplicativo, um espaço dedicado a compartilhar informações importantes do Colégio Gomes da Costa.</Text>
      <Text style={Estilo.p}>O que você encontrará aqui:</Text>
      
      <View style={Estilo.ul}>
      <View style={Estilo.li}>
        <Text style={Estilo.bullet}>{'\u2022'}</Text>
        <Text style={Estilo.liText}>Boletim Escolar: Fique informado sobre as suas notas e faltas.
        </Text>
      </View>
      <View style={Estilo.li}>
        <Text style={Estilo.bullet}>{'\u2022'}</Text>
        <Text style={Estilo.liText}>Calendário Escolar: Acesse o calendário atualizado com feriados e eventos importantes para planejar melhor o seu tempo.</Text>
      </View>
      <View style={Estilo.li}>
        <Text style={Estilo.bullet}>{'\u2022'}</Text>
        <Text style={Estilo.liText}>Eventos: Fique informado sobre os principais eventos escolares.</Text>
      </View>
      <View style={Estilo.li}>
        <Text style={Estilo.bullet}>{'\u2022'}</Text>
        <Text style={Estilo.liText}>Contato: Dúvidas ou sugestões? Entre em contato conosco por meio dos nossos canais de comunicação.</Text>
      </View>
    </View>

    <Pressable style={Estilo.botaoGo1}>
        <Link href="./pages/boletim">
          <Text style={Estilo.textLink}>
            Boletim
          </Text>
        </Link>
      </Pressable>

      <Pressable style={Estilo.botaoGo2}>
        <Link href="./pages/calendario">
          <Text style={Estilo.textLink}>
            Calendário Escolar
          </Text>
        </Link>
      </Pressable>

      <Pressable style={Estilo.botaoGo3}>
        <Link href="./pages/eventos">
          <Text style={Estilo.textLink}>
            Eventos
          </Text>
        </Link>
      </Pressable>

      <Pressable style={Estilo.botaoGo4}>
        <Link href="./pages/contato">
          <Text style={Estilo.textLink}>
            Contato
          </Text>
        </Link>
      </Pressable>
            
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Estilo = StyleSheet.create({
  botaoGo1:{
    backgroundColor: "purple",
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
    backgroundColor: "red",
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
botaoGo4:{
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