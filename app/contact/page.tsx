import Text from '@/components/Text'

import Link from '@/components/Link'
import Image from 'next/image'

export default function Contact() {
  return (
    <section className="flex flex-col items-center max-w-2xl w-full mx-auto p-8 mt-12 mb-12 gap-8">
      <Text
        as="h1"
        className="text-3xl md:text-4xl font-bold text-white mb-2"
        data-test-id="contact-title"
      >
        Entre em contato
      </Text>
      <Text as="p" className="text-gray-400 text-lg text-center max-w-xl">
        Fique à vontade para entrar em contato através de minhas redes
        profissionais ou enviar um e-mail. Será um prazer conversar sobre
        tecnologia, projetos ou oportunidades!
      </Text>
      <div className="flex flex-row gap-8 mt-4 z-10">
        <Link
          to="https://github.com/hellenIzolan"
          isExternal
          aria-label="GitHub"
          className="text-gray-300 hover:text-white text-4xl transition-colors"
        >
          <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/hellen-susana-izolan/"
          isExternal
          aria-label="LinkedIn"
          className="text-gray-300 hover:text-white text-4xl transition-colors"
        >
          <Image
            src="/linkedin-icon.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link
          to="mailto:hellensusanaizolan@gmail.com"
          isExternal
          aria-label="E-mail"
          className="text-gray-300 hover:text-white text-4xl transition-colors"
        >
          <Image src="/email-icon.svg" alt="E-mail" width={24} height={24} />
        </Link>
      </div>
    </section>
  )
}
