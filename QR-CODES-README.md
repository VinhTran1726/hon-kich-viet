# 🎭 Hồn Kịch Việt - QR Codes cho 3 trang phụ

## 📱 3 Mã QR Code để in và sử dụng

### 1️⃣ Nghệ thuật Tuồng Cổ

**URL:** `/tuong`  
**Production:** `https://hon-kich-viet.vercel.app/tuong`  
**Màu chủ đạo:** Đỏ truyền thống (#8B1E1E)

**Nội dung:**

- Trang phục rực rỡ
- Âm nhạc trang trọng
- Võ thuật đẹp mắt
- Nội dung lịch sử

**Cách tạo QR:**

1. Vào: https://www.qr-code-generator.com/
2. Nhập URL: `https://hon-kich-viet.vercel.app/tuong`
3. Chọn màu: Đỏ (#8B1E1E)
4. Download PNG (300x300px hoặc lớn hơn)
5. Lưu vào: `public/images/qr-tuong.png`

---

### 2️⃣ Hát Chèo Dân Gian

**URL:** `/cheo`  
**Production:** `https://hon-kich-viet.vercel.app/cheo`  
**Màu chủ đạo:** Xanh lục (#2D5A3D)

**Nội dung:**

- Gần gũi dân dã
- Hài hước châm biếm
- Âm nhạc dân gian
- Trang phục giản dị

**Cách tạo QR:**

1. Vào: https://www.qr-code-generator.com/
2. Nhập URL: `https://hon-kich-viet.vercel.app/cheo`
3. Chọn màu: Xanh lục (#2D5A3D)
4. Download PNG (300x300px hoặc lớn hơn)
5. Lưu vào: `public/images/qr-cheo.png`

---

### 3️⃣ Cải Lương Miền Nam

**URL:** `/cai-luong`  
**Production:** `https://hon-kich-viet.vercel.app/cai-luong`  
**Màu chủ đạo:** Vàng ấm (#D4A650)

**Nội dung:**

- Giai điệu da diết
- Cảm xúc sâu lắng
- Câu chuyện đời thường
- Trang phục dân gian

**Cách tạo QR:**

1. Vào: https://www.qr-code-generator.com/
2. Nhập URL: `https://hon-kich-viet.vercel.app/cai-luong`
3. Chọn màu: Vàng (#D4A650)
4. Download PNG (300x300px hoặc lớn hơn)
5. Lưu vào: `public/images/qr-cai-luong.png`

---

## 🖨️ In QR Code

### Khuyến nghị:

- **Kích thước in:** Tối thiểu 2x2 cm để quét dễ dàng
- **Định dạng:** PNG hoặc SVG (vector)
- **Chất lượng:** 300 DPI trở lên
- **Vị trí:** Trên poster, brochure, bookmark, postcard

### Template in:

```
┌─────────────────────────┐
│   [QR CODE 3x3 cm]      │
│                         │
│  Quét để tìm hiểu về:   │
│   NGHỆ THUẬT TUỒNG CỔ   │
│                         │
│  hon-kich-viet.vercel.  │
│         app/tuong       │
└─────────────────────────┘
```

---

## 🔧 Cách thay đổi background

Mỗi trang đã có background riêng:

- **Tuồng:** Đỏ (#8B1E1E)
- **Chèo:** Xanh lục (#2D5A3D)
- **Cải lương:** Vàng (#D4A650)

### Để thay background bằng ảnh:

1. Bỏ ảnh vào `public/images/` (ví dụ: `tuong-bg.jpg`)
2. Mở file `app/tuong/page.tsx`
3. Tìm dòng:
   ```tsx
   backgroundImage: "url('/images/hero-bg.jpg')";
   ```
4. Đổi thành:
   ```tsx
   backgroundImage: "url('/images/tuong-bg.jpg')";
   ```

---

## ✅ Kiểm tra local

1. Chạy: `npm run dev`
2. Truy cập:
   - http://localhost:3000/tuong
   - http://localhost:3000/cheo
   - http://localhost:3000/cai-luong

---

## 🚀 Deploy lên Vercel

3 trang mới sẽ tự động deploy khi push code:

```bash
git add .
git commit -m "Add 3 sub-pages for QR codes"
git push origin main
```

Vercel sẽ deploy trong 2-3 phút.

---

## 📝 Thay đổi nội dung

Muốn đổi tiêu đề/nội dung của trang nào:

- Mở file `app/tuong/page.tsx` (hoặc cheo/cai-luong)
- Sửa text trong các thẻ `<h1>`, `<p>`, `title`, `desc`
- Save và push lên Git

**Code đã được tách riêng nên KHÔNG ẢNH HƯỞNG trang chính!** ✅
