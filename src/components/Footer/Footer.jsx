import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab);

const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-10 font-sans">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
                    <div className="col-span-1 md:col-span-1.5">
                        <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Your digital headquarters for tracking support requests, managing priorities, and building better customer relationships.
                            Empowering support teams with a unified web interface for seamless ticket resolution and real-time agent collaboration.
                        </p>
                    </div>

                    <div>
                        <span className="footer-title text-white opacity-100 normal-case text-lg mb-4">Company</span>
                        <a className="link link-hover text-gray-400 text-sm mb-2 block">About Us</a>
                        <a className="link link-hover text-gray-400 text-sm mb-2 block">Our Mission</a>
                        <a className="link link-hover text-gray-400 text-sm block">Contact Saled</a>
                    </div>

                    <div>
                        <span className="footer-title text-white opacity-100 normal-case text-lg mb-4">Services</span>
                        <a className="link link-hover text-gray-400 text-sm mb-2 block">Products & Services</a>
                        <a className="link link-hover text-gray-400 text-sm mb-2 block">Customer Stories</a>
                        <a className="link link-hover text-gray-400 text-sm block">Download Apps</a>
                    </div>

                    <div>
                        <span className="footer-title text-white opacity-100 normal-case text-lg mb-4">Information</span>
                        <a className="link link-hover text-gray-400 text-sm mb-2 block">Privacy Policy</a>
                        <a className="link link-hover text-gray-400 text-sm mb-2 block">Terms & Conditions</a>
                        <a className="link link-hover text-gray-400 text-sm block">Join Us</a>
                    </div>

                    <div>
                        <span className="footer-title text-white opacity-100 normal-case text-lg mb-4">Social Links</span>
                        <div className="flex flex-col gap-4">
                            <a className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                                <div className="bg-white rounded-full p-1 inter-bold"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></div>
                                @CS — Ticket System
                            </a>
                            <a className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                                <div className="bg-white rounded-full p-1 inter-bold"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div>
                                @CS — Ticket System
                            </a>
                            <a className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                                <div className="bg-white rounded-full p-1 inter-bold"><FontAwesomeIcon icon="fa-brands fa-facebook" /></div>
                                @CS — Ticket System
                            </a>
                            <a className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                                <div className="bg-white rounded-full p-1 inter-bold"><FontAwesomeIcon icon="fa-brands fa-yahoo" /></div>
                                support@cst.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-auto">
                    <div className="mt-12 text-sm text-gray-400">
                        <p>© 2025 CS — Ticket System. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;