"use client";

import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Car, BarChart3, MessageCircle, Clock, PieChart as PieChartIcon } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface FeaturesProps {
  translations: any;
  lang: Language;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Features = ({ translations, lang }: FeaturesProps) => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const featuresData = [
    {
      title: translations.items[0].title,
      description: translations.items[0].description,
      icon: <Users className="h-12 w-12 text-blue-600" />,
      color: "bg-blue-50",
      lineData: [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 500 },
        { name: 'Jun', value: 900 },
      ]
    },
    {
      title: translations.items[1].title,
      description: translations.items[1].description,
      icon: <Car className="h-12 w-12 text-green-600" />,
      color: "bg-green-50",
      pieData: [
        { name: 'Sedan', value: 35 },
        { name: 'SUV', value: 40 },
        { name: 'Truck', value: 15 },
        { name: 'Van', value: 10 },
      ]
    },
    {
      title: translations.items[2].title,
      description: translations.items[2].description,
      icon: <MessageCircle className="h-12 w-12 text-indigo-600" />,
      color: "bg-indigo-50",
      lineData: [
        { name: 'Mon', value: 200 },
        { name: 'Tue', value: 350 },
        { name: 'Wed', value: 320 },
        { name: 'Thu', value: 400 },
        { name: 'Fri', value: 500 },
        { name: 'Sat', value: 250 },
        { name: 'Sun', value: 100 },
      ]
    },
    {
      title: translations.items[3].title,
      description: translations.items[3].description,
      icon: <BarChart3 className="h-12 w-12 text-amber-600" />,
      color: "bg-amber-50",
      lineData: [
        { name: 'Q1', value: 300 },
        { name: 'Q2', value: 500 },
        { name: 'Q3', value: 700 },
        { name: 'Q4', value: 900 },
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{translations.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {translations.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuresData.map((feature, index) => (
            <Card 
              key={index}
              className={`feature-card opacity-0 transition-all duration-700 delay-${index * 150} hover:shadow-lg hover:-translate-y-1 ${feature.color}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  {feature.icon}
                  {feature.lineData && (
                    <div className="w-24 h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={feature.lineData}>
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#3B82F6" 
                            strokeWidth={2} 
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                  {feature.pieData && (
                    <div className="w-16 h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={feature.pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={15}
                            outerRadius={30}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {feature.pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>
                <CardTitle className="text-2xl mt-4">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{translations.insights.title}</h3>
              <p className="text-slate-600 mb-6">
                {translations.insights.description}
              </p>
              <ul className="space-y-4">
                {translations.insights.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <div className={`${lang === 'he' ? 'ml-3' : 'mr-3'} text-blue-600`}>
                      {i === 0 && <Clock size={20} />}
                      {i === 1 && <Users size={20} />}
                      {i === 2 && <Car size={20} />}
                      {i === 3 && <PieChartIcon size={20} />}
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 transform transition-transform hover:scale-105">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-slate-900">Monthly Dashboard</h4>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
                <div className="h-64 bg-slate-50 rounded-lg border overflow-hidden">
                  <div className="h-10 border-b bg-slate-100 flex items-center px-4">
                    <div className="w-24 h-4 bg-slate-200 rounded"></div>
                    <div className="ml-auto flex space-x-2">
                      <div className="w-4 h-4 bg-slate-200 rounded"></div>
                      <div className="w-4 h-4 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="space-y-2">
                      <div className="h-3 w-16 bg-slate-200 rounded"></div>
                      <div className="h-8 bg-blue-100 rounded-md flex items-center justify-center">
                        <div className="h-4 w-12 bg-blue-500 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-14 bg-slate-200 rounded"></div>
                      <div className="h-8 bg-green-100 rounded-md flex items-center justify-center">
                        <div className="h-4 w-10 bg-green-500 rounded"></div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="h-28 bg-slate-100 rounded-lg p-2">
                        <div className="h-full w-full bg-white rounded flex items-end p-1">
                          <div className="h-[60%] w-[10%] bg-blue-500 rounded-sm mx-1"></div>
                          <div className="h-[80%] w-[10%] bg-blue-500 rounded-sm mx-1"></div>
                          <div className="h-[40%] w-[10%] bg-blue-500 rounded-sm mx-1"></div>
                          <div className="h-[70%] w-[10%] bg-blue-500 rounded-sm mx-1"></div>
                          <div className="h-[50%] w-[10%] bg-blue-500 rounded-sm mx-1"></div>
                          <div className="h-[90%] w-[10%] bg-blue-500 rounded-sm mx-1"></div>
                          <div className="h-[60%] w-[10%] bg-blue-500 rounded-sm mx-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg border">
                    <div className="text-xs text-slate-500">Leads</div>
                    <div className="text-xl font-semibold text-slate-900">128</div>
                    <div className="text-xs text-green-600">+12%</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border">
                    <div className="text-xs text-slate-500">Sales</div>
                    <div className="text-xl font-semibold text-slate-900">34</div>
                    <div className="text-xs text-green-600">+8%</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border">
                    <div className="text-xs text-slate-500">Inventory</div>
                    <div className="text-xl font-semibold text-slate-900">87</div>
                    <div className="text-xs text-amber-600">-3%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;