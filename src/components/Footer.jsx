import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-serif font-bold mb-2">Khalid Metwaly</h3>
                        <p className="text-slate-300">Strategic Educational Leader & Arabic Language Educator</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/ibnmetwaly/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:contact@khalidmetwaly.com" className="hover:text-accent transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Khalid Metwaly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
