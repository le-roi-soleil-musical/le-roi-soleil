export default function Dates(){
  const days = [
    { d:'14', label:'Samedi', time:'18h30'},
    { d:'19', label:'Jeudi', time:'18h30'},
    { d:'21', label:'Samedi', time:'18h30'},
  ]
  return (
    <section id="dates" className="space-y-8">
      <h2 className="text-3xl font-bold">Dates des Représentations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {days.map((k,i)=>(
          <div key={i} className="card p-6 text-center">
            <div className="text-sm text-stone-500">{k.label}</div>
            <div className="text-5xl font-extrabold mt-2">{k.d}</div>
            <div className="text-xs text-stone-500 mt-2">{k.time}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
