import { createContext, useContext } from 'react';
import type { ResumeData } from '@/types/resume.interface';
import resumeData from '../helpers/constants/resume-data.json'; // ✅ Safe fallback

export const StateContext = createContext<ResumeData>(resumeData);
export const useResumeData = () => useContext(StateContext);
