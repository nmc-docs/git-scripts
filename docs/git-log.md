---
sidebar_position: 11
---

# Git log

## Xem thông tin tất cả các commit

- Ta sử dụng lệnh sau để xem tất cả các commit cho đến trạng thái hiện tại mà con trỏ HEAD đang trỏ đến, thông tin mỗi commit sẽ hiển thị trên một dòng:

```bash
git log --oneline
```

![1700066732125](image/git-log/1700066732125.png)

- Nếu muốn hiển thị chi tiết thông tin của tất cả commit:

```bash
git log
```

## Xem thông tin chi tiết của một commit

```bash
git show <commit_hash>
```

:::note

- Lưu ý: sử dụng từ 4 ký tự trở lên cho mã commit hash

:::

![1700066780706](image/git-log/1700066780706.png)

## Xem thông tin tất cả các commit được tạo nhưng chưa đẩy lên remote repository

```bash
git log origin/main..HEAD
```

:::info

Lệnh `git log origin/main..HEAD` được sử dụng để xem lịch sử các commit trên nhánh hiện tại từ commit gốc (origin/main) đến commit mới nhất (HEAD).

Giải thích chi tiết:

- `git log` là lệnh để xem lịch sử các commit trên nhánh hiện tại.
- `origin/main` là một tham chiếu đến commit gốc trên nhánh `main` trên remote repository (thông thường là origin). Nó đại diện cho commit mới nhất trên nhánh `main` trên remote repository.
- `HEAD` là một tham chiếu đến commit mới nhất trên nhánh hiện tại mà ta đang làm việc.

Khi chạy lệnh `git log origin/main..HEAD`, Git sẽ hiển thị danh sách các commit được thực hiện trên nhánh hiện tại từ commit gốc (origin/main) đến commit mới nhất (HEAD). Điều này giúp ta xem các thay đổi và thông tin về các commit đã được thực hiện trên nhánh của bạn so với commit gốc trên remote repository.

:::

:::caution

- Tùy thuộc vào tên remote repository (**origin**) và nhánh trên remote (**main**) mà điều chỉnh tên cho phù hợp.

:::
