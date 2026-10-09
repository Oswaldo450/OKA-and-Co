function calculateTotal() {
    // Obtener todos los checkboxes y radio buttons
    const items=document.querySelectorAll('.cost-item');
    let total=0;

    // Sumar los valores de los elementos seleccionados
    items.forEach(item=> {
            if (item.checked) {
                total +=parseInt(item.value);
            }
        });

    // Mostrar el total en el HTML
    document.getElementById('total-price').innerText="$"+total;

    // Agregar una recomendación dinámica (Usando condicionales y verbos modales para la rúbrica)
    const recommendationText=document.getElementById('recommendation-text');

    if (total===0) {
        recommendationText.innerText="You must select at least one destination to start your journey!";
        recommendationText.style.color="#ff4d4d";
    }

    else if (total > 2000) {
        recommendationText.innerText="Great choices! Since you are planning a big trip, you should pack for different weather conditions.";
        recommendationText.style.color="#90e0ef";
    }

    else {
        recommendationText.innerText="Excellent start! If you want a deeper experience, you could add a bioluminescence night walk.";
        recommendationText.style.color="#90e0ef";
    }
}