import React, { useState } from 'react';
import './ComponentLibrary.css';

// Import all components
import {
    Button,
    GlowButton,
    Input,
    Textarea,
    Dropdown,
    Checkbox,
    Radio,
    Card,
    Modal,
    Alert,
    Loader,
    UserProfileDropdown
} from '../../components';

// Component categories and their data
const componentData = {
    'Show All': {
        components: [] // Will be populated dynamically
    },
    'Buttons': {
        components: [
            {
                name: 'Button',
                description: 'Button component with multiple variants and sizes',
                preview: () => (
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Button variant="default">Default</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                ),
                code: `import { Button } from './components'

<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`
            },
            {
                name: 'GlowButton',
                description: 'Button with beautiful glow effects',
                preview: () => (
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <GlowButton variant="blue">Blue Glow</GlowButton>
                        <GlowButton variant="pink">Pink Glow</GlowButton>
                        <GlowButton variant="green">Green Glow</GlowButton>
                    </div>
                ),
                code: `import { GlowButton } from './components'

<GlowButton variant="blue">Blue Glow</GlowButton>
<GlowButton variant="pink">Pink Glow</GlowButton>
<GlowButton variant="green">Green Glow</GlowButton>`
            }
        ]
    },
    'Inputs': {
        components: [
            {
                name: 'Input',
                description: 'Input field with label and error states',
                preview: () => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
                        <Input label="Name" placeholder="Enter your name" />
                        <Input label="Email" type="email" placeholder="Enter your email" />
                        <Input label="Password" type="password" placeholder="Enter password" />
                    </div>
                ),
                code: `import { Input } from './components'

<Input label="Name" placeholder="Enter your name" />
<Input label="Email" type="email" placeholder="Enter your email" />
<Input label="Password" type="password" placeholder="Enter password" />`
            }
        ]
    },
    'Textarea': {
        components: [
            {
                name: 'Textarea',
                description: 'Textarea component with optional max length counter',
                preview: () => (
                    <div style={{ maxWidth: '500px' }}>
                        <Textarea
                            label="Message"
                            placeholder="Enter your message"
                            rows={4}
                            maxLength={100}
                        />
                    </div>
                ),
                code: `import { Textarea } from './components'

<Textarea 
  label="Message" 
  placeholder="Enter your message"
  rows={4}
  maxLength={100}
/>`
            }
        ]
    },
    'Dropdown': {
        components: [
            {
                name: 'Dropdown',
                description: 'Dropdown select component',
                preview: () => (
                    <div style={{ maxWidth: '300px' }}>
                        <Dropdown
                            label="Select Option"
                            options={[
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' }
                            ]}
                            placeholder="Choose an option"
                        />
                    </div>
                ),
                code: `import { Dropdown } from './components'

<Dropdown 
  label="Select Option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]}
  placeholder="Choose an option"
/>`
            },
            {
                name: 'UserProfileDropdown',
                description: 'User profile dropdown menu with actions',
                preview: () => (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                        <UserProfileDropdown />
                    </div>
                ),
                code: `import { UserProfileDropdown } from './components'

<UserProfileDropdown />`
            }
        ]
    },
    'Checkbox': {
        components: [
            {
                name: 'Checkbox',
                description: 'Checkbox component with label',
                preview: () => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Checkbox label="Accept terms and conditions" />
                        <Checkbox label="Subscribe to newsletter" />
                        <Checkbox label="Remember me" />
                    </div>
                ),
                code: `import { Checkbox } from './components'

<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" />
<Checkbox label="Remember me" />`
            }
        ]
    },
    'Radio': {
        components: [
            {
                name: 'Radio',
                description: 'Radio button component',
                preview: () => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Radio name="plan" value="free" label="Free Plan" />
                        <Radio name="plan" value="pro" label="Pro Plan" />
                        <Radio name="plan" value="enterprise" label="Enterprise Plan" />
                    </div>
                ),
                code: `import { Radio } from './components'

<Radio name="plan" value="free" label="Free Plan" />
<Radio name="plan" value="pro" label="Pro Plan" />
<Radio name="plan" value="enterprise" label="Enterprise Plan" />`
            }
        ]
    },
    'Alerts': {
        components: [
            {
                name: 'Alert',
                description: 'Alert component with different types',
                preview: () => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Alert type="success" message="Success! Your action was completed." />
                        <Alert type="error" message="Error! Something went wrong." />
                        <Alert type="warning" message="Warning! Please check your input." />
                        <Alert type="info" message="Info: Here's some helpful information." />
                    </div>
                ),
                code: `import { Alert } from './components'

<Alert type="success" message="Success! Your action was completed." />
<Alert type="error" message="Error! Something went wrong." />
<Alert type="warning" message="Warning! Please check your input." />
<Alert type="info" message="Info: Here's some helpful information." />`
            }
        ]
    },
    'Loaders': {
        components: [
            {
                name: 'Loader',
                description: 'Loading spinner component',
                preview: () => (
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <Loader size="small" />
                        <Loader size="medium" />
                        <Loader size="large" />
                    </div>
                ),
                code: `import { Loader } from './components'

<Loader size="small" />
<Loader size="medium" />
<Loader size="large" />`
            }
        ]
    }
};

// Populate "Show All" with all components
componentData['Show All'].components = Object.values(componentData)
    .filter(cat => cat.components)
    .flatMap(cat => cat.components);

const ComponentLibrary = () => {
    const [selectedCategory, setSelectedCategory] = useState('Show All');
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [activeTab, setActiveTab] = useState('preview');

    const categories = Object.keys(componentData);
    const currentComponents = componentData[selectedCategory]?.components || [];

    // Auto-select first component when category changes
    React.useEffect(() => {
        if (currentComponents.length > 0) {
            setSelectedComponent(currentComponents[0]);
        }
    }, [selectedCategory]);

    return (
        <div className="component-library">
            {/* Sidebar */}
            <div className="library-sidebar">
                <div className="sidebar-header">
                    <h2>UI Components</h2>
                </div>
                <nav className="sidebar-nav">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`nav-item ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                            {category !== 'Show All' && componentData[category].components.length > 0 && (
                                <span className="component-count">
                                    {componentData[category].components.length}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="library-content">
                <div className="content-header">
                    <h1>Component Library</h1>
                    <p className="content-subtitle">Showing {selectedCategory}</p>
                </div>

                {selectedComponent && (
                    <div className="component-showcase">
                        <div className="showcase-header">
                            <h2>{selectedComponent.name}</h2>
                            <p>{selectedComponent.description}</p>
                        </div>

                        <div className="showcase-tabs">
                            <button
                                className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
                                onClick={() => setActiveTab('preview')}
                            >
                                Preview
                            </button>
                            <button
                                className={`tab ${activeTab === 'code' ? 'active' : ''}`}
                                onClick={() => setActiveTab('code')}
                            >
                                Code
                            </button>
                        </div>

                        <div className="showcase-content">
                            {activeTab === 'preview' ? (
                                <div className="preview-container">
                                    {selectedComponent.preview()}
                                </div>
                            ) : (
                                <pre className="code-container">
                                    <code>{selectedComponent.code}</code>
                                </pre>
                            )}
                        </div>
                    </div>
                )}

                {/* Component Grid */}
                {currentComponents.length > 1 && (
                    <div className="component-grid">
                        {currentComponents.map((comp, index) => (
                            <div
                                key={index}
                                className={`component-card ${selectedComponent === comp ? 'selected' : ''}`}
                                onClick={() => setSelectedComponent(comp)}
                            >
                                <h3>{comp.name}</h3>
                                <p>{comp.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentLibrary;
