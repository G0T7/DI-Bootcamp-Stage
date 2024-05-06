document.addEventListener('DOMContentLoaded', function() {
    const libForm = document.getElementById('libform');
    const storyOutput = document.getElementById('story');
    const libButton = document.getElementById('lib-button');
    const shuffleButton = document.getElementById('shuffle-button');

    libForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        // Check if any input is empty
        if (!noun || !adjective || !person || !verb || !place) {
            alert('Please fill in all fields.');
            return;
        }

        // Generate the story using the input values
        const generatedStory = `${person} went to ${place} and saw a ${adjective} ${noun}. They decided to ${verb} together.`;
        storyOutput.textContent = generatedStory;
    });

    shuffleButton.addEventListener('click', function() {
        // Implement shuffle logic here (not provided in this example)
        // For simplicity, you can display a different pre-defined story each time
        const stories = [
            "Once upon a time, a brave knight fought a fierce dragon.",
            "In a distant galaxy, aliens discovered a new planet filled with wonders.",
            "A mysterious stranger arrived at the old town and changed everything."
        ];
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        storyOutput.textContent = randomStory;
    });
});
