export function isValidVNPhone(phoneRaw: string) {
  const phone = phoneRaw.replace(/\s+/g, "");
  // Mobile VN phổ biến: 03x, 05x, 07x, 08x, 09x (10 chữ số)
  return /^0[35789]\d{8}$/.test(phone);
}

export function required(value: string) {
  return value.trim().length > 0;
}
