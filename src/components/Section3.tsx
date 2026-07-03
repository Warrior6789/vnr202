import SectionHeader from './SectionHeader'
import EventCard from './EventCard'
import Reveal from './Reveal'
import { eventsByPeriod } from '../data/events'
import dienBienPhuImg from '../assets/images/ttxvn_chien-thang-dien-bien-phu-4.jpg'

const events = eventsByPeriod(3)

export default function Section3() {
  return (
    <section id="section-3" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeader
            period="1951 - 1954"
            title="Bước ngoặt và Thắng lợi"
            subtitle="Điện Biên Phủ — Lừng lẫy năm châu, chấn động địa cầu"
            quote="Chiến thắng Điện Biên Phủ như một mốc son chói lọi bằng vàng... đã đi vào lịch sử dân tộc như một Bạch Đằng, một Chi Lăng, một Đống Đa của thế kỷ XX."
            quoteAuthor="— Đại tướng Võ Nguyên Giáp"
            description="Đại hội đại biểu toàn quốc lần thứ II của Đảng (2/1951) đánh dấu bước phát triển mới. Cuộc kháng chiến tiến lên giành thắng lợi quyết định tại Điện Biên Phủ, buộc Pháp phải ký Hiệp định Genève, kết thúc chiến tranh, lập lại hòa bình ở Đông Dương."
            imageSrc={dienBienPhuImg}
            imageAlt="Bộ chỉ huy Chiến dịch Điện Biên Phủ"
          />
        </Reveal>
        <div className="timeline-line">
          {events.map(e => <Reveal key={e.id}><EventCard {...e} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
