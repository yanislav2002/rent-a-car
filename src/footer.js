
export function footer() {
    const body = document.querySelector('body')
    let childElement = document.createElement('div');

    childElement.innerHTML = `
        <footer>
            <div class="footer-container">
            <div class="social-media">
            <a href="https://www.facebook.com">Facebook<i class="fab fa-facebook"></i></a>
            </div>
            <div class="contact-info">
            <p>Email: rentacarvarna@gmail.com</p>
            <p>Mobile: 082 333 3431</p>
            </div>
            <div class="additional-info">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
            <p>Terms of Service | Privacy Policy</p>
            </div>
            </div>
        </footer>`

    body.appendChild(childElement);
}