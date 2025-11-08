# 🎨 MX Icons

<div align="center">
  
  ![npm version](https://img.shields.io/npm/v/mx-icons)
  ![npm downloads](https://img.shields.io/npm/dm/mx-icons)
  ![license](https://img.shields.io/github/license/yourusername/mx-icons)
  ![bundle size](https://img.shields.io/bundlephobia/minzip/mx-icons)

**A modern, lightweight React icon library with beautiful hand-crafted SVG icons**

Inspired by Heroicons • Built with React • Optimized for Production

[Live Demo](https://yourusername.github.io/mx-icons) • [Browse Icons](#-available-icons) • [Documentation](#-usage) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- 🎨 **Multiple Variants** - Every icon comes in outline, solid, and mini (16px) versions
- ⚡ **Lightweight & Fast** - Tree-shakeable, only imports what you use
- 🔧 **Fully Customizable** - Control size, color, stroke width, and all SVG attributes
- 📦 **Zero Dependencies** - Only React as a peer dependency (18.x or 19.x)
- 🌐 **Social Media Ready** - Includes popular platform icons (YouTube, Instagram, Twitter, GitHub, etc.)
- 💅 **Modern Design** - Clean, professional icons optimized for light-mode interfaces
- 🚀 **Developer Friendly** - Simple API, works with Next.js, Vite, CRA
- 📱 **Responsive** - Built-in support for different sizes (24px standard, 16px mini)

## 📦 Installation

```bash
npm install mx-icons
```

```bash
yarn add mx-icons
```

```bash
pnpm add mx-icons
```

## 🚀 Quick Start

```jsx
import { HomeOutline, YouTubeOutline, Archive } from "mx-icons";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <HomeOutline />

      {/* Custom size and color */}
      <YouTubeOutline size={32} color="#FF0000" />

      {/* Custom stroke width */}
      <Archive size={24} color="#111" strokeWidth={2} />

      {/* Use different variants */}
      <HomeSolid size={28} color="#3B82F6" />
      <HomeMini size={16} color="#6B7280" />
    </div>
  );
}
```

## 🎨 Props & Customization

All icon components accept the following props:

| Prop          | Type               | Default                             | Description                                |
| ------------- | ------------------ | ----------------------------------- | ------------------------------------------ |
| `size`        | `number \| string` | `24` (outline/solid)<br>`16` (mini) | Icon width and height (px or any CSS unit) |
| `color`       | `string`           | `"#111"`                            | Stroke or fill color (any CSS color)       |
| `strokeWidth` | `number`           | `1.5` (outline)<br>`1.25` (mini)    | Stroke width for outline variants          |

### 💡 Usage Examples

```jsx
import { HomeOutline, GitHubOutline, ArchiveArrow } from 'mx-icons';

// Using with Tailwind CSS
<HomeOutline className="w-6 h-6 text-blue-500" />

// Using with inline styles
<GitHubOutline style={{ marginRight: '8px' }} size={20} color="#333" />

// Using em units for responsive sizing
<ArchiveArrow size="2em" color="currentColor" />

// With accessibility attributes
<HomeOutline
  aria-label="Home"
  aria-hidden={false}
  role="img"
/>

// Custom stroke width for bolder icons
<HomeOutline size={32} strokeWidth={2.5} color="#000" />
```

### Run Preview Locally

```bash
# Clone the repository
git clone https://github.com/ig-imanish/mx-icons.git
cd mx-icons

# Install dependencies
npm install

# Start the preview app
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🤝 Contributing

We welcome contributions! Here's how you can help make MX Icons even better:

### Adding New Icons

1. **Fork & Clone**

   ```bash
   git fork https://github.com/ig-imanish/mx-icons.git
   git clone https://github.com/ig-imanish/mx-icons.git
   cd mx-icons
   npm install
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b add/star-icon
   ```

3. **Add Your Icon**

   Create a folder in `src/icons/` with your icon name:

   ```
   src/icons/star/
   ├── StarOutline.jsx
   ├── StarSolid.jsx
   ├── StarMini.jsx
   └── index.js
   ```

4. **Icon Component Template**

   **Outline Variant** (`StarOutline.jsx`):

   ```jsx
   import React from "react";
   import Icon from "../Icon";

   export default function StarOutline({ size, color, strokeWidth, ...props }) {
     return (
       <Icon size={size} color={color} strokeWidth={strokeWidth} {...props}>
         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
       </Icon>
     );
   }
   ```

   **Solid Variant** (`StarSolid.jsx`):

   ```jsx
   import React from "react";
   import Icon from "../Icon";

   export default function StarSolid({ size, color, strokeWidth, ...props }) {
     return (
       <Icon
         size={size}
         color={color}
         strokeWidth={strokeWidth}
         fill={color}
         {...props}
       >
         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
       </Icon>
     );
   }
   ```

   **Mini Variant** (`StarMini.jsx`):

   ```jsx
   import React from "react";
   import Icon from "../Icon";

   export default function StarMini({
     size = 16,
     color = "#111",
     strokeWidth = 1.25,
     ...props
   }) {
     return (
       <Icon size={size} color={color} strokeWidth={strokeWidth} {...props}>
         {/* 16×16 optimized paths */}
         <path d="M8 1l2 4 4.5.5-3.5 3 1 4.5L8 11l-4 2 1-4.5L1 5.5 5.5 5z" />
       </Icon>
     );
   }
   ```

5. **Create Index File** (`index.js`):

   ```js
   import StarOutline from "./StarOutline";
   import StarSolid from "./StarSolid";
   import StarMini from "./StarMini";

   export { StarOutline, StarSolid, StarMini };

   export const variants = [
     {
       variant: "outline",
       slug: "star-outline",
       Component: StarOutline,
       componentName: "StarOutline",
     },
     {
       variant: "solid",
       slug: "star-solid",
       Component: StarSolid,
       componentName: "StarSolid",
     },
     {
       variant: "mini",
       slug: "star-mini",
       Component: StarMini,
       componentName: "StarMini",
     },
   ];

   export default { StarOutline, StarSolid, StarMini };
   ```

6. **Export in Main Index** (`src/icons/index.js`):

   ```js
   import { StarOutline, StarSolid, StarMini } from "./star";

   export {
     // ... existing exports
     StarOutline,
     StarSolid,
     StarMini,
   };

   export const icons = [
     // ... existing icons
     {
       name: "Star",
       variants: [
         {
           variant: "outline",
           slug: "star-outline",
           Component: StarOutline,
           componentName: "StarOutline",
         },
         {
           variant: "solid",
           slug: "star-solid",
           Component: StarSolid,
           componentName: "StarSolid",
         },
         {
           variant: "mini",
           slug: "star-mini",
           Component: StarMini,
           componentName: "StarMini",
         },
       ],
     },
   ];
   ```

7. **Test Your Icon**

   ```bash
   npm run dev
   ```

   - Check all variants (outline, solid, mini)
   - Test different sizes and colors
   - Verify responsiveness

8. **Submit Pull Request**

   ```bash
   git add .
   git commit -m "Add Star icon with outline, solid, and mini variants"
   git push origin add/star-icon
   ```

   Then open a PR on GitHub with:

   - ✅ Description of the icon
   - ✅ Screenshots of all variants
   - ✅ Why this icon should be added

### 📐 Icon Design Guidelines

- ✅ Use **24×24 viewBox** for outline and solid variants
- ✅ Use **16×16 viewBox** for mini variants (optimized for small sizes)
- ✅ Keep **stroke width at 1.5px** for standard outline icons
- ✅ Keep **stroke width at 1.25px** for mini outline icons
- ✅ Use **clean, simple paths** (avoid complex curves when possible)
- ✅ Test at **multiple sizes** (16px, 24px, 32px, 48px)
- ✅ Ensure icons are **visually balanced** and centered
- ✅ Follow **consistent naming** (PascalCase + variant suffix)
- ✅ Add **all three variants** (outline, solid, mini) when possible

### 🐛 Other Ways to Contribute

- 🐛 **Report Bugs** - [Open an issue](https://github.com/yourusername/mx-icons/issues)
- 💡 **Request Icons** - Tell us which icons you need
- 📖 **Improve Docs** - Help make the documentation better
- ⭐ **Star the Repo** - Show your support!
- 🐦 **Share** - Tweet about MX Icons

## 📄 License

MIT License © 2025 [MX Icons Contributors](https://github.com/yourusername/mx-icons/graphs/contributors)

Free to use in personal and commercial projects. See [LICENSE](./LICENSE) for details.

## 📊 Project Stats

![Contributors](https://img.shields.io/github/contributors/yourusername/mx-icons)
![Last Commit](https://img.shields.io/github/last-commit/yourusername/mx-icons)
![Issues](https://img.shields.io/github/issues/yourusername/mx-icons)
![Pull Requests](https://img.shields.io/github/issues-pr/yourusername/mx-icons)

## 🔗 Links

- **📦 NPM Package:** [npmjs.com/package/mx-icons](https://www.npmjs.com/package/mx-icons)
- **🌐 Live Preview:** [yourusername.github.io/mx-icons](https://yourusername.github.io/mx-icons)
- **📚 Documentation:** [github.com/yourusername/mx-icons](https://github.com/yourusername/mx-icons)
- **🐛 Issues:** [github.com/yourusername/mx-icons/issues](https://github.com/yourusername/mx-icons/issues)
- **💬 Discussions:** [github.com/yourusername/mx-icons/discussions](https://github.com/yourusername/mx-icons/discussions)

<div align="center">
  
  **Made with ❤️ by the open-source community**
  
  If you find this project useful, please consider giving it a ⭐ on GitHub!
  
</div>
