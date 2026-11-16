# 《计算机基础》个人网页课程设计 · 交付说明

这是一套可直接用于提交的静态个人网站，满足截图中的课程要求：不少于 5 个页面、主页为 `index.html`、页面与图片全部使用相对路径、图文并茂、可发布到 GitHub Pages。

## 一、网站包含 6 个页面

| 文件 | 页面 | 说明 |
| --- | --- | --- |
| `index.html` | 首页 | 站点入口，包含通往其他页面的链接 |
| `about.html` | 关于我 | 自我介绍、小档案与技能展示 |
| `growth.html` | 成长足迹 | 时间线记录学习过程与课程收获 |
| `interests.html` | 兴趣角落 | 游戏、听歌、乒乓球三项兴趣 |
| `works.html` | 我的作品 | 课程作品与兴趣成果展示 |
| `contact.html` | 联系我 | 联系方式与留言表单 |

所有样式、脚本和图片都在 `assets/` 目录中，页面之间没有使用绝对路径，也没有依赖外部 CDN，搬到任何仓库根目录都能正常显示。

## 二、提交前需要确认的 4 处内容

1. **姓名**：目前示例使用“陈天哲”。如果需要改成你的名字，请在 6 个 HTML 文件中统一替换。
2. **邮箱**：目前已填写为 `1721263365@qq.com`。如需修改，请同时改这两处：`contact.html` 中显示的邮箱，以及 `assets/js/main.js` 中 `mailto:` 后面的邮箱。
3. **主页地址**：
   - `contact.html` 中按钮的 `data-url="https://YOUR_NAME.github.io/YOUR_REPO/index.html"`
   - 同级目录的 `学号_姓名.url` 文件中的 URL
4. **GitHub 用户名与仓库名**：把上面 URL 里的 `YOUR_NAME` 和 `YOUR_REPO` 换成你的真实信息。

> 如果你用 `用户名.github.io` 作为仓库名，主页地址是 `https://用户名.github.io/index.html`。
> 如果用其他仓库名（例如 `my-site`），主页地址是 `https://用户名.github.io/my-site/index.html`。

## 三、发布到 GitHub Pages

1. 注册 / 登录 GitHub，点击右上角 `+` → `New repository`。
2. 仓库名建议填 `你的用户名.github.io`，这样网址最简洁；也可以填其他名字。
3. 把本文件夹里的**全部文件和文件夹**上传到仓库根目录，确认 `index.html` 在根目录，而不是套在子文件夹里。
4. 进入仓库 `Settings` → `Pages`。
5. `Source` 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`，保存。
6. 等待 1–2 分钟，打开你的 Pages 地址检查是否显示正常。

## 四、微助教提交

截图要求提交两样东西：

1. **ZIP 包**：已为你打包成 `学号_姓名.zip`。请改名为真实格式，例如 `20260001_张三.zip`，然后上传。
2. **URL 文件**：已提供 `学号_姓名.url`。请改名为真实格式，例如 `20260001_张三.url`，用记事本打开，把里面的 URL 改成你的 GitHub Pages 主页地址，例如：

   ```text
   [InternetShortcut]
   URL=https://xxxx.github.io/index.html
   IconIndex=0
   ```

   其中 `https://xxxx.github.io/index.html` 要与浏览器里实际打开的主页地址一致。

## 五、本地检查清单

- 双击 `index.html` 能正常打开；
- 顶部导航 6 个链接都能跳转；
- 所有插画都能显示，没有破图；
- 缩放浏览器窗口到手机宽度，菜单按钮可以展开；
- 发布后从 GitHub Pages 地址再检查一遍。

## 六、文件结构

```text
personal-site/
├── index.html
├── about.html
├── growth.html
├── interests.html
├── works.html
├── contact.html
├── README.md
├── 学号_姓名.url
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/*.svg
```
