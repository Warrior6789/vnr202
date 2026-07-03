import tuyenNgonDocLapImg from '../assets/images/images (1).jpg'
import boPhieuHangVoiImg from '../assets/images/bac ho di bo phieu hang voi.jpg'
import loiKeuGoiToanQuocImg from '../assets/images/loi-keu-goi-toan-quoc-khang-chien-toksjiem.png'
import toanDanKhangChienImg from '../assets/images/picture1_9.jpg'
import chienDichBienGioiImg from '../assets/images/chiendichbiengioi.jpg'

export type LocationId = 'hanoi' | 'vietbac' | 'biengioi' | 'dienbienphu' | 'chauau'

export interface HistoryEvent {
  id: string
  date: string
  title: string
  summary: string
  detail: string
  takeaway?: string
  image?: string
  period: 1 | 2 | 3
  location: LocationId
}

export const locations: Record<LocationId, { name: string; note: string }> = {
  hanoi: { name: 'Hà Nội', note: 'Trung tâm chính trị, đồng bằng sông Hồng' },
  vietbac: { name: 'Việt Bắc', note: 'Căn cứ địa kháng chiến — Tuyên Quang, Thái Nguyên, Bắc Kạn' },
  biengioi: { name: 'Cao Bằng — Lạng Sơn', note: 'Tuyến biên giới Việt — Trung' },
  dienbienphu: { name: 'Điện Biên Phủ', note: 'Lòng chảo Mường Thanh, tỉnh Lai Châu' },
  chauau: { name: 'Châu Âu', note: 'Paris và Genève — ngoài lãnh thổ Việt Nam' },
}

