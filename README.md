# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## 目次

-   [概要](#概要)
    -   [チャレンジ](#チャレンジ)
    -   [スクリーンショット](#スクリーンショット)
    -   [リンク](#リンク)
-   [プロセス](#プロセス)
    -   [使用したスキル](#使用したスキル)
    -   [学んだこと](#学んだこと)
    -   [役に立ったリソース](#役に立ったリソース)

## 概要

### チャレンジ

ユーザーができること:

-   ユーザーの画面サイズによって最適なレイアウトが表示される。
-   ページ上の全てのインタラクティブな要素にホバー状態を見ることができる。
-   フォームを送信した時、エラーメッセージを受け取る:
    -   `input` フィールドが空の時。
    -   メールアドレスのフォーマットが正しくない時。

### スクリーンショット

![](./screenshot.jpg)

### リンク

-   Live Site URL: [リンク](https://kaji1127.github.io/Signup-Form/)

## プロセス

### 使用したスキル

-   CSS custom properties
-   Flexbox
-   CSS Grid
-   モバイルファースト
-   JavaScript バリデーション

### 学んだこと

・バリデーションを実装する方法について学んだ。
・placeholder にスタイルを適用する方法を学んだ。

```css
&::placeholder {
	color: var(--grayBlue);
	font-weight: 600;
}
```

### 役に立ったリソース

-   [リソース 1](https://developer.mozilla.org/ja/docs/Web/CSS/::placeholder) - placeholder にスタイルを適用する方法
-   [リソース 2](https://qiita.com/zaburo/items/a8fdcb0e1237f6ef97ff) - JavaScript でバリデーションを実装する方法
