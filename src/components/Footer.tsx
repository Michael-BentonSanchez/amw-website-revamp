const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 flex justify-center items-center text-black text-sm">
      <p>&copy; {currentYear} Association Management of Wilmington</p>
    </footer>
  );
};

export default Footer;
