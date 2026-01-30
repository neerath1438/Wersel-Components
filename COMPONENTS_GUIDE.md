# Component Library Guide

## 📦 Available Components

All components are located in `src/components/` and can be easily imported and reused.

### UI Components

1. **Button** - `src/components/Button/`
   - Variants: primary, secondary, success
   - Sizes: small, medium, large
   - Props: variant, size, disabled, onClick, children

2. **Input** - `src/components/Input/`
   - Props: label, type, placeholder, value, onChange, error, required, disabled

3. **Textarea** - `src/components/Textarea/`
   - Props: label, placeholder, value, onChange, rows, maxLength, error

4. **Dropdown** - `src/components/Dropdown/`
   - Props: options, value, onChange, placeholder, label, error

5. **Checkbox** - `src/components/Checkbox/`
   - Props: label, checked, onChange, disabled

6. **Radio** - `src/components/Radio/`
   - Props: name, value, label, checked, onChange, disabled

7. **Modal** - `src/components/Modal/`
   - Props: isOpen, onClose, title, children, size (small/medium/large)

8. **Alert** - `src/components/Alert/`
   - Types: success, error, warning, info
   - Props: type, message, title, onClose

9. **Loader** - `src/components/Loader/`
   - Sizes: small, medium, large
   - Props: size, fullScreen

10. **Card** - `src/components/Card/`
    - Props: title, children, className

11. **Header** - `src/components/Header/`
    - Navigation component

12. **Footer** - `src/components/Footer/`
    - Footer component

13. **Layout** - `src/components/Layout/`
    - Wrapper component with Header and Footer

## 🚀 How to Use Components

### Method 1: Import Individual Components

```jsx
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function MyPage() {
  return (
    <div>
      <Input label="Name" placeholder="Enter name" />
      <Button variant="primary">Submit</Button>
    </div>
  )
}
```

### Method 2: Import from Index (Recommended)

```jsx
import { Button, Input, Card, Modal } from './components'

function MyPage() {
  return (
    <Card title="My Card">
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

## ➕ Adding New Components

When you want to add a new component:

1. **Create Component Folder**
   ```
   src/components/YourComponent/
   ├── YourComponent.jsx
   └── YourComponent.css
   ```

2. **Component Structure**
   ```jsx
   // YourComponent.jsx
   import './YourComponent.css'

   const YourComponent = ({ prop1, prop2, ...props }) => {
     return (
       <div className="your-component">
         {/* Your component JSX */}
       </div>
     )
   }

   export default YourComponent
   ```

3. **Add to Index Export**
   ```js
   // src/components/index.js
   export { default as YourComponent } from './YourComponent/YourComponent'
   ```

4. **Use in Your Pages**
   ```jsx
   import { YourComponent } from '../components'
   ```

## 📋 Component Showcase

Visit `/components` route to see all components in action with examples.

## 🎨 Styling

- Each component has its own CSS file
- Components use CSS classes (not inline styles)
- Easy to customize by modifying CSS files
- Consistent color scheme and spacing

## 💡 Best Practices

1. **Reusability**: Make components accept props for customization
2. **Consistency**: Follow existing component patterns
3. **Documentation**: Add comments for complex props
4. **Accessibility**: Include proper labels and ARIA attributes
5. **Error Handling**: Show error states when needed

## 🔄 Extracting Components for Other Projects

To use components in another project:

1. Copy the component folder (e.g., `src/components/Button/`)
2. Copy the component's CSS file
3. Install required dependencies (React)
4. Import and use!

Example:
```bash
# Copy Button component
cp -r src/components/Button /path/to/other/project/src/components/
```

Then import:
```jsx
import Button from './components/Button/Button'
```

## 📝 Component Props Documentation

Each component accepts standard React props plus custom props. Check individual component files for detailed prop lists.

---

**Note**: All components are production-ready and can be used directly in your website development!

