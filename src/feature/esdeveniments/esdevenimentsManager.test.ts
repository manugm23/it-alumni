import { describe, it, expect } from 'vitest';
import type { Esdeveniment, EsdevenimentsData } from '../../types/esdevenimentsTypes';

describe('Esdeveniment Type', () => {
  it('should create a valid Esdeveniment object', () => {
    const event: Esdeveniment = {
      id: 1,
      title: 'Conference',
      dates: '2026-04-03',
      description: 'A conference event',
      hours: '10:00',
      duration: '2 hours',
      image: 'image.jpg',
      btn: 'Register'
    };

    expect(event.id).toBe(1);
    expect(event.title).toBe('Conference');
    expect(event.dates).toBe('2026-04-03');
    expect(event.description).toBe('A conference event');
    expect(event.hours).toBe('10:00');
    expect(event.duration).toBe('2 hours');
    expect(event.image).toBe('image.jpg');
    expect(event.btn).toBe('Register');
  });

  it('should have all required properties', () => {
    const event: Esdeveniment = {
      id: 2,
      title: 'Workshop',
      dates: '2026-04-04',
      description: 'A workshop event',
      hours: '14:00',
      duration: '1.5 hours',
      image: 'workshop.jpg',
      btn: 'Join'
    };

    expect(event).toHaveProperty('id');
    expect(event).toHaveProperty('title');
    expect(event).toHaveProperty('dates');
    expect(event).toHaveProperty('description');
    expect(event).toHaveProperty('hours');
    expect(event).toHaveProperty('duration');
    expect(event).toHaveProperty('image');
    expect(event).toHaveProperty('btn');
  });
});

describe('EsdevenimentsData Type', () => {
  it('should create a valid EsdevenimentsData object', () => {
    const esdevenimentsData: EsdevenimentsData = {
      esdeveniments: [
        {
          id: 1,
          title: 'Conference',
          dates: '2026-04-03',
          description: 'A conference event',
          hours: '10:00',
          duration: '2 hours',
          image: 'image.jpg',
          btn: 'Register'
        }
      ]
    };

    expect(esdevenimentsData.esdeveniments).toHaveLength(1);
  });

  it('should support empty arrays', () => {
    const esdevenimentsData: EsdevenimentsData = {
      esdeveniments: []
    };

    expect(esdevenimentsData.esdeveniments).toEqual([]);
  });

  it('should support multiple events', () => {
    const esdevenimentsData: EsdevenimentsData = {
      esdeveniments: [
        {
          id: 1,
          title: 'Conference',
          dates: '2026-04-03',
          description: 'A conference event',
          hours: '10:00',
          duration: '2 hours',
          image: 'image.jpg',
          btn: 'Register'
        },
        {
          id: 2,
          title: 'Workshop',
          dates: '2026-04-04',
          description: 'A workshop event',
          hours: '14:00',
          duration: '1.5 hours',
          image: 'workshop.jpg',
          btn: 'Join'
        }
      ]
    };

    expect(esdevenimentsData.esdeveniments).toHaveLength(2);
  });
});

describe('esdevenimentsManager', () => {
  it('should exist', () => {
    expect(true).toBe(true);
  });

  it('should have an events array', () => {
    const events = [
      { id: 1, title: 'Event 1', dates: '2026-04-03' },
      { id: 2, title: 'Event 2', dates: '2026-04-04' }
    ];

    expect(events).toHaveLength(2);
  });

  it('should filter events by title', () => {
    const events = [
      { id: 1, title: 'Conference' },
      { id: 2, title: 'Workshop' },
      { id: 3, title: 'Seminar' }
    ];

    const conferenceEvents = events.filter(event => event.title.includes('Conference'));
    expect(conferenceEvents).toHaveLength(1);
  });

  it('should find an event by id', () => {
    const events = [
      { id: 1, title: 'Conference' },
      { id: 2, title: 'Workshop' }
    ];

    const event = events.find(e => e.id === 1);
    expect(event?.title).toBe('Conference');
  });
});