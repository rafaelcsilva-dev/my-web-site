# Como a Internet Funciona?

## Como a Internet surgiu?

A Internet surgiu durante um dos períodos mais tensos da história da humanidade: a **Guerra Fria**. Esse conflito, que começou após a Segunda Guerra Mundial, colocou duas grandes potências em disputa: os **Estados Unidos** e a **União Soviética**.

Apesar de não haver confrontos diretos entre os dois países, existia uma intensa corrida tecnológica, científica e militar. Cada lado buscava demonstrar superioridade em relação ao outro.

Em **1957**, a União Soviética lançou o **Sputnik 1**, o primeiro satélite artificial da história. Sua principal função era apenas orbitar a Terra e transmitir sinais de rádio (os famosos "bips"), servindo como demonstração da capacidade tecnológica soviética.

O lançamento do Sputnik causou grande preocupação nos Estados Unidos. Temendo que os soviéticos estivessem tecnologicamente muito à frente, o governo americano criou, em **1958**, a **DARPA (Defense Advanced Research Projects Agency)**, uma agência dedicada ao desenvolvimento de tecnologias estratégicas para fins militares.

Uma das preocupações da DARPA era garantir que informações importantes não fossem perdidas caso uma base militar fosse destruída durante um possível ataque. A solução encontrada foi criar uma rede de computadores capaz de compartilhar informações entre diferentes centros de pesquisa, de forma que todos possuíssem cópias dos dados.

Foi assim que nasceu a **ARPANET**, considerada a precursora da Internet.

Inicialmente, a ARPANET possuía apenas quatro computadores conectados:

- Universidade da Califórnia em Los Angeles (UCLA) – SDS Sigma 7;
- Stanford Research Institute (SRI) – SDS 940;
- Universidade da Califórnia em Santa Bárbara (UCSB) – IBM 360/75;
- Universidade de Utah – DEC PDP-10.

O objetivo principal dessa rede era permitir o compartilhamento de informações e garantir a existência de cópias de segurança (backup) das pesquisas realizadas.

---

## O surgimento dos protocolos de comunicação

Os computadores utilizados na ARPANET eram fabricados por empresas diferentes e utilizavam sistemas distintos. Isso significava que eles não conseguiam se comunicar diretamente.

Para resolver esse problema, foi criado o **NCP (Network Control Protocol)**, o primeiro protocolo de comunicação da ARPANET.

O NCP estabelecia uma linguagem comum entre os computadores, permitindo a troca de informações independentemente do fabricante.

Entretanto, esse protocolo possuía algumas limitações. Sempre que duas máquinas iniciavam uma transmissão, boa parte da rede ficava ocupada até que a comunicação terminasse.

Enquanto a ARPANET possuía apenas quatro computadores, isso não representava um grande problema. Porém, conforme novas universidades e centros de pesquisa passaram a integrar a rede, essa limitação tornou-se cada vez mais evidente.

Na década de 1970, dois pesquisadores desenvolveram tecnologias que mudariam completamente o funcionamento da Internet.

### Bob Kahn

Bob Kahn criou o **TCP (Transmission Control Protocol)**.

Sua principal ideia era dividir grandes arquivos em pequenos pedaços chamados **pacotes**, permitindo que várias transmissões ocorressem simultaneamente na rede.

### Vint Cerf

Vint Cerf desenvolveu o **IP (Internet Protocol)**.

O IP é responsável por identificar cada computador conectado à rede por meio de um endereço único, permitindo que os pacotes encontrem corretamente seu destino.

A união dessas duas tecnologias originou o protocolo **TCP/IP**, que continua sendo utilizado até hoje, embora tenha passado por inúmeras evoluções ao longo das décadas.

Em **1º de janeiro de 1983**, conhecido como o **Flag Day**, toda a ARPANET passou oficialmente a utilizar o TCP/IP.

---

## O nascimento da Internet

Com o passar dos anos, a ARPANET cresceu rapidamente.

Ela passou a conectar universidades, centros de pesquisa, empresas e até instituições localizadas em outros países por meio de enlaces via satélite.

Em determinado momento, a rede tornou-se grande demais para ser administrada exclusivamente pelos militares.

Por isso, ela foi dividida em diferentes redes:

- **MILNET**, destinada às comunicações militares;
- **NSFNET (National Science Foundation Network)**, voltada para universidades e pesquisa científica;
- outras redes comerciais.

Essas redes precisavam se comunicar entre si. Assim surgiu o conceito de uma **rede de redes**, conhecido como **internetworking**.

Com o tempo, esse nome foi simplificado para **Internet**, termo que utilizamos até hoje.

---

## Como a Internet funciona atualmente?

Hoje a Internet é uma enorme rede mundial formada pela interligação de milhares de redes menores.

Grande parte dessa comunicação internacional ocorre através de **cabos submarinos de fibra óptica**, instalados no fundo dos oceanos e responsáveis por transportar praticamente todo o tráfego entre os continentes.

É possível visualizar esses cabos no site **Submarine Cable Map**.

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

Embora muitas pessoas confundam os dois conceitos, **Internet** e **World Wide Web (WWW)** não são a mesma coisa.

Em **1989**, o cientista britânico **Tim Berners-Lee**, que trabalhava no **CERN (Organização Europeia para a Pesquisa Nuclear)**, enfrentava um problema: pesquisadores do mundo inteiro produziam documentos em diferentes computadores e formatos, tornando difícil compartilhar informações.

Para solucionar esse problema, ele propôs um sistema baseado em documentos interligados por hiperlinks.

Desse projeto nasceram três tecnologias fundamentais:

- **HTML (HyperText Markup Language)**, linguagem utilizada para estruturar páginas da Web;
- **HTTP (HyperText Transfer Protocol)**, protocolo responsável pela comunicação entre navegadores e servidores Web;
- **URL (Uniform Resource Locator)**, sistema de endereçamento utilizado para localizar páginas na Internet.

Em **1990**, Tim Berners-Lee também desenvolveu o primeiro navegador da história, chamado **WorldWideWeb**, que posteriormente foi renomeado para **Nexus**.

Alguns anos depois surgiu o **Mosaic**, desenvolvido por Marc Andreessen e sua equipe. Foi o primeiro navegador gráfico a se popularizar, tornando a navegação muito mais simples e contribuindo para a rápida expansão da Web.

Graças ao HTML, ao HTTP, às URLs e aos navegadores, nasceu a **World Wide Web**, revolucionando a forma como utilizamos a Internet.

---

# O que é a World Wide Web?

É muito comum ouvir que Internet e World Wide Web são sinônimos, mas isso não é correto.

A **Internet** é toda a infraestrutura de redes e computadores conectados ao redor do mundo.

Já a **World Wide Web (WWW)** é apenas um dos serviços que funciona sobre essa infraestrutura.

Além da Web, existem diversos outros serviços disponíveis na Internet, como:

- **FTP (File Transfer Protocol)**, utilizado para transferência de arquivos;
- **SMTP**, responsável pelo envio de e-mails;
- **POP3** e **IMAP**, utilizados para receber e sincronizar mensagens de e-mail;
- **DNS**, responsável por converter nomes de domínio em endereços IP;
- entre vários outros.

Os servidores Web utilizam principalmente o protocolo **HTTP** (ou sua versão segura, **HTTPS**) para disponibilizar páginas aos usuários.

Em resumo:

- **Internet** é a infraestrutura que conecta computadores no mundo inteiro.
- **World Wide Web (WWW)** é um dos serviços que utiliza essa infraestrutura para disponibilizar páginas e sites acessados pelos navegadores.
