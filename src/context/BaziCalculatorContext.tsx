import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { Solar, Lunar, EightChar } from 'lunar-typescript';

type BaziCalculatorContextType = {
    fullname: string;
    gender: string;
    year: string;
    month: string;
    day: string;
    hour: string;
    minutes: string;
    email: string;
    error: BaziFormError,
    setFullName: (fullname: string) => void,
    setGender: (gender: string) => void,
    setYear: (year: string) => void,
    setMonth: (month: string) => void,
    setDay: (day: string) => void,
    setHour: (hour: string) => void,
    setMinutes: (minutes: string) => void,
    setEmail: (email: string) => void,
    getFormData: () => void,
    validateForm: () => void,
    submitForm: () => Promise<void>,
    results?: Lunar
}

export const BaziCalculatorContext = createContext<BaziCalculatorContextType | null>(null);

type BaziFormData = {
    fullname: string;
    gender: string;
    year: number;
    month: number;
    day: number;
    hour: number;
    minutes: number;
    email: string;
};

type BaziFormError = {
    fullname?: string;
    gender?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minutes?: string;
    email?: string;
};

type BaziCalculatorProviderProps = {
    children: ReactNode
}

export const BaziCalculatorProvider = (props: BaziCalculatorProviderProps) => {
    const [fullname, setFullName] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [day, setDay] = useState<string>('');
    const [hour, setHour] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<BaziFormError>({});
    const [results, setResults] = useState<Lunar | undefined>(undefined);
  
    const getFormData = (): BaziFormData => {
      return {
        fullname,
        gender,
        year: parseInt(year, 10) || 0,
        month: parseInt(month, 10) || 0,
        day: parseInt(day, 10) || 0,
        hour: parseInt(hour, 10) || 0,
        minutes: parseInt(minutes, 10) || 0,
        email,
      };
    };
  
    const validateForm = (): boolean => {
      const newErrors: BaziFormError = {};
  
      if (!fullname) newErrors.fullname = 'Please enter your full name.';
      if (!gender) newErrors.gender = 'Please select your gender.';
      if (!year || isNaN(parseInt(year, 10))) newErrors.year = 'Please select a valid year.';
      if (!month || isNaN(parseInt(month, 10))) newErrors.month = 'Please select a valid month.';
      if (!day || isNaN(parseInt(day, 10))) newErrors.day = 'Please select a valid day.';
      if (!hour || isNaN(parseInt(hour, 10))) newErrors.hour = 'Please select a valid hour.';
      if (!minutes || isNaN(parseInt(minutes, 10))) newErrors.minutes = 'Please select a valid minute.';
      if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email.';
  
      setError(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const submitForm = async () => {
      if (!validateForm()) return;
  
      const formData = getFormData();
      const { year, month, day, hour, minutes, gender } = formData;
  
      try {
        console.log('Birth details:', { year, month, day, hour, minutes, gender });
  
        // Create solar date from user input
        const solar = Solar.fromYmdHms(year, month, day, hour, minutes, 0);
        const lunar = solar.getLunar();

        // Updaate the results object
        setResults(lunar);

        console.log('Lunar:', lunar.toString());
  
        // Calculate BaZi (Eight Characters)
        const eightChar = lunar.getEightChar();
        console.log('BaZi:', {
          'yearPillar': eightChar.getYear(),'yearPillarHeavenTenGods': eightChar.getYearShiShenGan(), 'yearPillarEarthTenGods': eightChar.getYearShiShenZhi(), 'yearPillarEarthHiddenStems': eightChar.getYearHideGan(),
          'monthPillar': eightChar.getMonth(), 'monthPillarHeavenTenGods': eightChar.getMonthShiShenGan(), 'monthPillarEarthTenGods': eightChar.getMonthShiShenZhi(),'monthPillarEarthHiddenStems': eightChar.getMonthHideGan(),
          'dayPillar': eightChar.getDay(), 'dayPillarHeavenTenGods': eightChar.getDayShiShenGan(), 'dayPillarEarthTenGods': eightChar.getDayShiShenZhi(), 'dayPillarEarthHiddenStems': eightChar.getDayHideGan(),
          'hourPillar': eightChar.getTime(), 'hourPillarHeavenTenGods': eightChar.getTimeShiShenGan(), 'hourPillarEarthTenGods': eightChar.getTimeShiShenZhi(), 'hourPillarEarthHiddenStems': eightChar.getTimeHideGan(),
        });
       
      } catch (err) {
        console.error('Error calculating BaZi:', err);
        setError({ email: 'An error occurred while calculating your BaZi chart.' });
      }
    };

    return (
        <BaziCalculatorContext.Provider 
            value={{fullname,
                gender,
                year,
                month,
                day,
                hour,
                minutes,
                email,
                results,
                setFullName,
                setGender,
                setYear,
                setMonth,
                setDay,
                setHour,
                setMinutes,
                setEmail,
                getFormData,
                validateForm,
                submitForm,
                error,}}
        >
            {props.children}
        </BaziCalculatorContext.Provider>
    );
}
