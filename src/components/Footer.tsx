
const Footer = () => (
  <footer className="sticky bottom-0 w-full bg-gray-50 border-t border-gray-200 text-neutral text-sm font-inter z-20">
    <div className="container flex flex-col sm:flex-row justify-between items-center py-4 gap-3">
      <span>&copy; {new Date().getFullYear()} FocusFlow • All rights reserved.</span>
      <div className="flex gap-4">
        <a href="https://lovable.dev" rel="noopener noreferrer" target="_blank" className="hover:underline opacity-70">Built with Lovable</a>
        <a href="mailto:hello@focusflow.com" className="hover:underline opacity-70">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
