# Hướng dẫn thêm logo ảnh

## Cách 1: Đặt file logo vào folder này

1. Đặt file logo của bạn vào đây (ví dụ: `logo.png`, `logo.svg`, `logo.jpg`)
2. Mở file `src/fe/components/Header.tsx`
3. Uncomment dòng này và sửa tên file:
   ```tsx
   <Logo width={160} height={42} imageUrl="/images/logo.png" />
   ```
4. Làm tương tự với `src/fe/components/Footer.tsx`

## Cách 2: Tải logo từ URL

Nếu logo được host ở nơi khác, dùng URL đầy đủ:

```tsx
<Logo width={160} height={42} imageUrl="https://example.com/logo.png" />
```

## Kích thước khuyến nghị

- Width: 400-600px
- Height: 100-150px
- Định dạng: PNG (nền trong suốt) hoặc SVG
- Dung lượng: < 100KB
