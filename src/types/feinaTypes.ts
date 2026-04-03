// ================================
// TIPUS (Types)
// ================================
export interface JobDesktop {
  id: number;
  title: string;
  type: string;
  posted: string;
  btn: string;
  image: string;
}

export interface JobMobile {
  id: number;
  title: string;
  role: string;
  location: string;
  deadline: string;
  btn: string;
  image: string;
}

export interface FeinaData {
  jobsDesktop: JobDesktop[];
  jobsMobile: JobMobile[];
}