// types.ts
export interface TeamMember {
    fullName: string;
    email: string;
    specialization: string;
    role: string;
    studentId: string;
  }
  
  export interface FormData {
    college: string;
    specialization: string;
    academicYear: string;
    projectDescription: string;
    projectFile: File | null;
  }
  