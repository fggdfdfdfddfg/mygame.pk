<script>
    // Simple tag filter
    document.querySelectorAll('.filter-btn').forEach(btn = {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const games = document.querySelectorAll('.game-card');
            
            games.forEach(game => {
                if (filter === 'all' || game.dataset.category.includes(filter)) {
                    game.style.display = 'block';
                } else {
                    game.style.display = 'none';
                }
            });
        })
    });
    
    // Advanced filter system
document.getElementById('apply-filters').addEventListener('click', function() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedModes = Array.from(document.querySelectorAll('input[name="mode"]:checked')).map(cb => cb.value);
    const selectedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked')).map(cb => cb.value);
    
    document.querySelectorAll('.game-card').forEach(game => {
        const gameCategory = game.dataset.category.split(' ');
        const gameMode = game.dataset.mode.split(' ');
        const gameRating = game.dataset.rating;
        
        const categoryMatch = selectedCategories.some(cat => gameCategory.includes(cat));
        const modeMatch = selectedModes.some(mode => gameMode.includes(mode));
        const ratingMatch = selectedRatings.includes(gameRating);
        
        if (categoryMatch && modeMatch && ratingMatch) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});

// ✅ FIXED reset-filters event
document.getElementById('reset-filters').addEventListener('click', function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
    document.querySelectorAll('.game-card').forEach(game => game.style.display = 'block');
});

// For simple button
document.getElementById('subscribe-btn').addEventListener('click', function() {
  const email = prompt("Enter your email to subscribe for game updates:");
if (email) {
    console.log("Subscribed:", email)
    alert("Thank you for subscribing!");
}


// For form submission
document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;

    if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address");
        return;
    }

    console.log("Subscribed:", email);
    alert("Thank you for subscribing to our updates!");
    this.querySelector('input').value = ''; // Clear the input
});

    
    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address");
        return;
    
    }
    
    // Here you would typically send this to your backend
    console.log("Subscribed:", email);
    alert("Thank you for subscribing to our updates!");
    this.querySelector('input').value = ''; // Clear the input
});
</script>