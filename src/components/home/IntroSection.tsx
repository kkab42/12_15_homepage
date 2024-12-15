import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Edit2 } from 'lucide-react';
import ImageSlider from '../ImageSlider';
import IntroEditor from './IntroEditor';
import { checkIsAdmin } from '../../utils/auth';

interface IntroSectionProps {
  info: {
    title: string;
    description: string;
    address: string;
    phone: string;
    email: string;
  };
  onUpdate: (info: any) => void;
}

export default function IntroSection({ info, onUpdate }: IntroSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(checkIsAdmin());

    const handleUserChange = () => {
      setIsAdmin(checkIsAdmin());
    };

    window.addEventListener('storage', handleUserChange);
    window.addEventListener('userLogin', handleUserChange);

    return () => {
      window.removeEventListener('storage', handleUserChange);
      window.removeEventListener('userLogin', handleUserChange);
    };
  }, []);

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
            학원 소개
          </h2>
          {isAdmin && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 rounded-full hover:bg-gray-100"
              title="학원 소개 편집"
            >
              <Edit2 className="h-5 w-5 text-gray-600" />
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
            <ImageSlider />
          </div>

          <div className="space-y-6 max-w-lg mx-auto">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {info.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-indigo-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">{info.address}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-3 text-indigo-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">{info.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3 text-indigo-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">{info.email}</span>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-700 transition-colors">
                상담 예약하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <IntroEditor
          info={info}
          onSave={(updatedInfo) => {
            onUpdate(updatedInfo);
            setIsEditing(false);
          }}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}