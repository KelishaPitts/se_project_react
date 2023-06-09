import "../blocks/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__name">Developed by: Kelisha Pitts</div>{" "}
      <div className="footer__date">{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
