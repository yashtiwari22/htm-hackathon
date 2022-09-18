import React from 'react'
import "./footer.css"
function index() {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="footer-row">
  	 		<div className="footer-col1">
  	 			<h4 >Hack Environment</h4>
				<p>A Clean Environment Is Essential for Healthy Living: The more you don't care about our environment, the more it will become polluted with contaminants and toxins that have a harmful impact on our health.</p>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Useful Links</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">Our Intentions</a></li>
  	 				<li><a href="#">Issues</a></li>
  	 				<li><a href="#">Join Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
				<p>+91 9876543210</p>
				<br/>
				<p>JSS Academy of Technical Education Noida</p>
				<br/>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default index
