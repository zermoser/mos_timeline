import React, { useState, useEffect } from 'react';
import {
    Newspaper,
    BookOpen,
    Laptop,
    Shield,
    Coffee,
    ExternalLink,
    Camera,
    Youtube,
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
            icon: Camera,
            title: "ช่างภาพ",
            period: "ปี 2019",
            color: "from-indigo-500 to-indigo-600",
            description: "เริ่มต้นด้วยความชื่นชอบในการถ่ายภาพ"
        },
        {
            icon: Youtube,
            title: "Content Creator",
            period: "ปี 2020",
            color: "from-red-500 to-red-600",
            description: "เริ่มสร้างเนื้อหาออนไลน์ผ่าน YouTube"
        },
        {
            icon: Newspaper,
            title: "นักข่าว",
            period: "มกราคม 2021 - เมษายน 2021",
            color: "from-blue-500 to-blue-600",
            description: "ลงลึกสู่โลกของการสื่อข่าว"
        },
        {
            icon: BookOpen,
            title: "ครู",
            period: "พฤษภาคม 2021 - มีนาคม 2022",
            color: "from-green-500 to-green-600",
            description: "ถ่ายทอดความรู้สู่คนรุ่นใหม่"
        },
        {
            icon: Coffee,
            title: "อ่านหนังสือ & ฟรีแลนซ์",
            period: "มีนาคม 2022 - มิถุนายน 2022",
            color: "from-orange-500 to-orange-600",
            description: "ช่วงพักการทำงาน เพื่อเรียนรู้และหาทิศทาง"
        },
        {
            icon: Laptop,
            title: "Software Engineer",
            period: "กรกฎาคม 2022 - ปัจจุบัน",
            color: "from-purple-500 to-purple-600",
            description: "ก้าวเข้าสู่โลกของการเขียนโปรแกรม"
        },
        {
            icon: Shield,
            title: "ตัวแทนประกันชีวิต",
            period: "มีนาคม 2025 - ปัจจุบัน",
            color: "from-teal-500 to-teal-600",
            description: "ขยายขอบเขตเพื่อช่วยเหลือผู้คนในด้านการป้องกันความเสี่ยง"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}
            <div className="bg-white shadow-lg">
                <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-8 shadow-md">
                        <span className="text-sm font-semibold text-blue-800">🎉 กลับมาสร้างคอนเทนต์แล้ว</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        สวัสดีครับ ผม{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            มอส
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        หลังจากได้ลองทำงานหลายสาขาอาชีพ ตอนนี้ผมพร้อมที่จะกลับมาแชร์ประสบการณ์
                        และความรู้ที่ได้เรียนรู้มาในช่วงหลายปีที่ผ่านมา
                    </p>

                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        เส้นทางการทำงาน
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        ประสบการณ์ในช่วงที่ผ่านมา จากการถ่ายภาพสู่การเป็น Content Creator และต่อยอดไปสู่สายงานต่าง ๆ
                    </p>
                </div>

                <div className="space-y-6">
                    {timelineData.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`group bg-white rounded-2xl shadow-lg p-8 border-l-4 border-transparent hover:border-${role.color.split('-')[1]}-500 transition-all duration-500 hover:shadow-xl hover:scale-105 ${isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 0.1}s`,
                                    borderLeftColor: `var(--${role.color.split('-')[1]}-500)`
                                }}
                            >
                                <div className="flex items-start space-x-6">
                                    <div className={`flex-shrink-0 p-4 bg-gradient-to-r ${role.color} rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                                {role.title}
                                            </h3>
                                            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-2 rounded-full mt-2 sm:mt-0 hover:bg-gray-200 transition-colors">
                                                {role.period}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {role.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-4xl font-bold mb-6">
                        พร้อมที่จะเริ่มต้นใหม่
                    </h3>
                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                        มาร่วมติดตามเส้นทางใหม่ของผม และเรียนรู้ไปพร้อมกันใน Content ที่กำลังจะมา
                    </p>

                    <a
                        href="https://www.youtube.com/watch?v=UyZ2P5fNzt0&t=64s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        ดูใน YouTube
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gray-600 text-lg mb-2">
                        ขอบคุณที่ติดตาม <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mos Topic</span> นะครับ
                    </p>
                    <p className="text-sm text-gray-500">
                        Content ใหม่ กำลังจะมาเร็ว ๆ นี้... ✨
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MosTimeline;