# Descrição geral do projeto

Este projeto é um aplicativo móvel que utiliza o React Native e o Expo. 

O aplicativo foi desenvolvido para simular um sistema escolar, tomando como referência o Colégio Gomes da Costa.

Ele apresenta cinco telas ou páginas, descritas a seguir.

- Início: Exibe uma apresentação geral do próprio aplicativo e dá as boas-vindas aos usuários, que são estudantes, pais e educadores. Além disso, conta com um breve resumo das outras quatro páginas do aplicativo.
- Boletim: Apresenta, primeiramente, o nome do aluno, o número de registro escolar (NRE) e a turma atual do aluno. A seguir, é exibido o boletim escolar do aluno em formato de tabela, contendo as notas bimestrais, a média final e as faltas em cada disciplina cursada.
- Calendário Escolar: Apresenta os eventos e as datas importantes da instituição, incluindo os feriados e recessos de 2024.
- Eventos: Exibe os detalhes dos principais eventos do Colégio, como a Festa Junina, a Feira Cultural e as Olímpiadas de Matemática.
- Contato: Exibe as informações de contato do colégio (telefone e WhatsApp), de endereço e de onde encontrar o colégio nas redes sociais (Instagram e Facebook).

# Lista de tecnologias e bibliotecas utilizadas

Conforme citado anteriormente, este projeto foi desenvolvido em React Native, que é um framework de código aberto que permite criar aplicativos móveis utilizando JavaScript e a biblioteca React. 

O projeto também utilizou o Expo, que é uma plataforma e um conjunto de ferramentas que facilita e simplifica o desenvolvimento de aplicativos móveis.

Desse modo, neste projeto foram utilizados componentes básicos do React Native para construir interfaces de usuário interativas. 

Os componentes utilizados em cada página do aplicativo estão descritas a seguir.

Para o desenvolvimento da página inicial do aplicativo móvel foram utilizados os seguintes componentes do React Native:
•	Image: para o logotipo do Colégio Gomes da Costa, presente no topo da página.
•	SafeAreaView: Para garantir que o conteúdo da página não seja cortado em telas com notch ou bordas arredondadas.
•	ScrollView: Para permitir a rolagem vertical da página, quando o conteúdo da página é maior que a tela do dispositivo.
•	View: Para funcionar como um contêiner para o componente ScrollView.
•	Text: Para exibir todo o texto da página, incluindo o título principal, o título secundário e o nome dentro dos botões de direcionamento para as demais páginas.
•	Pressable: Para que os botões das páginas de Notícias e Avisos, Calendário e Contato reaja ao toque do usuário.
•	Link: Para permitir o direcionamento para as páginas de Notícias e Avisos, Calendário e Contato.
•	StyleSheet: Para estilizar parâmetros como tamanho, cor (vermelho, azul e verde) e alinhamento (centralizado e justificado) de componentes como Image, Text e Pressable. Nesta página, o StyleSheet aparece no código como Estilo, importado do arquivo geral.jsx, que usa StyleSheet.create para definir os estilos.


Com o objetivo de permitir a navegação entre as cinco telas, este projeto apresenta um menu de navegação lateral, o Drawer Menu, que está presente em todas as páginas.

# Instruções sobre como instalar e executar o aplicativo.

## Bem-vindo ao seu aplicativo Expo 👋

Este é um projeto [Expo](https://expo.dev) criado com [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Comece

1. Instale dependências

```bash
npm install
```

2. Inicie o aplicativo

```bash
npx expo start
```

Na saída, você encontrará opções para abrir o aplicativo em um

- [build de desenvolvimento](https://docs.expo.dev/develop/development-builds/introduction/)
- [emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [simulador iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), um sandbox limitado para testar o desenvolvimento de aplicativos com o Expo

Você pode começar a desenvolver editando os arquivos dentro do diretório **app**. Este projeto usa [roteamento baseado em arquivo](https://docs.expo.dev/router/introduction).

## Obtenha um novo projeto

Quando estiver pronto, execute:

```bash
npm run reset-project
```

Este comando moverá o código inicial para o diretório **app-example** e criará um diretório **app** em branco onde você pode começar a desenvolver.

## Saiba mais

Para saber mais sobre como desenvolver seu projeto com o Expo, consulte os seguintes recursos:

- [Documentação do Expo](https://docs.expo.dev/): Aprenda os fundamentos ou aprofunde-se em tópicos avançados com nossos [guias](https://docs.expo.dev/guides).
- [Tutorial do Learn Expo](https://docs.expo.dev/tutorial/introduction/): Siga um tutorial passo a passo onde você criará um projeto que roda em Android, iOS e na web.

## Junte-se à comunidade

Junte-se à nossa comunidade de desenvolvedores que criam aplicativos universais.

- [Expo no GitHub](https://github.com/expo/expo): Veja nossa plataforma de código aberto e contribua.
- [Comunidade Discord](https://chat.expo.dev): Converse com usuários do Expo e faça perguntas.
