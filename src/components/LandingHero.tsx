import React, { useState } from 'react';
import HeroSection from './home/HeroSection';
import IntroSection from './home/IntroSection';
import ExamSchedule from './home/ExamSchedule';
import ScheduleManager from './home/ScheduleManager';
import { getAcademyInfo, updateAcademyInfo, getExamSchedule, updateExamSchedule } from '../utils/homeContent';
import { getSchedules, updateSchedules, type Schedule } from '../utils/scheduleManager';

export default function LandingHero() {
  const [academyInfo, setAcademyInfo] = useState(getAcademyInfo());
  const [examSchedule, setExamSchedule] = useState(getExamSchedule());
  const [schedules, setSchedules] = useState<Schedule[]>(getSchedules());

  const handleUpdateAcademyInfo = (info: any) => {
    setAcademyInfo(info);
    updateAcademyInfo(info);
  };

  const handleUpdateExamSchedule = (exams: any) => {
    setExamSchedule(exams);
    updateExamSchedule(exams);
  };

  const handleUpdateSchedules = (newSchedules: Schedule[]) => {
    setSchedules(newSchedules);
    updateSchedules(newSchedules);
  };

  return (
    <div className="bg-gray-50">
      <HeroSection />
      
      <div className="bg-white">
        <IntroSection 
          info={academyInfo}
          onUpdate={handleUpdateAcademyInfo}
        />
      </div>

      <ScheduleManager
        schedules={schedules}
        onUpdateSchedules={handleUpdateSchedules}
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <ExamSchedule
            exams={examSchedule}
            onUpdate={handleUpdateExamSchedule}
          />
        </div>
      </div>
    </div>
  );
}