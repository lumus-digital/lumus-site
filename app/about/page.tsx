import Text from '@/components/Text'
import { colors } from '@/tokens'
import Image from 'next/image'

export default function About() {
  return (
    <section className="flex flex-col max-w-5xl w-full mx-auto p-8 mt-12 mb-12">
      {/* Mobile title (above the image and text) */}
      <Text
        as="h1"
        className="text-3xl md:hidden font-bold text-white mb-2 text-center"
        data-test-id="about-title"
      >
        Sobre a Lumus Digital
      </Text>
      <div className="flex flex-col md:flex-row gap-12 w-full">
        {/* Sticky image section */}
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0 md:block">
          <div className="sticky top-8">
            <Image
              src="/about.png"
              alt="Marca Lumus Digital"
              width={400}
              height={400}
            />
          </div>
        </div>
        {/* Text column */}
        <div className="flex-2 flex flex-col justify-center gap-4">
          {/* Desktop title (aligned with the text) */}
          <Text
            as="h1"
            className="hidden md:block text-3xl md:text-4xl font-bold text-white mb-2"
            data-test-id="about-title"
          >
            Sobre a Lumus Digital
          </Text>
          <Text as="p" className="text-gray-400 text-lg">
            A Lumus Digital nasceu da vontade de unir criatividade, tecnologia,
            inovação e propósito. Inspirada por universos encantados e pelo
            estilo visual que representa minha personalidade, a marca foi criada
            para ser um espaço de inovação, acolhimento e soluções digitais.
          </Text>
          <Text as="p" className="text-gray-400 text-lg">
            Sempre me encantei por histórias onde conhecimento é poder, onde
            estudar faz a diferença e onde a curiosidade move o mundo. Cresci
            apaixonada por universos fantásticos - e foi justamente essa paixão
            que fez nascer esta ideia.
          </Text>
          <Text
            as="h2"
            className={`text-xl font-bold mt-4 ${colors.primaryInverse}`}
          >
            👩‍💻 Quem está por trás desta ideia?
          </Text>
          <Text as="p" className="text-gray-400 text-lg mt-6">
            Prazer, me chamo Hellen, sou desenvolvedora com sete anos de
            experiência em aplicações web, atuando principalmente com React.js,
            Vue.js e Next.js. Ao longo da minha trajetória, também atuei como
            Tech Lead, apoiando múltiplos times, estruturando processos e
            incentivando o crescimento técnico e pessoal de outras pessoas.
            Liderar, para mim, nunca foi sobre hierarquia - sempre foi sobre
            iluminar caminhos.
          </Text>
          <Text as="p" className="text-gray-400 text-lg">
            Fora das linhas de código, sou movida por curiosidade, livros,
            natureza e pelo carinho de meus companheiros felinos, que
            frequentemente me acompanham nas horas de criação. Acredito que
            sensibilidade e técnica não são opostas — são complementares. A
            tecnologia não precisa ser fria. Ela pode ser humana, estratégica,
            acessível e bem construída. Pode contar histórias. Pode gerar
            impacto real.
          </Text>
          <Text
            as="h2"
            className={`text-xl font-bold mt-4 ${colors.primaryInverse}`}
          >
            🚀 O que vem por aí?
          </Text>
          <Text as="p" className="text-gray-400 text-lg mt-6">
            Este espaço é onde pretendo compartilhar aprendizados, reflexões
            sobre carreira, liderança técnica e desenvolvimento web. Te convido
            a acompanhar essa jornada, onde o objetivo é crescer, aprender e
            iluminar caminhos juntos.
          </Text>
          <Text as="p" className="text-gray-400 text-lg font-bold">
            Seja bem-vindo à Lumus Digital!
          </Text>
        </div>
      </div>
    </section>
  )
}
