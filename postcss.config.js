# オバミー (Obamy) - Singapore Job App

日英中3言語対応の求人マッチングアプリです。

## Vercelでのデプロイ手順

### 1. GitHubにアップロード

1. [github.com](https://github.com) でアカウント作成（未登録の場合）
2. 右上の「+」→「New repository」をクリック
3. Repository name: `obamy` と入力して「Create repository」
4. このフォルダの全ファイルをアップロード：
   - 「uploading an existing file」リンクをクリック
   - このフォルダ内の全ファイル・フォルダをドラッグ＆ドロップ
   - 「Commit changes」をクリック

### 2. Vercelでデプロイ

1. [vercel.com](https://vercel.com) にアクセス
2. 「Sign Up」→「Continue with GitHub」でGitHubアカウントと連携
3. 「Add New Project」→ `obamy` リポジトリを選択
4. 設定はそのままで「Deploy」をクリック
5. 1〜2分でデプロイ完了 → URLが発行されます！

### 3. QRコード生成

発行されたURL（例: `https://obamy.vercel.app`）を
[qr-code-generator.com](https://www.qr-code-generator.com/) などに入力してQRコードを生成。

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開く
