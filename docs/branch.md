---
sidebar_position: 6
---

# Làm việc với nhánh (branch)

:::note

Khi làm việc với project lớn, với mỗi tính năng thì ta sẽ tạo một nhánh riêng để làm chứ không làm tại nhánh chính và sau đó sẽ được hợp nhất với nhánh chính

:::

## Hiển thị tên nhánh đang đứng hiện tại

```bash
git branch --show-current
```

## Liệt kê nhánh

```bash
git branch // Liệt kê tất cả các branch đang có trong local repository
git branch -a // Liệt kê tất cả các branch đang có trong trong local và remote repository
```

## Tạo nhánh

- Tạo một nhánh mới dựa trên một nhánh được chỉ định và di chuyển đến nhánh vừa tạo:

```bash
git checkout -b <name_of_new_branch> <base_branch_name>
```

:::info

Trong đó:

- **<name_of_new_branch>** : tên của nhánh mới sẽ tạo
- **<base_branch>** : là tên của nhánh mà nhánh mới sẽ được tạo dựa trên nhánh này (Tùy chọn).

Nếu **<base_branch>** không được chỉ định thì sẽ tạo nhánh mới dựa trên nhánh hiện tại ta đang đứng.

:::

- Ví dụ:

```bash
git checkout -b feature/add-time-format develop // Tạo nhánh mới có tên "feature/add-time-format" dựa trên nhánh "develop"
git checkout -b feature/fix-bugs origin/develop // Tạo nhánh mới có tên "feature/fix-bugs" dựa trên nhánh "develop" ở remote repository
```

## Đổi tên nhánh

```bash
git branch -m <old_branch_name> <new_branch_name>
```

:::info

Trong đó:

- **<old_branch_name>** : tên nhánh hiện tại muốn đổi tên
- **<new_branch_name>** : tên mới muốn đổi

:::

- Ví dụ:

```bash
git branch -m feature/login feature/authentication
```

:::caution

Chú ý: Việc đổi tên nhánh tốt nhất là nên được thực hiện khi nhánh này chưa được public lên remote. Vì nếu đã được public lên remote thì sau khi ta đổi tên nhánh và push lên một lần nữa, một nhánh mới sẽ được tạo trên remote repository, điều này sẽ gây lặp nhánh không cần thiết ở trên remote.

:::

## Xóa nhánh

- Để thực hiện xóa nhánh ở **Local repository** , ta dùng lệnh bên dưới.

```bash
git branch -D <branch_name>
```

:::caution

Lưu ý khi xóa thì phải đang ở nhánh khác nhánh định xóa này. Khi thực hiện xóa, nhánh này ở trên **Remote repository** vẫn sẽ được giữ nguyên.

:::

- Để thực hiện xóa nhánh ở **Remote repository** , ta dùng lệnh bên dưới. Khi thực hiện xóa, nhánh này ở **Local repository** vẫn sẽ được giữ nguyên.

```bash
git push origin --delete <branch_name>
```

## Di chuyển sang nhánh khác

```bash
git checkout <branch_name>
git checkout <commit_hash>
```

:::caution

- Sau khi thực hiện lệnh `git checkout <commit_hash>`, **HEAD** trỏ tới một commit có mã <commit_hash> tương ứng, nó sẽ ở trong trạng thái "detached HEAD". Trong trạng thái này, ta không thể thực hiện các thao tác commit trực tiếp. Mọi thay đổi mới sẽ không thuộc bất kỳ branch nào và có thể bị mất khi ta chuyển đổi branch hoặc thực hiện các thao tác khác.
- Để quay lại trạng thái bình thường và tiếp tục làm việc trên một branch, ta nên tạo một branch mới từ commit đó.

:::

## Kéo nhánh từ remote về local

- Lệnh sau sẽ kéo nhánh từ remote về local nếu ở local chưa có:

```bash
git checkout -t <remote_branch_name>
// Ví dụ: git checkout -t origin/drop-down-component
```
