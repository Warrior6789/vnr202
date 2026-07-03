import { useState } from 'react'

interface Props { date:string; title:string; summary:string; detail?:string; takeaway?:string; image?:string }

export default function EventCard({ date, title, summary, detail, takeaway, image }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className="event-card relative pl-12 mb-8" onClick={() => detail && setOpen(!open)}>
      <div className="absolute left-[14px] top-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-stone-950 z-10" />
      <div className="bg-stone-900/60 border border-stone-800 rounded-lg p-5 hover:border-amber-800 transition-colors">
        <span className="text-amber-500 text-xs font-bold tracking-widest uppercase block mb-2">{date}</span>
        <h3 className="text-stone-100 text-xl font-bold mb-2" style={{fontFamily:"'Playfair Display',serif"}}>{title}</h3>
        <p className="text-stone-400 text-sm leading-relaxed">{summary}</p>
        {detail && (
          <>
            <p className="text-amber-500/70 text-xs mt-3 select-none">
              {open ? 'Nhấn để thu gọn ▲' : 'Nhấn để xem chi tiết ▼'}
            </p>
            {open && (
              <div className="mt-4 pt-4 border-t border-stone-700">
                {image && (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg mb-4 sepia-[0.3] contrast-[1.05]"
                  />
                )}
                <p className="text-stone-300 text-sm leading-relaxed">{detail}</p>
                {takeaway && (
                  <p className="mt-3 text-amber-400 text-sm font-semibold border-l-2 border-amber-500 pl-3">
                    {takeaway}
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
