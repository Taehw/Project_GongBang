document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('reviewTitle').value;
    const content = document.getElementById('reviewContent').value;
    const agent = document.getElementById('agentSelect').value;

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const newReview = {
        id: 'review' + (reviews.length + 1),
        title: title,
        content: content,
        agent: agent
    };
    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    addReviewToList(newReview);
    addReviewModal(newReview);
    document.getElementById('reviewForm').reset();
});

function addReviewToList(review) {
    const newReview = document.createElement('a');
    newReview.href = '#';
    newReview.classList.add('list-group-item', 'list-group-item-action', 'review-item');
    newReview.setAttribute('data-toggle', 'modal');
    newReview.setAttribute('data-target', '#reviewModal');
    newReview.setAttribute('data-id', review.id);
    newReview.innerHTML = `
        <span>${review.title}</span>
        <span class="agent">(${review.agent})</span>
    `;
    document.getElementById('reviewList').appendChild(newReview);
}

function addReviewModal(review) {
    const modal = document.getElementById('reviewModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalContent = modal.querySelector('#modalReviewContent');
    const modalAgent = modal.querySelector('#modalReviewAgent');

    $(`[data-id="${review.id}"]`).on('click', function() {
        modalTitle.textContent = review.title;
        modalContent.textContent = review.content;
        modalAgent.textContent = `중개사: ${review.agent}`;
    });
}
localStorage.clear();
// 로컬 저장소에서 리뷰 불러오기
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => {
        addReviewToList(review);
        addReviewModal(review);
    });
}

function goback() {
    window.history.back();
}
