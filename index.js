const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para referenciar um script externo em JavaScript?",
      respostas: [
        "<script src='nome_do_arquivo.js'>",
        "<script href='nome_do_arquivo.js'>",
        "<script link='nome_do_arquivo.js'>",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "variable nomeDaVariavel;",
        "v nomeDaVariavel;",
        "var nomeDaVariavel;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para analisar uma string em um número em JavaScript?",
      respostas: [
        "Parse()",
        "StringToNumber()",
        "Number()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para adicionar um comentário em JavaScript?",
      respostas: [
        "<!-- Este é um comentário -->",
        "// Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 1
    },
    {
      pergunta: "Como você cria uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "create minhaFuncao() {}",
        "def minhaFuncao() {}",
      ],
      correta: 0
    },
    {
      pergunta: "Como você chama uma função chamada 'minhaFuncao' em JavaScript?",
      respostas: [
        "call minhaFuncao()",
        "minhaFuncao()",
        "execute minhaFuncao()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve uma condição 'if' em JavaScript?",
      respostas: [
        "if (i == 5)",
        "if i = 5 then",
        "if i = 5",
      ],
      correta: 0
    },
    {
      pergunta: "Como você pode adicionar um novo elemento a um array em JavaScript?",
      respostas: [
        "array.add('novoElemento')",
        "array += 'novoElemento'",
        "array.push('novoElemento')",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método remove o último elemento de um array em JavaScript?",
      respostas: [
        "array.pull()",
        "array.removeLast()",
        "array.pop()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você arredonda um número para o inteiro mais próximo em JavaScript?",
      respostas: [
        "Math.round(7.25)",
        "Math.rnd(7.25)",
        "Math.around(7.25)",
      ],
      correta: 0
    },
  ]
  // Puxando o HTML
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop de repetição das perguntas
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  // loop de repetição das respostas
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    // Remoção da Resposta A
    quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }