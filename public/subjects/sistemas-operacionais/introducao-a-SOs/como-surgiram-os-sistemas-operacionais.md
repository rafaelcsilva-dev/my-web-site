# O que é um sistema operacional?

Um sistema operacional é o [software](https://pt.wikipedia.org/wiki/Software) que controla e coordena os recursos de um computador. Em outras palavras, ele funciona como uma ponte entre o usuário, os programas e o [hardware](https://pt.wikipedia.org/wiki/Hardware). Quando falamos de sistemas operacionais, é fundamental entendermos aquilo que é anterior a eles e que dá sentido à sua existência: os computadores. Portanto, para entender o que é um sistema operacional, precisamos primeiro entender o que é e como funciona um computador.

## O que é um computador?

Para entender o que é um computador, é preciso fazer uma distinção entre o conceito de computador em sua essência e o conceito de computador moderno.

A palavra computador vem de computar, que significa contar ou calcular. Sendo assim, podemos dizer que instrumentos utilizados para computar já existiam na Antiguidade. Diferentes povos utilizaram instrumentos de contagem e cálculo, entre eles o [ábaco](https://pt.wikipedia.org/wiki/%C3%81baco). Apesar de muito antigo, ele é um instrumento eficiente para realizar cálculos e continuou sendo utilizado durante muito tempo. Entretanto, trata-se de um instrumento utilizado de forma manual, diferente de um computador moderno, que realiza operações automaticamente por meio de componentes eletrônicos.

Percorrendo um pouco a história, em 1644, o matemático [Blaise Pascal](https://pt.wikipedia.org/wiki/Blaise_Pascal) criou uma das primeiras calculadoras mecânicas de grande importância histórica. Essa invenção ficou conhecida como [Pascalina](https://pt.wikipedia.org/wiki/Pascalina), ou máquina aritmética. Ela era um dispositivo mecânico baseado em engrenagens e conseguia realizar operações de adição e subtração.

Quase duzentos anos depois, o matemático e filósofo britânico [Charles Babbage](https://pt.wikipedia.org/wiki/Charles_Babbage) idealizou a [Máquina Analítica](https://pt.wikipedia.org/wiki/M%C3%A1quina_anal%C3%ADtica), um projeto de máquina mecânica programável. Babbage dedicou grande parte de sua vida à idealização desse dispositivo, mas o projeto nunca chegou a ser completamente construído devido às limitações tecnológicas e materiais da época.

Apesar disso, a Máquina Analítica é um marco na história da computação. Ela foi projetada para ser programável por meio de cartões perfurados, uma ideia inspirada, em parte, no [tear de Jacquard](https://pt.wikipedia.org/wiki/Jacquard).

[Ada Lovelace](https://pt.wikipedia.org/wiki/Ada_Lovelace), matemática e escritora, acreditava no projeto de Babbage e escreveu um algoritmo destinado à Máquina Analítica. Por esse motivo, é frequentemente considerada a primeira programadora da história.

Os projetos de Babbage demonstraram o potencial da computação programável, mas as limitações tecnológicas e industriais da época dificultavam enormemente sua construção.

O desenvolvimento da eletricidade e, posteriormente, da eletrônica abriu novas possibilidades para a construção de máquinas de computação. A partir delas, a forma como as máquinas computacionais eram projetadas começou a mudar.

Em 1937, o americano [Claude Shannon](https://pt.wikipedia.org/wiki/Claude_Shannon) produziu, no MIT, uma tese de mestrado que revolucionaria a computação. A tese, intitulada _A Symbolic Analysis of Relay and Switching Circuits_, demonstrava que a [álgebra booleana](https://pt.wikipedia.org/wiki/%C3%81lgebra_booliana) (um sistema lógico baseado em valores verdadeiros e falsos, que pode ser representado em circuitos por estados como ligado/desligado ou 0/1) podia ser aplicada diretamente à análise e ao projeto de circuitos elétricos com chaves e relés.

É a partir desse período que a história da computação moderna começa a se desenvolver de forma mais acelerada. A partir da década de 1940, surgiram os grandes computadores eletrônicos. Esse período é frequentemente classificado, de forma didática, como a [primeira geração dos computadores](https://www.todamateria.com.br/historia-e-evolucao-dos-computadores/).

Nos primeiros computadores, a programação era realizada de maneira muito mais próxima do funcionamento físico da máquina. Em vez de escrever um programa em uma linguagem de programação e simplesmente executá-lo, os operadores precisavam configurar fisicamente o computador. Isso podia envolver alterar a posição de chaves elétricas ou conectar cabos em determinados pontos de um painel para representar as instruções que a máquina deveria executar.

Entretanto, já existiam características fundamentais que continuariam presentes nos computadores. De maneira geral, um computador precisa ser capaz de receber dados, processá-los, armazenar informações e produzir resultados.

Um exemplo é o [ENIAC (_Electronic Numerical Integrator and Computer_)](https://pt.wikipedia.org/wiki/ENIAC), que consumia cerca de 200 quilowatts e possuía aproximadamente 18.000 válvulas. Embora funcionasse de maneira muito diferente das máquinas modernas, ele realizava operações fundamentais de entrada, processamento e saída de informações.

Com o avanço das técnicas de programação e entrada de dados, os cartões perfurados passaram a ser amplamente utilizados. As instruções e os dados eram representados por furos feitos em cartões de papel. Esses cartões eram então inseridos em um leitor, que convertia o padrão de furos em informações que o computador conseguia interpretar. A máquina processava essas informações seguindo as instruções fornecidas.

Nesse período, ainda não existia a camada de abstração proporcionada por um sistema operacional moderno. O computador recebia diretamente as instruções e os dados e os processava utilizando sua unidade central de processamento e sua memória. O controle sobre a execução era, portanto, muito mais direto e dependente dos procedimentos definidos pelo operador.

A forma de visualizar os resultados também era bastante diferente. Em algumas máquinas, informações podiam ser apresentadas por meio de luzes no painel, indicando estados ou valores binários. Em outras, os resultados eram registrados em papel por meio de impressoras. Assim, programar e utilizar um computador era um processo que envolvia diretamente hardware, mídia física e operadores humanos, muito diferente da experiência atual de abrir um programa e simplesmente clicar em executar.

Embora esse método permitisse utilizar os primeiros computadores, ele apresentava diversas limitações. O principal problema era que o funcionamento da máquina dependia fortemente da intervenção humana e do conhecimento específico sobre o hardware.

O primeiro grande problema era o tempo de configuração. Preparar a máquina para executar um programa podia envolver configurar chaves, conectar cabos, preparar cartões e realizar outras operações manuais. Em muitos casos, esse processo demorava mais do que a própria execução do programa. Como consequência, computadores extremamente caros permaneciam grande parte do tempo sem realizar cálculos.

Outro problema era a falta de gerenciamento dos recursos. Quando um programa estava sendo executado, ele tinha acesso muito direto aos recursos da máquina. Não havia um software intermediário responsável por organizar o uso da [CPU](https://pt.wikipedia.org/wiki/Unidade_central_de_processamento), da memória ou dos dispositivos. Isso tornava os programas fortemente dependentes da máquina em que seriam executados e fazia com que erros durante a execução pudessem exigir uma nova preparação do computador.

Também havia uma falta de abstração. Conceitos que hoje consideramos básicos, como arquivos, diretórios e nomes de arquivos, ainda não existiam da maneira como conhecemos. O programador precisava trabalhar muito mais próximo da estrutura física da máquina, conhecendo regiões específicas da memória e indicando onde os dados deveriam ser armazenados.

Portanto, o problema não era simplesmente que os computadores antigos fossem difíceis de usar. O problema fundamental era que o próprio computador dependia de uma grande quantidade de trabalho humano para ser utilizado de forma eficiente. Era necessário encontrar uma maneira de automatizar esse processo, organizar os recursos da máquina e criar uma camada de software que facilitasse a interação entre os programas, os usuários e o hardware.

É justamente dessa necessidade que começa a surgir a ideia de sistemas operacionais.

## Segunda geração e o processamento em lote

Na segunda geração dos computadores, aproximadamente entre 1956 e 1963, os computadores ainda possuíam dimensões muito grandes, mas passaram a utilizar [transistores](https://pt.wikipedia.org/wiki/Trans%C3%ADstor), que substituíram as válvulas eletrônicas. Os transistores eram menores, mais rápidos e consumiam menos energia.

Nesse período, começaram a surgir algumas soluções para os problemas apresentados anteriormente.

Uma delas foi o [**Batch Processing**](https://pt.wikipedia.org/wiki/Processamento_em_lote), ou processamento em lote. Nesse método, vários trabalhos eram agrupados em um lote e preparados para serem executados automaticamente em sequência. Dessa forma, após o término de um trabalho, o próximo podia ser iniciado sem a mesma quantidade de intervenção humana necessária anteriormente.

Ao contrário do processamento interativo, no qual o usuário fornece uma entrada e espera uma resposta do computador, no processamento em lote os trabalhos eram preparados previamente e executados em sequência.

Apesar disso, o processo de organizar e preparar esses trabalhos ainda dependia bastante do operador do computador. Para automatizar parte desse processo, surgiu o [**Monitor Residente**](https://pt.wikipedia.org/wiki/Monitor_residente), um dos primeiros mecanismos de automação da execução de programas.

O monitor residente era um programa que permanecia em uma parte da memória do computador. Ao término de um programa, ele retomava o controle e iniciava o próximo trabalho, reduzindo a necessidade de intervenção humana entre uma execução e outra.

Em alguns sistemas de processamento em lote, foram desenvolvidas linguagens de controle de trabalhos, como a [**Job Control Language (JCL)**](https://pt.wikipedia.org/wiki/Job_Control_Language), que permitiam fornecer instruções ao sistema sobre como determinado trabalho deveria ser executado.

Esses mecanismos aumentaram o nível de abstração na utilização do computador, pois parte do controle da execução e dos dispositivos passou a ser realizada por software.

Embora o monitor residente e os mecanismos de controle de trabalhos tenham automatizado a transição entre tarefas, reduzindo o trabalho manual do operador, a execução ainda seguia uma lógica essencialmente sequencial. A CPU executava apenas um trabalho por vez.

Isso revelou uma nova e grave limitação: sempre que um programa precisava ler dados de um [cartão perfurado](https://pt.wikipedia.org/wiki/Cart%C3%A3o_perfurado), acessar algum dispositivo ou imprimir um resultado, a CPU podia permanecer ociosa enquanto esperava pela operação de entrada e saída ser concluída.

Esse problema levaria ao próximo passo importante na evolução dos sistemas operacionais: a **multiprogramação**.

---

> Recomendação: Para se aprofundar na história da computação, vale assistir ao vídeo ["Como Reinventar o Computador do Zero"](https://www.youtube.com/watch?v=BbnDmeNojFA&t=2029s), do canal Infinitamente, que parte de uma premissa interessante: se você voltasse no tempo e precisasse recriar um computador do zero, por onde começaria?
>
> E também, [A Saga dos Computadores](https://www.youtube.com/watch?v=xajcV4lwY3Q&list=PLYjrJH3e_wDOA5mxhiMxE6yslcIzU5NkX), do Manual do Mundo, uma série que percorre a história da computação por meio de experimentos e demonstrações práticas, tornando mais fácil visualizar o funcionamento e a evolução das tecnologias que deram origem aos computadores modernos.
