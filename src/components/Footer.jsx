import "./Footer.css";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <h3>CoffeeTime</h3>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Связаться с нами</a></li>
          </ul>
          <p className="footer-copy">© {new Date().getFullYear()} CoffeeTime. Все права защищены.</p>
        </div>
      </footer>
    );
  }
  
export default Footer;