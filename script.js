function showSection(sectionId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function addBlog(event) {
    event.preventDefault();

    // Get values from the form
    const title = document.getElementById('blogTitle').value;
    const link = document.getElementById('blogLink').value;
    const text = document.getElementById('blogText').value;

    // Prepend "http://" if the link doesn't start with "http://" or "https://"
    const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : 'http://' + link;

    // Create a new blog element
    const blogElement = document.createElement('div');
    blogElement.classList.add('blog');

    // Populate the blog element
    blogElement.innerHTML = `
        <h3>${title}</h3>
        <p>${text}</p>
        <a href="${formattedLink}" target="_blank">Read more</a>
    `;

    // Append the blog element to the blogs container
    const blogsContainer = document.getElementById('blogsContainer');
    blogsContainer.appendChild(blogElement);

    // Clear the form fields
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogLink').value = '';
    document.getElementById('blogText').value = '';
}
