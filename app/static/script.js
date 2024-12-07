const apartments = [
    { 
        address: "123 Main St", 
        bedrooms: 2, 
        sqMeters: 80, 
        price: "$1,200",
        description: "Modern apartment with city view"
    },
    { 
        address: "456 Elm St", 
        bedrooms: 3, 
        sqMeters: 100, 
        price: "$1,500",
        description: "Spacious family home with garden"
    },
    { 
        address: "789 Oak St", 
        bedrooms: 1, 
        sqMeters: 50, 
        price: "$800",
        description: "Cozy studio in downtown"
    },
    { 
        address: "321 Pine St", 
        bedrooms: 2, 
        sqMeters: 75, 
        price: "$1,100",
        description: "Recently renovated with parking"
    }
];

let currentIndex = 0;
const apartmentContainer = document.getElementById('apartment-container');
const savedList = document.getElementById('saved-list');

function showApartment() {
    if (currentIndex < apartments.length) {
        const apartment = apartments[currentIndex];
        const card = document.createElement('div');
        card.className = 'apartment-card';
        card.innerHTML = `
            <h3>${apartment.address}</h3>
            <p>${apartment.description}</p>
            <p>��️ Bedrooms: ${apartment.bedrooms}</p>
            <p>📐 Size: ${apartment.sqMeters} m²</p>
            <p>💰 Price: ${apartment.price}</p>
            <div class="button-container">
                <button onclick="swipe('left')" class="swipe-left">👎 Pass</button>
                <button onclick="swipe('right')" class="swipe-right">👍 Save</button>
            </div>
        `;
        apartmentContainer.appendChild(card);
    } else {
        apartmentContainer.innerHTML = '<h3>No more apartments to show!</h3>';
    }
}

function swipe(direction) {
    const card = apartmentContainer.querySelector('.apartment-card');
    if (!card) return;

    if (direction === 'right') {
        const apartment = apartments[currentIndex];
        savedList.innerHTML += `
            <li>
                ${apartment.address} - ${apartment.price}
            </li>
        `;
    }

    card.style.transition = 'transform 0.5s, opacity 0.5s';
    card.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
    card.style.opacity = '0';

    setTimeout(() => {
        card.remove();
        currentIndex++;
        showApartment();
    }, 500);
}

// Initialize the first apartment
showApartment(); 