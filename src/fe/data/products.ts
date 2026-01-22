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
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    qrCodeUrl: "/images/logo.png",  // Tạm dùng logo, thay bằng QR thật: /images/qr-tuong.png
    qrTargetUrl: "/tuong",  // QR dẫn đến trang Nghệ thuật Tuồng Cổ
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
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    qrCodeUrl: "/images/logo.png",  // Tạm dùng logo, thay bằng QR thật: /images/qr-cheo.png
    qrTargetUrl: "/cheo",  // QR dẫn đến trang Hát Chèo Dân Gian
  },
];
