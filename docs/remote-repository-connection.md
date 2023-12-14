---
sidebar_position: 4
---

# Liên kết/Hủy liên kết project với Remote repository

## Kiểm tra đã liên kết với Remote repository nào chưa?

```bash
git remote -v
```

:::note

Nếu không có gì thì tức là project của ta chưa liên kết với **Remote repository** nào. Còn nếu xuất hiện như ảnh dưới đây thì là đã được liên kết

- Mặc định tên của **Remote repository** là: `origin`
- Muốn đổi tên **Remote repository** : `git remote rename <Old_name> <New_name>`

![1696263536552](image/remote-repository-connection/1696263536552.png)

:::

## Connect to Remote repository

- Để liên kết với **Remote repository** , ta dùng lệnh sau:

```bash
git remote add origin <remote_repository_URL>
```

- Ví dụ:

```bash
git remote add origin https://github.com/minhchi1509/bababa.git
```

## Disconnect to Remote repository

- Nếu ta muốn hủy liên kết với **Remote repository** , ta dùng lệnh sau:

```bash
git remote remove origin
```
