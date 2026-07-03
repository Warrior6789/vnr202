import SectionHeader from './SectionHeader'
import EventCard from './EventCard'
import Reveal from './Reveal'
import { eventsByPeriod } from '../data/events'
import danQuanNamBoImg from '../assets/images/Danquannambo.jpg'

const events = eventsByPeriod(1)

export default function Section1() {
  return (
    <section id="section-1" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeader
            period="1945 - 1946"
            title="Chống thù trong giặc ngoài"
            subtitle="Ngàn cân treo sợi tóc"
            quote="Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!"
            quoteAuthor="— Hồ Chí Minh"
            description="Sau Cách mạng Tháng Tám 1945, nước Việt Nam Dân chủ Cộng hòa non trẻ phải đối mặt với muôn vàn khó khăn: giặc đói, giặc dốt, giặc ngoại xâm. Hơn 20 vạn quân Tưởng từ phía Bắc, quân Pháp từ phía Nam ồ ạt kéo vào. Đảng và Chủ tịch Hồ Chí Minh đã thể hiện sách lược vô cùng khôn khéo, mềm dẻo nhưng kiên quyết."
            imageSrc={danQuanNamBoImg}
            imageAlt="Dân quân Nam Bộ kháng chiến"
          />
        </Reveal>
        <div className="timeline-line">
          {events.map(e => <Reveal key={e.id}><EventCard {...e} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
