import logo from "@/assets/logo.png";
import { Divider } from "./Divider";
import { Link } from "react-router";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Footer() {
    return (
        <footer className="mt-16">
            <Divider />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img src={logo} className="h-8 me-3" alt="Orbinum Logo" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-secondary-200 uppercase">About</h2>
                            <ul className="text-secondary-300 font-medium">
                                <li className="mb-4">
                                    <Link to="/careers" className="hover:underline">Careers</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/roadmap" className="hover:underline">Roadmap</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/tokenomics" className="hover:underline">Tokenomics</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-secondary-200 uppercase">Legal</h2>
                            <ul className="text-secondary-300 font-medium">
                                <li className="mb-4">
                                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/terms" className="hover:underline">Terms of Service</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="/whitepaper.pdf" download="whitepaper.pdf" className="hover:underline">Whitepaper</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-secondary-200 uppercase">Support</h2>
                            <ul className="text-secondary-300 font-medium">
                                <li className="mb-4">
                                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="https://medium.com/@orbinumnetwork" target="_blank" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-secondary-200 sm:mx-auto dark:border-secondary-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-secondary-500 sm:text-center dark:text-secondary-400">
                        © 2025 Orbinum Network. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 items-center">
                        <Link to="#" target="_blank" className="text-secondary-500 hover:text-secondary-900 dark:hover:text-white ms-5">
                            <Icon icon="ic:baseline-telegram" width="24" height="24" />
                            <span className="sr-only">Telegram</span>
                        </Link>
                        <Link to="https://medium.com/@orbinumnetwork" target="_blank" className="text-secondary-500 hover:text-secondary-900 dark:hover:text-white ms-5">
                            <Icon icon="entypo-social:medium" width="24" height="24" />
                            <span className="sr-only">Medium</span>
                        </Link>
                        <Link to="https://x.com/orbinumnetwork" target="_blank" className="text-secondary-500 hover:text-secondary-900 dark:hover:text-white ms-5">
                            <Icon icon="prime:twitter" width="24" height="24" />
                            <span className="sr-only">X</span>
                        </Link>
                        <Link to="https://github.com/Orbinum-Network" target="_blank" className="text-secondary-500 hover:text-secondary-900 dark:hover:text-white ms-5">
                            <Icon icon="mdi:github" width="24" height="24" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}