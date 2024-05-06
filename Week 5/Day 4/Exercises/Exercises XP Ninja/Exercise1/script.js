$(function() {
    $('.add-box').click(function() {
      // Create a new box element with the 'box' class
      const newBox = $('<div class="box"></div>');
  
      // Set a random background color for the box
      const randomColor = getRandomColor();
      newBox.css('background-color', randomColor);
  
      // Append the new box to the body and animate it
      newBox.appendTo('body').hide().fadeIn();
  
      // Automatically remove the box after animation completes
      setTimeout(() => {
        newBox.fadeOut(() => {
          newBox.remove();
        });
      }, 3000); // Adjust duration as needed (in milliseconds)
    });
  
    // Function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  