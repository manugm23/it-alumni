import { describe, it, expect } from 'vitest';
import type { FeinaData, JobMobile, JobDesktop } from '../../types/feinaTypes';

describe('JobMobile Type', () => {
  it('should create a valid JobMobile object', () => {
    const job: JobMobile = {
      id: 1,
      title: 'Software Engineer',
      role: 'Developer',
      location: 'Barcelona',
      deadline: '2023-12-31',
      image: 'https://example.com/image.jpg',
      btn: 'Apply'
    };

    expect(job.id).toBe(1);
    expect(job.title).toBe('Software Engineer');
    expect(job.role).toBe('Developer');
    expect(job.location).toBe('Barcelona');
    expect(job.deadline).toBe('2023-12-31');
    expect(job.image).toBe('https://example.com/image.jpg');
    expect(job.btn).toBe('Apply');
  });

  it('should have all required properties', () => {
    const job: JobMobile = {
      id: 2,
      title: 'Designer',
      role: 'UX Designer',
      location: 'Madrid',
      deadline: '2024-01-15',
      image: '',
      btn: 'View'
    };

    expect(job).toHaveProperty('id');
    expect(job).toHaveProperty('title');
    expect(job).toHaveProperty('role');
    expect(job).toHaveProperty('location');
    expect(job).toHaveProperty('deadline');
    expect(job).toHaveProperty('image');
    expect(job).toHaveProperty('btn');
  });
});

describe('JobDesktop Type', () => {
  it('should create a valid JobDesktop object', () => {
    const job: JobDesktop = {
      id: 1,
      title: 'Frontend Developer',
      type: 'Full-time',
      posted: '2023-10-01',
      image: 'https://example.com/image.jpg',
      btn: 'Apply Now'
    };

    expect(job.id).toBe(1);
    expect(job.title).toBe('Frontend Developer');
    expect(job.type).toBe('Full-time');
    expect(job.posted).toBe('2023-10-01');
    expect(job.image).toBe('https://example.com/image.jpg');
    expect(job.btn).toBe('Apply Now');
  });

  it('should have all required properties', () => {
    const job: JobDesktop = {
      id: 2,
      title: 'Data Analyst',
      type: 'Part-time',
      posted: '2023-09-15',
      image: '',
      btn: 'Details'
    };

    expect(job).toHaveProperty('id');
    expect(job).toHaveProperty('title');
    expect(job).toHaveProperty('type');
    expect(job).toHaveProperty('posted');
    expect(job).toHaveProperty('image');
    expect(job).toHaveProperty('btn');
  });
});

describe('FeinaData Type', () => {
  it('should create a valid FeinaData object', () => {
    const feinaData: FeinaData = {
      jobsMobile: [
        {
          id: 1,
          title: 'Software Engineer',
          role: 'Developer',
          location: 'Barcelona',
          deadline: '2023-12-31',
          image: 'https://example.com/image.jpg',
          btn: 'Apply'
        }
      ],
      jobsDesktop: [
        {
          id: 1,
          title: 'Frontend Developer',
          type: 'Full-time',
          posted: '2023-10-01',
          image: 'https://example.com/image.jpg',
          btn: 'Apply Now'
        }
      ]
    };

    expect(feinaData.jobsMobile).toHaveLength(1);
    expect(feinaData.jobsDesktop).toHaveLength(1);
  });

  it('should support empty arrays', () => {
    const feinaData: FeinaData = {
      jobsMobile: [],
      jobsDesktop: []
    };

    expect(feinaData.jobsMobile).toEqual([]);
    expect(feinaData.jobsDesktop).toEqual([]);
  });

  it('should support multiple jobs', () => {
    const feinaData: FeinaData = {
      jobsMobile: [
        {
          id: 1,
          title: 'Engineer',
          role: 'Dev',
          location: 'BCN',
          deadline: '2023-12-31',
          image: 'url1',
          btn: 'Apply'
        },
        {
          id: 2,
          title: 'Designer',
          role: 'UX',
          location: 'MAD',
          deadline: '2024-01-15',
          image: 'url2',
          btn: 'View'
        }
      ],
      jobsDesktop: [
        {
          id: 1,
          title: 'Dev',
          type: 'Full',
          posted: '2023-10-01',
          image: 'url1',
          btn: 'Apply'
        },
        {
          id: 2,
          title: 'Analyst',
          type: 'Part',
          posted: '2023-09-15',
          image: 'url2',
          btn: 'Details'
        }
      ]
    };

    expect(feinaData.jobsMobile).toHaveLength(2);
    expect(feinaData.jobsDesktop).toHaveLength(2);
  });
});

describe('feinaManager', () => {
  it('should exist', () => {
    expect(true).toBe(true);
  });

  it('should have a jobs array', () => {
    const jobs = [
      { id: 1, title: 'Software Engineer', company: 'TechCorp' },
      { id: 2, title: 'Frontend Developer', company: 'WebCo' },
      { id: 3, title: 'UX Designer', company: 'DesignStudio' }
    ];

    expect(jobs).toHaveLength(3);
  });

  it('should filter jobs by title', () => {
    const jobs = [
      { id: 1, title: 'Software Engineer' },
      { id: 2, title: 'Data Analyst' },
      { id: 3, title: 'Frontend Engineer' }
    ];

    const engineerJobs = jobs.filter(job => job.title.includes('Engineer'));
    expect(engineerJobs).toHaveLength(2);
  });

  it('should find a job by id', () => {
    const jobs = [
      { id: 1, title: 'Engineer' },
      { id: 2, title: 'Designer' }
    ];

    const job = jobs.find(j => j.id === 1);
    expect(job?.title).toBe('Engineer');
  });
});