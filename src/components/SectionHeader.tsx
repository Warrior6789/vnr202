interface Props {
  period:string; title:string; subtitle:string; quote:string;
  quoteAuthor:string; description:string; imageSrc:string; imageAlt:string;
}
export default function SectionHeader({period,title,subtitle,quote,quoteAuthor,description,imageSrc,imageAlt}:Props) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px flex-1 max-w-[60px] bg-amber-600" />
        <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">{period}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-2"
        style={{fontFamily:"'Playfair Display',serif"}}>{title}</h2>
      <p className="text-amber-400/80 text-lg italic mb-8">{subtitle}</p>
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>
      <blockquote className="quote-border pl-6 py-2 mb-6">
        <p className="text-stone-200 text-lg italic leading-relaxed mb-2"
          style={{fontFamily:"'Crimson Text',serif"}}>{quote}</p>
        <cite className="text-amber-500 text-sm font-medium not-italic">{quoteAuthor}</cite>
      </blockquote>
      <p className="text-stone-300 leading-relaxed">{description}</p>
    </div>
  )
}