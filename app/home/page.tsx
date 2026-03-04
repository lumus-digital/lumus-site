import MagicParticles from '@/componentsMagicParticles'
import Text from '@/componentsText'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center mx-auto max-w-2xl">
      {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> */}
      {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
          Em breve, artigos sobre tecnologia, design e inovação.
          <a href="/funding" className="font-semibold text-purple-400 ml-2">
            <span aria-hidden="true" className="absolute inset-0"></span>
            Saiba mais <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div> */}
      <MagicParticles />
      <div className="text-center">
        <Text
          as="h1"
          className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
          data-test-id="home-title"
        >
          Construindo experiências digitais com criatividade, inovação e
          propósito
          {/* Experiências digitais que iluminam ideias */}
        </Text>
        <Text
          as="p"
          className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
          data-test-id="home-description"
        >
          Portfólio, laboratório e vitrine de projetos criativos.
        </Text>
        {/* <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/get-started"
            className="rounded-md bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
          >
            Conheça meu trabalho
          </a>
          <a href="/learn-more" className="text-sm/6 font-semibold text-white">
            Vamos criar juntos? <span aria-hidden="true">→</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}
