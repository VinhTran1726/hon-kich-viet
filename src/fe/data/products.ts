export type Product = {
  id: string;
  title: string;           // ← ĐỔI TÊN SẢN PHẨM Ở ĐÂY
  subtitle: string;        // ← ĐỔI MÔ TẢ NGẮN Ở ĐÂY
  priceVND: number;
  compareAtVND?: number;
  badge?: "Sách" | "Combo";
  highlights: string[];    // ← THÊM/SỬA ĐIỂM NỔI BẬT Ở ĐÂY
  coverKind: "single" | "combo";
  imageUrl?: string;       // ← THÊM ĐƯỜNG DẪN ẢNH Ở ĐÂY (VD: "/images/sach.jpg")
  description?: string;    // ← THÊM MÔ TẢ CHI TIẾT Ở ĐÂY
  videoLink?: string;      // ← THÊM LINK VIDEO/CLIP Ở ĐÂY (YouTube, Google Drive, etc.)
  qrCodeUrl?: string;      // ← THÊM ĐƯỜNG DẪN ẢNH QR CODE Ở ĐÂY (VD: "/images/qr-code.png")
};

export const PRODUCTS: Product[] = [
  {
    id: "hon-kich-viet-single",
    title: "Hồn Kịch Việt",
    subtitle: "Hành trình tìm về cội nguồn văn hóa sân khấu dân gian",
    priceVND: 289000,
    compareAtVND: 339000,
    badge: "Sách",
    coverKind: "single",
    highlights: ["Từng trang sách thấm đẫm hồn Việt", "Biên soạn tâm huyết từ chuyên gia", "Món quà ý nghĩa cho người yêu văn hóa"],
    imageUrl: "/images/placeholder-single.svg",
    description: "Mở trang sách là mở cánh cửa quay về với tuổi thơ dân tộc - nơi tiếng hát chèo vang vọng, múa tuồng rực rỡ, cải lương da diết. Mỗi câu chữ đều chứa đựng tinh hoa ngàn năm, mỗi trang giấy đều là lời ru của tổ tiên. Hãy để cuốn sách này dẫn lối bạn về với chính mình, về với cội nguồn mà có lẽ đã quá lâu bạn chưa ghé thăm.",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",  // ← THAY BẰNG LINK VIDEO THẬT
    qrCodeUrl: "/images/logo.png",  // ← THAY BẰNG ĐƯỜNG DẪN ẢNH QR CODE THẬT
  },
  {
    id: "hon-kich-viet-combo",
    title: "Combo Hồn Kịch Việt",
    subtitle: "Trọn bộ quà tặng tri ân người giữ hồn Việt",
    priceVND: 349000,
    compareAtVND: 419000,
    badge: "Combo",
    coverKind: "combo",
    highlights: ["Trao trọn vẹn tấm lòng trong từng món quà", "Postcard nghệ thuật - những mảnh ghép tâm hồn", "Giới hạn số lượng - quý như tình cảm dành tặng"],
    imageUrl: "/images/placeholder-combo.svg",
    description: "Không chỉ là một cuốn sách, đây là món quà tâm hồn dành cho những ai trân trọng bản sắc dân tộc. Bookmark kim loại ghi dấu từng trang văn, postcard nghệ thuật lưu giữ khoảnh khắc xúc động, tất cả được gói ghém trong hộp quà sang trọng. Tặng người thân, tặng bạn bè, hay tặng chính mình - vì ai cũng xứng đáng được chạm đến vẻ đẹp của truyền thống.",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",  // ← THAY BẰNG LINK VIDEO THẬT
    qrCodeUrl: "/images/logo.png",  // ← Dùng logo tạm, thay bằng QR code thật sau
  },
];
