export default function Hero(){
  return (
    <header className="max-w-5xl mx-auto text-center py-16">
      <h1 className="text-5xl font-extrabold text-amber-600">Le Roi Soleil</h1>
      <p className="mt-3 text-stone-600">Comédie Musicale du Lycée Condorcet</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-6">🎭 Spectacle musical</div>
        <div className="card p-6">🎟️ Entrée gratuite</div>
        <div className="card p-6">📅 Mars 2026</div>
      </div>
    </header>
  )
}
