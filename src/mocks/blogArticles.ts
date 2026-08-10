// src/mocks/blogArticles.ts
export interface BlogCodeBlock {
  type: 'code'
  language?: string
  code: string
}

export interface BlogLinkInline {
  type: 'link'
  href: string
  label: string
  external?: boolean
}

export type BlogInlineContent = string | BlogLinkInline

export type BlogTextContent = string | BlogInlineContent[]

export interface BlogDividerBlock {
  type: 'divider'
}

export interface BlogImageBlock {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export interface BlogListBlock {
  type: 'list'
  items: BlogTextContent[]
}

export interface BlogParagraphBlock {
  type: 'paragraph'
  text: BlogTextContent
}

export interface BlogQuoteBlock {
  type: 'quote'
  text: string
  author?: string
}

export type BlogContentBlock =
  | BlogCodeBlock
  | BlogDividerBlock
  | BlogImageBlock
  | BlogListBlock
  | BlogParagraphBlock
  | BlogQuoteBlock

export interface BlogArticle {
  id: string
  title: string
  author: string
  authorRole: string
  date: string
  tags: (
    | 'Next.js'
    | 'Markdown'
    | 'Blog'
    | 'Acessibilidade'
    | 'React'
    | 'Tailwind CSS'
    | 'Design de Interfaces'
    | 'Onboarding'
    | 'Liderança de Equipes'
    | 'Gestão de Projetos'
    | 'Gestão de Pessoas'
    | 'Gestão de Equipes'
    | 'Cultura Organizacional'
    | 'Desenvolvimento Profissional'
    | 'Desenvolvimento de Carreira'
    | 'Desenvolvimento Pessoal'
    | 'Produtividade'
    | 'Saúde Mental'
    | 'Bem-estar'
    | 'Equilíbrio'
  )[]
  summary: string
  avatar: string
  category:
    | 'Desenvolvimento Web'
    | 'Acessibilidade'
    | 'Design'
    | 'Liderança'
    | 'Carreira'
    | 'Desenvolvimento Pessoal'
  image: string
  subtitle?: string
  content: BlogContentBlock[]
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Desacelerar',
    author: 'Hellen Izolan',
    authorRole: 'Software Developer',
    date: '2025-06-18',
    tags: ['Saúde Mental', 'Bem-estar', 'Equilíbrio'],
    summary: 'Você sabe descansar?',
    avatar: '/blog-images/avatar.jpeg',
    category: 'Desenvolvimento Pessoal',
    image: '/blog-images/desacelerar.jpeg',
    content: [
      {
        type: 'paragraph',
        text: 'Há muito tempo venho estudando a ideia de começar a publicar artigos sobre assuntos diversos relacionados a minha vivência na área do TI. Já elenquei N temas, reuni referências, artigos, podcasts, evidências, e a coragem sempre foi ficando para trás.',
      },
      {
        type: 'paragraph',
        text: 'Vivemos um momento em que a crítica constante se tornou uma realidade imbatível, ampliada por nossa grande presença nas redes sociais. Somos julgados por ser, por não ser, por fazer, por não fazer. Nos expomos de mais, nos expomos de menos. Mas muitas vezes esse medo vem mais de nós mesmos, do que realmente do mundo exterior, dos outros.',
      },
      {
        type: 'paragraph',
        text: 'Hoje a coragem “brotou” e aqui estou eu compartilhando meus devaneios sobre o mais improvável dos temas e, por curiosidade, um que sequer estava na minha lista.\n\nDesacelerar. Diferentes formas de descansar. Tempo de qualidade. Autoconhecimento. Aceitação.',
      },
      {
        type: 'paragraph',
        text: 'Desacelerar. Diferentes formas de descansar. Tempo de qualidade. Autoconhecimento. Aceitação.',
      },
      {
        type: 'paragraph',
        text: 'Na área da Tecnologia, assim como em tantas outras, o aprendizado contínuo é basicamente um mantra e uma necessidade real. Para se se sentir estagnado, atrasado perante o mercado e os colegas, perante a indústria e todo o restante do mundo, são instantes daqui até este futuro que parece tão próximo e tão assustador.',
      },
      {
        type: 'paragraph',
        text: 'Conforme vamos evoluindo pessoal e profissionalmente, o que acontece feliz ou infelizmente apenas após duras adversidades da vida, se tivermos em nosso caminho Deus, sorte, um bom terapeuta, todos estes ou seja lá qual for sua crença, começamos lentamente um novo processo de aprendizado, que não tem relação direta com a evolução tecnológica e apenas profissional ou focada no mercado de trabalho. Começamos a entender a importância do autoconhecimento, da necessidade de longas pausas, do dom que é saber fazer nada, o que parece bobagem mas é praticamente impossível para algumas pessoas. Da beleza em se se apreciar os pequenos momentos da vida, do tempo de qualidade com quem amamos.',
      },
      {
        type: 'paragraph',
        text: 'E o mais interessante, no decorrer desse processo, começamos a entender que o período que antes parecia “perda de tempo”, é na verdade a mais potente forma de recarregar energias e ser extremamente mais produtivo.',
      },
      {
        type: 'paragraph',
        text: 'Nos pressionamos tanto a produzir, render, entregar, que acabamos entrando em uma mão única de pura pressão e muitas vezes de sofrimento, onde não há mais prazer na possibilidade de evolução, apenas uma busca desenfreada visando objetivos praticamente inalcançáveis criados por um movimento insustentável.',
      },
      {
        type: 'paragraph',
        text: [
          'Li um artigo muito interessante da ',
          {
            type: 'link',
            href: 'https://www.linkedin.com/pulse/deploy-na-sexta-46-e-se-tentar-ser-tua-melhor-vers%C3%A3o-o-bordignon-xsvef/?trackingId=FUoBGWnfS0%2BpmCTgsTsUNA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BeXCmLsX6TR%2BUqYawaXr2iA%3D%3D',
            label: 'Giulia Bordignon',
            external: true,
          },
          ', há algumas semanas que mencionava vários itens relacionados a esse tema, e uma frase lá me chamou muita atenção: “Quando o aprendizado tem espaço para ser só aprendizado?”',
        ],
      },
      {
        type: 'paragraph',
        text: 'Sempre fui extremante curiosa, gosto de praticar atividades diversas, nas quais muitas vezes não sou nem de perto boa, mas que me fazem bem e tem relação com traços da minha personalidade. Não porquê almejo ser uma grande costureira, uma grande escritora ou uma mestre cuca, nem porque saiba cantar (o que faço desafinadamente), mas pelo simples fato de sentir prazer em aprender algo novo, ajudar alguém do meu círculo social com aquele conhecimento, poder manter um papo legal com alguém que está chegando no grupo de amigos ou no time da empresa e ainda não se sente a vontade para conversar, trocar ideias sobre similaridades que encontro em outras áreas com o que faço no dia a dia, ou simplesmente porquê curti aquela atividade.',
      },
      {
        type: 'paragraph',
        text: 'Isso significa que não gosto de estudar temas relacionados a minha área de atuação, que não pretendo seguir me especializando, evoluindo em minha carreia? É claro que não, eu amo tecnologia e este é hoje meu futuro, apenas estou tentando trazer uma visão sobre a importância em se normalizar necessidades básicas e traços únicos de nossas vidas.',
      },
      {
        type: 'paragraph',
        text: 'Essa grande pressão pela evolução constante e o medo de julgamento, seja da sociedade, do mercado de trabalho ou exclusivamente nossa, muitas vezes (e na maioria delas em minha opinião), barra nossa evolução como seres humanos, como pessoas, como indivíduos complexos, com necessidades emocionais e físicas e vai aos poucos nos anulando.',
      },
      {
        type: 'paragraph',
        text: 'Aprender a bela arte de descansar, aprender a aprender coisas novas apenas por aprender, por curiosidade, necessidades pessoais ou simplesmente porquê deu na telha, é lindo.',
      },
      {
        type: 'paragraph',
        text: 'Hoje convido você a tentar algo novo, algo velho ou até mesmo não fazer nada, simplesmente porquê sim, para descansar, limpar a mente, respirar fundo e conseguir ouvir seus pensamentos, sem pressão, sem medo, apensar porque merecemos.',
      },
      {
        type: 'paragraph',
        text: 'Deixo a imagem de minha última peripécia. Sempre fui uma péssima desenhista e pintora, mas tenho um companheiro que é talento puro e foi capaz de transmitir o máximo de conhecimento possível para alguém como eu, ou seja, totalmente sem talento para estes feitos. Pretendo seguir desenhando? Talvez sim, mas no ritmo deste aqui, há um ano criando apenas os traços 😅 mas feliz que só com minha pequena conquista, não apenas a da arte, mas a de respeito ao meu tempo e a mim mesma.',
      },
      {
        type: 'image',
        src: '/blog-images/desacelerar-secundaria.png',
        alt: 'Desenho anime',
      },
      {
        type: 'paragraph',
        text: '💡E você, o que vai fazer (ou não fazer) hoje, simplesmente porquê você merece? ',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: 'Pequenos momentos para desacelerar:',
      },
      {
        type: 'list',
        items: [
          'Leia algo que gosta todos os dias, podem ser apenas algumas páginas de um livro, um artigo, mas um momento seu;',
          'Ouça uma boa música enquanto toma um chá, café ou bebida de sua preferência;',
          'Pratique algum exercício, pode ser de pouco impacto como uma caminhada leve, mas ao ar livre, pode ser curtinha, mas sem acesso as notificações;',
          'Passe momentos com quem ama, seja fazer um lanche especial com seu parceiro, seja passar um tempo com seu pet.',
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Onboarding de novos talentos: evolução e adaptação',
    author: 'Hellen Izolan',
    authorRole: 'Software Developer',
    date: '2025-08-19',
    tags: [
      'Onboarding',
      'Cultura Organizacional',
      'Desenvolvimento Profissional',
    ],
    summary: 'Vamos falar de Onboarding?',
    avatar: '/blog-images/avatar.jpeg',
    category: 'Liderança',
    image: '/blog-images/onboarding.jpeg',
    subtitle:
      '"Um Onboarding mal planejado pode transformar um talento promissor em um funcionário desmotivado em poucos dias. Mas um Onboarding bem feito pode criar um vínculo forte desde o início, aumentando o engajamento e a retenção.”',
    content: [
      {
        type: 'paragraph',
        text: [
          'Começo meu novo artigo com essa citação incrível de uma nova referência profissional em minha vida, que descobri através da Especialização que concluí recentemente, ',
          {
            type: 'link',
            href: 'https://www.linkedin.com/in/natan-pasquarelli-freitas-990332134/',
            label: 'Natan Pasquarelli Freitas',
            external: true,
          },
          '.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Há tempos o processo de Onboarding vem sendo um dos meus focos e interesse de estudo. Na posição que ocupo atualmente, venho tendo a oportunidade de acompanhar isso de pertinho, desde a recepção de novos desenvolvedores e a organização do período de adaptação dentro do projeto, até estarem definitivamente alocados em uma squad.',
      },
      {
        type: 'paragraph',
        text: 'Hoje temos um processo estruturado, composto por Trilhas de Estudo específicas com foco em cada área de atuação em nosso projeto, acompanhamento semanal de um mentor, avaliação das turmas que participam desse programa, coleta de feedbacks e aplicação de melhorias contínuas.',
      },
      {
        type: 'paragraph',
        text: 'Gostaria de compartilhar uma estrutura que venho utilizando e tem se mostrado bastante eficiente: criei uma Trilha de Estudos dividida em “Cursos”, tratando individualmente temas em comum, assim temos um melhor aproveitamento do conteúdo e também podemos direcionar os estudos conforme o cronograma disposto e conhecimentos prévios que o colaborador já possui, focando no que realmente importa:',
      },
      {
        type: 'image',
        src: '/blog-images/onboarding-secundaria.png',
        alt: 'Organização de uma Trilha de Estudos',
        caption: 'Base para organização de trilha de estudos',
      },
      {
        type: 'paragraph',
        text: 'Além disso, antes e após cada turma de Onboarding, seja ela de apenas um colaborador ou então vários, aplico algumas pesquisas para nivelamento de conhecimento e satisfação quanto aos principais pontos como estrutura da Trilha de Estudos, acompanhamento semanal, formato e apresentação de conteúdos. Desta forma conseguimos trabalhar com uma amostragem grande, evoluindo o processo conforme as pessoas e o projeto evoluem.',
      },
      {
        type: 'paragraph',
        text: 'Contudo, o processo de Onboarding vai muito além desse acompanhamento inicial, dos conteúdos, estudos e formações a cerca das atividades iniciais que o novo colaborador irá desempenhar, Onboarding eficiente cobre toda etapa de adaptação desse ser humano em um ambiente totalmente novo, envolve mentorar, guiar e RETER TALENTOS. Assim como aquele velho ditado que nos diz "a primeira impressão é a que fica", neste valioso processo não poderia ser diferente. Um Onboarding eficiente pode determinar definitivamente o desempenho e a retenção de um novo talento no time.',
      },
      {
        type: 'paragraph',
        text: 'Nesse que considero um curto período de tempo acompanhando o processo, diante da imensidão de oportunidades para evolução, pude aprender e refletir muito sobre o tema e o principal aprendizado que levo para o dia a dia é: adaptação!',
      },
      {
        type: 'paragraph',
        text: 'Não existe Onboarding perfeito, cada empresa e cada projeto terá suas peculiaridades, mas precisamos melhorar a cada edição do programa, buscar insights valiosos e focar em resultados, tendo em mente que cada turma será diferente, cada colaborador terá peculiaridades: um bebê de poucos dias de vida, uma rotina corrida entre trabalho, estudos e treinos, uma familiar doente que requer atenção e cuidados. Assim como qualquer outra pessoa, esse novo colega está lidando com toda a pressão de uma nova oportunidade, o desejo de evoluir e ser reconhecido, sem deixar de ter uma vida cheia de adversidades. Olhar para o lado humano de cada profissional levando em conta as diferentes formas com que cada indivíduo absorve conhecimento e lida com as dificuldades do dia a dia dentro e fora do mundo corporativo, fazem toda a diferença.',
      },
      {
        type: 'paragraph',
        text: 'Vale lembrar, é de grande valia trocar ideias com outros colegas que tem interesse em Onboarding, compartilhar experiências, materiais de estudo, abordagens utilizadas, o que deu super certo e o que deu super errado 😅 buscando sempre evolução, inovação e ADAPTAÇÃO.',
      },
      {
        type: 'paragraph',
        text: 'O processo de Onboarding é de imensa importância também para apoiar o crescimento de novos profissionais em nossa área, todos podemos e devemos colaborar para formar talentos e criar oportunidades de mercado.',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: '→ Deixo aqui algumas recomendações para aplicar nesse processo, ideias simples e práticas que podem mudar completamente a percepção que os novos membros da equipe terão sobre seu time, principalmente no contexto Home Office:',
      },
      {
        type: 'list',
        items: [
          '💌 E-mail de boas vindas e ☕ Café inicial extra oficial: receber o novo membro da equipe com uma mensagem pessoal de boas vindas a equipe e reservar um momento inicial para os envolvido se conhecerem melhor, sem tratar de assuntos sérios e diretamente profissionais pode ajudar e muito a “quebrar o gelo” e dar start na comunicação entre ambas as partes;',
          '📚 Utilizar metáforas e analogias: todo recomeço é desafiador. Tenha em mente que o novo membro de sua equipe está se dividindo entre aprendizado de processos, estrutura da empresa, novas tecnologias, além disso, cada indivíduo absorve conteúdos de formas diferentes. Principalmente na área tecnológica, metáforas e analogias são grandes aliadas na hora de explicar a arquitetura de um projeto, por exemplo.',
          '📹 Vídeos curtos e transcritos: apesar de serem um desafio no quesito "manter conteúdo atualizado", já que qualquer mudança acaba deixando o material defasado, vídeos ainda são uma poderosa ferramenta principalmente visando atender diferentes perspectivas e formas de absorção de conteúdo. Adotar vídeos curtos e transcritos garante que as informações possam ser mais facilmente atualizadas, além de ofertar conteúdo de qualidade para pessoas PCD.',
        ],
      },
      {
        type: 'paragraph',
        text: '→ Referências para acompanhar:',
      },
      {
        type: 'list',
        items: [
          [
            '🔊 ',
            {
              type: 'link',
              href: 'https://open.spotify.com/episode/7E69QjDqB3zw9oSLkQac64',
              label:
                'Spotify | Podcast | Onboarding de devs – Hipsters Ponto Tech #336',
              external: true,
            },
          ],
          [
            '📑 ',
            {
              type: 'link',
              href: 'https://www.alura.com.br/empresas/artigos/onboarding-digital?srsltid=AfmBOopLMcYN1OXr1IVN02tiAkpD544RO34wAxLBHB0IjYp9C9ZYfgNC',
              label: 'Alura | Artigo | Onboarding digital',
              external: true,
            },
          ],
          [
            '📑 ',
            {
              type: 'link',
              href: 'https://www.alura.com.br/empresas/artigos/onboarding-colaboradores-tecnologia?srsltid=AfmBOoqlsYCdUr3ZHIXFu2cyD5DNGAey4FHtJ9UWbC60yaQMEvRr07Qn',
              label:
                'Alura | Artigo | Onboarding de colaboradores em tecnologia',
              external: true,
            },
          ],
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        text: '💡E você, o que já vivenciou de positivo ou negativo sobre processo de Onboarding? Conhece e tem interesse no tema? O que leva de aprendizado para a vida?',
      },
    ],
  },
]
