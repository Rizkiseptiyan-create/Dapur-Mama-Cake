function toggleDetail(card) {
  const detail = card.querySelector('.produk-detail');
  if (detail) {
    detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
  }
}

function toggleDetail(card) {
  card.classList.toggle('active');
}