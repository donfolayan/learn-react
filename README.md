# React Demos Collection

A comprehensive collection of React components demonstrating various UI patterns, state management techniques, and API integrations. This project serves as a learning resource and component library for common React development patterns.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/donfolayan/learn-react.git
cd react-demos
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧩 Components Overview

### 1. **Counter** 
- **Features**: Increment/decrement functionality
- **Concepts**: Basic state management with `useState`
- **File**: `src/components/Counter.jsx`

### 2. **Todo List**
- **Features**: Add, delete, and manage todo items
- **Concepts**: Array state management, form handling
- **File**: `src/components/Todo.jsx`

### 3. **Calculator**
- **Features**: Basic arithmetic operations
- **Concepts**: Complex state management, event handling, eval() usage
- **File**: `src/components/Calculator.jsx`

### 4. **Form Validation**
- **Features**: Real-time form validation with visual feedback
- **Validation Rules**:
  - Username: Minimum 8 characters
  - Email: Must contain "@gmail.com"
  - Password: Minimum 8 characters
  - Confirm Password: Must match password
- **Concepts**: Form state, validation logic, conditional styling
- **File**: `src/components/Form.jsx`

### 5. **Accordion**
- **Features**: Collapsible content sections with API data
- **Data Source**: JSONPlaceholder API (posts)
- **Concepts**: API calls, component composition, conditional rendering
- **Files**: 
  - `src/components/Accordion.jsx`
  - `src/utils/accordionUtils/AccordionItem.jsx`
  - `src/utils/accordionUtils/accordionContent.js`

### 6. **Meals Gallery**
- **Features**: Display seafood meals from external API
- **Data Source**: TheMealDB API
- **Concepts**: `useEffect`, axios, API integration, error handling
- **File**: `src/components/Meals.jsx`

### 7. **Testimonial Carousel**
- **Features**: Navigate through testimonials with prev/next controls
- **Data Source**: Testimonial API
- **Concepts**: Array navigation, index management, API data
- **File**: `src/components/Testimonial.jsx`

### 8. **Hidden Search Bar**
- **Features**: Expandable search interface with icon toggle
- **Concepts**: Conditional rendering, UI animations, event handling
- **File**: `src/components/HiddenSearchBar.jsx`

### 9. **Theme Toggle**
- **Features**: Switch between light and dark themes
- **Concepts**: Dynamic styling, background/text color management
- **File**: `src/components/ToggleBackgroundColor.jsx`

## 🛠 Technologies Used

- **React** (v19.1.0) - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **CSS3** - Styling

## 📁 Project Structure

```
react-demos/
├── src/
│   ├── components/           # All React components
│   │   ├── Accordion.jsx
│   │   ├── Calculator.jsx
│   │   ├── Counter.jsx
│   │   ├── Form.jsx
│   │   ├── HiddenSearchBar.jsx
│   │   ├── Meals.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Todo.jsx
│   │   └── ToggleBackgroundColor.jsx
│   ├── styles/              # Component-specific CSS files
│   │   ├── accordion.css
│   │   ├── calculator.css
│   │   ├── counter.css
│   │   ├── form.css
│   │   ├── hiddenSearchBar.css
│   │   ├── meals.css
│   │   ├── testimonial.css
│   │   ├── todo.css
│   │   └── toggleColor.css
│   ├── utils/               # Utility functions and helpers
│   │   └── accordionUtils/
│   │       ├── AccordionItem.jsx
│   │       └── accordionContent.js
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── public/                  # Static assets (favicon, etc.)
├── package.json
└── README.md
```

## 🔧 API Endpoints Used

- **JSONPlaceholder**: `https://jsonplaceholder.typicode.com/posts` (Accordion)
- **TheMealDB**: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood` (Meals)
- **Testimonial API**: `https://testimonialapi.vercel.app/api` (Testimonials)

## 💡 Key Learning Concepts

### State Management
- `useState` for local component state
- Object and array state patterns
- State lifting and prop drilling

### Effects and Lifecycle
- `useEffect` for side effects
- API calls and data fetching
- Cleanup and dependency arrays

### Component Patterns
- Component composition
- Prop passing and destructuring
- Conditional rendering
- Event handling

### Form Handling
- Controlled components
- Form validation
- Real-time feedback

### API Integration
- Async/await patterns
- Error handling
- Loading states

## 🎯 Demo Each Component

To test individual components, uncomment the desired component in `src/App.jsx`:

```jsx
const App = () => {
  return <div>
    {/* <Counter /> */}
    {/* <Todo /> */}
    {/* <Meals /> */}
    {/* <Calculator /> */}
    {/* <ToggleBackgroundColor /> */}
    {/* <HiddenSearchBar /> */}
    {/* <Testimonial /> */}
    {/* <Accordion /> */}
    <Form />  {/* Currently active */}
  </div>
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Commit your changes (`git commit -am 'Add new component'`)
4. Push to the branch (`git push origin feature/new-component`)
5. Create a Pull Request

## 📝 Notes

- This project is designed for learning purposes
- Each component demonstrates different React patterns
- CSS files are organized in the `src/styles/` directory for easy management
- Components import their respective CSS files directly
- Some components use `eval()` for demonstration - not recommended for production
- The project structure prioritizes learning clarity over production optimization


---

**Author**: Donald Folayan  
**Repository**: [learn-react](https://github.com/donfolayan/learn-react)
