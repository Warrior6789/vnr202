import heroImg from '../assets/images/images.jpg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg}
          alt="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập" className="w-full h-full object-cover object-center" />
        <div className="bg-overlay" />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-6">
          Chương II - Phần I
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-black mb-4 leading-none"
          style={{fontFamily:"'Playfair Display',serif"}}>
          <span className="block text-stone-100">Bản hùng ca</span>
          <span className="block text-amber-400">Kháng chiến</span>
        </h1>
        <p className="text-amber-300 text-2xl font-light tracking-widest mb-8">1945 — 1954</p>
        <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Hành trình 9 năm kháng chiến trường kỳ — từ Tuyên ngôn Độc lập đến chiến thắng Điện Biên Phủ lừng lẫy năm châu
        </p>
        <a href="#section-1"
          className="inline-flex items-center gap-3 px-8 py-4 border border-amber-400 text-amber-400 font-medium tracking-widest uppercase text-sm hover:bg-amber-400 hover:text-stone-950 transition-all duration-300">
          <span>Khám phá</span><span>&#8595;</span>
        </a>
      </div>
    </section>
  )
}