function adjustButtonSize() {
    const background = document.querySelector('.background'); // 背景画像の親要素
    const buttons = document.querySelectorAll('.line-button, .call-button'); // 全ボタン取得
    const backgroundWidth = background.offsetWidth; // 背景画像の幅を取得

    // ボタンのサイズを背景画像の幅に比例させる
    buttons.forEach(button => {
        const baseFontSize = 25; // 基準フォントサイズ（px）
        const basePaddingY = 13; // 基準上下パディング（px）
        const basePaddingX = 25; // 基準左右パディング（px）

        // 幅に応じたサイズを計算
        const scaleFactor = backgroundWidth / 1263; // 1263px を基準としたスケール
        button.style.fontSize = `${baseFontSize * scaleFactor}px`;
        button.style.padding = `${basePaddingY * scaleFactor}px ${basePaddingX * scaleFactor}px`;
    });
}
// 初期ロード時とリサイズ時に実行
window.addEventListener('load', adjustButtonSize);
window.addEventListener('resize', adjustButtonSize);


function adjustHeroButtonSize() {
    const imageElement = document.querySelector('.heropage-image'); // 画像要素を取得
    const buttonElement = document.querySelector('.hero-button'); // ボタン要素を取得
    const imageWidth = imageElement.offsetWidth; // 中央画像の幅を取得

    // 基準値
    const baseFontSize = 24; // 基準フォントサイズ（px）
    const basePaddingY = 18; // 基準上下パディング（px）
    const basePaddingX = 30; // 基準左右パディング（px）
    const scaleFactor = imageWidth / 1263; // 中央画像幅を基準としたスケール

    // ボタンのサイズを調整
    buttonElement.style.fontSize = `${baseFontSize * scaleFactor}px`;
    buttonElement.style.padding = `${basePaddingY * scaleFactor}px ${basePaddingX * scaleFactor}px`;
}

// 初期ロード時とリサイズ時に実行
window.addEventListener('load', adjustHeroButtonSize);
window.addEventListener('resize', adjustHeroButtonSize);
