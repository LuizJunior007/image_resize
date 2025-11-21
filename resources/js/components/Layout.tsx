import Footer from "./Footer";
import MainNavbar from "./MainNavbar";

export default function Layout({ children }: any) {
 
    return (
        <div className="main">
            <div>
                <MainNavbar />

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">{children}</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}