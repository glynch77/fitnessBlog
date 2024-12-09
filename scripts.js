const routes = {
    home: `
      <div class="text-center">
        <h1>Welcome to Fitness Blog</h1>
        <p>Your ultimate resource for staying fit and healthy!</p>
      </div>
    `,
    about: `
      <div>
        <h2>About Us</h2>
        <p>We are passionate fitness enthusiasts bringing you the best tips, exercises, and nutrition advice to help you achieve your goals.</p>
      </div>
    `,
    blog: `
      <div>
        <h2>Fitness Blog Articles</h2>
  
        <!-- Popular Posts Section -->
        <h3>Popular Posts</h3>
        <div class="row" id="popularPosts">
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Popular Post 1">
              <div class="card-body">
                <h5 class="card-title">Top 10 Cardio Workouts</h5>
                <p class="card-text">A great article on how to incorporate cardio into your workout routine.</p>
                <a href="article1.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Popular Post 2">
              <div class="card-body">
                <h5 class="card-title">Best Full-Body Workouts</h5>
                <p class="card-text">Effective full-body workout routines to build strength and stamina.</p>
                <a href="article2.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Popular Post 3">
              <div class="card-body">
                <h5 class="card-title">How to Stay Consistent in Fitness</h5>
                <p class="card-text">Tips for staying consistent with your fitness routine long-term.</p>
                <a href="article3.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Popular Post 4">
              <div class="card-body">
                <h5 class="card-title">Best Foods for Muscle Recovery</h5>
                <p class="card-text">Foods to fuel your recovery and improve muscle growth.</p>
                <a href="article4.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Latest Posts Section -->
        <h3>Latest Posts</h3>
        <div class="row" id="latestPosts">
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Latest Post 1">
              <div class="card-body">
                <h5 class="card-title">Meal Plans for Muscle Gain</h5>
                <p class="card-text">Learn the best meal plans for muscle growth and strength.</p>
                <a href="article5.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Latest Post 2">
              <div class="card-body">
                <h5 class="card-title">Strength Training for Beginners</h5>
                <p class="card-text">A beginner's guide to strength training exercises.</p>
                <a href="article6.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Latest Post 3">
              <div class="card-body">
                <h5 class="card-title">Cardio Myths Busted</h5>
                <p class="card-text">Debunking common myths around cardio workouts.</p>
                <a href="article7.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Latest Post 4">
              <div class="card-body">
                <h5 class="card-title">Yoga for Flexibility</h5>
                <p class="card-text">The benefits of yoga to improve flexibility and strength.</p>
                <a href="article8.html" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Categories Section -->
        <h3>Categories</h3>
        <div class="row" id="categories">
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Category 1">
              <div class="card-body">
                <h5 class="card-title">Strength Training</h5>
                <p class="card-text">Explore strength training exercises for every level.</p>
                <a href="category1.html" class="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Category 2">
              <div class="card-body">
                <h5 class="card-title">Cardio Workouts</h5>
                <p class="card-text">Find cardio workouts to boost endurance and burn fat.</p>
                <a href="category2.html" class="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Category 3">
              <div class="card-body">
                <h5 class="card-title">Nutrition Tips</h5>
                <p class="card-text">Explore healthy nutrition tips for a balanced life.</p>
                <a href="category3.html" class="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/240x205" class="card-img-top" alt="Category 4">
              <div class="card-body">
                <h5 class="card-title">Fitness Challenges</h5>
                <p class="card-text">Take on fitness challenges to test your strength.</p>
                <a href="category4.html" class="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    contact: `
      <div>
        <h2>Contact Us</h2>
        <form id="contactForm">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    `
  };
  
  // Function to navigate between pages and set dynamic background images
  function navigate(route) {
    const appDiv = document.getElementById('app');
    const backgroundContainer = document.getElementById('background');
  
    appDiv.innerHTML = routes[route];
  
    // Set dynamic background image based on the route
    switch (route) {
      case 'home':
        backgroundContainer.style.backgroundImage = "url('./assets/images/201877786-gym-or-fitness-with-sunset-light-background-for-web-design-template-website.jpg')";
        break;
      case 'about':
        backgroundContainer.style.backgroundImage = "url('./assets/images/hero_image_am.jpg')";
        break;
      case 'blog':
        backgroundContainer.style.backgroundImage = "url('./assets/images/blog-bg.jpg')";
        break;
      case 'contact':
        backgroundContainer.style.backgroundImage = "url('./assets/images/contact-bg.jpg')";
        break;
      default:
        backgroundContainer.style.backgroundImage = "none"; // Fallback
    }
  
    // Apply consistent background styles
    backgroundContainer.style.backgroundSize = "cover";
    backgroundContainer.style.backgroundPosition = "center";
    backgroundContainer.style.backgroundRepeat = "no-repeat";
  }
  
  // Event listener for navigation
  document.addEventListener('DOMContentLoaded', () => {
    // Load default route
    navigate('home');
  
    // Handle navigation links
    document.querySelectorAll('[data-route]').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const route = link.getAttribute('data-route');
        navigate(route);
      });
    });
  });
  