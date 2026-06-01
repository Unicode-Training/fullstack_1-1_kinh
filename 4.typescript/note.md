# TypeScript

## Tổng quan

- Kế thừa toàn bộ từ js
- Đóng vai trò là 1 trình biên dịch: Cú pháp typescript -> Trình biên dịch -> Chuyển về js
- Kiểu dữ liệu: Tĩnh (C++, Java,...)
- Báo lỗi ngay trong quá trình Compiler (Biên dịch)
- Gợi ý: IDE gợi ý rất tốt cấc hàm, kiểu mà định nghĩa ở phía TypeScript

## Setup dự án

- Cài typescript: `npm i typescript -g`
- Khởi tạo tsconfig.json: `tsc --init`
- Biên dịch dự án: `tsc`, `tsc --watch`
- Chạy trực tiếp typescript không cần biên dịch: `npx tsx watch duong-dan-file-ts`

## Kiểu dữ liệu

1. Cơ bản

string, number, boolean, null, undefined, symbol, BigInt

Cú pháp khai báo:

```ts
let tenbien: tenkieudulieu = giatri;
const tenbien: tenkieudulieu = giatri;
const tenHam = (thamso1: tenkieu, thamso2: tenkieu): tenkieu => {
  //Code
};
```

2. any, unknown

- any: Chấp nhận tất cả kiểu
- unknown: Chấp nhận tất cả kiểu, nhưng phải kiểm tra trước khi sử dụng

Lưu ý khi dùng as: Không thể chuyển từ kiểu dữ liệu sang kiểu dữ liệu khác, bắt buộc phải về unknown trước

3. array

4. tuple

5. object

6. function

7. Kiểu tự định nghĩa

- type

- interface
