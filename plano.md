# Plano de Desenvolvimento: Markdown Previewer

## 1. Planejamento e Estrutura Inicial

- Criar este arquivo plano.md para registrar o plano e progresso.
- Definir o nome do projeto e garantir que será criado na raiz atual.

## 2. Criação do Projeto com Vite + React + TypeScript

- Executar o comando para criar um novo projeto Vite com template React + TypeScript.

## 3. Configuração do TailwindCSS

- Instalar TailwindCSS e plugin para Vite.
- Configurar o arquivo src/index.css conforme instruções.

## 4. Configuração dos Arquivos tsconfig

- Ajustar tsconfig.json e tsconfig.app.json para suportar paths personalizados (@/).

## 5. Configuração do Vite

- Instalar @types/node.
- Ajustar vite.config.ts para suportar aliases e plugins necessários.
- Configurar o Vite para rodar obrigatoriamente na porta 81.

## 6. Instalação e Configuração do ShadCN UI

- Rodar o comando de inicialização do shadcn.
- Responder às perguntas do CLI conforme necessário.

## 7. Adicionar Componentes do ShadCN

- Adicionar o componente Button como teste inicial.

## 8. Implementação da Aplicação Markdown Previewer

- Criar a interface com dois painéis: um para edição de Markdown (textarea/input) e outro para visualização renderizada.
- Utilizar um parser de Markdown (ex: marked, markdown-it ou similar).
- Utilizar componentes do ShadCN para estilização.

## 9. Testes e Ajustes Finais

- Garantir que a aplicação inicia corretamente na porta 81.
- Testar a edição e visualização em tempo real.

## 10. Documentação e Finalização

- Atualizar o plano.md com o que foi feito e instruções de uso.
