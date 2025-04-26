document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on question
            this.classList.toggle('active');
            
            // Get the answer element
            const answer = this.nextElementSibling;
            
            // Toggle answer visibility
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
            
            // Close other open answers
            questions.forEach(q => {
                if (q !== this && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                }
            });
        });
    });
});