import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './Reveal'

function StatNumber({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const value = useCountUp(target, visible)
  return (
    <div ref={ref}>
      <div className="stat-number">{value}{suffix}</div>
      <div className="text-stone-400 text-xs tracking-widest uppercase mt-2">{label}</div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="py-24 px-6 bg-stone-900/40 border-t border-stone-800">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-black text-stone-100 mb-8 text-center"
            style={{fontFamily:"'Playfair Display',serif"}}>
            Ý nghĩa lịch sử
          </h2>
          <p className="text-stone-300 leading-relaxed text-center max-w-3xl mx-auto mb-16">
            Thắng lợi của cuộc kháng chiến chống thực dân Pháp (1945-1954) là thắng lợi vĩ đại của dân tộc
            Việt Nam, đánh dấu sự sụp đổ của chủ nghĩa thực dân cũ, mở ra kỷ nguyên giải phóng dân tộc
            trên toàn thế giới. Thắng lợi đó khẳng định đường lối kháng chiến đúng đắn, sáng tạo của Đảng
            và Chủ tịch Hồ Chí Minh.
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-8 mb-16 text-center">
          <StatNumber target={9} label="Năm Kháng Chiến" />
          <StatNumber target={56} label="Ngày Đêm Điện Biên" />
          <StatNumber target={1954} label="Hiệp Định Genève" />
        </div>
        <div className="section-divider" />
        <p className="text-center text-stone-500 text-xs tracking-wide mb-2">
          Nội dung dựa trên Giáo trình Lịch sử Đảng Cộng sản Việt Nam — Chương II, Phần I (1945-1954)
        </p>
        <p className="text-center text-stone-600 text-xs">Creative Web Experience • 2026</p>
      </div>
    </footer>
  )
}
