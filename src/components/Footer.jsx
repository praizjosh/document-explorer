// Footer.jsx

function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    return (
        <footer className="p-4 text-center text-xs my-4 rounded-lg">
            <p className="text-slate-900">
                &copy; {currentYear} | Made with 💖 by
                <a
                    className="hover:text-pink-600"
                    href="https://github.com/praizjosh/"
                    target="_blank"
                    rel="noopener noreferrer"> Josh Praise</a>
            </p>
        </footer>
    );
}

export default Footer;
