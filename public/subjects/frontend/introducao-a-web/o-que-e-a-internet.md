# Como a internet funciona?

**Autor:** dev.rafael &bull; **Publicado:** 27 de Julho de 2026 &bull; **Leitura:** 10 min

## Como a internet surgiu?

A Internet surgiu durante um dos períodos mais tensos da história da humanidade: a **[Guerra Fria](https://pt.wikipedia.org/wiki/Guerra_Fria)**. Esse conflito, que começou após a Segunda Guerra Mundial, colocou duas grandes potências em disputa: os **Estados Unidos** e a **União Soviética**.

Apesar de não haver confrontos diretos entre os dois países, existia uma intensa corrida tecnológica, científica e militar. Cada lado buscava demonstrar superioridade em relação ao outro.

Em **1957**, a União Soviética lançou o **[Sputnik 1](https://pt.wikipedia.org/wiki/Sputnik-1)**, o primeiro satélite artificial da história. Sua principal função era apenas orbitar a Terra e transmitir sinais de rádio (os famosos "bips"), servindo como demonstração da capacidade tecnológica soviética.

O lançamento do Sputnik causou grande preocupação nos Estados Unidos. Temendo que os soviéticos estivessem tecnologicamente muito à frente, o governo americano criou, em **1958**, a **[DARPA (Defense Advanced Research Projects Agency)](https://pt.wikipedia.org/wiki/Ag%C3%AAncia_de_Projetos_de_Pesquisa_Avan%C3%A7ada_de_Defesa)**, uma agência dedicada ao desenvolvimento de tecnologias estratégicas para fins militares.

Uma das preocupações da DARPA era garantir que informações importantes não fossem perdidas caso uma base militar fosse destruída durante um possível ataque. A solução encontrada foi criar uma rede de computadores capaz de compartilhar informações entre diferentes centros de pesquisa, de forma que todos possuíssem cópias dos dados.

Foi assim que nasceu a **[ARPANET](https://pt.wikipedia.org/wiki/ARPANET)**, considerada a precursora da Internet.

Inicialmente, a ARPANET possuía apenas quatro computadores conectados:

- Universidade da Califórnia em Los Angeles (UCLA) – SDS Sigma 7;
- Stanford Research Institute (SRI) – SDS 940;
- Universidade da Califórnia em Santa Bárbara (UCSB) – IBM 360/75;
- Universidade de Utah – DEC PDP-10.

O objetivo principal dessa rede era permitir o compartilhamento de informações e garantir a existência de cópias de segurança (backup) das pesquisas realizadas.

---

## O surgimento dos protocolos de comunicação

Os computadores utilizados na ARPANET eram fabricados por empresas diferentes e utilizavam sistemas distintos. Isso significava que eles não conseguiam se comunicar diretamente.

Para resolver esse problema, foi criado o **[NCP (Network Control Protocol)](https://pt.wikipedia.org/wiki/NCP)**, o primeiro protocolo de comunicação da ARPANET.

O NCP estabelecia uma linguagem comum entre os computadores, permitindo a troca de informações independentemente do fabricante.

Entretanto, esse protocolo possuía algumas limitações. Sempre que duas máquinas iniciavam uma transmissão, boa parte da rede ficava ocupada até que a comunicação terminasse.

Enquanto a ARPANET possuía apenas quatro computadores, isso não representava um grande problema. Porém, conforme novas universidades e centros de pesquisa passaram a integrar a rede, essa limitação tornou-se cada vez mais evidente.

Na década de 1970, dois pesquisadores desenvolveram tecnologias que mudariam completamente o funcionamento da Internet.

### Bob Kahn

[Bob Kahn](https://pt.wikipedia.org/wiki/Robert_Kahn) criou o **[TCP (Transmission Control Protocol)](https://pt.wikipedia.org/wiki/Protocolo_de_Controle_de_Transmiss%C3%A3o)**.

Sua principal ideia era dividir grandes arquivos em pequenos pedaços chamados **pacotes**, permitindo que várias transmissões ocorressem simultaneamente na rede.

### Vint Cerf

[Vint Cerf](https://pt.wikipedia.org/wiki/Vint_Cerf) desenvolveu o **[IP (Internet Protocol)](https://pt.wikipedia.org/wiki/Protocolo_de_Internet)**.

O IP é responsável por identificar cada computador conectado à rede por meio de um endereço único, permitindo que os pacotes encontrem corretamente seu destino.

A união dessas duas tecnologias originou o protocolo **[TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP)**, que continua sendo utilizado até hoje, embora tenha passado por inúmeras evoluções ao longo das décadas.

Em **1º de janeiro de 1983**, conhecido como o **Flag Day**, toda a ARPANET passou oficialmente a utilizar o TCP/IP.

---

## O nascimento da Internet

Com o passar dos anos, a ARPANET cresceu rapidamente.

Ela passou a conectar universidades, centros de pesquisa, empresas e até instituições localizadas em outros países por meio de enlaces via satélite.

Em determinado momento, a rede tornou-se grande demais para ser administrada exclusivamente pelos militares.

Por isso, ela foi dividida em diferentes redes:

- **[MILNET](https://pt.wikipedia.org/wiki/MILNET)**, destinada às comunicações militares;
- **[NSFNET (National Science Foundation Network)](https://pt.wikipedia.org/wiki/National_Science_Foundation_Network)**, voltada para universidades e pesquisa científica;
- outras redes comerciais.

Essas redes precisavam se comunicar entre si. Assim surgiu o conceito de uma **rede de redes**, conhecido como **internetworking**.

Com o tempo, esse nome foi simplificado para **Internet**, termo que utilizamos até hoje.

---

## Como a Internet funciona atualmente?

Hoje a Internet é uma enorme rede mundial formada pela interligação de milhares de redes menores.

Grande parte dessa comunicação internacional ocorre através de **cabos submarinos de fibra óptica**, instalados no fundo dos oceanos e responsáveis por transportar praticamente todo o tráfego entre os continentes.

É possível visualizar esses cabos no site **[Submarine Cable Map](https://www.submarinecablemap.com/)**.

Dentro de cada país, a distribuição da Internet é realizada por diferentes tecnologias, como:

- fibras ópticas;
- antenas de telefonia celular;
- enlaces via rádio;
- conexões via satélite.

---

## Cliente e Servidor

Para entender o funcionamento da Internet, é importante conhecer o modelo **cliente-servidor**.

O seu computador (ou celular) funciona como um **cliente**, ou seja, ele solicita informações.

Já o **servidor** é um computador responsável por armazenar os dados que você deseja acessar, como páginas da web, imagens, vídeos ou arquivos.

Quando você solicita um conteúdo, ocorre o seguinte processo:

1. O IP identifica o endereço do computador que fará a comunicação.
2. O TCP divide o arquivo em diversos pequenos pacotes.
3. Esses pacotes podem seguir caminhos diferentes pela Internet.
4. Ao chegarem ao computador do usuário, o TCP reorganiza todos os pacotes na ordem correta.
5. O arquivo original é reconstruído.

Esse processo acontece em poucos milissegundos.

Em conexões mais lentas, é comum perceber uma imagem sendo carregada aos poucos. Isso ocorre porque os pacotes ainda estão chegando e sendo reconstruídos pelo computador.

---

## Como era a Internet antigamente?

A Internet era muito diferente da que conhecemos atualmente.

Não existiam páginas cheias de imagens, vídeos ou animações. A maior parte da navegação era feita apenas por texto.

Caso o usuário desejasse visualizar uma imagem, normalmente precisava baixá-la primeiro para depois abri-la em um programa gráfico instalado no computador.

---

## O surgimento da World Wide Web

Embora muitas pessoas confundam os dois conceitos, **Internet** e não são a mesma coisa.

Em **1989**, o cientista britânico **[Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee)**, que trabalhava no **[CERN (Organização Europeia para a Pesquisa Nuclear)](https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_Europeia_para_a_Investiga%C3%A7%C3%A3o_Nuclear)**, enfrentava um problema: pesquisadores do mundo inteiro produziam documentos em diferentes computadores e formatos, tornando difícil compartilhar informações.

Para solucionar esse problema, ele propôs um sistema baseado em documentos interligados por hiperlinks.

Desse projeto nasceram três tecnologias fundamentais:

- **[HTML (HyperText Markup Language)](https://pt.wikipedia.org/wiki/HTML)**, linguagem utilizada para estruturar páginas da Web;
- **[HTTP (HyperText Transfer Protocol)](https://pt.wikipedia.org/wiki/HTTP)**, protocolo responsável pela comunicação entre navegadores e servidores Web;
- **[URL (Uniform Resource Locator)](https://pt.wikipedia.org/wiki/URL)**, sistema de endereçamento utilizado para localizar páginas na Internet.

Em **1990**, [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee) também desenvolveu o primeiro navegador da história, chamado **[WorldWideWeb](https://pt.wikipedia.org/wiki/WorldWideWeb)**, que posteriormente foi renomeado para **Nexus**.

Alguns anos depois surgiu o **Mosaic**, desenvolvido por [Marc Andreessen](https://pt.wikipedia.org/wiki/Marc_Andreessen) e sua equipe. Foi o primeiro navegador gráfico a se popularizar, tornando a navegação muito mais simples e contribuindo para a rápida expansão da Web.

Graças ao HTML, ao HTTP, às URLs e aos navegadores, nasceu a **[World Wide Web (WWW)](https://pt.wikipedia.org/wiki/World_Wide_Web)**, revolucionando a forma como utilizamos a Internet.

---

# O que é a World Wide Web?

É muito comum ouvir que Internet e World Wide Web são sinônimos, mas isso não é correto.

A **Internet** é toda a infraestrutura de redes e computadores conectados ao redor do mundo.

Já a **World Wide Web (WWW)** é apenas um dos serviços que funciona sobre essa infraestrutura.

Além da Web, existem diversos outros serviços disponíveis na Internet, como:

- **[FTP (File Transfer Protocol)](https://pt.wikipedia.org/wiki/Protocolo_de_Transfer%C3%AAncia_de_Arquivos)**, utilizado para transferência de arquivos;
- **[SMTP](https://pt.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)**, responsável pelo envio de e-mails;
- **[POP3](https://pt.wikipedia.org/wiki/Post_Office_Protocol)** e **[IMAP](https://pt.wikipedia.org/wiki/Internet_Message_Access_Protocol)**, utilizados para receber e sincronizar mensagens de e-mail;
- **[DNS](https://pt.wikipedia.org/wiki/Sistema_de_Nomes_de_Dom%C3%ADnio)**, responsável por converter nomes de domínio em endereços IP;
- entre vários outros.

Os servidores Web utilizam principalmente o protocolo **HTTP** (ou sua versão segura, **[HTTPS](https://pt.wikipedia.org/wiki/HTTPS)**) para disponibilizar páginas aos usuários.

---

## Saiba Mais

Se você ficou curioso para entender como a Internet atravessa oceanos, vale a pena assistir ao vídeo do [Manual do Mundo](https://www.youtube.com/watch?v=fYJl-7jRzuw&t), que mostra como funcionam os cabos submarinos de fibra óptica, como eles são instalados no fundo do mar e por que eles são tão importantes para a comunicação mundial. O vídeo também desmistifica a ideia de que a maior parte da Internet funciona por satélites.

Outra recomendação é o episódio da série ["Que bom que você perguntou" (Glad You Asked)](https://www.youtube.com/watch?v=TNQsmPf24go), produzido pela Vox em parceria com o YouTube. O documentário explica, de forma simples e com ótimas animações, como os dados são divididos em pacotes, percorrem diferentes caminhos pela Internet e chegam ao destino, onde são reorganizados para reconstruir a informação original. É um excelente complemento para compreender o funcionamento do protocolo TCP/IP na prática.
