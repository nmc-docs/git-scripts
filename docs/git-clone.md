---
sidebar_position: 5
---

# Git clone

## Cú pháp

```bash
git clone <URL_kho_luu_tru>
```

:::info

Lệnh `git clone` được sử dụng để sao chép một kho lưu trữ Git từ một kho lưu trữ từ xa (remote repository) vào máy tính cá nhân (local repository). Thường thì bạn sẽ sử dụng lệnh này để bắt đầu làm việc trên một dự án hoặc để làm việc với một kho lưu trữ đã tồn tại trên máy tính của bạn.

:::

## Ví dụ

```bash
git clone https://github.com/minhchi1509/git-tutorial.git
```

:::note

Lệnh này sẽ sao chép kho lưu trữ từ xa từ GitHub vào thư mục `git-tutorial` trên máy tính của bạn.

Khi bạn sử dụng `git clone`, bạn sẽ có một bản sao địa phương của kho lưu trữ từ xa, và bạn có thể làm việc trên dự án đó và thực hiện các thao tác Git như `git pull`, `git push`, và `git commit` trên dự án đó.

:::
