const menuButton = document.getElementById('openNav');
const sidebar = document.getElementById('sideNav');
const backdrop = document.getElementById('backdrop');
const closeButton = document.getElementById('closeNav');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    backdrop.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
});

backdrop.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
});

const toggleButton = document.getElementById('toggleButton');
    const toggleList = document.getElementById('toggleList');

    toggleButton.addEventListener('click', () => {
        toggleList.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!toggleButton.contains(event.target) && !toggleList.contains(event.target)) {
            toggleList.classList.add('hidden');
        }
    });

    const toggleButton1 = document.getElementById('toggleButton1');
    const toggleList1 = document.getElementById('toggleList1');

    toggleButton1.addEventListener('click', () => {
        toggleList1.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!toggleButton1.contains(event.target) && !toggleList1.contains(event.target)) {
            toggleList1.classList.add('hidden');
        }
    });

    const toggleButton2 = document.getElementById('toggleButton2');
    const toggleList2 = document.getElementById('toggleList2');

    toggleButton2.addEventListener('click', () => {
        toggleList2.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!toggleButton2.contains(event.target) && !toggleList2.contains(event.target)) {
            toggleList2.classList.add('hidden');
        }
    });

    const toggleButton3 = document.getElementById('toggleButton3');
    const toggleList3 = document.getElementById('toggleList3');

    toggleButton3.addEventListener('click', () => {
        toggleList3.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!toggleButton3.contains(event.target) && !toggleList3.contains(event.target)) {
            toggleList3.classList.add('hidden');
        }
    });

    const countries = {
        USA: ["California", "Texas", "Florida"],
        Canada: ["Ontario", "Quebec", "British Columbia"],
        Australia: ["New South Wales", "Victoria", "Queensland"]
    };
    document.addEventListener("DOMContentLoaded", () => {
        const countrySelect = document.getElementById("country");
        const stateSelect = document.getElementById("state");

        for (const country in countries) {
            const option = document.createElement("option");
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        }

        countrySelect.addEventListener("change", () => {
            const selectedCountry = countrySelect.value;
            stateSelect.innerHTML = '<option value=""> Select State </option>'; 

            if (selectedCountry && countries[selectedCountry]) {
                countries[selectedCountry].forEach(state => {
                    const option = document.createElement("option");
                    option.value = state;
                    option.textContent = state;
                    stateSelect.appendChild(option);
                });
            }
        });
    });
