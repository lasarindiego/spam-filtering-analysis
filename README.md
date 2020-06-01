**_Introdução_**

Com o advento da computação, uma solução para identificar SPAM pode se tornar defasada ou pode ter resultados que não condizem com o cenário verdadeiro, dessa forma, a melhor alternativa de avaliarmos algo no campo probabilístico é através de testes em vários algoritmos com funcionamentos distintos para um melhor embasamento.

Os métodos de classificação são integrados nos sistemas de e-mail ou são utilizados através de chamadas em APIs, onde estas retornam o resultado de forma binária e mais informações caso o classificador possua.

**_Premissa_**

Através de um formulário que recebe o corpo do e-mail e todos os possíveis detalhes, **SPAM_WATCHER** realiza a chamada para duas APIs, com os algoritmos mais comuns e de maior taxa de sucesso de classificação de SPAM e retorna o resultado de ambas, informando se é um e-mail malicioso através da visão sistêmica e os pontos identificados, facilitando a análise dos algoritmos.

**_Instalação e execução_**

É necessário possuir o NodeJS instalado, e após de instalar o mesmo, executar o comando
```
git clone https://github.com/lasarindiego/spam-filtering-analysis.git
```
para instalar todas as dependências, utilizar o
```
npm install
```
e executar o NodeJS.

***_Objetivos_***

- [x] Encontrar APIs de verificação de SPAMs.
- [x] Realizar a integração com o sistema web.
- [x] Apresentar os resultados.
- [ ] Organizar resultados e gerar um relatório com maiores informações.
