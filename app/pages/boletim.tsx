import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable, FlatList } from "react-native";
import { Link } from "expo-router";

const App = () => {
  const data = [
    { disciplina: "BIOLOGIA", bim1: 10, bim2: 7.5, bim3: 8.5, bim4: "-", media: "-", falta: 1 },
    { disciplina: "ARTES", bim1: 9.0, bim2: 9.5, bim3: 7.5, bim4: "-", media: "-", falta: 2 },
    { disciplina: "ED. FÍSICA", bim1: 10, bim2: 10, bim3: 9.5, bim4: "-", media: "-", falta: 1 },
    { disciplina: "FILOSOFIA", bim1: 8.5, bim2: 9.0, bim3: 8.5, bim4: "-", media: "-", falta: 3 },
    { disciplina: "FÍSICA", bim1: 8.0, bim2: 9.5, bim3: 7.5, bim4: "-", media: "-", falta: 1 },
    { disciplina: "GEOGRAFIA", bim1: 9.5, bim2: 7.5, bim3: 8.5, bim4: "-", media: "-", falta: 1 },
    { disciplina: "HISTÓRIA", bim1: 7.5, bim2: 8.0, bim3: 9.5, bim4: "-", media: "-", falta: 2 },
    { disciplina: "INGLÊS", bim1: 10, bim2: 9.5, bim3: 7.5, bim4: "-", media: "-", falta: 1 },
    { disciplina: "LITERATURA", bim1: 9.5, bim2: 9.0, bim3: 8.5, bim4: "-", media: "-", falta: 2 },
    { disciplina: "MATEMÁTICA", bim1: 10, bim2: 10, bim3: 9.5, bim4: "-", media: "-", falta: 1 },
    { disciplina: "PORTUGUÊS", bim1: 9.0, bim2: 8.0, bim3: 7.0, bim4: "-", media: "-", falta: 2 },
    { disciplina: "QUÍMICA", bim1: 10, bim2: 10, bim3: 9.5, bim4: "-", media: "-", falta: 1 },
    { disciplina: "REDAÇÃO", bim1: 9.0, bim2: 7.5, bim3: 6.5, bim4: "-", media: "-", falta: 2 },
    
  ];

  const smallTableData = [
    { title: "Nome do aluno: ", value: "Fernando Hernandes Rigoni" },
    { title: "NRE: ", value: "45678" },
    { title: "Turma: ", value: "3º ano EM - A" },
  ];

  const renderSmallTableRow = ({ item }: { item: typeof smallTableData[0] }) => (
    <View style={smallTableStyles.row}>
      <Text style={smallTableStyles.cell}>
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        {item.value}
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={[tableStyles.row, tableStyles.header]}>
      <Text style={[tableStyles.cell, tableStyles.headerText, { width: 85 }]}>Disciplina</Text>
      <Text style={[tableStyles.cell, tableStyles.headerText, { width: 40 }]}>1º Bim</Text>
      <Text style={[tableStyles.cell, tableStyles.headerText, { width: 40 }]}>2º Bim</Text>
      <Text style={[tableStyles.cell, tableStyles.headerText, { width: 40 }]}>3º Bim</Text>
      <Text style={[tableStyles.cell, tableStyles.headerText, { width: 40 }]}>4º Bim</Text>
      <Text style={[tableStyles.cell, tableStyles.headerText, { width: 40 }]}>Média Final</Text>
      <Text style={[tableStyles.cell, tableStyles.headerText, { width: 40 }]}>Faltas</Text>
    </View>
  );

  const renderRow = ({ item }: { item: typeof data[0] }) => (
    <View style={tableStyles.row}>
      <Text style={[tableStyles.cell, { width: 85 }]}>{item.disciplina}</Text>
      <Text style={[tableStyles.cell, { width: 40 }]}>{item.bim1}</Text>
      <Text style={[tableStyles.cell, { width: 40 }]}>{item.bim2}</Text>
      <Text style={[tableStyles.cell, { width: 40 }]}>{item.bim3}</Text>
      <Text style={[tableStyles.cell, { width: 40 }]}>{item.bim4}</Text>
      <Text style={[tableStyles.cell, { width: 40 }]}>{item.media}</Text>
      <Text style={[tableStyles.cell, { width: 40 }]}>{item.falta}</Text>
    </View>
  );

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
        source={require("../../assets/images/logogomesdacosta.png")}
      />

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={{ height: "auto" }}>
          
          <Text style={[Estilo.h2, { color: "purple" }]}>Boletim Escolar</Text>
                
          <View style={smallTableStyles.container}>
            <FlatList
              data={smallTableData}
              renderItem={renderSmallTableRow}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          
          <View style={tableStyles.container}>
            {renderHeader()}
            <FlatList
              data={data}
              renderItem={renderRow}
              keyExtractor={(item) => item.disciplina.toString()}
            />
          </View>

          <Pressable style={Estilo.botaoBack}>
            <Link href="/">
              <Text style={Estilo.textLink}>Voltar ao Início</Text>
            </Link>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Estilo = StyleSheet.create({
  // Estilos existentes
  homelogo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    alignSelf: "center",
    margin: "auto",
    marginBottom: 10,
  },
  h2: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 21,
    marginBottom: 15,
    textAlign: "center",
  },
  p: {
    fontSize: 14,
    color: "black",
    marginVertical: 7,
    textAlign: "justify",
  },
  pbold: {
    fontSize: 14,
    color: "black",
    marginVertical: 6,
    textAlign: "justify",
    fontWeight: "bold",
  },
  botaoBack: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginTop: 19,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textLink: {
    color: "#fff",
    textAlign: "center",
  },
});

const tableStyles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    backgroundColor: "#f0f0f0",
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
    flexWrap: "wrap",    
  },
  cell: {
    fontSize: 12,
    padding: 2,
    textAlign: "center", 
    flexWrap: "wrap", 
  },
});

const smallTableStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    textAlign: "justify",
    fontSize: 14,
  },
});

export default App;
