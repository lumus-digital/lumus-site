export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-wide">Lumus Digital</h1>

        <p className="text-xl text-gray-300">Em breve</p>

        <p className="text-sm text-gray-500">
          Construindo experiências digitais com propósito.
        </p>
      </main>
      <footer className="text-center text-gray-500 text-sm py-4">
        &copy; {new Date().getFullYear()} Lumus Digital. Todos os direitos
        reservados.
        <a
          href="https://github.com/lumus-digital"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-2"
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}
