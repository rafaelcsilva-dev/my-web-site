# Como a Internet Funciona?

## 1. Representação de Dados

Um computador é um equipamento eletrônico. Por conta disso, ele trabalha exclusivamente com sinais elétricos que, na computação, são representados pelos numerais **`0`** e **`1`**.

Esses numerais são **abstrações de ondas quadradas**:

- **`0`**: Ausência de sinal elétrico.
- **`1`**: Presença de sinal elétrico.

Esse sistema é chamado de **binário** ou, simplificando, **bits** (_binary digits_). Todo computador funciona com base nessa lógica.

### Do Bit ao Byte

Um único bit (`0` ou `1`) é muito limitado para representar informações complexas. Para resolver isso, a computação reúne um conjunto de **8 bits**, que é a porção mínima necessária para representar um dado compreensível. A esse conjunto damos o nome de **Byte**.

> **1 Byte = 8 bits**

Por exemplo, para representar a letra **"A"** no alfabeto, os componentes eletrônicos processam a seguinte sequência:
`01000001` = **A**

Quando você digita a letra **"A"** no seu teclado, o hardware processa exatamente essa combinação de sinais e ausências de sinal elétrico.

Para consultar como caracteres, símbolos e letras são mapeados em bits, você pode acessar a [Tabela de Representação do Código UTF-8](https://www.ibm.com/docs/pt-br/aix/7.3.0?topic=8-utf-ucs-transformation-format).

---

## 2. Unidades de Medida e Múltiplos

Assim como o metro tem o quilômetro e o grama tem o quilograma, o Byte também tem os seus múltiplos. No entanto, enquanto o sistema decimal usa a base 10, **a computação utiliza a base 2** (sistema binário).

Por esse motivo, as conversões de memória acontecem em potências de 2, sendo _2^{10} = 1024_:

- **Byte:** 8 bits
- **Kilobyte (KB):** 1024 Bytes
- **Megabyte (MB):** 1024 KB
- **Gigabyte (GB):** 1024 MB
- **Terabyte (TB):** 1024 GB

### A diferença entre B (Byte) e b (bit)

A grafia da sigla faz toda a diferença no contexto da tecnologia:

**Byte (B):** - Armazenamento de dados

- Pendrive de 16 GB, hd de 320GB

**Bit (b):** = Transmissão de dados

- Placa de rede de 100Mb, internet de 300Mb

---

## 3. Como nos Conectamos à Internet?

A arquitetura da internet é dividida em duas partes fundamentais:

1. **Cliente:** O dispositivo (seu celular, computador, TV) que solicita os dados.
2. **Servidor:** O computador remoto onde os dados solicitados estão guardados.

### O papel do MODEM

Para conectar seu dispositivo à rede local e à internet, são utilizados aparelhos de transmissão de dados. Aqui surge um obstáculo físico:

- O **computador** entende apenas sinais digitais (código binário = onda quadrada).
- Os **meios de transmissão** (cabos telefônicos, fibra óptica, ar) transmitem sinais analógicos (onda senoidal).

Para resolver essa incompatibilidade, entra em ação o aparelho responsável pela conversão do sinal:

**MO**dulação + **DEM**odulação = **MODEM**

- **Modulação:** Converte a onda quadrada (digital) em onda senoidal (analógica) para envio.
- **Demodulação:** Converte a onda senoidal recebida de volta em onda quadrada para o computador processar.

---

## 4. Como Acessamos um Servidor?

Sites como o YouTube nada mais são do que grandes conjuntos de dados (textos, imagens, áudios, vídeos) armazenados na forma de bytes em computadores chamados **servidores**.

Na internet, esses servidores não são localizados originalmente pelos seus nomes (como `youtube.com`), mas sim por um endereço numérico chamado **Endereço IP** (_Internet Protocol_).

- Todos os dispositivos conectados à rede possuem um IP.
- Você pode verificar o seu endereço de acesso através de ferramentas como o [IP Location](https://www.iplocation.net/).
- O IP residencial fornecido pelas operadoras costuma ser **público e dinâmico** (muda ao reiniciar o modem).

### O "Telefone" da Internet: O Servidor DNS

Decorar sequências numéricas de IP para cada site que queremos visitar seria inviável. Para solucionar isso, a internet utiliza uma espécie de "agenda de contatos" chamada **DNS** (_Domain Name System_).
