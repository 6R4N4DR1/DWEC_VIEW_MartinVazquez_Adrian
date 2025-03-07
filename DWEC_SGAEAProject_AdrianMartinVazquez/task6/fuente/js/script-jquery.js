jQuery(function() {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": "live_GFiVsS7eVPROZySe7FKZJ1KyzH1PU8S42mB5KO7Jun2JuISy2VKJ5vrlAlD5jznf"
    };
  
    const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    let isFetching = false;
  
    const fetchData = async () => {
      if (isFetching) return;
      isFetching = true;
      try {
        const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=12", requestOptions);
        const result = await response.json();
        const container = $('#dog-container');
        result.forEach(dog => {
          const dogDiv = $('<div></div>').addClass('dog-card p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 w-full');
  
          const dogImg = $('<img>').attr('src', dog.url).attr('alt', 'Dog Image').addClass('w-full h-64 object-cover rounded-lg');
  
          const dogText = $('<p></p>').text('Perros > Gatos').addClass('text-center mt-2 text-rojo-normal');
  
          dogDiv.append(dogImg);
          dogDiv.append(dogText);
          container.append(dogDiv);
        });
      } catch (error) {
        console.log('error', error);
      } finally {
        setTimeout(() => {
          isFetching = false;
          console.log('Fetch attempt finished.');
        }, 500);
      }
    };
  
    fetchData();
  
    $(window).on('scroll', function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        fetchData();
      }
    });
  });