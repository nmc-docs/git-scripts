---
sidebar_position: 4
---

# Cấu hình user cho git

## Cấu hình user trong git để làm gì?

- Cấu hình người dùng trong Git là quá trình thiết lập thông tin cá nhân của người sử dụng, giúp xác định ai đã thực hiện một số thay đổi trong dự án. Thông tin này bao gồm tên và địa chỉ email của người dùng. Các tác dụng chính của việc cấu hình người dùng trong Git bao gồm:

1. **Xác định người thực hiện thay đổi:**
   - Khi ta commit một thay đổi vào một repository Git, thông tin về người commit (tên và địa chỉ email) sẽ được lưu trữ. Điều này giúp xác định ai đã thực hiện một số thay đổi cụ thể trong lịch sử của dự án.
2. **Liên kết với tài khoản Git:**
   - Khi ta cấu hình tên và địa chỉ email trong Git, ta có thể đảm bảo rằng thông tin này tương thích với tài khoản Git của ta. Điều này quan trọng khi ta làm việc với các dự án có nhiều người đóng góp, và nó giúp đảm bảo tính minh bạch trong quá trình theo dõi người thực hiện thay đổi.
3. **Truyền thông thông tin liên quan đến dự án:**
   - Thông tin về người commit thường được sử dụng trong các hệ thống quản lý mã nguồn và các dịch vụ liên quan để theo dõi và hiển thị lịch sử thay đổi. Điều này giúp quản trị dự án và nhóm phát triển theo dõi ai đã làm gì và khi nào.

## Liên kết tài khoản github/gitlab với máy tính thông qua SSH Key

- Mục đích của việc này là để cấp quyền truy cập vào tài khoản github/gitlab từ máy tính cá nhân, giúp ta có thể clone, pull hoặc push code lên remote repository của tài khoản git của mình.
- Sau đây ta sẽ cấu hình sao cho có thể sử dụng nhiều tài khoản git trên cùng một máy bằng cách sử dụng SSH Key để xác thực.

###### Bước 1: Tạo folder **.ssh** ở thư mục root của user:

```bash
cd ~ && mkdir .ssh
```

###### Bước 2: Di chuyển vào thư mục **.ssh** và dùng lệnh:

```bash
ssh-keygen -t ed25519 -C "YOUR_GITHUB_EMAIL"
```

###### Bước 3: Nhập thông tin cho SSH Key:

```plaintext
---> Enter file in which to save the key (/c/Users/MINH CHI/.ssh/id_ed25519): id_rsa_minhchi1509_github
```

- Ở đoạn nhập tên file cho SSH Key này, hãy nhập theo định dạng: **id*rsa*[GITHUB_USERNAME]\_[GIT_PROVIDER]**
- Tiếp theo nó sẽ bắt ta nhập passphrase, ta bỏ qua bằng cách ấn Enter.

###### Bước 4: Chạy lệnh sau:

```bash
ssh-add ~/.ssh/id_rsa_minhchi1509_github
```

- Đây là lệnh dùng để thêm một SSH private key vào **ssh-agent** (trình quản lý các SSH key). Khi thêm vào ssh-agent, ta sẽ không cần nhập mật khẩu cho key mỗi khi sử dụng, giúp quá trình xác thực SSH trở nên tiện lợi hơn.
- Lưu ý hãy thay lại tên file SSH Key cho đúng như đã cấu hình như ở **Bước 3**
- Để kiểm tra xem SSH private key đã được add vào **ssh-agent** hay chưa, gõ lệnh:
  ```bash
  eval "$(ssh-agent -s)" && ssh-add -l
  ```

###### Bước 5: Tạo SSH Key trên Github/Gitlab

- Đối với Github, vào: https://github.com/settings/keys và bấm "New SSH Key"
- Đối với Gitlab, vào: https://gitlab.com/-/user_settings/ssh_keys và bấm "Add new key"
- Đặt Title cho hợp lý
- Phần key, vào thư mục ~/.ssh, mở file Public SSH Key tương ứng (file có đuôi **.pub**), copy và paste đoạn key đó vào
- Bấm "Add SSH Key" (Github) hoặc "Add key" (Gitlab)

:::note

- Để thêm mới một SSH Key cho tài khoản git khác, hãy lặp lại từ **Bước 2** -> **Bước 5**

:::

###### Bước 6: Tạo file **config**

```bash
cd ~/.ssh && touch config
```

- Giả sử ta đã tạo SSH Key cho 3 tài khoản git, đây là nội dung file config:

  ```plaintext
  # github minhchi1509 account
  Host minhchi1509.github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_minhchi1509_github

  # github nmc-docs account
  Host nmc-docs.github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_nmc-docs_github

  # gitlab minhchico1509 account
  Host minhchico1509.gitlab.com
  HostName gitlab.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_minhchico1509_gitlab
  ```

- Trong đó:

  - **HostName**: tên host của git provider
  - **Host**: theo định dạng [GIT_USERNAME].[HostName]
  - **IdentityFile**: đường dẫn tới file SSH Key tương ứng

###### Bước 7: Verify

- Để đảm bảo ta đã cấu hình thành công, gõ lệnh (Thay sau @ bằng các Host tương ứng trong file **config**):

  ```bash
  ssh -T git@minhchi1509.github.com
  ```

## Clone repository thông qua SSH

- Sau khi cấu hình user xong, ta có thể clone repository thông qua SSH URL như sau:
  ```bash
  git clone git@minhchi1509.github.com:minhchi1509/test-repo.git
  ```

:::caution

- SSH URL ban đầu mà git cung cấp cho ta sẽ là: `git@github.com:minhchi1509/test-repo.git`. Ta phải sửa lại phần host thành `minhchi1509.github.com` để Github có thể map host này với SSH Key tương ứng trong file **config** như ta đã cấu hình ở **Bước 6**, từ đó github/gitlab có thể xác thực được rằng máy tính ta có quyền clone repository đó về

:::

## Cấu hình git user trong project

- Kiểm tra bên trong project đã cấu hình user hay chưa bằng lệnh:

  ```bash
  git config user.email && git config user.name
  ```

- Nếu chưa được cấu hình, hãy dùng lệnh:

  ```bash
  git config user.email "YOUR_GIT_EMAIL"
  git config user.name "YOUR_GIT_USERNAME"
  ```

:::note

- Mục đích của việc này là để git xác định danh tính user trong repository. Khi ta push code, thông tin người dùng mà ta thấy trên github/gitlab chính là thông tin của user mà ta đã cấu hình bên trên. Việc cấu hình này **KHÔNG** liên quan đến việc ta cấu hình SSH Key ở trên. Github/Gitlab không dựa vào thông tin SSH Keys mà quyết định xem ai là người đã push code lên. Vì vậy hãy cấu hình cho đúng git user mà bạn mong muốn trong project.

:::
