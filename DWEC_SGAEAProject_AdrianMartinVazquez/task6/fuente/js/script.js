document.addEventListener('DOMContentLoaded', () => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_GFiVsS7eVPROZySe7FKZJ1KyzH1PU8S42mB5KO7Jun2JuISy2VKJ5vrlAlD5jznf"
  });

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=12", requestOptions);
      const result = await response.json();
      const container = document.getElementById('dog-container');
      result.forEach(dog => {
        const dogDiv = document.createElement('div');
        dogDiv.classList.add('dog-card', 'p-4', 'border', 'rounded-lg', 'shadow-md', 'bg-white', 'dark:bg-gray-800', 'w-full');

        const dogImg = document.createElement('img');
        dogImg.src = dog.url;
        dogImg.alt = "Dog Image";
        dogImg.classList.add('w-full', 'h-64', 'object-cover', 'rounded-lg');

        const dogText = document.createElement('p');
        dogText.textContent = "Perros > Gatos";
        dogText.classList.add('text-center', 'mt-2', 'text-rojo-normal');

        dogDiv.appendChild(dogImg);
        dogDiv.appendChild(dogText);
        container.appendChild(dogDiv);
      });
    } catch (error) {
      console.log('error', error);
    } finally {
      console.log('Fetch attempt finished.');
    }
  };

  fetchData();

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fetchData();
    }
  });
});