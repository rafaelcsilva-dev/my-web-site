# Como a Internet Funciona?

**Autor:** dev.rafael &bull; **Publicado:** 03 de Julho de 2026 &bull; **Leitura:** 10 min

---

## Representação de Dados

Um computador é um equipamento eletrônico. Por conta disso, ele trabalha exclusivamente com sinais elétricos que, na computação, são representados pelos numerais **0** e **1**.

Esses numerais são **abstrações de ondas quadradas**:

- **0**: Ausência de sinal elétrico.
- **1**: Presença de sinal elétrico.

Esse sistema é chamado de **binário** ou, simplificando, **bits** (_binary digits_). Todo computador funciona com base nessa lógica.

### Do Bit ao Byte

Um único bit (`0` ou `1`) é muito limitado para representar informações complexas. Para resolver isso, a computação reúne um conjunto de **8 bits**, que é a porção mínima necessária para representar um dado compreensível. A esse conjunto damos o nome de **Byte**.

> **1 Byte = 8 bits**

Por exemplo, para representar a letra **"A"** no alfabeto, os componentes eletrônicos processam a seguinte sequência:
`01000001` = **A**

Quando você digita a letra **"A"** no seu teclado, o hardware processa exatamente essa combinação de sinais e ausências de sinal elétrico.

