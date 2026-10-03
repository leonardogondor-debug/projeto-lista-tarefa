# Projeto Lista de Tarefas

![CI/CD](https://github.com/leonardogondor-debug/projeto-lista-tarefa/actions/workflows/ci.yml/badge.svg)

Um projeto simples de **Lista de Tarefas** desenvolvido com **Next.js**, **React** e **TailwindCSS**, com testes feitos em **Jest** e **Testing Library**.

---

## Instalação e uso

1. Clone o repositório:
```bash
   git clone https://github.com/leonardogondor-debug/projeto-lista-tarefa
```
```bash
   cd projeto-lista-tarefa
```

2. Instale as dependências:
```bash
   npm ci
```

3. Execute em modo de desenvolvimento:
```bash
   npm run dev
```

4. Acesse no navegador:
```bash
http://localhost:3000
```

## Testes

1. Rodar todos os testes em modo interativo (reexecuta ao salvar arquivo):
```bash
   npm test
```

2. Executar a suíte de testes apenas uma vez:
```bash
   npm test -- --watchAll=false
```

3. Gerar relatório de cobertura:
```bash
   npm run test:coverage
```

## CI/CD

O projeto usa **GitHub Actions** para validar o código e publicar na **Vercel**. O workflow está em `.github/workflows/ci.yml` e roda em todo **push** e **pull request** para a branch `main`.

### Onde acompanhar as execuções

No repositório do GitHub, abra a aba **Actions** e clique no workflow **CI/CD Pipeline**. Cada execução mostra o status de cada job (✅ passou, ❌ falhou) e o log completo de cada etapa. Em pull requests, o resultado também aparece na seção de checks, no final da página do PR.

### Jobs do pipeline

Os jobs rodam em sequência: se um falhar, os seguintes não executam.

| Job      | O que faz                                      | Quando roda                 |
| -------- | ---------------------------------------------- | --------------------------- |
| `lint`   | Verifica o código com ESLint (`npm run lint`)  | Push e pull request         |
| `test`   | Roda os testes com cobertura                   | Push e pull request         |
| `build`  | Gera o build de produção (`npm run build`)     | Push e pull request         |
| `deploy` | Publica em produção na Vercel                  | **Apenas push na `main`**   |

Para um pull request poder ser aceito, os jobs **`lint`, `test` e `build` devem passar**. O `deploy` não executa em pull requests: a publicação em produção só acontece depois que o código chega à `main` e todos os jobs anteriores passaram.

### Configuração do deploy

O deploy usa a Vercel CLI e precisa de três *secrets* no repositório (**Settings → Secrets and variables → Actions**):

- `VERCEL_TOKEN`: token de acesso criado na conta da Vercel.
- `VERCEL_ORG_ID`: ID da conta ou organização.
- `VERCEL_PROJECT_ID`: ID do projeto na Vercel.

Os dois IDs aparecem no arquivo `.vercel/project.json` depois de rodar `vercel link` localmente.

## URL do projeto

Acesse aqui: 
```bash
https://projeto-lista-tarefa.vercel.app/
```