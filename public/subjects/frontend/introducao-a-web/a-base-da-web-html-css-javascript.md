# Entendendo a Base da Web: HTML, CSS e JavaScript

## Como funcionam o HTML, o CSS e o JavaScript?

A princípio, pode parecer estranho falar "a HTML" e "a CSS". Entretanto, esse é o uso gramaticalmente mais rigoroso, ainda que falar no masculino seja amplamente aceito no dia a dia. Como HTML e CSS são **linguagens**, a concordância refere-se à palavra "linguagem", por isso, _a_ HTML e _a_ CSS.

Outro ponto importante para quem está começando: é muito comum ouvir iniciantes dizerem que "programam em HTML e CSS", mas essa afirmação não é precisa.

**HTML e CSS não são linguagens de programação.**

- **HTML** (_HyperText Markup Language_) é uma **linguagem de marcação de hipertexto**.
- **CSS** (_Cascading Style Sheets_) é uma **linguagem de folhas de estilo**.
- **JavaScript** é uma **linguagem de programação**, responsável pela lógica e pelo comportamento das páginas.

O termo mais correto é dizer que você **desenvolve** ou **constrói** interfaces usando HTML e CSS, enquanto **programa** utilizando JavaScript.

Para entender a diferença de papéis de forma simples, imagine a construção de uma casa:

- **HTML (A Estrutura):** É o tijolo e a armação. Ele define o conteúdo da página — textos, imagens, vídeos, tabelas, listas e formulários. Sem o HTML, não existe nada na tela. Porém, uma página feita apenas com HTML é visualmente crua, parecendo um documento de texto antigo.

- **CSS (O Estilo):** É a pintura, o acabamento e a decoração. Ele define as cores, fontes, espaçamentos, posicionamento e a responsividade (como a tela se adapta ao celular ou computador). O CSS pega a estrutura bruta do HTML e a transforma em uma interface agradável e legível.

- **JavaScript (O Comportamento):** É a automação e o sistema elétrico da casa. O JavaScript adiciona vida à página, permitindo criar menus interativos, validações de formulários em tempo real, animações, carregamento de dados sem recarregar a página (AJAX/Fetch), pop-ups e muito mais.

---

## Como e onde escrevemos essas linguagens?

Para escrever código, você precisa apenas de um editor de texto. Um programa simples como o Bloco de Notas já é capaz de salvar um código que o navegador consegue ler, afinal, código nada mais é do que texto puro.

No entanto, escrever aplicações dessa forma acaba sendo inviável no dia a dia. Para facilitar o desenvolvimento, utilizamos **Editores de Código** ou **IDEs** (como o **Visual Studio Code**).

Essas ferramentas oferecem diversos recursos que aumentam a produtividade, como:

- Destaque de sintaxe (cores diferentes para cada elemento do código);
- Autocompletar;
- Identificação de erros;
- Organização de arquivos;
- Extensões que adicionam novas funcionalidades.

Cada uma dessas linguagens possui sua própria extensão de arquivo e uma forma específica de ser escrita.

---

## 1. HTML (HyperText Markup Language)

Os arquivos HTML devem ser salvos com a extensão `.html`, por exemplo:

- `index.html`
- `contato.html`
- `sobre.html`

O HTML é composto por **tags**, que servem para marcar cada parte do conteúdo da página.

Na maioria dos casos, as tags possuem uma **abertura** e um **fechamento**, com o conteúdo ficando entre elas.

```html
<h1>Olá, mundo!</h1>
```

Nesse exemplo:

- `<h1>` é a tag de abertura.
- `</h1>` é a tag de fechamento.
- `Olá, mundo!` é o conteúdo da tag.

A regra geral é:

```html
<tag> Conteúdo </tag>
```

Entretanto, nem todas as tags possuem fechamento. Algumas são chamadas de **tags vazias**, pois executam sua função sozinhas.

Um exemplo bastante comum é a tag de imagem:

```html
<img src="imagem.jpg" alt="Descrição da imagem" />
```

Nesse caso, temos dois **atributos**:

- `src` (_source_) indica o caminho da imagem que será carregada.
- `alt` (_alternative text_) fornece uma descrição textual da imagem. Esse texto é utilizado por leitores de tela (melhorando a acessibilidade) e também aparece caso a imagem não consiga ser carregada.

As tags também podem ser **aninhadas**, ou seja, uma pode ficar dentro da outra.

Por exemplo:

```html
<p>Aprender <strong>HTML</strong> é o primeiro passo para criar sites.</p>
```

Nesse exemplo:

- A tag `<p>` representa um parágrafo.
- A tag `<strong>` deixa o texto em negrito e indica que aquela palavra possui maior importância semântica.

O navegador interpreta essa estrutura hierárquica para montar a página corretamente.

---

## 2. CSS (Cascading Style Sheets)

Os arquivos CSS utilizam a extensão `.css`.

Enquanto o HTML define o conteúdo da página, o CSS é responsável pela aparência.

Uma regra CSS normalmente possui três partes:

- **Seletor**: indica qual elemento será estilizado.
- **Propriedade**: o que será alterado.
- **Valor**: qual será a configuração dessa propriedade.

Exemplo:

```css
h1 {
  color: blue;
  font-size: 40px;
}
```

Nesse exemplo:

- `h1` é o seletor.
- `color` altera a cor do texto.
- `font-size` altera o tamanho da fonte.

A estrutura básica de uma regra CSS é:

```css
seletor {
  propriedade: valor;
}
```

Podemos adicionar diversas propriedades ao mesmo elemento:

```css
p {
  color: #333;
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
}
```

Algumas propriedades muito utilizadas são:

- `color` - Cor do texto
- `background-color` - Cor de fundo
- `font-size` - Tamanho da fonte
- `font-family` - Tipo da fonte
- `margin` - Espaçamento externo
- `padding` - Espaçamento interno
- `border` - Borda
- `width` - Largura
- `height` - Altura

O CSS também permite criar layouts , animações e organizar visualmente toda a página.

---

## 3. JavaScript

Os arquivos JavaScript possuem a extensão `.js`.

Diferentemente do HTML e do CSS, o JavaScript é uma **linguagem de programação**.

Isso significa que ele permite criar lógica, tomar decisões, repetir tarefas, armazenar informações e responder às ações do usuário.

Por exemplo, o código abaixo exibe uma mensagem no (console do navegador)[https://developer.chrome.com/docs/devtools/console?hl=pt-br]:

```javascript
console.log("Olá, mundo!");
```

Também podemos armazenar informações em variáveis:

```javascript
let nome = "João";

console.log(nome);
```

Ou tomar decisões utilizando estruturas condicionais:

```javascript
let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

Uma das principais funções do JavaScript na Web é manipular o HTML e o CSS em tempo real.

Por exemplo, podemos alterar o texto de um elemento da página:

```javascript
document.querySelector("h1").textContent = "Novo título";
```

Ou responder ao clique de um botão:

```javascript
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  alert("Você clicou no botão!");
});
```

Graças ao JavaScript, páginas deixam de ser estáticas e passam a oferecer interatividade, permitindo criar aplicações completas que funcionam diretamente no navegador.

---

## Resumindo

Cada uma dessas tecnologias possui uma função bem definida:

- **HTML** - Estrutura e conteúdo da página.
- **CSS** - Aparência, layout e estilo visual.
- JavaScript - Lógica, comportamento e interatividade.

As três trabalham em conjunto e formam a base do desenvolvimento Web moderno. Praticamente todos os sites e aplicações que utilizamos diariamente utilizam essa combinação.
