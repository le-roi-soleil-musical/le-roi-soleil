import { useState } from 'react'
import data from '../data/characters.json'

function Badge({type}){
  const base = "absolute top-3 left-3 text-sm font-semibold rounded-full px-3 py-1"
  if(type==="Dame de cour"){
    return <span className={base} style={{background:'#fff',color:'#000',borderRadius:999}} data-type="Dame de cour">👒 Dame de cour</span>
  }
  if(type==="Courtisane"){
    return <span className={base+" bg-white/80 backdrop-blur border"}>💃 Courtisane</span>
  }
  if(type==="Royauté"){
    return <span className={base+" bg-amber-100 border text-amber-800"}>👑 Royauté</span>
  }
  return <span className={base+" bg-white/80 backdrop-blur border"}>🎭 {type}</span>
}

export default function Characters(){
  const [open,setOpen] = useState(false)
  const [current,setCurrent] = useState(null)

  return (
    <section id="personnages" className="space-y-8">
      <h2 className="text-3xl font-bold">Les Personnages</h2>
      <p className="text-stone-600">Découvrez les personnages emblématiques…</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(p=>(
          <article key={p.id} className="card overflow-hidden cursor-pointer" onClick={()=>{setCurrent(p);setOpen(true)}}>
            <div className="relative">
              <img src={p.img} alt={p.name} className="block w-full h-[205px] sm:h-[205px] object-cover object-top rounded-t-xl"/>
              <Badge type={p.type}/>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-stone-600">{p.subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {open && current && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={()=>setOpen(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden" onClick={e=>e.stopPropagation()}>
            <div className="relative">
              <img src={current.img} alt={current.name} className="w-full h-72 object-cover object-top"/>
              <Badge type={current.type}/>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{current.name}</h3>
                <button className="px-3 py-1 border rounded" onClick={()=>setOpen(false)}>Fermer ✕</button>
              </div>
              <section className="card p-4">
                <h4 className="font-semibold">Description</h4>
                <p className="text-sm text-stone-700 mt-2">Texte à personnaliser…</p>
              </section>
              <section className="card p-4">
                <h4 className="font-semibold">Statistiques</h4>
                <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                  <div>⚡ Pouvoir <div className="h-2 bg-stone-200 rounded"><div className="h-2 bg-orange-500 rounded" style={{width: current.power+'%'}}/></div></div>
                  <div>💖 Charisme <div className="h-2 bg-stone-200 rounded"><div className="h-2 bg-pink-500 rounded" style={{width: current.charisma+'%'}}/></div></div>
                  <div>🧠 Intelligence <div className="h-2 bg-stone-200 rounded"><div className="h-2 bg-blue-500 rounded" style={{width: current.intelligence+'%'}}/></div></div>
                  <div>💘 Amour <div className="h-2 bg-stone-200 rounded"><div className="h-2 bg-purple-500 rounded" style={{width: current.love+'%'}}/></div></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
