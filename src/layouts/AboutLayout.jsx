import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div className="my-2">
      <p className="font-bold">Mauris a dui laoreet</p>
      <p>
        Proin ac euismod erat. Etiam erat nisi, rhoncus at lobortis non,
        scelerisque nec ante. Mauris a dui laoreet justo accumsan dignissim.
      </p>
      <nav className="flex flex-col md:flex-row gap-2 mt-2 text-xl">
        <NavLink className="text-3xl" to="faq">
          FAQ
        </NavLink>
        <NavLink className="text-3xl" to="contact">
          Contact us
        </NavLink>
      </nav>
      <main className="mt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AboutLayout;
