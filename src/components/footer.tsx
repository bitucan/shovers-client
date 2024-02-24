import "../../src/";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src="ruta_logo.png" alt="Logo de la agencia" />
      </div>
      <div className="social-media">
        {/* Agrega tus iconos de redes sociales aquí */}
      </div>
      <div className="contact-info">
        <p>+57 5 343 0673</p>
        <p>info@tucanmarketingdigital.com</p>
        <p>calle 73 no. vía 40-350 barranquilla, atlántico, colombia.</p>
      </div>
      <div className="copyright">
        AGENCIA DE MARKETING DIGITAL - BARRANQUILLA - COLOMBIA / COPYRIGHT 2023
      </div>
    </footer>
  );
}

export default Footer;
