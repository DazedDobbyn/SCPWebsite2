fetch('scpdata.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each object in the JSON data
    data.forEach(obj => {
      // Get the key and object data
      const key = Object.keys(obj)[0];
      const objData = obj[key];

      // Loop through each object and assign IDs to HTML elements
      Object.keys(objData).forEach((property, index) => {
        // Generate the ID for the HTML element
        const id = `${key}-${index + 1}`;

        // Find the HTML element by ID and set its content to the corresponding JSON data
        const element = document.getElementById(id);
        if (element) {
          element.textContent = objData[property];
        }
      });
    });

    // Initialize the text-to-speech functionality
    initializeTextToSpeech(data);
  })
  .catch(error => {
    console.log('Error fetching JSON data:', error);
  });
