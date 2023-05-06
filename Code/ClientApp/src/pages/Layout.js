import { Outlet, Link } from "react-router-dom";

{ /* Layout para contener las distintas paginas de la aplicacion y poder navegar entre ellas. */ }
const Layout = () => {
    return (
        <div>
            { /* Barra de Navegacion */}
            <nav>
                <ul>
                    <li>
                        <Link to="dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="inventario">Inventario</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            { /* Contenedor de las paginas */}
            <Outlet/>
        </div>
    );
}

export default Layout;