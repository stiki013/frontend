// Data for the albums
const albums = [
    {
      title: "Delicious Pasta Tutorial",
      description: "Quick and easy recipe for dinner!",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Grilled Chicken",
      description: "Learn how to make perfectly grilled chicken.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Chocolate Cake",
      description: "Bake a mouth-watering chocolate cake.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Vegan Salad",
      description: "Healthy and delicious vegan salad.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Sushi Rolls",
      description: "Master the art of making sushi.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "French Croissants",
      description: "Learn to bake flaky and buttery croissants.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "BBQ Ribs",
      description: "Smoky and juicy BBQ ribs recipe.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Pizza Margherita",
      description: "Make classic Italian pizza at home.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Pancakes",
      description: "Fluffy pancakes with a perfect syrup.",
      image: "https://via.placeholder.com/300x200"
    }
  ];
  
  // Function to generate albums and insert into the DOM
  function generateAlbums() {
    const albumContainer = document.querySelector('.album .row');
    albums.forEach(album => {
      const albumHTML = `
        <div class="col">
          <div class="card shadow-sm">
            <img src="${album.image}" class="bd-placeholder-img card-img-top" alt="Recipe Thumbnail">
            <div class="card-body">
              <p class="card-text">${album.title} - ${album.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary">Watch Tutorial</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">View Recipe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      albumContainer.innerHTML += albumHTML;
    });
  }
  
  // Call the function to populate albums
  generateAlbums();
  