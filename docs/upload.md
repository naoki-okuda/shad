# upload

mkdocsの管理方法を本当に忘れてしまうので、メモ。


* `mkdir project`
  → 空のフォルダを作るだけ

* `mkdocs new project`
  → フォルダを作ったうえで
　  最低限の MkDocs プロジェクト構成を自動生成してくれる

という違い。どちらでも大丈夫。


mkdocsのフォルダ内で、

```shell
mkdocs serve
```


#### ビルド（静的HTML生成）

- `site/` ディレクトリが作られる。

```
mkdocs build
```



- GitHub Pagesにdeploy したいとき

```
mkdocs gh-deploy
```

これだけで、自動的に `gh-pages` ブランチにあげて GitHub Pages に公開。


- mkdocsとshadcnはpipでインストールしたはず。

```
pip install mkdocs
pip install mkdocs-shadcn

```

### `nav` の書き方



```yaml
nav:
  - Home: index.md
  - About: 01_PICLS2d.md
  - em2d.f  : 02_em2d.md
```

※ パスはすべて `docs/` からの相対パス。




1. **この mkdocs.yml を整理して最適化したい**
2. **テーマを shadcn → material に変えたい**
3. **GitHub Pages への公開手順を知りたい**
4. **nav の自動生成（awesome-pages）を入れたい**
5. **Python コードのシンタックスハイライト強化したい**

1. GitHub Pages 自動デプロイのワークフロー化（CI/CD）
2. shadcn テーマのカスタマイズ方法
3. nav の自動化（awesome-pages）
4. MathJax / KaTeX の数式強化
5. コードブロックのシンタックスハイライト調整



# GitHub にアップロード

まず GitHub に新しい repo（例：`ipicls2d`）を作成。
そしたらローカルで：

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/<yourname>/ipicls2d.git
git push -u origin main
```


# GitHub Pages に公開

mkdocs はこれで自動デプロイできる：

```bash
mkdocs gh-deploy
```

初回は数十秒かかる。

GitHub に `gh-pages` ブランチができる
GitHub の repo→Settings→Pages を開くと、
"gh-pages branch" が自動選択されて公開状態になる。







# 全体の流れ

1. GitHub にリポジトリを作る
2. `gh-pages` ブランチに自動デプロイする GitHub Actions を置く
3. MkDocs をビルドし、GitHub Pages で公開する


# GitHub にリポジトリを作成

GitHub → **New repository**

```
ipicls-docs
```

private / public どちらでも OK。

その後、ローカルに clone:

```bash
git clone https://github.com/<username>/<repo>.git
cd <repo>
```



# プロジェクト配置

フォルダ構成を **GitHub Pages 用の標準構成**にする：

```
repo/
  mkdocs.yml
  docs/
    index.md
    ... （他の .md）
  js/
    mathjax_config.js
  extra.css
```


# GitHub Actionsを作成

GitHub Pages は **Actions でデプロイする方式**が最も確実。

`repo/.github/workflows/` を作る：

```bash
mkdir -p .github/workflows
```

そこに `deploy.yml` を作る：

```yaml
name: Deploy MkDocs

on:
  push:
    branches:
      - main   # ← メインブランチに push したら自動デプロイ

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.x'

      - name: Install MkDocs
        run: |
          pip install mkdocs-material
          pip install mkdocs-macros-plugin
          pip install pymdown-extensions

      - name: Build
        run: mkdocs build --clean

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./site

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```



# 実際にデプロイする

```bash
git add .
git commit -m "Initial MkDocs"
git push origin main
```
push すると自動で mkdocs build → GitHub Pages にアップロードされる



## リポジトリshadのdeployファイル

gh-pages.yml
- github actionsの機能を使っている。

```yaml
name: Deploy MkDocs

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-python@v4
        with:
          python-version: "3.x"

      - name: Install dependencies
        run: |
          pip install mkdocs mkdocs-shadcn

      - name: Build site
        run: mkdocs build --clean

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
```