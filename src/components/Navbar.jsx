const Navbar = () => {
return (
    <nav className="bg-navBack sticky top-0 z-50">
      <div className="container mx-auto flex items-center p-4">
        <a href="/" className="text-white  text-2xl font-bold">
         <img src="/public/images/daniam-logo.svg" className="w-16" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar
