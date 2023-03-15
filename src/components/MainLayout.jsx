// compponents
import Header from "./Header";
import Footer from "./Footer";
const MainLayout = ({ children }) => {
    return (
        <main className=' mx-3 sm:mx-10 my-3'>
            <header>
                <Header />
            </header>
            {children}
            <footer>
                <Footer />
            </footer>
        </main>
    )
}

export default MainLayout;
