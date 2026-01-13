export function isValidVNPhone(phoneRaw: string) {
  const phone = phoneRaw.replace(/\s+/g, "");
  // đơn giản: 10 số, bắt đầu bằng 0
  return /^0\d{9}$/.test(phone);
}

export function required(value: string) {
  return value.trim().length > 0;
}
