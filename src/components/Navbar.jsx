import React, { useState } from 'react'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="font-bold flex items-center gap-2"><span>👑</span> <span>Le Roi Soleil</span></div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#histoire" className="hover:text-amber-600">Histoire</a>
            <a href="#personnages" className="hover:text-amber-600">Personnages</a>
            <a href="#dates" className="hover:text-amber-600">Dates</a>
          </div>
          <button className="sm:hidden w-9 h-9 rounded-full bg-amber-700 text-white" onClick={()=>setOpen(v=>!v)}>☰</button>
        </div>
      </nav>
      <div className={`fixed inset-y-0 right-0 w-72 bg-white shadow-2xl p-4 z-50 transition-transform ${open? 'translate-x-0':'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-4">
          <strong>Menu</strong>
          <button className="px-2 py-1 border rounded" onClick={()=>setOpen(false)}>Fermer ✕</button>
        </div>
        <nav className="flex flex-col gap-2">
          <a href="#histoire" onClick={()=>setOpen(false)} className="px-3 py-2 rounded hover:bg-amber-50">Histoire</a>
          <a href="#personnages" onClick={()=>setOpen(false)} className="px-3 py-2 rounded hover:bg-amber-50">Personnages</a>
          <a href="#dates" onClick={()=>setOpen(false)} className="px-3 py-2 rounded hover:bg-amber-50">Dates</a>
        </nav>
      </div>
    </>
  )
}
