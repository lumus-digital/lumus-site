import MagicParticles from '@/componentsMagicParticles'
import Text from '@/componentsText'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center mx-auto max-w-2xl">
      <MagicParticles />
      <div className="text-center">
        <Text
          as="h1"
          className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
          data-test-id="home-title"
        >
          Construindo experiências digitais com criatividade, inovação e
          propósito
        </Text>
        <Text
          as="p"
          className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
          data-test-id="home-description"
        >
          Portfólio, laboratório e vitrine de projetos criativos.
        </Text>
      </div>
    </div>
  )
}
