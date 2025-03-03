# CodeFolio Hub Component Documentation

This document provides detailed information about the component architecture, props, state management, and component relationships in the CodeFolio Hub project.

## Table of Contents

- [Component Architecture](#component-architecture)
- [Key Components](#key-components)
  - [Layout Components](#layout-components)
  - [UI Components](#ui-components)
  - [Page Components](#page-components)
- [State Management](#state-management)
- [Component Relationships](#component-relationships)
- [Adding New Components](#adding-new-components)

## Component Architecture

CodeFolio Hub follows a component-based architecture using React and TypeScript. The project uses a combination of:

- **Functional Components**: All components are built as React functional components with hooks
- **TypeScript Interfaces**: Props are defined using TypeScript interfaces
- **shadcn/ui Components**: UI components from the shadcn/ui library are used as building blocks
- **Tailwind CSS**: Styling is primarily done using Tailwind utility classes

## Key Components

### Layout Components

#### `Navbar.tsx`

**Purpose**: Main navigation bar displayed at the top of all pages.

**Props**:
```typescript
interface NavbarProps {
  className?: string;
}
```

**State**:
- Uses `useState` to track mobile menu open/closed state

**Usage Example**:
```tsx
<Navbar className="sticky top-0 z-50" />
```

**Key Features**:
- Responsive design with mobile hamburger menu
- Smooth scrolling to page sections
- Active link highlighting

#### `Footer.tsx`

**Purpose**: Footer displayed at the bottom of all pages.

**Props**: None

**Usage Example**:
```tsx
<Footer />
```

### UI Components

#### `ProjectCard.tsx`

**Purpose**: Displays information about a single project.

**Props**:
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  className?: string;
}
```

**Usage Example**:
```tsx
<ProjectCard
  title="Java Exercise Tracker"
  description="A Java application that tracks exercise routines and progress."
  tags={["Java", "Spring Boot", "MySQL"]}
  githubUrl="https://github.com/username/exercise-tracker"
  demoUrl="https://example.com/demo"
/>
```

#### `CategorySection.tsx`

**Purpose**: Wraps a section of projects or content with a title and description.

**Props**:
```typescript
interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}
```

**Usage Example**:
```tsx
<CategorySection
  id="java-exercises"
  title="Java Exercises"
  description="A collection of optimized Java exercises demonstrating core concepts."
>
  {/* Project cards go here */}
</CategorySection>
```

### Page Components

#### `Index.tsx`

**Purpose**: Main landing page component that displays all sections.

**State**:
- No local state, primarily composed of other components

**Structure**:
- Hero section
- Java Exercises section
- Business Projects section
- Watch section (formerly Videos)
- Collaborations section

## State Management

CodeFolio Hub uses a combination of state management approaches:

1. **Local Component State**: Using React's `useState` hook for component-specific state
2. **Context API**: For any shared state across components (currently minimal)
3. **React Query**: For any data fetching needs (if applicable)

The project intentionally keeps state management simple, with most state being local to components.

## Component Relationships

The component hierarchy is structured as follows:

```
App
├── Navbar
├── Routes
│   └── Index
│       ├── HeroSection
│       ├── CategorySection (Java Exercises)
│       │   └── Multiple ProjectCard components
│       ├── CategorySection (Business Projects)
│       │   └── Multiple ProjectCard components
│       ├── CategorySection (Watch)
│       │   └── Multiple ProjectCard components
│       └── CategorySection (Collaborations)
│           └── Multiple ProjectCard components
└── Footer
```

## Adding New Components

When adding new components to the project, follow these guidelines:

1. **File Structure**:
   - Create a new file in `/src/components` for reusable components
   - Create a new file in `/src/pages` for page components

2. **Naming Conventions**:
   - Use PascalCase for component names and files
   - Use descriptive names that reflect the component's purpose

3. **TypeScript**:
   - Define prop interfaces at the top of the file
   - Use proper typing for all props and state

4. **Styling**:
   - Use Tailwind CSS classes for styling
   - Accept a `className` prop to allow customization from parent components

5. **Example Template**:

```tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
  className?: string;
}

const MyComponent: FC<MyComponentProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`my-component ${className}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default MyComponent;
```

6. **Import and Use**:
   - Import your component where needed
   - Pass required props
   - Add any necessary documentation
