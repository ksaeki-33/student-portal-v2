# TIU Student Portal

Toshofu International University の学生向けWebポータルです。Vite + React + 通常CSSで構成し、バックエンドなしの仮データで動作します。

## 起動方法

```bash
npm install
npm run dev
```

開発サーバーのURLが表示されたらブラウザで開いてください。

## ビルド

```bash
npm run build
```

ビルド成果物は `dist/` に出力されます。

## ログイン情報

- 学籍番号: `TIU001`
- パスワード: `0001`

## 実装画面

- Login
- Dashboard
- News
- Schedule
- Grades
- Course Registration
- Student ID
- Settings

## Azure Static Web Apps への公開手順

1. GitHubへこのリポジトリをpushします。
2. Azure Portalで Static Web Apps を作成します。
3. デプロイ元にGitHubリポジトリを選択します。
4. Build Presets は `React` または `Custom` を選択します。
5. App location に `/`、Output location に `dist` を設定します。
6. 作成されたGitHub Actions workflowで `npm install` と `npm run build` が実行され、`dist/` が公開されます。
