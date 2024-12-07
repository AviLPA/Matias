const apartments = [
    { address: "123 Main St", bedrooms: 2, sqMeters: 80, price: "$1200" },
    { address: "456 Elm St", bedrooms: 3, sqMeters: 100, price: "$1500" },
    { address: "789 Oak St", bedrooms: 1, sqMeters: 50, price: "$800" },
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
            <p>Bedrooms: ${apartment.bedrooms}</p>
            <p>Size: ${apartment.sqMeters} m²</p>
            <p>Price: ${apartment.price}</p>
            <button onclick="swipe('right')">Swipe Right</button>
            <button onclick="swipe('left')">Swipe Left</button>
        `;
        apartmentContainer.appendChild(card);
    }
}

function swipe(direction) {
    const card = apartmentContainer.lastChild;
    if (direction === 'right') {
        savedList.innerHTML += `<li>${apartments[currentIndex].address}</li>`;
    }
    apartmentContainer.removeChild(card);
    currentIndex++;
    showApartment();
}

// Initial call to show the first apartment
showApartment(); 