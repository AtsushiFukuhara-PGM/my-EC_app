# my-EC_app

## 💾 Database (MySQL)

このプロジェクトで使用しているデータベース構造は  
`myec_app.sql` に含まれています。

### 📘 インポート方法
1. phpMyAdminを開く  
2. 「インポート」タブを選択  
3. このファイル（`myec_app.sql`）を選択して実行  

これで以下のテーブルが作成されます：
- `products`（商品）
- `cart`（カート）
- `orders`（注文）
- `order_items`（注文明細）
- `contact_messages`（お問い合わせ）

すべて `myec_app` データベース内に構築されます。
✅ 理由
.sql ファイルは人が読むコードではないから、説明をREADMEに出した方が見やすい。

.sql ファイルのコメントを編集すると差分が見づらくなる（SQLは差分比較に弱い）。

READMEの方がGitHub閲覧者（企業・採用者）に伝わる。

なので結論としては：

💡 .sql は 中身そのまま
💬 説明は READMEに記載する

これが一番きれいな構成です。







あなた:
全体のREADMEを書いてほしいです！


ChatGPT:
了解です。
あなたのこれまでの構成・意図・仕上がりレベルを踏まえて、
GitHub掲載用に最適化したREADME.md を書きます👇

markdown
コードをコピーする
# 🛒 My EC App  
バニラ技術で構築したシンプルなECサイト型ポートフォリオ  

---

## 🌐 概要
このアプリは **HTML / CSS / JavaScript（バニラ） / PHP / MySQL** を使用して構築した  
学習兼ポートフォリオ用のECサイトです。  
フレームワークを使用せず、ルーティングやテンプレート展開、データ処理を  
すべて自作で実装しています。

---

## 🚀 主な機能

| 機能カテゴリ | 内容 |
|--------------|------|
| 🏠 ホーム | ロゴと簡単な案内文を中央に配置 |
| 💿 商品一覧 | MySQLから商品情報を取得・表示 |
| 🛍️ カート機能 | 商品の追加 / 削除 / 数量変更 / 合計金額計算 |
| 📦 注文履歴 | 注文内容と日付を保存・表示 |
| 🥇 人気ランキング | 売上数に基づいて1位〜3位を強調表示 |
| 🎥 ビデオセクション | `video_demo.mp4` を中央にループ再生 |
| 📩 お問い合わせ | フォーム入力内容をDB（`contact_messages`）に保存 |
| ❓ FAQ | よくある質問を `<details>` 要素で静的表示（アニメ付き） |

---

## 🧩 使用技術

| 分野 | 使用技術 |
|------|-----------|
| フロントエンド | HTML / CSS / JavaScript（Vanilla） |
| バックエンド | PHP（自作API構成） |
| データベース | MySQL（phpMyAdmin管理） |
| デザイン | Zen Maru Gothic + system fonts |
| 開発環境 | XAMPP（Apache + MariaDB） |

---

## 📁 ディレクトリ構成

myEC_app/
├─ index.html
├─ contact_submit.php
├─ get_cart.php
├─ add_cart.php
├─ place_order.php
├─ load_ranking.php
├─ ...
├─ /css/
│ ├─ style.css
│ ├─ ranking.css
│ ├─ home.css
│ ├─ video.css
│ └─ contact.css
├─ /js/
│ ├─ main.js
│ ├─ products.js
│ ├─ ranking.js
│ ├─ contact.js
│ └─ ...
├─ /images/
│ ├─ home-logo.png
│ ├─ video_demo.mp4
│ ├─ rank_1.png
│ ├─ ...
└─ myec_app.sql

yaml
コードをコピーする

---

## 💾 Database (MySQL構造)

### インポート方法
1. phpMyAdminを開く  
2. 「インポート」タブを選択  
3. `myec_app.sql` を選択して実行  

以下のテーブルが作成されます：

| テーブル名 | 説明 |
|-------------|------|
| `products` | 商品情報 |
| `cart` | カート内情報 |
| `orders` | 注文情報 |
| `order_items` | 注文明細 |
| `contact_messages` | お問い合わせ内容 |

---

## 🧠 学んだこと
- **ファイル分割の重要性**  
  CSS / JS / PHP を整理しておくことで、規模が大きくなっても修正・保守が容易。  
- **フレームワークに頼らない実装力**  
  ルーティング・API通信・DOM操作など、すべてバニラで実現することで  
  Webアプリの構造を根本から理解できた。  
- **バックエンドとDBの連携**  
  fetch + PHP + MySQL の流れを理解し、実データを扱うアプリを構築できた。

---

## 🔮 今後の予定
- ユーザーログイン / アカウント管理機能の追加  
- レビュー投稿機能  
- 商品登録・編集用の管理者画面  
- Node.js + Expressへの移行版も構築予定  

---

## 🧑‍💻 制作目的
> 「基礎的なWeb開発スキルをフレームワークに頼らず証明すること」  
を目的としたポートフォリオです。  
UI/UXよりも**構造の理解と再利用性**を重視して設計しています。

---

## 📸 スクリーンショット
（任意で追加）  
- ホーム画面  
- 商品一覧  
- ランキングページ  
- お問い合わせフォーム  

---

