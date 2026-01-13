import Image from "next/image";

export function Logo({ 
  width = 180, 
  height = 48, 
  imageUrl 
}: { 
  width?: number; 
  height?: number; 
  imageUrl?: string;  // ← Thêm prop để dùng ảnh logo thật
}) {
  // Nếu có ảnh logo thì dùng ảnh, không thì dùng SVG
  if (imageUrl) {
    return (
      <Image 
        src={imageUrl} 
        alt="Hồn Kịch Việt" 
        width={width} 
        height={height}
        style={{ objectFit: 'contain' }}
        priority
      />
    );
  }

  // SVG logo mặc định
  return (
    <svg width={width} height={height} viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decoration */}
      <rect x="0" y="20" width="8" height="8" fill="#d4af37" opacity="0.2" />
      <rect x="172" y="20" width="8" height="8" fill="#d4af37" opacity="0.2" />
      
      {/* Main text */}
      <text
        x="90"
        y="28"
        fontFamily="'Noto Serif', Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill="#d4af37"
        textAnchor="middle"
        letterSpacing="1.5"
        style={{ textShadow: "0 0 12px rgba(212,175,55,0.3)" }}
      >
        HỒN KỊCH VIỆT
      </text>
      
      {/* Decorative line top */}
      <line x1="15" y1="8" x2="75" y2="8" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      <line x1="105" y1="8" x2="165" y2="8" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      
      {/* Decorative line bottom */}
      <line x1="15" y1="40" x2="75" y2="40" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      <line x1="105" y1="40" x2="165" y2="40" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
      
      {/* Center ornament */}
      <circle cx="90" cy="8" r="3" fill="#b82e2e" opacity="0.7" />
      <circle cx="90" cy="40" r="3" fill="#b82e2e" opacity="0.7" />
    </svg>
  );
}
