document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5500/students')
        .then(response => response.json())
        .then(data => {
            const plansContainer = document.getElementById('plans-container');
            data.forEach(plan => {
                const planElement = document.createElement('div');
                planElement.classList.add('plan');

                const planName = document.createElement('h2');
                planName.textContent = plan.name;

                const planDuration = document.createElement('p');
                planDuration.textContent = `Duration: ${plan.duration}`;

                const planPrice = document.createElement('p');
                planPrice.classList.add('price');
                planPrice.textContent = `$${plan.price}`;

                planElement.appendChild(planName);
                planElement.appendChild(planDuration);
                planElement.appendChild(planPrice);

                plansContainer.appendChild(planElement);
            });
        })
        .catch(error => console.error('Error:', error));
});
