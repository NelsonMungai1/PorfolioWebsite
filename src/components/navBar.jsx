function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center p-8">
      <div>
        <img src="/Assets/Porfolio Logo.png" alt="Imae Logo" />
      </div>
      <nav>
        <ul className="text-white text-xl flex flex-row justify-between items-center gap-8">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT ME</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">EXPERIENCE</a>
          </li>
        </ul>
      </nav>
      <div className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-800 rounded-md">
        <a className="text-white text-base" href="#">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default NavBar;
