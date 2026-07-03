import FigureCard from './FigureCard'
import Reveal from '../Reveal'
import { figures } from '../../data/figures'

export default function FiguresSection() {
  return (
    <section id="section-figures" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-[60px] bg-amber-600" />
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Nhân vật</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-2" style={{fontFamily:"'Playfair Display',serif"}}>
              Những người làm nên lịch sử
            </h2>
            <p className="text-amber-400/80 text-lg italic mb-6">Nhấn vào một thẻ để xem tiểu sử</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {figures.map(f => <Reveal key={f.id}><FigureCard figure={f} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
