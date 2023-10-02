---
sidebar_position: 8
---

# Di chuyển trạng thái commit

:::note

Khi đẩy code lên remote repository thì mỗi commit sẽ có một mã hash riêng tương ứng. Ta có thể dựa vào mã này để có thể di chuyển trạng thái code hiện tại đến trạng thái code với mã commit đó.

:::

## Con trỏ HEAD

- Trong Git, **HEAD** là một con trỏ đặc biệt trỏ đến commit hiện tại trong branch đang làm việc. Nó thường được sử dụng để đại diện cho commit cuối cùng trong branch hiện tại.
- **HEAD** có thể trỏ đến các commit trực tiếp, hoặc trỏ đến tên branch hiện tại (ví dụ: `master`, `develop`,...). Khi ta thực hiện các thao tác commit, checkout, hoặc chuyển branch, **HEAD** sẽ được cập nhật để tham chiếu đến commit mới nhất.
- Với **HEAD** , ta có thể tham chiếu đến commit hiện tại để xem thông tin về commit đó, di chuyển **HEAD** để chuyển đổi giữa các commit hoặc branch, hoặc sử dụng nó để thực hiện các thao tác khác liên quan đến commit hiện tại.
- Khi ta sử dụng `git commit` thì git sẽ tạo một commit mới có mã <commit_hash> riêng và con trỏ **HEAD** ngay lập tức trỏ đến commit này.

## Di chuyển tới các commit và làm việc tại các commit đó

- Đôi khi, ta lại muốn làm việc từ các commit trước đó mà không phải commit hiện tại vì một số lý do, chẳng hạn như commit hiện tại code quá rối,... Để làm điều này, ta có 2 cách sau đây:

#### Cách 1:

```bash
git checkout <commit_hash>
```

- Sau khi thực hiện lệnh trên, **HEAD** trỏ tới một commit có mã <commit_hash> tương ứng, nó sẽ ở trong trạng thái "detached HEAD". Trong trạng thái này, ta không thể thực hiện các thao tác commit trực tiếp. Mọi thay đổi mới sẽ không thuộc bất kỳ branch nào và có thể bị mất khi ta chuyển đổi branch hoặc thực hiện các thao tác khác.
- Để quay lại trạng thái bình thường và tiếp tục làm việc trên một branch, ta nên tạo một branch mới từ commit đó.

#### Cách 2:

```bash
git reset --hard <commit-hash>
```

- Sau khi thực hiện lệnh trên, **HEAD** trỏ tới một commit có mã <commit_hash> tương ứng. Ta có thể làm việc trực tiếp trên commit này. Sau khi làm việc xong, ta có thể sử dụng `git add .`, `git commit -m`. Sau đó, ta sử dụng `git push -f` để đẩy một commit mới lên trên remote.

:::danger

Lưu ý rằng khi đẩy mới commit này lên trên remote thì tất cả các commit đứng sau commit này sẽ bị xóa.

:::
