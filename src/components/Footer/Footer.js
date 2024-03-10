import "./Footer.scss"
import logoFooter from "../../assets/images/logo-footer.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo-footer" src={logoFooter}/>
    </footer>
  );
};
export default Footer;