export const events: HistoryEvent[] = [
  { id: 'e1', date: '02/09/1945', title: 'Tuyên ngôn Độc lập', period: 1, location: 'hanoi',
    summary: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình',
    detail: 'Bản Tuyên ngôn khẳng định quyền tự do, độc lập của dân tộc Việt Nam, khai sinh nước Việt Nam Dân chủ Cộng hòa — nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á.',
    takeaway: 'Mở ra kỷ nguyên mới cho dân tộc Việt Nam',
    image: tuyenNgonDocLapImg },
  { id: 'e2', date: '01/1946', title: 'Tổng tuyển cử đầu tiên', period: 1, location: 'hanoi',
    summary: 'Cuộc Tổng tuyển cử bầu Quốc hội đầu tiên của nước Việt Nam',
    detail: 'Ngày 6/1/1946, lần đầu tiên trong lịch sử, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên, không phân biệt giới tính, dân tộc, tôn giáo, đã đi bỏ phiếu bầu Quốc hội. Hơn 89% cử tri đã tham gia.',
    takeaway: 'Khẳng định tính hợp pháp của chính quyền cách mạng',
    image: boPhieuHangVoiImg },
  { id: 'e3', date: '06/03/1946', title: 'Hiệp định Sơ bộ', period: 1, location: 'hanoi',
    summary: 'Ký Hiệp định Sơ bộ Việt - Pháp',
    detail: 'Sách lược "hòa để tiến": Pháp công nhận Việt Nam là quốc gia tự do trong Liên bang Đông Dương. Đổi lại, Việt Nam đồng ý cho 15.000 quân Pháp vào miền Bắc thay thế quân Tưởng. Đây là sách lược "đuổi" 20 vạn quân Tưởng ra khỏi nước.',
    takeaway: 'Sách lược khôn khéo: tránh đối đầu cùng lúc với nhiều kẻ thù' },
  { id: 'e4', date: '14/09/1946', title: 'Tạm ước 14/9', period: 1, location: 'chauau',
    summary: 'Ký Tạm ước Việt - Pháp tại Paris',
    detail: 'Chủ tịch Hồ Chí Minh ký Tạm ước 14/9 nhằm kéo dài thời gian hòa hoãn, tranh thủ thời gian chuẩn bị lực lượng cho cuộc kháng chiến lâu dài mà Đảng đã dự đoán chắc chắn sẽ xảy ra.',
    takeaway: 'Tranh thủ thời gian chuẩn bị kháng chiến' },

  { id: 'e5', date: '19/12/1946', title: 'Toàn quốc kháng chiến', period: 2, location: 'hanoi',
    summary: 'Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến',
    detail: 'Lời kêu gọi lịch sử vang lên trên sóng Đài Tiếng nói Việt Nam: "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!" Toàn dân nhất tề đứng lên kháng chiến.',
    takeaway: 'Văn kiện đầu tiên của đường lối kháng chiến',
    image: loiKeuGoiToanQuocImg },
  { id: 'e6', date: '22/12/1946', title: 'Chỉ thị Toàn dân kháng chiến', period: 2, location: 'vietbac',
    summary: 'Ban Thường vụ Trung ương Đảng ra Chỉ thị Toàn dân kháng chiến',
    detail: 'Chỉ thị nêu rõ mục đích, tính chất, phương châm kháng chiến: toàn dân, toàn diện, trường kỳ, tự lực cánh sinh. Kháng chiến trên tất cả các mặt: quân sự, chính trị, kinh tế, văn hóa, ngoại giao.',
    takeaway: 'Xác định phương châm chiến lược kháng chiến',
    image: toanDanKhangChienImg },
  { id: 'e7', date: '1947', title: 'Kháng chiến nhất định thắng lợi', period: 2, location: 'vietbac',
    summary: 'Tổng Bí thư Trường Chinh viết tác phẩm lý luận quan trọng',
    detail: 'Tác phẩm phân tích toàn diện cuộc kháng chiến: vì sao phải kháng chiến, kháng chiến sẽ diễn ra như thế nào, tại sao nhất định thắng lợi. Hoàn chỉnh đường lối kháng chiến của Đảng.',
    takeaway: 'Văn kiện thứ ba hoàn chỉnh đường lối kháng chiến' },
  { id: 'e8', date: 'Thu Đông 1947', title: 'Chiến thắng Việt Bắc', period: 2, location: 'vietbac',
    summary: 'Đập tan cuộc tấn công quy mô lớn của thực dân Pháp lên Việt Bắc',
    detail: 'Pháp huy động 12.000 quân nhảy dù, đổ bộ đường thủy, tiến công đường bộ nhằm tiêu diệt cơ quan đầu não kháng chiến. Quân ta phản công thắng lợi, bảo vệ vững chắc căn cứ địa, tiêu diệt hàng nghìn quân địch.',
    takeaway: 'Bảo vệ căn cứ địa cách mạng, chuyển hướng cuộc kháng chiến' },
  { id: 'e9', date: '1950', title: 'Chiến dịch Biên giới', period: 2, location: 'biengioi',
    summary: 'Chiến dịch Biên giới Thu Đông 1950 — bước ngoặt của cuộc kháng chiến',
    detail: 'Chủ tịch Hồ Chí Minh trực tiếp ra mặt trận. Quân ta giải phóng một vùng biên giới rộng lớn, mở thông đường liên lạc quốc tế, khai thông con đường tiếp nhận viện trợ. Tiêu diệt và bắt sống hơn 8.000 quân địch.',
    takeaway: 'Giành quyền chủ động chiến lược trên chiến trường chính',
    image: chienDichBienGioiImg },

  { id: 'e10', date: '02/1951', title: 'Đại hội Đảng lần thứ II', period: 3, location: 'vietbac',
    summary: 'Đại hội đại biểu toàn quốc lần thứ II tại Tuyên Quang',
    detail: 'Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam. Đại hội thông qua Chính cương, Điều lệ mới, bầu Ban Chấp hành Trung ương mới do Hồ Chí Minh làm Chủ tịch, Trường Chinh làm Tổng Bí thư.',
    takeaway: 'Đánh dấu bước trưởng thành của Đảng' },
  { id: 'e11', date: '1953-1954', title: 'Cải cách ruộng đất', period: 3, location: 'vietbac',
    summary: 'Thực hiện cải cách ruộng đất, động viên sức dân kháng chiến',
    detail: "Quốc hội thông qua Luật Cải cách ruộng đất (12/1953). Thực hiện khẩu hiệu 'Người cày có ruộng', xóa bỏ chế độ chiếm hữu ruộng đất phong kiến, nâng cao tinh thần chiến đấu của nông dân.",
    takeaway: 'Bồi dưỡng sức dân, tạo hậu phương vững chắc' },
  { id: 'e12', date: '13/03/1954', title: 'Mở màn Điện Biên Phủ', period: 3, location: 'dienbienphu',
    summary: 'Chiến dịch Điện Biên Phủ bắt đầu',
    detail: 'Bộ đội ta nổ súng tấn công tập đoàn cứ điểm Điện Biên Phủ. Chiến dịch chia làm 3 đợt tiến công: Đợt 1 (13-17/3) tiêu diệt Him Lam, Độc Lập; Đợt 2 (30/3-26/4) đánh chiếm các ngọn đồi phía Đông; Đợt 3 (1-7/5) tổng công kích.',
    takeaway: 'Trận quyết chiến chiến lược' },
  { id: 'e13', date: '07/05/1954', title: 'Chiến thắng Điện Biên Phủ', period: 3, location: 'dienbienphu',
    summary: 'Lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm Đờ Cát',
    detail: 'Sau 56 ngày đêm chiến đấu anh dũng, quân ta toàn thắng. Tướng Đờ Cát cùng toàn bộ Bộ Tham mưu bị bắt sống. 16.200 quân địch bị tiêu diệt và bắt sống. Chiến thắng lừng lẫy năm châu, chấn động địa cầu.',
    takeaway: 'Kết thúc cuộc kháng chiến chống Pháp thắng lợi' },
  { id: 'e14', date: '21/07/1954', title: 'Hiệp định Genève', period: 3, location: 'chauau',
    summary: 'Ký kết Hiệp định Genève về đình chỉ chiến sự ở Đông Dương',
    detail: 'Pháp và các nước công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, Lào, Campuchia. Miền Bắc Việt Nam hoàn toàn giải phóng, tạo tiền đề cho công cuộc thống nhất đất nước sau này.',
    takeaway: 'Thắng lợi to lớn của ngoại giao Việt Nam' },
]

export const eventsByPeriod = (period: 1 | 2 | 3) => events.filter(e => e.period === period)
export const eventsByLocation = (location: LocationId) => events.filter(e => e.location === location)
