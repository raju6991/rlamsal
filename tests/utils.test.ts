import { calculateReadingTime, cn, formatDate, slugify, truncate } from '@/lib/utils';
import { describe, expect, it } from 'vitest';

describe('formatDate', () => {
  it('should format date string correctly', () => {
    const result = formatDate('2024-01-15');
    expect(result).toBe('January 15, 2024');
  });

  it('should format Date object correctly', () => {
    const date = new Date('2024-01-15');
    const result = formatDate(date);
    expect(result).toBe('January 15, 2024');
  });
});

describe('cn', () => {
  it('should join classes together', () => {
    const result = cn('foo', 'bar');
    expect(result).toBe('foo bar');
  });

  it('should filter out undefined and false', () => {
    const result = cn('foo', undefined, 'bar', false);
    expect(result).toBe('foo bar');
  });

  it('should return empty string for all falsy values', () => {
    const result = cn(undefined, false, '');
    expect(result).toBe('');
  });
});

describe('slugify', () => {
  it('should convert text to slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('should remove special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('should handle multiple spaces', () => {
    expect(slugify('Hello   World')).toBe('hello-world');
  });
});

describe('truncate', () => {
  it('should truncate long text', () => {
    const result = truncate('This is a very long text that should be truncated', 20);
    expect(result).toBe('This is a very long...');
  });

  it('should not truncate short text', () => {
    const result = truncate('Short text', 20);
    expect(result).toBe('Short text');
  });
});

describe('calculateReadingTime', () => {
  it('should calculate reading time for short text', () => {
    const result = calculateReadingTime('Hello world');
    expect(result).toBe(1);
  });

  it('should calculate reading time for longer text', () => {
    const text = Array(400).fill('word').join(' ');
    const result = calculateReadingTime(text);
    expect(result).toBe(2);
  });
});
