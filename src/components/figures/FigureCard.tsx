import { useState } from 'react'
import { Figure } from '../../data/figures'

export default function FigureCard({ figure }: { figure: Figure }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-stone-900/60 border border-stone-800 rounded-lg overflow-hidden cursor-pointer hover:border-amber-800 transition-colors"
    >
      <div className="relative h-48">
        <img src={figure.image} alt={figure.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-stone-100 text-lg font-bold mb-1" style={{fontFamily:"'Playfair Display',serif"}}>{figure.name}</h3>
        <p className="text-amber-500 text-xs tracking-widest uppercase mb-1">{figure.role}</p>
        <p className="text-stone-500 text-xs mb-3">{figure.years}</p>
        {open ? (
          <div className="pt-3 border-t border-stone-800">
            <p className="text-stone-300 text-xs italic mb-3 leading-relaxed">"{figure.quote}"</p>
            <p className="text-stone-400 text-sm leading-relaxed">{figure.bio}</p>
          </div>
        ) : (
          <p className="text-amber-500/70 text-xs select-none">Nhấn để xem tiểu sử ▼</p>
        )}
      </div>
    </div>
  )
}
