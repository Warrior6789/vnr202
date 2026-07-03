import hoChiMinhImg from '../assets/images/hochiminh.jpg'
import voNguyenGiapImg from '../assets/images/vonguyengiap.jpg'
import truongChinhImg from '../assets/images/truongchinh.jpg'
import phamVanDongImg from '../assets/images/PhamVanĐong.jpg'

export interface Figure {
  id: string
  name: string
  role: string
  years: string
  image: string
  quote: string
  bio: string
}

export const figures: Figure[] = [
  { id: 'hcm', name: 'Hồ Chí Minh', role: 'Chủ tịch nước, Chủ tịch Đảng', years: '1890 - 1969',
    image: hoChiMinhImg,
    quote: 'Không có gì quý hơn độc lập, tự do.',
    bio: 'Người sáng lập Đảng Cộng sản Việt Nam, đọc Tuyên ngôn Độc lập ngày 2/9/1945, là linh hồn của đường lối kháng chiến toàn dân, toàn diện, trường kỳ, tự lực cánh sinh.' },
  { id: 'vng', name: 'Võ Nguyên Giáp', role: 'Tổng Tư lệnh Quân đội Nhân dân Việt Nam', years: '1911 - 2013',
    image: voNguyenGiapImg,
    quote: 'Chiến thắng Điện Biên Phủ như một mốc son chói lọi bằng vàng.',
    bio: 'Trực tiếp chỉ huy Chiến dịch Biên giới 1950 và Chiến dịch Điện Biên Phủ 1954, người đặt nền móng cho nghệ thuật quân sự Việt Nam hiện đại.' },
  { id: 'tc', name: 'Trường Chinh', role: 'Tổng Bí thư Đảng Cộng sản Đông Dương', years: '1907 - 1988',
    image: truongChinhImg,
    quote: 'Kháng chiến nhất định thắng lợi.',
    bio: 'Tác giả tác phẩm lý luận "Kháng chiến nhất định thắng lợi" (1947), hệ thống hóa đường lối kháng chiến toàn dân, toàn diện, trường kỳ, tự lực cánh sinh của Đảng.' },
  { id: 'pvd', name: 'Phạm Văn Đồng', role: 'Trưởng đoàn đàm phán tại Hội nghị Genève', years: '1906 - 2000',
    image: phamVanDongImg,
    quote: 'Đấu tranh ngoại giao là một mặt trận quan trọng của cuộc kháng chiến.',
    bio: 'Đại diện phái đoàn Việt Nam Dân chủ Cộng hòa tại Hội nghị Genève 1954, góp phần buộc Pháp phải công nhận độc lập, chủ quyền của Việt Nam.' },
]
