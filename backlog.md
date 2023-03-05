# Criar um novo site para o Reprograme-se

_<p style="text-align:right;">https://reprograme-se.org.br</p>_

- Responsivo

- Obrigatório usar HTML, CSS e JS
  <br>📌 Usar também Bootstrap

- Uma área de notícias com cada notícia contendo:
  <br>--- Foto de capa
  <br>--- Título
  <br>--- Texto
  <br>--- Data e horário

- Calendário de eventos evidenciando datas importantes

- Área de depoimento de alunos
  <br>--- Com identificação

- FAQ
  <br>--- Base de infos: https://cachoeiro.ifes.edu.br/images/stories/2022/editais/252022/RESPOSTAS_A_PERGUNTAS_FREQUENTES.pdf
  <br>💡 Usar accordion
- Form de contato: mensagens para mailto:contato@reprograme-se.org.br

- Área de informações sobre o curso, evidenciando a grade currícular
  <br>--- Grade curricular: https://cachoeiro.ifes.edu.br/images/stories/2022/editais/252022/Estrutura_e_organizacao_do_reprograme-se.pdf;

- Área para informações Ifes + Action - https://action.org.es

- Barra de navegação com as funcionalidades:
  <br>--- Aumento do tamanho da fonte;
  <br>--- Redução do tamanho da fonte;
  <br>--- Ativação/Desativação de modo alto contraste;
  <br>--- ❗ Armazenar preferências no localStorage

- Propôr funções de acessibilidade
  <br>💡 Usar dark theme

# Estrutura

<br>📌 O Programa
<br> Apresentar IFES + Action
<br>Incluir grade curricular
<br>
<br>📌 Notícias: _"Reprograme-se na mídia"_
<br>Foto
<br>Título
<br>Texto
<br>Data e horário
<br>
<br>📌 Eventos
<br>Incluir calendário
<br>
<br>📌 Depoimentos
<br> Carrossel com depoimentos
<br>Foto
<br>Nome
<br>Texto
<br>
<br>📌 FAQ
<br> Usar accordion
<br>
<br>📌 Contato

# Links Úteis

- Começa a apresentação: https://youtu.be/p06UqMYOJw4?t=1011
- Começa a falar sobre o trabalho: https://youtu.be/p06UqMYOJw4?t=1419
- Link do briefing: https://ava3.cefor.ifes.edu.br/pluginfile.php/85560/mod_resource/content/1/Briefing.pdf
- Chave de correção: https://ava3.cefor.ifes.edu.br/pluginfile.php/85561/mod_resource/content/1/Chave%20de%20Correção.pdf
- Código base - Replit: https://replit.com/team/hackathon-2023
- Requisitos de correção:

# Recursos e Ideias

- ✅ Accordion - https://github.com/aylmerbolzan/Short-Tips/tree/master/Accordion

- Dark theme: https://github.com/aylmerbolzan/Short-Tips/tree/master/Dark%20Theme%20-%20Bootstrap

- ✅ Incluir widget vLibras: inserir o code abaixo antes do fechamento do `<body>`

```
<div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  </script>
```

- ✅ Configurar meta tags
  <br>--- Meta title - `<meta name="title" content="TÍTULO">`
  <br>--- Meta Description - `<meta name="description" content="DESCRIÇÃO">`
  <br>--- Open Graph Imagem - `<meta property="og:image" content="URL">`

- Comprimir as imagens - https://tinypng.com

- ✅ Incluir favicon

- Incluir aviso de LGPD

- Incluir ícones de rede social

- Incluir campo para cadastro em newsletter

- Configurar navbar para ficar fixa

- ✅ Colocar `:hover` nos `.notice-box` com transição de posição

- Incluir botão para subir ao topo

# Referências

- Reprograme-se: https://reprograme-se.org.br
- DIO: https://www.dio.me
- Orange Juice: https://digital.fcamara.com.br/orangejuice
- Azys: https://azys.com.br
- RocketSeat: https://www.rocketseat.com.br
- Hora de Codar: https://horadecodar.com.br
- Oracle Next Education: https://www.oracle.com/br/education/oracle-next-education/

# Chaves de Correção

| Requesitos          |           |
| ----------------- | ----------------- |
| Incluir #Noticias | ✅ |
| Incluir #Eventos |  |
| Incluir #Depoimentos |  |
| Incluir #FAQ | ✅ |
| Incluir #Contato |  |
| Incluir botão de redirecionamento para inscrição |  |
| Incluir Grade Curricular | ✅ |
| Incluir parceiros do projeto | ✅ |
| Usar widgets | ✅ |
| Usar requisito extra |  |
| Configurar responsividade | 🧱 |
| Alternar imagens por resolução/dispositivo |  |
| Componentes adaptando-se ao mobile | 🧱 |
| Identação | ✅ |
| Reutilização | ✅ |
| Nomes coerentes das variáveis/ID/classes | ✅ |
| Fácil navegação | 🧱 |
| Conteúdo organizado | ✅ |
| Fonts e elementos em bons tamanhos | ✅ |
| Bom tempo de carregamento |  |
| Boa semântica no HTML | ✅ |
| Meta informations bem configuradas | ✅ |
| CSS de qualidade, com reuso | ✅ |
| Seletores e propriedades modernas | ✅ |
| JS bem desenvolvido |  |
| JS organizado por funções |  |
| Design coerente | ✅ |
| Utilização do localStorage |  |


# Logs

### [ 03/03 ]

- Estrutura HTML montada
- CSS, JS e Bootstrap linkados
- Incluído favicon
- Incluído meta informations
- Header finalizado
- #Notícias estruturado

### [ 04/03 ]

- Inclusão do #FAQ
- Estilização do #FAQ
- Inclusão de Hero Section
- Inclusão de #Programa
- Inclusão de grades curriculares
