/**
 * ボタンサイズを調整する汎用関数
 * @param {Element} referenceElement - 基準となる要素
 * @param {NodeListOf<Element>} buttons - サイズを調整するボタン要素のリスト
 * @param {Object} baseSizes - 基準サイズ (fontSize, paddingY, paddingX)
 */
function adjustButtonSizes(referenceElement, buttons, baseSizes) {
    if (!referenceElement) return; // 要素がない場合はスキップ

    // 非表示の場合、一時的に表示
    const originalDisplay = referenceElement.style.display;
    if (originalDisplay === "none") {
        referenceElement.style.display = "block"; // 一時的に表示
    }

    const referenceWidth = referenceElement.offsetWidth; // 基準となる幅を取得
    const scaleFactor = referenceWidth / 1263; // 基準幅 1263px を基準にスケールを計算

    buttons.forEach(button => {
        // スタイルのリセット
        button.style.fontSize = ""; 
        button.style.padding = "";

        // 新しいスタイルを適用
        button.style.fontSize = `${baseSizes.fontSize * scaleFactor}px`;
        button.style.padding = `${baseSizes.paddingY * scaleFactor}px ${baseSizes.paddingX * scaleFactor}px`;
    });

    // 元の表示状態に戻す
    if (originalDisplay === "none") {
        referenceElement.style.display = "none";
    }
}

function adjustSizesOnLoadAndResize() {
    // PC版の背景画像と関連ボタンの調整
    const pcBackground = document.querySelector('.page3_pc .background');
    const pcButtons = document.querySelectorAll('.page3_pc .line-button, .page3_pc .call-button');
    if (pcBackground) {
        adjustButtonSizes(pcBackground, pcButtons, { fontSize: 22, paddingY: 12, paddingX: 22 });
    }

    // スマホ版の背景画像と関連ボタンの調整
    const phoneBackground = document.querySelector('.page3_phone .background');
    const phoneButtons = document.querySelectorAll('.page3_phone .line-button, .page3_phone .call-button');
    if (phoneBackground) {
        adjustButtonSizes(phoneBackground, phoneButtons, { fontSize: 45, paddingY: 15, paddingX: 40 });
    }
}

document.addEventListener('DOMContentLoaded', adjustSizesOnLoadAndResize);
window.addEventListener('resize', adjustSizesOnLoadAndResize);

// ヘッダーのスクロール挙動
document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");
	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY === 0) {
			header.classList.remove("hidden");
		} else if (currentScrollY > lastScrollY) {
			header.classList.add("hidden");
		} else {
			header.classList.remove("hidden");
		}

		lastScrollY = currentScrollY;
	});
});
