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
        <div class="row" id="blogPosts">
          <!-- Blog posts will be dynamically added here -->
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
  
  // Static blogs added directly in the JS file
  let blogs = [
    {
      title: "Top 10 Cardio Workouts",
      content: "Cardio workouts are a great way to burn fat and improve cardiovascular health. Here are some of the best cardio exercises to incorporate into your routine..."
    },
    {
      title: "Benefits of Strength Training",
      content: "Strength training is essential for building muscle, improving bone density, and boosting metabolism. Learn how strength training can benefit your overall health..."
    },
    {
      title: "Meal Plans for Muscle Gain",
      content: "Gaining muscle requires the right nutrition. Here's a sample meal plan that can help you gain muscle mass while staying healthy and balanced..."
    }
  ];
  
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
        displayBlogs(); // Display blogs when on the blog page
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
  
  // Function to display all blogs in a card format
  function displayBlogs() {
    const blogContainer = document.getElementById('blogPosts');
    blogContainer.innerHTML = ""; // Clear existing posts
  
    if (blogs.length === 0) {
      blogContainer.innerHTML = "<p>No blog posts yet. Add some!</p>";
      return;
    }
  
    blogs.forEach((blog, index) => {
      blogContainer.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${blog.title}</h5>
              <p class="card-text">${blog.content}</p>
            </div>
            <div class="card-footer text-muted">
              <button class="btn btn-info" onclick="editBlog(${index})">Edit</button>
              <button class="btn btn-danger" onclick="deleteBlog(${index})">Delete</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Function to add a new blog post
  function addBlog(title, content) {
    blogs.push({ title, content });
    displayBlogs();
  }
  
  // Function to edit a blog post (not implemented in detail here)
  function editBlog(index) {
    const blog = blogs[index];
    const newTitle = prompt("Edit Title:", blog.title);
    const newContent = prompt("Edit Content:", blog.content);
    if (newTitle && newContent) {
      blogs[index] = { title: newTitle, content: newContent };
      displayBlogs();
    }
  }
  
  // Function to delete a blog post
  function deleteBlog(index) {
    if (confirm("Are you sure you want to delete this blog?")) {
      blogs.splice(index, 1);
      displayBlogs();
    }
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
  
    // To add new blogs, simply modify the `blogs` array directly in the script
    // For example:
    // addBlog("New Blog Title", "New blog content...");
  });

//   Add New Blogs


blogs.push({
    title: "TEST",
    content: "test."
  });
  