import express from 'express';
import { Confession } from '../models/confessionModel';
import { Service } from '../models/serviceModel';
import { Language } from '../models/languageModel';


declare global {
  namespace Express {
    interface Request {
      student?: {
        first_name: string,
         last_name: string,
        student_id: string,
        phone_number: string,
        gender: string,
        language: Language,
        department: string,
        baptismal_name?: string,
        email?: string,
        password?: string,
        service?: Service,
        role?: string,
        current_year?: number,
        confession?: Confession,
      }; 
    }
  }
}

