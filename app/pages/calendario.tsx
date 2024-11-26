import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function App(){
    return(
        <SafeAreaView style={Estilo.areView}>

            <Image 
                style={Estilo.homelogo} 
                source={require('../../assets/images/logogomesdacosta.png')} />
    
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <View style={{ height: 'auto' }}>


            <Text style={[Estilo.h2, { color: "blue" }]}>Calendário Escolar 2024</Text>

            <Image 
                style={Estilo.calendario} 
                source={require('../../assets/images/calendario2024.png')} />

            <Text style={Estilo.h3}>Datas escolares</Text>

            <Text style={Estilo.p}></Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Início do ano letivo:</Text> 15 de fevereiro;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Encerramento do 1º semestre:</Text> 08 de julho;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Início do 2º semestre:</Text> 29 de julho;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Término do ano letivo:</Text> 17 de dezembro;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Férias docentes:</Text> de 02 a 16 de janeiro e de 10 a 24 de julho;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Recesso escolar:</Text> de 17 de janeiro a 06 de fevereiro; 12, 13 e 14 de fevereiro; e no mês de dezembro, após o encerramento do ano letivo;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>1º bimestre:</Text> de 15 de fevereiro a 19 de abril;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>2º bimestre:</Text> de 22 de abril a 08 de julho;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>3º bimestre:</Text> de 29 de julho a 04 de outubro;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>4º bimestre:</Text> de 07 de outubro a 17 de dezembro;</Text> 
            

            <Text style={Estilo.h3}>Principais Eventos</Text>    

            <Text style={Estilo.p}></Text>    
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Eleição do Grêmio Estudantil:</Text> 08 e 09 de abril;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Semana Paulo Freire:</Text> 02 e 03 de maio;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Festa Junina Gomes da Costa:</Text> 22 de junho;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Semana da Cultura, Ciência e Tecnologia:</Text> de 21 a 25 de outubro;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Feira Cultural:</Text> 30 de novembro;</Text>
            <Text style={Estilo.p}><Text style={{ fontWeight: "bold" }}>Olímpiadas de Matemática:</Text> de 2 a 6 de dezembro de 2024.</Text>
            
            <Text style={Estilo.h3}>Feriados e Recessos</Text>
            
            <Text style={Estilo.p}></Text>
            <Text style={Estilo.p}>01/01 - Ano Novo</Text>
            <Text style={Estilo.p}>25/01 - Aniversário de São Paulo</Text>
            <Text style={Estilo.p}>12/02 - Suspensão de atividades</Text>
            <Text style={Estilo.p}>13/02 - Carnaval</Text>
            <Text style={Estilo.p}>14/02 - Suspensão de atividades</Text>
            <Text style={Estilo.p}>29/03 - Sexta-Feira Santa</Text>
            <Text style={Estilo.p}>21/04 - Dia de Tiradentes</Text>
            <Text style={Estilo.p}>01/05 - Dia do Trabalho</Text>
            <Text style={Estilo.p}>30/05 - Corpus Christi</Text>
            <Text style={Estilo.p}>31/05 - Suspensão de atividades</Text>
            <Text style={Estilo.p}>09/07 - Revolução Constitucionalista</Text>
            <Text style={Estilo.p}>07/09 - Independência do Brasil</Text>
            <Text style={Estilo.p}>12/10 - Nossa Senhora Aparecida</Text>
            <Text style={Estilo.p}>14/10 - Suspensão de atividades</Text>
            <Text style={Estilo.p}>15/10 - Dia do Professor</Text>
            <Text style={Estilo.p}>28/10 - Dia do Servidor Público</Text>
            <Text style={Estilo.p}>02/11 - Finados</Text>
            <Text style={Estilo.p}>15/11 - Proclamação da República</Text>
            <Text style={Estilo.p}>20/11 - Dia da Consciência Negra</Text>
            <Text style={Estilo.p}>25/12 - Natal</Text>

            <Pressable style={Estilo.botaoBack}>
                <Link style={Estilo.textLink} href="/">
                    <Text>Voltar ao Início</Text>
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