# Breno Oliveira · Portfólio

Portfólio pessoal com minha trajetória, tecnologias, projetos e canais de contato.

Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento back-end e estudos em Java. Nos meus projetos, também trabalho com Node.js, TypeScript, APIs e bancos de dados.

[LinkedIn](https://www.linkedin.com/in/breno-oliveira-tec) · [E-mail](mailto:brenooliveiraec@gmail.com)

## A proposta

Construí este espaço para apresentar meu trabalho e mostrar como aplico o que estudo.

A experiência combina uma identidade visual escura com detalhes em azul, interações com o mouse e uma apresentação dos projetos organizada em camadas de front-end, back-end e dados. Cada camada explica as tecnologias utilizadas, sua aplicação e os aprendizados durante o desenvolvimento.

## O que você encontra

- **Apresentação:** meu foco profissional, foto e currículo para download.
- **Sobre mim:** perfil, formação acadêmica e experiências profissionais.
- **Tecnologias:** ferramentas e conhecimentos organizados por área.
- **Projetos:** exploração interativa das camadas do DOMU e do Sistema Bar.
- **Certificações:** seção preparada para receber os cursos conforme forem concluídos.
- **Contato:** LinkedIn, e-mail, WhatsApp e formulário de envio de mensagens.

## Tecnologias deste portfólio

| Tecnologia   | Uso                                                 |
| ------------ | --------------------------------------------------- |
| React        | Componentes e interações da interface               |
| TypeScript   | Tipagem dos componentes e dados                     |
| Vite         | Ambiente de desenvolvimento e build                 |
| CSS          | Layout, responsividade, animações e efeitos visuais |
| Lucide React | Ícones da interface                                 |
| Formspree    | Recebimento das mensagens do formulário             |
| Oxlint       | Análise estática do código                          |

Java, Node.js e os bancos de dados apresentados no site fazem parte dos meus estudos e projetos. Este repositório contém a aplicação front-end do portfólio.

## Executar localmente

Utilize Node.js e npm. A versão utilizada na preparação da publicação foi Node.js 24.18.0.

```bash
git clone https://github.com/brenooliveiratec/portfolio.git
cd portfolio
npm ci
npm run dev
```

Abra o endereço informado no terminal.

### Comandos disponíveis

| Comando           | Função                                            |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Inicia o ambiente de desenvolvimento              |
| `npm run lint`    | Executa a análise estática com Oxlint             |
| `npm run build`   | Verifica o TypeScript e gera a versão de produção |
| `npm run preview` | Serve localmente o build de produção              |

O build é gerado na pasta `dist`.

## Organização

```text
public/
├── documents/       # Currículo em PDF
└── images/          # Foto e ícones das tecnologias

src/
├── components/      # Componentes da interface e diagramas
├── data/            # Conteúdo dos projetos, tecnologias e certificações
├── hooks/           # Comportamentos de navegação e movimento
├── sections/        # Seções do portfólio
├── App.tsx          # Composição da página
└── index.css        # Estilos globais
```

## Formulário de contato

O formulário envia mensagens pelo Formspree e apresenta estados de envio, sucesso e erro.

Para executar uma cópia com seu próprio recebimento, configure o endereço do seu formulário na constante `formEndpoint`, em `src/components/ContactForm.tsx`.

## Evolução

O portfólio acompanha minha formação e será atualizado com novos projetos, certificações e experiências.

## Contato

**Breno Oliveira** · Fortaleza, Ceará

- [LinkedIn](https://www.linkedin.com/in/breno-oliveira-tec)
- [GitHub](https://github.com/brenooliveiratec)
- [E-mail](mailto:brenooliveiraec@gmail.com)
