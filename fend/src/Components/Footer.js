import React from 'react';

const Footer = () => {
  return (
       <div className="footer-basic border-top mt-5 container-xl">
        <footer>
            <div className="social"><i className="btn btn-lg bi bi-linkedin"></i><i className="btn btn-lg bi bi-skype"></i><i className=" btn btn-lg bi bi-facebook"></i><i className="btn btn-lg bi bi-twitter"></i><i className="btn btn-lg bi bi-instagram"></i></div>
            <ul className="list-inline">
                <li className="btn list-inline-item"><a href='#landing' className='link'>Acceuil</a></li>
                <li className="btn list-inline-item"><a href='#a_propos'className='link'>A Propos</a></li>
            </ul>
            <p className="copyright">Oussama © 2022</p>
            <p className="copyright">Website made by <a className='link00' style={{textDecoration:"none",fontWeight:"bold",color:"black"}} rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer'>Rayen Labidi <i class="bi bi-box-arrow-up-right"></i></a></p>
        </footer>
    </div>
  )
};

export default Footer;