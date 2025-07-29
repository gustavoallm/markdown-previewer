# 📝 Markdown Previewer

A modern, feature-rich Markdown previewer built with React, TypeScript, and Vite. This project is part of the Dev Tool Chest suite and supports real-time preview with GitHub-style markdown rendering.

## ✨ Features

- 🔄 Real-time preview as you type
- 🎨 Dark/Light theme support (syncs with Dev Tool Chest theme)
- 🖼️ GitHub-style markdown rendering
- ⚡ Fast and responsive
- 📱 Mobile-friendly design

### Supported Markdown Features

- **Text Formatting**

  - Bold, italic, strikethrough
  - Inline code
  - Syntax highlighting for code blocks

- **Lists**

  - Ordered and unordered lists
  - Nested lists
  - Task lists with checkboxes

- **Tables**

  - Column alignment
  - Cell formatting

- **Other Elements**
  - Blockquotes
  - Links and images
  - Horizontal rules
  - Headers (h1-h6)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gustavoallm/dev-tool-chest
cd dev-tool-chest/markdown-previewer
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🔧 Integration with Dev Tool Chest

This project is designed to work seamlessly with Dev Tool Chest, sharing its theme system and UI components. The integration includes:

- Shared theme system (light/dark mode)
- Common UI components from dev-tool-chest-ui
- Consistent styling across the suite

### Theme Integration

The project automatically syncs with the Dev Tool Chest theme system when used as a component. It uses the `useHostTheme` hook to maintain theme consistency:

```typescript
import { useHostTheme } from "@/hooks/useHostTheme";

function App() {
  const theme = useHostTheme();
  // Theme will automatically sync with the host application
}
```

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- react-markdown
- github-markdown-css
- remark-gfm (GitHub Flavored Markdown)
- rehype-highlight (Syntax highlighting)

## 📦 Project Structure

```
markdown-previewer/
├── src/
│   ├── components/     # UI components
│   ├── hooks/         # Custom hooks (including useHostTheme)
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- [react-markdown](https://github.com/remarkjs/react-markdown) for markdown parsing
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) for GitHub-style markdown rendering
- [Dev Tool Chest](https://github.com/gustavoallm/dev-tool-chest) for the theme system and UI components
