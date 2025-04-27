document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review');
    const loadMoreBtn = document.querySelector('.load-more-btn');

    let initialVisible = 4; // Show 4 initially

    // Hide reviews beyond the initialVisible
    reviews.forEach((review, index) => {
      if (index >= initialVisible) {
        review.style.display = 'none';
      }
    });

    // Show Load More button if there are more than 4 reviews
    if (reviews.length > initialVisible) {
      loadMoreBtn.style.display = 'inline-block';
    }

    // On clicking Load More
    loadMoreBtn.addEventListener('click', () => {
      reviews.forEach(review => {
        review.style.display = 'block'; // Show all reviews
      });
      loadMoreBtn.style.display = 'none'; // Hide the button after showing all
    });
  });