function getDogData() {
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'ask-your-tech-lead-for-the-api-key',
    },
  };

  const url = 'https://api.thedogapi.com/v1/breeds/search?q=';

  fetch(url + dog, options)
    .then((data) => data.json())
    .then((response) => {
        // This is where you populate the html elements and
        // element attributes with values from the result;
    });
}