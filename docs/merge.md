---
sidebar_position: 7
---

# Hợp nhất nhánh

:::note

Hợp nhất nhánh là quá trình hợp nhất code từ một nhánh vào nhánh hiện tại

:::

## Git pull

- Câu lệnh sau sẽ kéo toàn bộ thay đổi mới nhất từ nhánh ở **Remote** về nhánh cùng tên ở **Local** :

```bash
git pull
```

## Git merge

- Câu lệnh sau sẽ merge một nhánh khác vào nhánh hiện tại:

```bash
git merge <local_branch_name>
```

- Câu lệnh sau sẽ merge một nhánh ở **Remote** vào nhánh hiện tại:

```bash
git merge origin/<remote_branch_name>
```

- Khi thực hiện merge từ một nhánh khác, sẽ có thể xảy ra xung đột. Nếu xảy ra xung đột mà ta muốn hủy bỏ, không muốn merge nữa, thì dùng lệnh:

```bash
git merge --abort
```

- Nếu thực hiện merge thành công, nhưng lại muốn không merge nữa, muốn quay trở lại trạng thái trước khi merge, dùng lệnh:

```bash
git reset --merge
```
