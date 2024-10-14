## Criando Uma Wiki de Repositórios do GitHub Com React

Este projeto permite a busca de repositórios na API do GitHub, exibindo-os em uma lista, evitando duplicados e oferecendo a função de remoção da lista.

### Funcionalidades

- Busca de repositórios no GitHub utilizando a API pública do GitHub.
- Evita a adição de repositórios duplicados na lista.
- Permite a remoção de repositórios da lista.

### Conceitos Utilizados

- **useState**: Hook do React para gerenciamento de estado local.
- **api.get**: Método do Axios para fazer requisições GET.
- **filter**: Método de array usado para filtrar elementos com base em uma condição.
- **map**: Método de array usado para renderizar a lista de repositórios.
- **styled-component**: Biblioteca para estilização de componentes utilizando tagged template literals.
- **Componentização**: Estruturação do aplicativo em componentes reutilizáveis.
- **find**: Método de array usado para verificar se o repositório já está na lista.

### Como Usar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o aplicativo com `npm run start`.

Adicione o nome do repositório na caixa de entrada e clique no botão para buscar. Os repositórios serão listados abaixo, e você pode remover qualquer repositório clicando no botão de remoção.
