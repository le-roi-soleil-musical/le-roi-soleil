export default function Histoire(){
  const items = [
    {title: "Un Jeune Roi en Devenir", icon:"👑"},
    {title: "L'Amour Interdit", icon:"💘"},
    {title: "Intrigues de Cour", icon:"🎭"},
    {title: "Spectacle Musical Total", icon:"🎵"},
    {title: "Conflits et Passions", icon:"⚔️"},
    {title: "La Naissance d'une Légende", icon:"⭐"},
  ]
  return (
    <section id="histoire" className="space-y-8">
      <h2 className="text-3xl font-bold">L'Histoire du Roi Soleil</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it,i)=>(
          <div key={i} className="card p-6">
            <div className="text-3xl">{it.icon}</div>
            <h3 className="mt-3 font-semibold">{it.title}</h3>
            <p className="text-sm text-stone-600 mt-2">Texte à compléter…</p>
          </div>
        ))}
      </div>
    </section>
  )
}
