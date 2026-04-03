import { describe, it, expect } from 'vitest';
import type { Alumni, XarxaData } from '../../types/xarxaTypes';

describe('Alumni Type', () => {
  it('should create a valid Alumni object', () => {
    const alumni: Alumni = {
      id: 1,
      name: 'John Doe',
      promotion: '2020',
      role: 'Software Engineer',
      location: 'Barcelona',
      avatar: 'https://example.com/avatar.jpg'
    };

    expect(alumni.id).toBe(1);
    expect(alumni.name).toBe('John Doe');
    expect(alumni.promotion).toBe('2020');
    expect(alumni.role).toBe('Software Engineer');
    expect(alumni.location).toBe('Barcelona');
    expect(alumni.avatar).toBe('https://example.com/avatar.jpg');
  });

  it('should have all required properties', () => {
    const alumni: Alumni = {
      id: 2,
      name: 'Jane Smith',
      promotion: '2021',
      role: 'Designer',
      location: 'Madrid',
      avatar: 'https://example.com/avatar2.jpg'
    };

    expect(alumni).toHaveProperty('id');
    expect(alumni).toHaveProperty('name');
    expect(alumni).toHaveProperty('promotion');
    expect(alumni).toHaveProperty('role');
    expect(alumni).toHaveProperty('location');
    expect(alumni).toHaveProperty('avatar');
  });
});

describe('XarxaData Type', () => {
  it('should create a valid XarxaData object', () => {
    const xarxaData: XarxaData = {
      alumni: [
        {
          id: 1,
          name: 'John Doe',
          promotion: '2020',
          role: 'Software Engineer',
          location: 'Barcelona',
          avatar: 'https://example.com/avatar.jpg'
        }
      ],
      recentActivity: ['User joined', 'Post created']
    };

    expect(xarxaData.alumni).toHaveLength(1);
    expect(xarxaData.recentActivity).toHaveLength(2);
  });

  it('should support empty arrays', () => {
    const xarxaData: XarxaData = {
      alumni: [],
      recentActivity: []
    };

    expect(xarxaData.alumni).toEqual([]);
    expect(xarxaData.recentActivity).toEqual([]);
  });

  it('should support multiple alumni', () => {
    const xarxaData: XarxaData = {
      alumni: [
        {
          id: 1,
          name: 'John',
          promotion: '2020',
          role: 'Engineer',
          location: 'Barcelona',
          avatar: 'url1'
        },
        {
          id: 2,
          name: 'Jane',
          promotion: '2021',
          role: 'Designer',
          location: 'Madrid',
          avatar: 'url2'
        }
      ],
      recentActivity: ['Activity 1', 'Activity 2', 'Activity 3']
    };

    expect(xarxaData.alumni).toHaveLength(2);
    expect(xarxaData.recentActivity).toHaveLength(3);
  });
});