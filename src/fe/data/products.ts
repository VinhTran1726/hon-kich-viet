export type Product = {
  id: string;
  title: string;
  subtitle: string;
  priceVND: number;
  compareAtVND?: number;
  badge?: "Sách" | "Combo";
  highlights: string[];
  coverKind: "single" | "combo";
  imageUrl?: string;
  description?: string;
  videoLink?: string;      // Link YouTube hoặc video
  qrCodeUrl?: string;      // QR code link đến trang chi tiết
  qrTargetUrl?: string;    // URL mà QR code sẽ dẫn đến
};

export const PRODUCTS: Product[] = [
  {
    id: "hon-kich-viet-tuong",
    title: "Hồn Kịch Việt - Tuồng",
    subtitle: "Khám phá nghệ thuật Hát Bội truyền thống",
    priceVND: 55000,
    compareAtVND: 150000,
    badge: "Sách",
    coverKind: "single",
    highlights: ["Tìm hiểu về nghệ thuật Tuồng cổ truyền", "Trang phục và động tác võ thuật đặc sắc", "Di sản văn hóa phi vật thể quốc gia"],
    imageUrl: "/images/tuong-cover.png",
    description: "Hát bội (Tuồng) là loại hình nghệ thuật sân khấu truyền thống với trang phục hoa lệ, động tác võ thuật và âm nhạc uy nghiêm. Mỗi trang sách đều chứa đựng tinh hoa nghệ thuật hoàng gia phương Bắc.",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    qrCodeUrl: "/images/qr-tuong.png",
    qrTargetUrl: "/tuong",
  },
  {
    id: "hon-kich-viet-mua-roi",
    title: "Hồn Kịch Việt - Múa Rối Nước",
    subtitle: "Nghệ thuật biểu diễn rối trên mặt nước",
    priceVND: 55000,
    compareAtVND: 150000,
    badge: "Sách",
    coverKind: "single",
    highlights: ["Nghệ thuật rối nước độc đáo của Việt Nam", "Kỹ thuật điều khiển rối dưới nước", "Di sản UNESCO được công nhận 2008"],
    imageUrl: "/images/mua-roi-cover.png",
    description: "Múa rối nước là nghệ thuật biểu diễn độc đáo ra đời từ thế kỷ XI tại đồng bằng Bắc Bộ. Kết hợp điêu khắc gỗ, âm nhạc dân gian và kỹ thuật điều khiển rối dưới nước tạo nên màn trình diễn kỳ thú.",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    qrCodeUrl: "/images/qr-mua-roi.png",
    qrTargetUrl: "/mua-roi-nuoc",
  },
  {
    id: "hon-kich-viet-don-ca",
    title: "Hồn Kịch Việt - Đờn Ca Tài Tử",
    subtitle: "Âm nhạc dân gian cổ truyền Nam Bộ",
    priceVND: 55000,
    compareAtVND: 150000,
    badge: "Sách",
    coverKind: "single",
    highlights: ["Âm nhạc dân gian với giai điệu du dương", "20 bài hát truyền thống Nam Bộ", "Nghệ thuật ngẫu hứng độc đáo"],
    imageUrl: "/images/don-ca-cover.png",
    description: "Đờn ca tài tử là loại hình âm nhạc dân gian cổ truyền Nam Bộ hình thành từ cuối thế kỷ XIX. Với giai điệu ngâu nga, du dương và sự kết hợp hoa hợp giữa các nhạc cụ dân tộc.",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    qrCodeUrl: "/images/qr-don-ca.png",
    qrTargetUrl: "/don-ca-tai-tu",
  },
  {
    id: "hon-kich-viet-combo",
    title: "Combo Hồn Kịch Việt",
    subtitle: "Trọn bộ quà tặng tri ân người giữ hồn Việt",
    priceVND: 150000,
    compareAtVND: 419000,
    badge: "Combo",
    coverKind: "combo",
    highlights: ["Trao trọn vẹn tấm lòng trong từng món quà", "Postcard nghệ thuật - những mảnh ghép tâm hồn", "Giới hạn số lượng - quý như tình cảm dành tặng"],
    imageUrl: "/images/combo-cover.png",
    description: "Không chỉ là một cuốn sách, đây là món quà tâm hồn dành cho những ai trân trọng bản sắc dân tộc. Bookmark kim loại ghi dấu từng trang văn, postcard nghệ thuật lưu giữ khoảnh khắc xúc động, tất cả được gói ghém trong hộp quà sang trọng. Tặng người thân, tặng bạn bè, hay tặng chính mình - vì ai cũng xứng đáng được chạm đến vẻ đẹp của truyền thống.",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    qrCodeUrl: "/images/logo.png",
    qrTargetUrl: "/cheo",
  },
];
