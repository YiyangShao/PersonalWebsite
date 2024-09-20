# Coding Style and Guidelines

## 1. Structure and Organization
- Keep each file **under 100 lines**. If the file grows larger, break it into smaller, more focused files.
- Maintain a clear **folder structure**:
  - `components/`: For reusable components shared across pages.
  - `pages/`: Each page or view of the app, one file per page.
  - `utils/`: Utility functions, helpers, or constants.
  - `styles.js`: Centralized global styles to ensure consistency across the app.

## 2. Commenting and Documentation
- **Comment each file** at the top to describe its purpose.
- **Comment each function** briefly to explain what it does.
- Avoid excessive comments that restate obvious logic, but explain important or complex code sections.

## 3. Naming Conventions
- Use **camelCase** for variables and function names.
- Use **PascalCase** for React component names and filenames.
- Ensure that all **component names** are descriptive and reflect the purpose of the component (e.g., `Home.js`, `Footer.js`).

## 4. Styling and Layout
- Use **global styles** from `styles.js` for consistency.
- When defining styles, follow the **DRY principle** (Don’t Repeat Yourself). Reuse styles when possible to avoid duplication.
- Keep style objects clean and descriptive. For example, `container`, `title`, `buttonText` should clearly indicate their function.

## 5. Reusable Components
- Break common UI elements (like footers, headers, buttons) into **reusable components** located in the `components/` folder.
- Each component should be **self-contained** and receive props as necessary.
  
## 6. Code Readability
- Ensure that each page and component is easy to read by keeping **functions short** and focused on a single task.
- Ensure **consistent indentation** (2 spaces for indentation in JavaScript and React).
- Group related functionality together to enhance code flow (e.g., placing similar functions near each other).

## 7. Navigation
- Use React Navigation’s **Tab Navigator** for a clean user experience when switching between pages.
- Customize headers and tabs to maintain a consistent look and feel across the app.

## 8. Things to Remember
- **Modularity is key**: If a function, style, or component grows too large, break it down into smaller, manageable parts.
- **Test frequently**: Always test navigation, styling, and functionality as you build to ensure smooth performance across platforms (iOS, Android, Web).
- **Optimize for maintainability**: Write code that is easily understandable and modifiable by others (including ChatGPT!).

By following these coding style guidelines, future updates and maintenance will be easier to manage and the codebase will remain clean and organized.
