function filterCategory(category) {
  const posts = document.querySelectorAll('.blog-card');
  posts.forEach(post => {
    if (category === 'all' || post.dataset.category === category) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}

function filterPosts() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const posts = document.querySelectorAll('.blog-card');
  posts.forEach(post => {
    const title = post.querySelector('h3').innerText.toLowerCase();
    const content = post.querySelector('p').innerText.toLowerCase();
    if (title.includes(query) || content.includes(query)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}
