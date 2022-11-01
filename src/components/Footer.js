import React from 'react'

export default function Footer() {
  return (
    <div>
         <footer>
        <div class="container">
            <div class="footer">
                <article>
                    <div class="logo">
                        <i class="fas fa-newspaper fa-2x"></i>
                        <h2>DAILY SOUTH AFRICAN</h2>
                    </div>
                    <p>
                        Cutting edge journalism from the front lines.
                    </p>
                </article>

                <article>
                    <h4>EMAIL NEWSLETTER</h4>
                    <p>Join our newletter for latest updates</p>
                    <input type="email" placeholder="Enter Email..." />
                    <a href="#"> Subscribe</a>
                </article>

                <article>
                    <h4>SITE LINKS</h4>
                    <p>Help & Support</p>
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </article>

                <article>
                    <h4>JOIN OUR CLUB</h4>
                    <p>
                        Insiders have access to more content. 
                    </p>
                    <a href="#">Join Now</a>
                </article>
            </div>

            <div class="copyright">
                <p>Copyright &copy; 2022, All Rights Reserved</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
