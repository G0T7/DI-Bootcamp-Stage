// Define an array of custom planet objects from another galaxy
const otherGalaxyPlanets = [
    { name: 'Zendar', color: 'purple', moons: 2 },
    { name: 'Xylo', color: 'teal', moons: 1 },
    { name: 'Quasar', color: 'pink', moons: 3 },
    { name: 'Nebulon', color: 'blue', moons: 0 },
    { name: 'Stellaris', color: 'orange', moons: 2 },
    { name: 'Vortex', color: 'green', moons: 1 },
    { name: 'Cosmo', color: 'silver', moons: 0 },
    { name: 'Orbitus', color: 'red', moons: 2 },
    { name: 'Nova', color: 'yellow', moons: 1 },
    { name: 'Galactica', color: 'cyan', moons: 3 },
    { name: 'Luminar', color: 'magenta', moons: 2 }
];

// Function to create planet divs and moons dynamically
function createSolarSystem() {
    const section = document.querySelector('.listPlanets');

    // Create planet divs for each planet in the other galaxy
    otherGalaxyPlanets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.backgroundColor = planet.color;
        planetDiv.textContent = planet.name;
        section.appendChild(planetDiv);

        // Create moon divs for each planet based on moon count
        const moonCount = planet.moons;
        for (let i = 0; i < moonCount; i++) {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');
            moonDiv.style.left = `${Math.cos((2 * Math.PI / moonCount) * i) * 50 + 50}%`;
            moonDiv.style.top = `${Math.sin((2 * Math.PI / moonCount) * i) * 50 + 50}%`;
            planetDiv.appendChild(moonDiv);
        }
    });
}

// Call the function to create the solar system
createSolarSystem();
