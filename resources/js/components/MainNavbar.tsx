import { Link, usePage } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';

export default function MainNavbar(){

    const { component } = usePage();

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <Container>

                    <div>
                        <Link href="/" className='navbar-brand'>
                            Image-resize
                        </Link>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navBarLinks"
                        aria-controls="navBarLinks"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="navbar-collapse collapse" id="navBarLinks">
                        <ul className="ms-auto navbar-nav">
                            <li className="nav-item">
                                <Link href="/converter" className={`nav-link ${component === 'Converter' ? 'active' : ''}` }>
                                    Converter
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/sobre" className='nav-link'>
                                    Sobre
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </>
    );

}