function calculateTotal() {
    const items = document.querySelectorAll('.cost-item');
    let total = 0;

    items.forEach(item => {
        if (item.checked) {
            total += parseInt(item.value);
        }
    });

    document.getElementById('total-price').innerText = "$" + total + " USD";

    const recommendationText = document.getElementById('recommendation-text');

    if (total === 0) {
        recommendationText.innerText = "You must select at least one destination to start your journey!";
        recommendationText.style.color = "#ff6b6b";
    } else if (total > 2000) {
        recommendationText.innerText = "Great choices! Since you are planning a comprehensive trip, you should pack for different weather conditions.";
        recommendationText.style.color = "#90e0ef";
    } else {
        recommendationText.innerText = "Excellent start! If you want a deeper experience, you could add a bioluminescent night walk.";
        recommendationText.style.color = "#90e0ef";
    }
}