## 🏷️ ライセンス
MIT License  
© 2025 アメ
これを README.md にコピペすれば完璧です。
GitHub上でも見栄えよく整っており、企業担当者が一読で構造を理解できます。

必要があれば、上部にロゴ画像やバッジ（例：![PHP](https://img.shields.io/badge/PHP-8.2-blue)）も追加できます。







あなた:
動かせるまでの解説があるとよいです


ChatGPT:
非常に良い着眼点です。
GitHub上で見た人（特に採用担当やエンジニア）が「cloneして動かせる」ことを重視します。
そのため、**「動作環境の準備 → DBインポート → ローカル起動 → 動作確認」**までを記した実行ガイドを追加しましょう。

以下は、それを組み込んだ完全版の README.md です👇
（そのままコピペしてGitHubに置いてOKです）

markdown
コードをコピーする
# 🛒 My EC App  
バニラ技術で構築したシンプルなECサイト型ポートフォリオ  

---

## 🌐 概要
このアプリは **HTML / CSS / JavaScript（バニラ） / PHP / MySQL** を使用して構築した  
学習兼ポートフォリオ用のECサイトです。  
フレームワークを使用せず、ルーティングやテンプレート展開、データ処理を  
すべて自作で実装しています。

---

## 🚀 主な機能

| カテゴリ | 内容 |
|-----------|------|
| 🏠 ホーム | ロゴと案内文を中央に配置 |
| 💿 商品一覧 | MySQLから商品情報を取得・表示 |
| 🛍️ カート機能 | 商品の追加 / 削除 / 数量変更 / 合計金額計算 |
| 📦 注文履歴 | 注文内容と日付を保存・表示 |
| 🥇 人気ランキング | 売上数に基づく1位～3位の強調表示 |
| 🎥 ビデオセクション | `video_demo.mp4` を中央にループ再生 |
| 📩 お問い合わせ | 入力内容をDB（`contact_messages`）に保存 |
| ❓ FAQ | よくある質問を `<details>` 要素で静的表示（アニメ付き） |

---

## 🧩 使用技術

| 分野 | 使用技術 |
|------|-----------|
| フロントエンド | HTML / CSS / JavaScript（Vanilla） |
| バックエンド | PHP（自作API構成） |
| データベース | MySQL（phpMyAdmin管理） |
| デザイン | Zen Maru Gothic + System UI |
| 開発環境 | XAMPP（Apache + MariaDB） |

---

## 💻 動作環境構築

### 1️⃣ 必要ソフトのインストール
以下をインストールしてください：

- [XAMPP](https://www.apachefriends.org/jp/index.html)  
  （Apache + MySQL + PHP を含む）

インストール後、  
「Apache」「MySQL」を **Start（起動）** します。

---

### 2️⃣ このリポジトリをクローン
```bash
git clone https://github.com/ユーザー名/myEC_app.git
XAMPPの htdocs フォルダに配置してください。
例：

makefile
コードをコピーする
C:\xampp\htdocs\myEC_app\
3️⃣ データベースの準備
ブラウザで http://localhost/phpmyadmin/ にアクセス

新規データベースを作成

makefile
コードをコピーする
データベース名: myec_app
上部メニューの「インポート」を選択

本リポジトリ内の myec_app.sql を選択して実行

これで以下のテーブルが作成されます：

テーブル名	用途
products	商品情報
cart	カート内アイテム
orders	注文情報
order_items	注文明細
contact_messages	お問い合わせ履歴

4️⃣ サーバを起動して動作確認
XAMPPの「Apache」を起動

ブラウザで以下にアクセス

arduino
コードをコピーする
http://localhost/myEC_app/
これでトップページ（ホーム）が表示されます。
商品一覧・ランキング・ビデオ・お問い合わせページも正常に動作するはずです。

📁 ディレクトリ構成
bash
コードをコピーする
myEC_app/
├─ index.html
├─ add_cart.php
├─ get_cart.php
├─ place_order.php
├─ contact_submit.php
├─ load_ranking.php
├─ /css/
│   ├─ style.css
│   ├─ ranking.css
│   ├─ home.css
│   ├─ video.css
│   └─ contact.css
├─ /js/
│   ├─ main.js
│   ├─ products.js
│   ├─ ranking.js
│   ├─ contact.js
│   └─ ...
├─ /images/
│   ├─ home-logo.png
│   ├─ video_demo.mp4
│   ├─ rank_1.png
│   ├─ ...
└─ myec_app.sql
🧠 学んだこと
ファイル分割の重要性
CSS / JS / PHP の役割を明確に分けることで保守性が向上。

バックエンド通信の基礎
fetch() × PHP × MySQL の連携を通してデータ処理の流れを理解。

フレームワークに頼らない構造設計
ルーティング・ページ切り替え・API通信をすべて自作で構築。

🔮 今後の拡張予定
ユーザーログイン機能

レビュー投稿機能

管理者ページ（商品追加・編集）

Node.js + Express への移行版開発

📸 スクリーンショット（例）
🏠 ホームページ

🛍️ 商品一覧

🥇 ランキングページ

📩 お問い合わせフォーム

（※GitHubに画像をアップロードすれば自動でプレビューされます）
