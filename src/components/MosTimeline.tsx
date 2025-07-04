import React, { useState, useEffect } from 'react';
import {
    Play,
    Newspaper,
    BookOpen,
    Code,
    ShieldCheck,
    Youtube,
    Twitter,
    Mail,
    ChevronDown
} from 'lucide-react';

const MosTimeline: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setIsVisible(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = true;
                            return newVisible;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-index]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const roles = [
        {
            icon: Newspaper,
            title: "Journalist",
            period: "2022 – 2023",
            description: "Reported on tech and culture for XYZ News, conducted interviews with industry leaders, and wrote over 50 articles covering emerging technologies and their societal impact."
        },
        {
            icon: BookOpen,
            title: "Teacher",
            period: "2023 – 2024",
            description: "Taught programming fundamentals to university students, designed comprehensive curriculum for web development courses, and held interactive workshops that improved student engagement by 40%."
        },
        {
            icon: Code,
            title: "Software Engineer",
            period: "2024 – Present",
            description: "Developed frontend features in React & Tailwind for fintech applications, improved application performance by 30%, and collaborated with cross-functional teams to deliver user-centric solutions."
        },
        {
            icon: ShieldCheck,
            title: "Insurance Agent",
            period: "2023 – 2024",
            description: "Advised clients on life and health policies, managed a portfolio of 100+ clients with 95% satisfaction rate, and consistently exceeded sales targets while maintaining ethical standards."
        }
    ];

    const handleVideoClick = () => {
        // In a real implementation, this would navigate to the video
        console.log('Navigating to return video...');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Welcome back! I'm{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Mos
                        </span>
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        After exploring different paths and gaining incredible experiences, I'm excited to return to content creation
                        and share what I've learned along the way.
                    </p>

                    <button
                        onClick={handleVideoClick}
                        className="mt-8 inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-200 transform hover:scale-105"
                    >
                        <Play className="w-5 h-5 mr-2" />
                        Watch My Return Video
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-16 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
                    What I've Been Up To
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {roles.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-indigo-100 rounded-xl mr-4">
                                        <Icon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                                        <p className="text-sm text-gray-500 font-medium">{role.period}</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    {role.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Let's Stay Connected
                        </h2>

                        <div className="flex justify-center space-x-6">
                            <button
                                className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-200 transform hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-6 h-6" />
                            </button>

                            <button
                                className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6" />
                            </button>

                            <button
                                className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200 transform hover:scale-110"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6" />
                            </button>
                        </div>

                        <p className="mt-6 text-gray-600">
                            Thanks for being part of the Mos Topic community!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MosTimeline;