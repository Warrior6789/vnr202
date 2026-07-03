import SectionHeader from './SectionHeader'
import EventCard from './EventCard'
import Reveal from './Reveal'
import { eventsByPeriod } from '../data/events'
import vietMinhImg from '../assets/images/699-ttxvn_20200509_bac_ho_2.jpg'

const events = eventsByPeriod(2)

export default function Section2() {
  return (
    <section id="section-2" className="py-24 px-6 bg-stone-950/50">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeader
            period="1946 - 1950"
            title="Đường lối kháng chiến"
            subtitle="Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh"
            quote="Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp!"
            quoteAuthor="— Hồ Chí Minh — Lời kêu gọi toàn quốc kháng chiến"
            description="Ba văn kiện lịch sử tạo nên đường lối kháng chiến hoàn chỉnh: Lời kêu gọi Toàn quốc kháng chiến (19/12/1946), Chỉ thị Toàn dân kháng chiến (22/12/1946), và tác phẩm 'Kháng chiến nhất định thắng lợi' (1947) của Tổng Bí thư Trường Chinh."
            imageSrc={vietMinhImg}
            imageAlt="Bộ đội Việt Minh tại căn cứ địa Việt Bắc"
          />
        </Reveal>
        <div className="timeline-line">
          {events.map(e => <Reveal key={e.id}><EventCard {...e} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
