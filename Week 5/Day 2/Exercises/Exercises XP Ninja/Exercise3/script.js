document.addEventListener('DOMContentLoaded', function() {
    const getLocationButton = document.getElementById('getLocationButton');
    const latitudeOutput = document.getElementById('latitude');
    const longitudeOutput = document.getElementById('longitude');

    getLocationButton.addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    latitudeOutput.textContent = `Latitude: ${latitude}`;
                    longitudeOutput.textContent = `Longitude: ${longitude}`;
                },
                function(error) {
                    console.error('Error getting geolocation:', error);
                    alert('Error getting geolocation. Please try again.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });
});
