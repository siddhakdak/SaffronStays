
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link href="/" className="logo">
                    <img src="/assets/xseries.png" alt=" Logo" />
                </Link>
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for location, villa, facilities..."
                        className="search-input"
                    />

                </div>

                <Link href="/" className="logo">
                    <img src="/assets/saffrin.png" alt=" Logo" />
                </Link>

                <div className="header-actions">
                    <div className='phone'>
                    <FiPhone className="phone-button" />
                    <p>08069160000</p>
                    </div>
                    <button className="login-button">Login</button>
                </div>
            </div>
        </header>
    )
}

