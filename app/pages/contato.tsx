import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function App(){
    return(
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
    
        <Text style={[Estilo.h2, { color: "green" }]}>Contato</Text>

        <Text style={Estilo.p}>Fale com a gente. Nosso time está sempre pronto para conversar, tirar suas dúvidas, receber a sua visita e mostrar cada detalhe do Colégio Gomes da Costa para você.</Text>
            

        <Image 
            style={Estilo.colegiofoto}
            source={require('../../assets/images/colegiofoto.png')} />

        <Text style={Estilo.boldcenter}>COLÉGIO GOMES DA COSTA</Text>
            
        <Text style={Estilo.p}>Rua José Roberto Gomes da Costa, 845 - Alto da Lapa - São Paulo - SP - CEP: 05300-054</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={Estilo.contLogo}
                source={require('../../assets/images/phonelogo.png')}
            />
            <Text style={Estilo.p}>  +55 11 3837-0566</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={Estilo.contLogo}
                source={require('../../assets/images/whatsapplogo.png')}
            />
            <Text style={Estilo.p}>  +55 11 98765-4321</Text>
        </View>
        
        <Text style={Estilo.boldcenter}>SIGA AS NOSSAS REDES SOCIAIS</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={Estilo.contLogo}
                source={require('../../assets/images/instagramlogo.png')}
            />
            <Text style={Estilo.p}>  @colegiogomesdacosta</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={Estilo.contLogo}
                source={require('../../assets/images/facebooklogo.png')}
            />
            <Text style={Estilo.p}>  @GomesdaCostaColegio</Text>
        </View>
                        
            <Pressable style={Estilo.botaoBack}>
                <Link href="/">
                <Text style={Estilo.textLink} >Voltar ao Início</Text>
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