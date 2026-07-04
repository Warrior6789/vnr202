import Reveal from '../Reveal'
import { videos } from '../../data/videos'

export default function VideoSection() {
  return (
    <section id="section-video" className="py-24 px-6 bg-stone-950/50">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-[60px] bg-amber-600" />
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Tư liệu</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>
              Video tư liệu lịch sử
            </h2>
            <p className="text-amber-400/80 text-lg italic">Nhấn vào để xem trên YouTube</p>
          </div>
        </Reveal>
        <div className={videos.length === 1 ? 'max-w-2xl mx-auto' : 'grid sm:grid-cols-2 gap-6'}>
          {videos.map(v => (
            <Reveal key={v.id}>
              <a
                href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden border border-stone-800 bg-stone-900/40 hover:border-amber-600 transition-colors"
              >
                <div className="relative aspect-video bg-stone-800">
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-stone-950/30 group-hover:bg-stone-950/10 transition-colors">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/90 text-stone-950 group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-stone-100 font-bold mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>{v.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
