import { useMemo, useState } from 'react'
import InteractiveMap from './InteractiveMap'
import Reveal from '../Reveal'
import { LocationId, eventsByLocation, locations, events } from '../../data/events'

const periods: { id: 1 | 2 | 3; label: string }[] = [
  { id: 1, label: '1945 - 1946' },
  { id: 2, label: '1946 - 1950' },
  { id: 3, label: '1951 - 1954' },
]

const locationsByPeriod = (period: 1 | 2 | 3): LocationId[] =>
  Array.from(new Set(events.filter(e => e.period === period).map(e => e.location)))

export default function MapSection() {
  const [period, setPeriod] = useState<1 | 2 | 3>(1)
  const activeLocations = useMemo(() => locationsByPeriod(period), [period])
  const [selected, setSelected] = useState<LocationId | null>(activeLocations[0] ?? null)

  const handlePeriodChange = (p: 1 | 2 | 3) => {
    setPeriod(p)
    const next = locationsByPeriod(p)
    setSelected(prev => (prev && next.includes(prev) ? prev : next[0] ?? null))
  }

  const selectedEvents = selected ? eventsByLocation(selected) : []

  return (
    <section id="section-map" className="py-24 px-6 bg-stone-950/50">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-[60px] bg-amber-600" />
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Bản đồ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>
              Địa bàn kháng chiến
            </h2>
            <p className="text-amber-400/80 text-lg italic">Chọn một giai đoạn, rồi nhấn vào địa điểm để xem sự kiện</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <div className="relative bg-stone-900/40 border border-stone-800 rounded-lg p-4">
                <InteractiveMap selected={selected} onSelect={setSelected} activeLocations={activeLocations} />

                <button
                  onClick={() => setSelected('chauau')}
                  className={`absolute bottom-6 right-6 flex max-w-[220px] items-center gap-3 rounded border px-4 py-3 text-left shadow-xl backdrop-blur-sm transition-colors ${
                    selected === 'chauau'
                      ? 'border-amber-400 bg-amber-400/10'
                      : 'border-stone-700 bg-stone-900/80 hover:border-amber-700'
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500 text-amber-400">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-amber-500">Mặt trận ngoại giao</span>
                    <span className="block text-xs text-stone-400">{locations.chauau.name} — ngoài bản đồ</span>
                  </span>
                </button>
              </div>

              <div className="mt-4 rounded border border-stone-800 bg-stone-900/60 px-6 py-4">
                <div className="relative flex items-center justify-between text-xs">
                  <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-stone-700" />
                  <div
                    className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-amber-500 shadow-[0_0_8px_rgba(217,155,29,0.6)] transition-all duration-300"
                    style={{ width: `${((period - 1) / (periods.length - 1)) * 100}%` }}
                  />
                  {periods.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handlePeriodChange(p.id)}
                      className={`relative z-10 flex flex-col items-center gap-2 bg-stone-900/60 px-2 uppercase tracking-widest transition-colors ${
                        period === p.id ? 'font-bold text-amber-300' : 'text-stone-500 hover:text-stone-300'
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${period === p.id ? 'bg-amber-400 shadow-[0_0_8px_rgba(217,155,29,0.8)]' : 'bg-stone-600'}`} />
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex min-h-[420px] flex-col">
              {selected && (
                <div>
                  <span className="text-amber-500 text-xs font-bold tracking-widest uppercase block mb-1">
                    {locations[selected].name}
                  </span>
                  <p className="text-stone-500 text-xs mb-6">{locations[selected].note}</p>
                  <div className="space-y-4">
                    {selectedEvents.length > 0 ? (
                      selectedEvents.map(e => (
                        <div key={e.id} className="border-l-2 border-amber-700/60 pl-4">
                          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase block mb-1">{e.date}</span>
                          <h3 className="text-stone-100 font-bold mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>{e.title}</h3>
                          <p className="text-stone-400 text-sm leading-relaxed">{e.summary}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-stone-500 text-sm italic">Không có sự kiện được ghi nhận tại đây.</p>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-10">
                <blockquote className="text-xl italic text-stone-500 leading-snug mb-3" style={{ fontFamily: "'Playfair Display',serif" }}>
                  "Không có gì quý hơn độc lập, tự do."
                </blockquote>
                <div className="text-stone-500 text-xs font-semibold uppercase tracking-widest">— Chủ tịch Hồ Chí Minh</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
