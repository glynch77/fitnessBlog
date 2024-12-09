// JavaScript for SPA routing and content injection
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
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">Top 10 Cardio Workouts</a>
          <a href="#" class="list-group-item list-group-item-action">Benefits of Strength Training</a>
          <a href="#" class="list-group-item list-group-item-action">Meal Plans for Muscle Gain</a>
        </div>
      </div>
    `,
    contact: `
      <div>
        <h2>Contact Us</h2>
        <form>
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
  
  // Function to navigate between pages
  function navigate(route) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = routes[route];
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
  