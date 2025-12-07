
interface FooterProps {
  logoUrl: string;
  children?: React.ReactNode;
}

const Footer = ({ logoUrl, children }: FooterProps) => {
  return (
    <header className="header">
      <img src={logoUrl} alt="Logo" className="header-logo" />
      <div className="header-content">{children}</div>
    </header>
  );
};

export default Footer;
