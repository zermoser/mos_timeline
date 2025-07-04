import React, { useState, useEffect } from 'react';
import {
    Newspaper,
    BookOpen,
    Code,
    Shield,
    Coffee,
    ExternalLink,
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

    const timelineData = [
        {
            icon: Newspaper,
            title: "นักข่าว",
            period: "มกราคม 2021 - เมษายน 2021",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: BookOpen,
            title: "ครู",
            period: "พฤษภาคม 2021 - มีนาคม 2022",
            color: "from-green-500 to-green-600"
        },
        {
            icon: Coffee,
            title: "อ่านหนังสือ & ฟรีแลนซ์",
            period: "มีนาคม 2022 - มิถุนายน 2022",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: Code,
            title: "Software Engineer",
            period: "กรกฎาคม 2022 - ปัจจุบัน",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Shield,
            title: "ตัวแทนประกันชีวิต",
            period: "มีนาคม 2025 - ปัจจุบัน",
            color: "from-red-500 to-red-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                        <span className="text-sm font-medium text-blue-800">กลับมาสร้างคอนเทนต์แล้ว</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        สวัสดีครับ ผม{' '}
                        <span className="text-blue-600">มอส</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        หลังจากได้ลองทำงานหลายสาขาอาชีพ ตอนนี้ผมพร้อมที่จะกลับมาแชร์ประสบการณ์
                        และความรู้ที่ได้เรียนรู้มาในช่วงหลายปีที่ผ่านมา
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        เส้นทางการทำงาน
                    </h2>
                    <p className="text-lg text-gray-600">
                        ประสบการณ์ในช่วงที่ผ่านมา
                    </p>
                </div>

                <div className="space-y-8">
                    {timelineData.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${role.color.split('-')[1]}-500 transition-all duration-500 hover:shadow-lg ${isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${role.color} rounded-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {role.title}
                                            </h3>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1 sm:mt-0">
                                                {role.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-4">
                        พร้อมที่จะเริ่มต้นใหม่
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        มาร่วมติดตามเส้นทางใหม่ของผม และเรียนรู้ไปพร้อมกันใน Content ที่กำลังจะมา
                    </p>

                    <a
                        href="https://www.youtube.com/watch?v=UyZ2P5fNzt0&t=64s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        ดูใน YouTube
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gray-600">
                        ขอบคุณที่ติดตาม <span className="font-semibold text-gray-900">Mos Topic</span> นะครับ
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Content ใหม่ กำลังจะมาเร็ว ๆ นี้...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MosTimeline;