Para consultar como caracteres, símbolos e letras são mapeados em bits, você pode acessar a [Tabela de Representação do Código UTF-8](https://www.ibm.com/docs/pt-br/aix/7.3.0?topic=8-utf-ucs-transformation-format).

---

## Unidades de Medida e Múltiplos

Assim como o metro tem o quilômetro e o grama tem o quilograma, o Byte também tem os seus múltiplos. No entanto, enquanto o sistema decimal usa a base 10, **a computação utiliza a base 2** (sistema binário).

Por esse motivo, as conversões de memória acontecem em potências de 2, sendo $2^{10} = 1024$:

- **Byte:** 8 bits
- **Kilobyte (KB):** 1024 Bytes
- **Megabyte (MB):** 1024 KB
- **Gigabyte (GB):** 1024 MB
- **Terabyte (TB):** 1024 GB

### A diferença entre B (Byte) e b (bit)

A grafia da sigla faz toda a diferença no contexto da tecnologia:

- **Byte (B):** Armazenamento de dados (ex: pendrive de 16 GB, HD de 320 GB).
- **Bit (b):** Transmissão de dados (ex: placa de rede de 100 Mb, internet de 300 Mb).

---

## Como nos Conectamos à Internet?

A arquitetura da internet é dividida em duas partes fundamentais:

1. **Cliente:** O dispositivo (seu celular, computador, TV) que solicita os dados.
2. **Servidor:** O computador remoto onde os dados solicitados estão guardados.

### O papel do MODEM

Para conectar seu dispositivo à rede local e à internet, são utilizados aparelhos de transmissão de dados. Aqui surge um obstáculo físico:

- O **computador** entende apenas sinais digitais (código binário = onda quadrada).
- Os **meios de transmissão** (cabos telefônicos, fibra óptica, ar) utilizam sinais analógicos (onda senoidal).

Para resolver essa incompatibilidade, entra em ação o aparelho responsável pela conversão do sinal:

**MO**dulação + **DEM**odulação = **MODEM**

- **Modulação:** Converte a onda quadrada (digital) em onda senoidal (analógica) para envio.
- **Demodulação:** Converte a onda senoidal recebida de volta em onda quadrada para o computador processar.

---

## Como Acessamos um Servidor?

Sites como o YouTube nada mais são do que grandes conjuntos de dados (textos, imagens, áudios, vídeos) armazenados na forma de bytes em computadores chamados **servidores**.

Na internet, esses servidores não são localizados originalmente pelos seus nomes (como `youtube.com`), mas sim por um endereço numérico chamado **Endereço IP** (_Internet Protocol_).

- Todos os dispositivos conectados à rede possuem um IP.
- Você pode verificar o seu endereço de acesso através de ferramentas como o [IP Location](https://www.iplocation.net/).
- O IP residencial fornecido pelas operadoras costuma ser **público e dinâmico** (muda ao reiniciar o modem).

### O "Telefone" da Internet: O Servidor DNS

Decorar sequências numéricas de IP para cada site que queremos visitar seria inviável. Para solucionar isso, a internet utiliza uma espécie de "agenda de contatos" chamada **DNS** (_Domain Name System_).

---

## Como Alguém Pode Acessar o Meu Site?

Para que qualquer pessoa consiga visualizar um site que você construiu no seu computador, é preciso entender a diferença entre **servidores locais e externos**, além dos conceitos de **hospedagem** e **domínio**.

### Servidor Local vs. Servidor Externo

A diferença entre um servidor local e um externo se resume à **localização física**, **acessibilidade** e **infraestrutura**.

#### Servidor Local

Um servidor local é qualquer computador configurado para responder a requisições dentro de uma **rede privada** (como a sua rede Wi-Fi residencial ou a rede interna da sua empresa).

- **Acesso:** Fica restrito aos dispositivos que estão conectados à mesma rede física. Se você desconectar do Wi-Fi de casa, perde o acesso ao servidor.
- **Infraestrutura:** Utiliza a energia elétrica, o hardware e o sinal de internet comuns do seu ambiente. Se faltar energia ou a sua internet cair, o servidor fica inalcançável.

#### Servidor Externo (Datacenter)

Um servidor externo é uma máquina hospedada em uma infraestrutura profissional e dedicada, chamada de **Datacenter** (como os da AWS, Google Cloud, Microsoft Azure ou servidores dedicados clássicos).

- **Acesso:** Está conectado diretamente à rede principal de computadores (_backbone_ da internet), pronto para responder requisições vindas de **qualquer lugar do mundo**, a qualquer momento.
- **Infraestrutura:** Conta com **redundância total** — geradores elétricos, múltiplos links de internet com velocidades altíssimas, sistemas avançados de refrigeração e segurança física 24/7 para garantir que ele nunca desligue.

---

## Hospedagem e Domínio

Para colocar sua aplicação Front-end acessível publicamente, utilizamos dois elementos complementares: a **hospedagem** (o espaço onde os arquivos ficam) e o **domínio** (o endereço para encontrá-los).

### 1. Hospedagem (Hosting)

É o aluguel do espaço e dos recursos de processamento em um **servidor externo**.

Quando um desenvolvedor Front-end finaliza a interface de um site, ele envia os arquivos (`.html`, `.css`, `.js`, imagens, vídeos) para essa hospedagem. O servidor permanece ligado 24 horas por dia aguardando requisições de navegadores para entregar esses arquivos aos usuários.

### 2. Domínio

O **domínio** é o nome de texto amigável que aponta para o endereço IP do servidor via DNS (ex: `meusite.com.br` ao invés de `192.0.2.1`).

> **Regra fundamental:** Um domínio é **estritamente único no mundo inteiro**. Ninguém pode registrar um nome que já esteja em uso por outra pessoa ou empresa.

#### Como funciona a compra e renovação de um domínio?

Você não "compra" um domínio para sempre; você **aluga o direito de uso exclusivo** por um determinado período (geralmente com renovação anual).

- **Entidades Registradoras:** A compra é feita em órgãos autorizados. No Brasil, domínios com final `.br` são gerenciados pelo [Registro.br](https://registro.br). Domínios internacionais (`.com`, `.net`, `.org`) são gerenciados pela [ICANN](https://pt.wikipedia.org/wiki/Corpora%C3%A7%C3%A3o_da_Internet_para_Atribui%C3%A7%C3%A3o_de_Nomes_e_N%C3%BAmeros) através de empresas registradoras (como GoDaddy, Namecheap, Cloudflare, etc.).
- **Manutenção de Posse:** Para manter a posse do domínio, você paga uma taxa anual. Se você esquecer de renovar a anuidade, o domínio expira e fica disponível para que qualquer outra pessoa no mundo possa registrá-lo.

---

## A Estrutura de um Domínio (TLDs)

Um nome de domínio é lido da direita para a esquerda pelo sistema DNS e se divide em partes separadas por pontos. A ponta final dessa hierarquia é chamada de **TLD** (_Top-Level Domain_ ou Domínio de Nível Superior).

No exemplo do domínio **meusite.com.br**:

- **meusite:** Nome principal do domínio.
- **com:** TLD genérico (gTLD).
- **br:** Código do país (ccTLD).

Existem dois tipos principais de TLDs:

- **gTLDs (Generic Top-Level Domains):** TLDs genéricos que indicam a categoria da entidade.
  - `.com`: Comercial (o mais utilizado no mundo).
  - `.org`: Organizações sem fins lucrativos.
  - `.edu`: Instituições educacionais.
- **ccTLDs (Country Code Top-Level Domains):** TLDs de código de país com duas letras que indicam a localização geográfica da aplicação.
  - `.br`: Brasil
  - `.pt`: Portugal
  - `.us`: Estados Unidos
  - `.uk`: Reino Unido

---

## O que é uma URL?

Enquanto o domínio é apenas o "nome da casa", a **URL** (_Uniform Resource Locator_) é o **endereço completo** que leva o navegador até um arquivo ou página específica dentro da web.

Na URL `https://www.meusite.com.br/blog/caminhodoarquivo.html`, temos a seguinte divisão:

- **`https://` (Protocolo):** Define a regra de comunicação usada para transferir os dados. O HTTPS garante que a informação trafegada entre o navegador e o servidor seja criptografada.
- **`www` (Subdomínio):** Uma ramificação do domínio principal.
- **`meusite.com.br` (Domínio Principal):** O nome principal que identifica a aplicação na rede.
- **`/blog/caminhodoarquivo.html` (Caminho / Path):** Indica a rota interna dentro da estrutura de pastas do servidor onde aquele recurso específico (como uma página, imagem ou API) está localizado.

---

## O que é o `www` e por que ele é usado?

A sigla **`www`** significa _World Wide Web_. Tecnicamente, o `www` não faz parte do domínio principal, mas sim é um **subdomínio**.

Hoje em dia, ele **não é mais obrigatório** e a maioria dos navegadores e servidores modernos permite o uso de URLs sem o subdomínio `www` (chamados de _naked domains_, como apenas `meusite.com.br`).

Apesar disso, o `www` ainda é utilizado por dois motivos principais:

1. **Tradição e Experiência do Usuário (UX):** Usuários leigos ainda associam a digitação do `www.` à certeza de estarem acessando um site na internet.
2. **Infraestrutura Avançada (DNS e CDNs):** Em grandes portais de tecnologia, utilizar o subdomínio `www` facilita o redirecionamento técnico de tráfego de redes de distribuição de conteúdo (CDNs) e o balanceamento de carga entre múltiplos servidores globais.
