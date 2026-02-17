import Navbar from './Navbar';
import Footer from './Footer';
import SettingsButton from './SettingsButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
            <Navbar />
            <main className="flex-grow transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
                {children}
            </main>
            <Footer />
            <SettingsButton />
        </div>
    );
};

export default Layout;
