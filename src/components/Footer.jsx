

const Footer = () => {
    return (
      <footer className="bg-navBack text-white py-4 flex flex-col gap-5">
        <div className="container mx-auto text-center uppercase border-b border-neutral-800 pb-3 w-2/3">
          © {new Date().getFullYear()} <span className="text-cyan-300 font-light">Daniam</span>
        </div>
        <div className="flex justify-center m-auto gap-4 border-b border-neutral-800 pb-3 w-2/3">
          
    <img src="/public/images/Location.svg"/>
          <p>Marshal Baghramyan Avenue 2nd Lane, 8 </p>
          <img src="/public/images/Phone.svg"/>
          <p>+374 00 000 000</p>
          <img src="/public/images/Message.svg"/>
          <p>Daniam@blabla</p>
        </div>
        <div className="justify-center bg-neutral-950 w-2/3 py-4 rounded-full mx-auto text-center m-auto flex gap-3">
          <img src="/public/images/Facebook.svg"/>
          <img src="/public/images/Linkedin.svg"/>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  