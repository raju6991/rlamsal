# Testing Best Practices with Vitest

Testing is a crucial part of software development. Vitest provides a fast and modern testing experience. Let's explore best practices.

## Why Vitest?

Vitest is built on Vite, making it incredibly fast. It shares the same configuration format as Vite and provides excellent TypeScript support.

## Setting Up Vitest

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
```

## Writing Tests

### Unit Tests

Test individual functions and modules:

```typescript
import { describe, it, expect } from 'vitest';

function add(a: number, b: number) {
  return a + b;
}

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

### Component Tests

Test React components with React Testing Library:

```typescript
import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

describe('Hello', () => {
  it('renders greeting', () => {
    render(<Hello name="World" />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
```

## Best Practices

1. **Test behavior, not implementation** - Focus on what the code does, not how it does it
2. **Keep tests simple** - Each test should verify one thing
3. **Use descriptive names** - Test names should describe the expected behavior
4. **AAA Pattern** - Arrange, Act, Assert
5. **Mock external dependencies** - Use mocks for APIs, databases, etc.

## Coverage

Run coverage reports to identify untested code:

```bash
vitest --coverage
```

## Conclusion

Vitest provides an excellent testing experience with great performance. Following these best practices will help you write maintainable and reliable tests.
