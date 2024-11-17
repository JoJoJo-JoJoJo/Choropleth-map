import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title" id="title">United States Educational Attainment</h1>
      <p className="desc" id="description">
        Percentage of adults age 25 and older with a bachelor's degree or higher
        (2010-2014)
      </p>
    </header>
  );
};

export default Header;
