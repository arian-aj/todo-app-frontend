import { Link } from "react-router-dom";

function Layout({ children }) {
   return (
      <div>
         <header>
            <nav>
               <Link to="/">Home</Link>
               <Link to="/todos">Todos</Link>
            </nav>
         </header>
         <main>{children}</main>
         <footer>Arian-Aj</footer>
      </div>
   );
}

export default Layout;
