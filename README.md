# RW Tools

A collection of trusted, privacy-focused web tools that never collect, send, or share your data. Built with Next.js, React, and TypeScript.

## 🚀 Features

- **Count Characters**: Count characters and words in your text
- **Sort Lines**: Sort lines alphabetically with smart filtering
- **Privacy First**: All processing happens locally in your browser
- **Modern UI**: Clean, responsive design with dark theme
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Linting**: ESLint with Next.js and TypeScript rules
- **Formatting**: Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rw00/rw-tools.git
cd rw-tools
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests with Vitest

## 🎨 Design System

The project uses a custom CSS design system with:

- CSS custom properties for easy theming
- Consistent spacing and typography scales
- Reusable component classes
- Dark theme optimized

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management

## 📁 Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── globals.css     # Global styles and design system
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── tools/          # Tool pages
│       ├── tool1/
│       └── tool2/
└── components/         # Reusable components
    ├── SideBar.tsx     # Navigation sidebar
    └── TopBar.tsx      # Top navigation bar
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 👨‍💻 Author

**Raf W** - [LinkedIn](https://linkedin.com/in/raf-w) | [GitHub](https://github.com/rw00)

---

Built with ❤️ using modern web technologies
