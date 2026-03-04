import './magic-particles.css'
// Componente React para partículas brilhantes animadas (pó mágico)
// Basta importar e usar <MagicParticles /> onde quiser o efeito

export default function MagicParticles() {
  return (
    <div className="magic-particles">
      <span
        className="magic-particle"
        style={{
          left: '10%',
          bottom: '5%',
          width: '6px',
          height: '6px',
          animationDelay: '0s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '30%',
          bottom: '15%',
          width: '4px',
          height: '4px',
          animationDelay: '2s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '50%',
          bottom: '10%',
          width: '8px',
          height: '8px',
          animationDelay: '4s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '70%',
          bottom: '8%',
          width: '5px',
          height: '5px',
          animationDelay: '1s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '85%',
          bottom: '20%',
          width: '3px',
          height: '3px',
          animationDelay: '3s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '20%',
          bottom: '40%',
          width: '7px',
          height: '7px',
          animationDelay: '5s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '40%',
          bottom: '60%',
          width: '4px',
          height: '4px',
          animationDelay: '2.5s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '60%',
          bottom: '50%',
          width: '6px',
          height: '6px',
          animationDelay: '1.5s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '80%',
          bottom: '70%',
          width: '5px',
          height: '5px',
          animationDelay: '3.5s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '15%',
          bottom: '80%',
          width: '3px',
          height: '3px',
          animationDelay: '6s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '55%',
          bottom: '85%',
          width: '7px',
          height: '7px',
          animationDelay: '4.5s',
        }}
      />
      <span
        className="magic-particle"
        style={{
          left: '75%',
          bottom: '90%',
          width: '4px',
          height: '4px',
          animationDelay: '5.5s',
        }}
      />
    </div>
  )
}
