const track = document.querySelector('.review-track');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
const items = document.querySelectorAll('.review-item');
const totalItems = items.length;
const itemWidth = 100; // 1アイテム分の幅
let index = 1;

// 初期位置設定
track.style.transform = `translateX(-${index * itemWidth}%)`;

function moveSlide(direction) {
  if (direction === 'next') {
    index++;
  } else if (direction === 'prev') {
    index--;
  }

  // スライド移動
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${index * itemWidth}%)`;

  // 無限ループ設定
  track.addEventListener(
    'transitionend',
    () => {
      if (index === totalItems - 1) {
        // 右端から最初に戻る
        track.style.transition = 'none';
        index = 1;
        track.style.transform = `translateX(-${index * itemWidth}%)`;
      } else if (index === 0) {
        // 左端から最後に戻る
        track.style.transition = 'none';
        index = totalItems - 2;
        track.style.transform = `translateX(-${index * itemWidth}%)`;
      }
    },
    { once: true }
  );
}

// ボタンにイベントリスナーを追加
prevButton.addEventListener('click', () => moveSlide('prev'));
nextButton.addEventListener('click', () => moveSlide('next'));
