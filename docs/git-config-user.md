---
sidebar_position: 2
---

# Cấu hình user cho git

## Cấu hình user trong git để làm gì?

- Cấu hình người dùng trong Git là quá trình thiết lập thông tin cá nhân của người sử dụng, giúp xác định ai đã thực hiện một số thay đổi trong dự án. Thông tin này bao gồm tên và địa chỉ email của người dùng. Các tác dụng chính của việc cấu hình người dùng trong Git bao gồm:

1. **Xác định người thực hiện thay đổi:**
   - Khi bạn commit một thay đổi vào một repository Git, thông tin về người commit (tên và địa chỉ email) sẽ được lưu trữ. Điều này giúp xác định ai đã thực hiện một số thay đổi cụ thể trong lịch sử của dự án.
2. **Liên kết với tài khoản Git:**
   - Khi bạn cấu hình tên và địa chỉ email trong Git, bạn có thể đảm bảo rằng thông tin này tương thích với tài khoản Git của bạn. Điều này quan trọng khi bạn làm việc với các dự án có nhiều người đóng góp, và nó giúp đảm bảo tính minh bạch trong quá trình theo dõi người thực hiện thay đổi.
3. **Truyền thông thông tin liên quan đến dự án:**
   - Thông tin về người commit thường được sử dụng trong các hệ thống quản lý mã nguồn và các dịch vụ liên quan để theo dõi và hiển thị lịch sử thay đổi. Điều này giúp quản trị dự án và nhóm phát triển theo dõi ai đã làm gì và khi nào.

## Xem thông tin user trong git

- Để xem thông tin user ở **global** (áp dụng cho toàn bộ các thư mục dự án trên máy), ta gõ lệnh:

```bash
git config -l --global
```

:::note

Thông tin user mà đã được cài đặt **global** sẽ được lưu ở trong file `.gitconfig` ở đường dẫn gốc (ví dụ như `C:\Users\MINH CHI\.gitconfig`)

:::

- Để xem thông tin user ở **local** (tức là trong 1 project cụ thể), ta vào thư mục dự án và dùng lệnh:

```bash
git config user.email && git config user.name
```

## Cách để cấu hình user trong git

- Để thiết lập thông tin user ở **global**, ta dùng lệnh:

```bash
git config --global user.email "your_global_email@abc.example"
git config --global user.name "Your global username"
```

- Để thiết lập thông tin user ở **local**, ta vào thư mục dự án và dùng lệnh:

```bash
git config user.email "your_local_email@abc.example"
git config user.name "Your local username"
```
