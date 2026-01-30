import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Button,
  Card,
  Input,
  Textarea,
  Dropdown,
  Checkbox,
  Radio,
  Modal,
  Alert,
  Loader,
  LoaderView,
  LogoMarquee,
  ReactOrbit,
  ReactSpider,
  ReactNexusOrbSup,
  ReactNetworkVisualization,
  ReactImageSwiper,

  ProfileCard,
  ProjectCard,
  GlowLine,
  OrbitingSkills,
  OrbitingCarousel,
  SimpleTimeline,
  GlowButton,
  UserProfileDropdown,
  Badge,
  BadgeView,
  ToastView,
  ChatbotUIView,
  PasswordInputView,
  ExpandedTabsView,
  VerticalTabsView,
  ThreeDCarouselView,
  FileTreeView,
  AccordionView,
  ThreeDCardView,
  LoginFormView,
  LoginForm2View,
  LoginForm3View,
  SignUpFormView,
  MultiStepFormView,
  TwoStepVerificationView,
  MultiSelectView,
  CategoryMultiSelectView,
  NftMarketplaceView,
  MasonryGridView,
  Hero3View,
  BlogHeaderView,
  BackgroundView,
  ThemeSwitchView,
  ExpandingMenu,
  JobCard,
  LoginForm4,
  CodeProfile
} from '../../components'
import ComponentBlock from './ComponentBlock'
import './Components.css'

const Components = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(true)
  const [selectedComponentId, setSelectedComponentId] = useState(null) // null = show all

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  const sections = useMemo(() => {
    return [
      {
        id: 'buttons',
        menuLabel: 'Buttons',
        title: 'Buttons',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Buttons"
            description="Reusable button component with variants and sizes."
            code={{ jsxPath: '../../components/Button/Button.jsx', cssPath: '../../components/Button/Button.css' }}
            preview={
              <div className="wui-showcase-bay">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button loading>Loading</Button>
              </div>
            }
          />
        )
      },
      {
        id: 'glow-buttons',
        menuLabel: 'Glow Buttons',
        title: 'Glow Buttons',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Glow Buttons"
            description="Beautiful buttons with glow effects and gradient backgrounds."
            code={{ jsxPath: '../../components/GlowButton/GlowButton.jsx', cssPath: '../../components/GlowButton/GlowButton.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
                <GlowButton variant="blue">Blue Glow</GlowButton>
                <GlowButton variant="pink">Pink Glow</GlowButton>
                <GlowButton variant="green">Green Glow</GlowButton>
              </div>
            }
          />
        )
      },
      {
        id: 'inputs',
        menuLabel: 'Inputs',
        title: 'Input Fields',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Input Fields"
            description="Input component with label, required state, and error handling."
            code={{ jsxPath: '../../components/Input/Input.jsx', cssPath: '../../components/Input/Input.css' }}
            preview={
              <div className="wui-showcase-bay">
                <Input
                  label="Text Input"
                  placeholder="Enter text here"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="Required Input"
                  placeholder="This is required"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="Input with Error"
                  placeholder="Error example"
                  error="This field is required"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input label="Disabled Input" placeholder="Disabled" disabled value="Cannot edit" />
              </div>
            }
          />
        )
      },
      {
        id: 'textarea',
        menuLabel: 'Textarea',
        title: 'Textarea',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Textarea"
            description="Textarea component with optional max length counter."
            code={{ jsxPath: '../../components/Textarea/Textarea.jsx', cssPath: '../../components/Textarea/Textarea.css' }}
            preview={
              <div className="wui-showcase-bay">
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  rows={4}
                />
                <Textarea
                  label="Textarea with Max Length"
                  placeholder="Max 100 characters"
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  maxLength={100}
                  rows={3}
                />
              </div>
            }
          />
        )
      },
      {
        id: 'dropdown',
        menuLabel: 'Dropdown',
        title: 'Dropdown',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Dropdown"
            description="Dropdown/select component with options + error state."
            code={{ jsxPath: '../../components/Dropdown/Dropdown.jsx', cssPath: '../../components/Dropdown/Dropdown.css' }}
            preview={
              <div className="wui-showcase-bay">
                <Dropdown
                  label="Select Option"
                  options={dropdownOptions}
                  value={dropdownValue}
                  onChange={setDropdownValue}
                  placeholder="Choose an option"
                />
                <Dropdown
                  label="Dropdown with Error"
                  options={dropdownOptions}
                  value={dropdownValue}
                  onChange={setDropdownValue}
                  error="Please select an option"
                />
              </div>
            }
          />
        )
      },
      {
        id: 'user-profile-dropdown',
        menuLabel: 'User Profile Dropdown',
        title: 'User Profile Dropdown',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="User Profile Dropdown"
            description="User profile dropdown menu with avatar, user info, and action items."
            code={{ jsxPath: '../../components/UserProfileDropdown/UserProfileDropdown.jsx', cssPath: '../../components/UserProfileDropdown/UserProfileDropdown.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                <UserProfileDropdown />
              </div>
            }
          />
        )
      },
      {
        id: 'badges',
        menuLabel: 'Badges',
        title: 'Badges',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Badges"
            description="Beautiful badge components with glass effects, neon glow, gradients, and more."
            code={{ jsxPath: '../../components/Badge/Badge.jsx', cssPath: '../../components/Badge/Badge.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px' }}>
                <BadgeView />
              </div>
            }
          />
        )
      },
      {
        id: 'toast-notifications',
        menuLabel: 'Toast Notifications',
        title: 'Toast Notifications',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Toast Notifications"
            description="Animated toast notifications with multiple types, positions, and auto-dismiss functionality."
            code={{ jsxPath: '../../components/Toast/Toast.jsx', cssPath: '../../components/Toast/Toast.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0', minHeight: '600px', position: 'relative' }}>
                <ToastView />
              </div>
            }
          />
        )
      },
      {
        id: 'chatbot-ui',
        menuLabel: 'Chatbot UI',
        title: 'Chatbot UI',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Chatbot UI"
            description="Modern chatbot prompt interface with model selector, file upload, and voice input."
            code={{ jsxPath: '../../components/ChatbotUI/ChatbotUI.jsx', cssPath: '../../components/ChatbotUI/ChatbotUI.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px' }}>
                <ChatbotUIView />
              </div>
            }
          />
        )
      },
      {
        id: 'password-input',
        menuLabel: 'Password Input',
        title: 'Password Input',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Password Input"
            description="Enhanced password input with real-time validation and strength requirements."
            code={{ jsxPath: '../../components/PasswordInput/PasswordInput.jsx', cssPath: '../../components/PasswordInput/PasswordInput.css' }}
            preview={
              <div className="wui-showcase-bay">
                <PasswordInputView />
              </div>
            }
          />
        )
      },
      {
        id: 'expanded-tabs',
        menuLabel: 'Expanded Tabs',
        title: 'Expanded Tabs',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Expanded Tabs"
            description="Animated tabs with expand effect, pill animation, and separator support."
            code={{ jsxPath: '../../components/ExpandedTabs/ExpandedTabs.jsx', cssPath: '../../components/ExpandedTabs/ExpandedTabs.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: '#0f172a', borderRadius: '8px' }}>
                <ExpandedTabsView />
              </div>
            }
          />
        )
      },
      {
        id: 'vertical-tabs',
        menuLabel: 'Vertical Tabs',
        title: 'Vertical Tabs',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Vertical Tabs"
            description="Vertical tabs with badges, animated pill background, and content switching."
            code={{ jsxPath: '../../components/VerticalTabs/VerticalTabs.jsx', cssPath: '../../components/VerticalTabs/VerticalTabs.css' }}
            preview={
              <div className="wui-showcase-bay">
                <VerticalTabsView />
              </div>
            }
          />
        )
      },
      {
        id: '3d-carousel',
        menuLabel: '3D Carousel',
        title: '3D Carousel',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="3D Carousel"
            description="Stunning 3D carousel with rotating cards, drag interaction, auto-spin, and tilt effects."
            code={{ jsxPath: '../../components/ThreeDCarousel/ThreeDCarousel.jsx', cssPath: '../../components/ThreeDCarousel/ThreeDCarousel.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0' }}>
                <ThreeDCarouselView />
              </div>
            }
          />
        )
      },
      {
        id: 'file-tree',
        menuLabel: 'File Tree',
        title: 'File Tree',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="File Tree"
            description="Interactive file tree with collapsible folders, file type icons, and selection highlighting."
            code={{ jsxPath: '../../components/FileTree/FileTree.jsx', cssPath: '../../components/FileTree/FileTree.css' }}
            preview={
              <div className="wui-showcase-bay">
                <FileTreeView />
              </div>
            }
          />
        )
      },
      {
        id: 'accordion',
        menuLabel: 'Accordion',
        title: 'Accordion',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Accordion"
            description="Modern accordion component with icons, smooth animations, and FAQ content."
            code={{ jsxPath: '../../components/Accordion/Accordion.jsx', cssPath: '../../components/Accordion/Accordion.css' }}
            preview={
              <div className="wui-showcase-bay">
                <AccordionView />
              </div>
            }
          />
        )
      },
      {
        id: '3d-card',
        menuLabel: '3D Card',
        title: '3D Card',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="3D Card"
            description="Interactive 3D card with mouse-tracking tilt, radial glow, dynamic shadow, and parallax depth."
            code={{ jsxPath: '../../components/ThreeDCard/ThreeDCard.jsx', cssPath: '../../components/ThreeDCard/ThreeDCard.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0' }}>
                <ThreeDCardView />
              </div>
            }
          />
        )
      },
      {
        id: 'login-form',
        menuLabel: 'Login Form',
        title: 'Login Form',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Login Form"
            description="Modern login form with social authentication (Apple, Google, X), email/password inputs, and password visibility toggle."
            code={{ jsxPath: '../../components/LoginForm/LoginForm.jsx', cssPath: '../../components/LoginForm/LoginForm.css' }}
            preview={
              <div className="wui-showcase-bay">
                <LoginFormView />
              </div>
            }
          />
        )
      },
      {
        id: 'login-form-2',
        menuLabel: 'Login Form 2',
        title: 'Login Form 2',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Login Form 2"
            description="Alternative login form design with icon inputs, 'Get Started' button, and social login (Google, Facebook, Apple)."
            code={{ jsxPath: '../../components/LoginForm/LoginForm2.jsx', cssPath: '../../components/LoginForm/LoginForm2.css' }}
            preview={
              <div className="wui-showcase-bay">
                <LoginForm2View />
              </div>
            }
          />
        )
      },
      {
        id: 'login-form-3',
        menuLabel: 'Login Form 3',
        title: 'Login Form 3',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Login Form 3"
            description="Split-screen login form with gradient sidebar, shield icon, social login (Google, Twitter), and 'Keep me signed in' checkbox."
            code={{ jsxPath: '../../components/LoginForm/LoginForm3.jsx', cssPath: '../../components/LoginForm/LoginForm3.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0' }}>
                <LoginForm3View />
              </div>
            }
          />
        )
      },
      {
        id: 'signup-form',
        menuLabel: 'Sign Up Form',
        title: 'Sign Up Form',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Sign Up Form"
            description="Brutalist minimalist sign up form with full name/email/password inputs, terms checkbox, and social login (GitHub, Google)."
            code={{ jsxPath: '../../components/SignUpForm/SignUpForm.jsx', cssPath: '../../components/SignUpForm/SignUpForm.css' }}
            preview={
              <div className="wui-showcase-bay">
                <SignUpFormView />
              </div>
            }
          />
        )
      },
      {
        id: 'multistep-form',
        menuLabel: 'Multi-Step Form',
        title: 'Multi-Step Form',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Multi-Step Form"
            description="3-step wizard form with progress bar, step navigation, animations, and review screen before submission."
            code={{ jsxPath: '../../components/MultiStepForm/MultiStepForm.jsx', cssPath: '../../components/MultiStepForm/MultiStepForm.css' }}
            preview={
              <div className="wui-showcase-bay">
                <MultiStepFormView />
              </div>
            }
          />
        )
      },
      {
        id: 'twostep-verification',
        menuLabel: 'Two-Step Verification',
        title: 'Two-Step Verification',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Two-Step Verification"
            description="OTP verification component with 5-digit input, auto-focus navigation, paste support, and macOS window controls."
            code={{ jsxPath: '../../components/TwoStepVerification/TwoStepVerification.jsx', cssPath: '../../components/TwoStepVerification/TwoStepVerification.css' }}
            preview={
              <div className="wui-showcase-bay">
                <TwoStepVerificationView />
              </div>
            }
          />
        )
      },
      {
        id: 'multiselect',
        menuLabel: 'Multi-Select',
        title: 'Multi-Select',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Framework Multi-Select"
            description="Framework multi-select dropdown with search, keyboard navigation (arrows, enter, escape, backspace), and animated popover."
            code={{ jsxPath: '../../components/MultiSelect/MultiSelect.jsx', cssPath: '../../components/MultiSelect/MultiSelect.css' }}
            preview={
              <div className="wui-showcase-bay">
                <MultiSelectView />
              </div>
            }
          />
        )
      },
      {
        id: 'category-multiselect',
        menuLabel: 'Category Select',
        title: 'Category Select',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Category Multi-Select"
            description="A category-based multi-select with icons, descriptions, and item counts for a richer selection experience."
            code={{ jsxPath: '../../components/CategoryMultiSelect/CategoryMultiSelect.jsx', cssPath: '../../components/CategoryMultiSelect/CategoryMultiSelect.css' }}
            preview={
              <div className="wui-showcase-bay">
                <CategoryMultiSelectView />
              </div>
            }
          />
        )
      },
      {
        id: 'nft-marketplace',
        menuLabel: 'NFT Marketplace',
        title: 'NFT Marketplace',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="NFT Marketplace"
            description="A responsive NFT marketplace grid with countdown timers, price badges, and 'like' functionality."
            code={{ jsxPath: '../../components/NftMarketplace/NftMarketplace.jsx', cssPath: '../../components/NftMarketplace/NftMarketplace.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0' }}>
                <NftMarketplaceView />
              </div>
            }
          />
        )
      },
      {
        id: 'masonry-grid',
        menuLabel: 'Masonry Grid',
        title: 'Masonry Grid',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Masonry Grid"
            description="A Pinterest-style Masonry grid layout using CSS columns, featuring hover animations and smooth item reveals."
            code={{ jsxPath: '../../components/MasonryGrid/MasonryGrid.jsx', cssPath: '../../components/MasonryGrid/MasonryGrid.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0' }}>
                <MasonryGridView />
              </div>
            }
          />
        )
      },
      {
        id: 'hero-3',
        menuLabel: 'Hero Section 3',
        title: 'Hero Section 3',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Minimalist Hero Section"
            description="A clean, black and white minimalist hero section with navigation, feature list, and stats section."
            code={{ jsxPath: '../../components/Hero/Hero3.jsx', cssPath: '../../components/Hero/Hero3.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0' }}>
                <Hero3View />
              </div>
            }
          />
        )
      },
      {
        id: 'blog-header',
        menuLabel: 'Blog Header',
        title: 'Blog Header',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Blog Header"
            description="Modern, responsive navigation header with sticky blur effect, search, and subscribe functionality."
            code={{ jsxPath: '../../components/BlogHeader/BlogHeader.jsx', cssPath: '../../components/BlogHeader/BlogHeader.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0', background: '#f8f9fa', borderRadius: '8px' }}>
                <BlogHeaderView />
              </div>
            }
          />
        )
      },
      {
        id: 'checkbox',
        menuLabel: 'Checkbox',
        title: 'Checkbox',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Checkbox"
            description="Custom styled checkbox with disabled state."
            code={{ jsxPath: '../../components/Checkbox/Checkbox.jsx', cssPath: '../../components/Checkbox/Checkbox.css' }}
            preview={
              <div className="wui-showcase-bay">
                <Checkbox
                  label="I agree to the terms and conditions"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
                <Checkbox label="Disabled Checkbox" checked={true} disabled />
              </div>
            }
          />
        )
      },
      {
        id: 'radio',
        menuLabel: 'Radio',
        title: 'Radio Buttons',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Radio Buttons"
            description="Radio group component with custom styling."
            code={{ jsxPath: '../../components/Radio/Radio.jsx', cssPath: '../../components/Radio/Radio.css' }}
            preview={
              <div className="wui-showcase-bay">
                <Radio
                  name="example"
                  value="option1"
                  label="Option 1"
                  checked={radioValue === 'option1'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <Radio
                  name="example"
                  value="option2"
                  label="Option 2"
                  checked={radioValue === 'option2'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <Radio
                  name="example"
                  value="option3"
                  label="Option 3"
                  checked={radioValue === 'option3'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
              </div>
            }
          />
        )
      },
      {
        id: 'toggle-switches',
        menuLabel: 'Toggle Switches',
        title: 'Toggle Switches',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Toggle Switches"
            description="Interactive animated toggle switches and theme switchers."
            code={{ jsxPath: '../../components/ThemeSwitch/ThemeSwitch.jsx', cssPath: '../../components/ThemeSwitch/ThemeSwitch.css' }}
            preview={
              <div className="wui-showcase-bay">
                <ThemeSwitchView />
              </div>
            }
          />
        )
      },
      {
        id: 'modal',
        menuLabel: 'Modal Dialog',
        title: 'Modal',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Modal"
            description="Modal dialog with overlay and close controls."
            code={{ jsxPath: '../../components/Modal/Modal.jsx', cssPath: '../../components/Modal/Modal.css' }}
            preview={
              <div className="wui-showcase-bay">
                <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Example Modal"
                  size="medium"
                >
                  <p>This is a modal dialog. You can put any content here.</p>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                    <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                  </div>
                </Modal>
              </div>
            }
          />
        )
      },
      {
        id: 'alerts',
        menuLabel: 'Alerts',
        title: 'Alerts',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Alerts"
            description="Alert banners for success/error/warning/info."
            code={{ jsxPath: '../../components/Alert/Alert.jsx', cssPath: '../../components/Alert/Alert.css' }}
            preview={
              <div className="wui-showcase-bay">
                {showAlert && (
                  <Alert
                    type="success"
                    title="Success!"
                    message="This is a success alert"
                    onClose={() => setShowAlert(false)}
                  />
                )}
                <Alert type="error" title="Error" message="This is an error alert" />
                <Alert type="warning" title="Warning" message="This is a warning alert" />
                <Alert type="info" title="Info" message="This is an info alert" />
              </div>
            }
          />
        )
      },
      {
        id: 'loaders',
        menuLabel: 'Loaders',
        title: 'Loaders',
        badge: 'Updated',
        render: () => (
          <ComponentBlock
            title="Loaders"
            description="Selection of modern, animated loaders including spins, pulses, ripples, and more."
            code={{ jsxPath: '../../components/Loader/EnhancedLoaders.jsx', cssPath: '../../components/Loader/EnhancedLoaders.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '0' }}>
                <LoaderView />
              </div>
            }
          />
        )
      },
      {
        id: 'marquee-scroller',
        menuLabel: 'Marquee Scroller',
        title: 'Logo Marquee',
        badge: null,
        render: () => (
          <ComponentBlock
            title="Logo Marquee"
            description="Infinite marquee scroller for SVG logos."
            code={{ jsxPath: '../../components/LogoMarquee/LogoMarquee.jsx', cssPath: '../../components/LogoMarquee/LogoMarquee.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px' }}>
                <LogoMarquee />
              </div>
            }
          />
        )
      },
      {
        id: 'orbiting-circles',
        menuLabel: 'Orbiting Circles Animation',
        title: 'React Orbit',
        badge: null,
        render: () => (
          <ComponentBlock
            title="React Orbit"
            description="Center + orbit icons with hover highlight."
            code={{ jsxPath: '../../components/ReactOrbit/ReactOrbit.jsx', cssPath: '../../components/ReactOrbit/ReactOrbit.css' }}
            preview={
              <div className="wui-showcase-bay">
                <ReactOrbit />
              </div>
            }
          />
        )
      },

      {
        id: 'orbiting-spider',
        menuLabel: 'Orbiting Skills',
        title: 'React Spider',
        badge: null,
        render: () => (
          <ComponentBlock
            title="React Spider"
            description="Spider web graph with hover glow and spokes."
            code={{ jsxPath: '../../components/ReactSpider/ReactSpider.jsx', cssPath: '../../components/ReactSpider/ReactSpider.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#f8f9fa' }}>
                <ReactSpider />
              </div>
            }
          />
        )
      },
      {
        id: 'nexus-orb-sup',
        menuLabel: 'Orbiting Nexus Orb',
        title: 'React Nexus Orb Sup',
        badge: null,
        render: () => (
          <ComponentBlock
            title="React Nexus Orb Sup"
            description="Auto-rotating nexus network with particles."
            code={{ jsxPath: '../../components/ReactNexusOrbSup/ReactNexusOrbSup.jsx', cssPath: '../../components/ReactNexusOrbSup/ReactNexusOrbSup.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#f8f9fa' }}>
                <ReactNexusOrbSup />
              </div>
            }
          />
        )
      },
      {
        id: 'backgrounds',
        menuLabel: 'Backgrounds',
        title: 'Background Patterns',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Background Patterns"
            description="Premium background patterns using gradients, blurs, and mesh effects."
            code={{ jsxPath: '../../components/Background/PurpleGlowBackground.jsx', cssPath: '../../components/Background/Background.css' }}
            preview={<BackgroundView />}
          />
        ),
      },
      {
        id: 'network-visualization',
        menuLabel: 'Network Visualization',
        title: 'React Network Visualization',
        badge: null,
        render: () => (
          <ComponentBlock
            title="React Network Visualization"
            description="Avatar rings + animated random connections (framer-motion)."
            code={{ jsxPath: '../../components/ReactNetworkVisualization/ReactNetworkVisualization.jsx', cssPath: '../../components/ReactNetworkVisualization/ReactNetworkVisualization.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#f8f9fa', minHeight: '500px' }}>
                <ReactNetworkVisualization />
              </div>
            }
          />
        )
      },
      {
        id: 'image-swiper',
        menuLabel: 'Image Swiper Carousel',
        title: 'React Image Swiper',
        badge: null,
        render: () => (
          <ComponentBlock
            title="React Image Swiper"
            description="Swipeable 3D card stack with pointer/touch support."
            code={{ jsxPath: '../../components/ReactImageSwiper/ReactImageSwiper.jsx', cssPath: '../../components/ReactImageSwiper/ReactImageSwiper.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#1a1a1a', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ReactImageSwiper />
              </div>
            }
          />
        )
      },

      {
        id: 'glitch-vault-card',
        menuLabel: 'Glitch Vault Card',
        title: 'Profile Card',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Profile Card"
            description="Glassmorphism profile card with GlitchVault glow interaction."
            code={{ jsxPath: '../../components/ProfileCard/ProfileCard.jsx', cssPath: '../../components/ProfileCard/ProfileCard.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProfileCard />
              </div>
            }
          />
        )
      },
      {
        id: 'project-card',
        menuLabel: 'Project Card',
        title: 'Project Card',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Project Card"
            description="Project status card with GlitchVault effects, ideal for deployment notifications."
            code={{ jsxPath: '../../components/ProjectCard/ProjectCard.jsx', cssPath: '../../components/ProjectCard/ProjectCard.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#f8f9fa', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProjectCard />
              </div>
            }
          />
        )
      },
      {
        id: 'glow-line',
        menuLabel: 'Glow Line',
        title: 'React GlowLine',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="React GlowLine"
            description="Animated glow line component with multiple color schemes and orientations."
            code={{ jsxPath: '../../components/GlowLine/GlowLine.jsx', cssPath: '../../components/GlowLine/GlowLine.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#0f172a', minHeight: '400px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                  <GlowLine orientation="horizontal" position="20%" color="purple" />
                  <GlowLine orientation="horizontal" position="40%" color="blue" />
                  <GlowLine orientation="horizontal" position="60%" color="green" />
                  <GlowLine orientation="horizontal" position="80%" color="red" />
                  <GlowLine orientation="vertical" position="20%" color="purple" />
                  <GlowLine orientation="vertical" position="50%" color="blue" />
                  <GlowLine orientation="vertical" position="80%" color="green" />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', zIndex: 10 }}>
                    <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Glow Line Examples</h3>
                    <p style={{ margin: '0.5rem 0 0 0', opacity: 0.7 }}>Multiple orientations and colors</p>
                  </div>
                </div>
              </div>
            }
          />
        )
      },
      {
        id: 'orbiting-skills',
        menuLabel: 'Orbiting Skills',
        title: 'React Orbiting Skills',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="React Orbiting Skills"
            description="Animated orbiting skill icons with glow effects and hover interactions."
            code={{ jsxPath: '../../components/OrbitingSkills/OrbitingSkills.jsx', cssPath: '../../components/OrbitingSkills/OrbitingSkills.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#0f172a', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <OrbitingSkills />
              </div>
            }
          />
        )
      },
      {
        id: 'orbiting-carousel',
        menuLabel: 'Orbiting Carousel',
        title: 'React Orbiting Carousel',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="React Orbiting Carousel"
            description="Interactive orbiting carousel with profile cards, keyboard navigation, and smooth animations."
            code={{ jsxPath: '../../components/OrbitingCarousel/OrbitingCarousel.jsx', cssPath: '../../components/OrbitingCarousel/OrbitingCarousel.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#f8f9fa', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <OrbitingCarousel />
              </div>
            }
          />
        )
      },
      {
        id: 'simple-timeline',
        menuLabel: 'Simple Timeline',
        title: 'Simple Timeline',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Simple Timeline"
            description="Expandable professional timeline with skills, responsibilities, and accessible accordion behavior."
            code={{ jsxPath: '../../components/SimpleTimeline/SimpleTimeline.jsx', cssPath: '../../components/SimpleTimeline/SimpleTimeline.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', borderRadius: '8px', background: '#f8f9fa', minHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SimpleTimeline />
              </div>
            }
          />
        )
      },
      {
        id: 'expanding-menu',
        menuLabel: 'Expanding Menu',
        title: 'Expanding Menu',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Expanding Menu"
            description="Horizontal menu with smooth expanding hover effect."
            code={{ jsxPath: '../../components/ExpandingMenu/ExpandingMenu.jsx', cssPath: '../../components/ExpandingMenu/ExpandingMenu.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                <ExpandingMenu />
              </div>
            }
          />
        )
      },
      {
        id: 'job-card',
        menuLabel: 'Job Card',
        title: 'Job Posting Card',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Job Posting Card"
            description="Professional card design for job listings with salary, title, and company logo."
            code={{ jsxPath: '../../components/JobCard/JobCard.jsx', cssPath: '../../components/JobCard/JobCard.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: '#f1f5f9', borderRadius: '12px' }}>
                <JobCard />
              </div>
            }
          />
        )
      },
      {
        id: 'login-form-4',
        menuLabel: 'Login Form 4',
        title: 'Soft Blue Login Form',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Soft Blue Login Form"
            description="Modern login form with soft blue gradient, social login options, and subtle animations."
            code={{ jsxPath: '../../components/LoginForm/LoginForm4.jsx', cssPath: '../../components/LoginForm/LoginForm4.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                <LoginForm4 />
              </div>
            }
          />
        )
      },
      {
        id: 'code-profile',
        menuLabel: 'Code Profile',
        title: 'Developer Profile Card',
        badge: 'New',
        render: () => (
          <ComponentBlock
            title="Developer Profile Card"
            description="Premium code-styled developer profile with file system aesthetics, syntax highlighting, and glowing atmospheric effects."
            code={{ jsxPath: '../../components/CodeProfile/CodeProfile.jsx', cssPath: '../../components/CodeProfile/CodeProfile.css' }}
            preview={
              <div className="wui-showcase-bay" style={{ padding: '2rem', background: '#09090b', borderRadius: '12px' }}>
                <CodeProfile />
              </div>
            }
          />
        )
      }
    ]
  }, [
    checkboxChecked,
    dropdownOptions,
    dropdownValue,
    inputValue,
    isModalOpen,
    radioValue,
    showAlert,
    textareaValue
  ])

  // Restructured categories
  const categories = useMemo(() => [
    {
      title: 'Input Controls',
      items: sections.filter(s =>
        ['buttons', 'glow-buttons', 'inputs', 'textarea', 'dropdown', 'checkbox', 'radio', 'toggle-switches', 'password-input', 'multiselect', 'category-multiselect'].includes(s.id) ||
        s.id.includes('form') || s.id.includes('verification')
      )
    },
    {
      title: 'Navigational Components',
      items: sections.filter(s =>
        ['expanded-tabs', 'vertical-tabs', 'file-tree', 'blog-header', 'hero-3', 'orbiting-carousel', 'expanding-menu'].includes(s.id)
      )
    },
    {
      title: 'Informational Components',
      items: sections.filter(s =>
        ['badges', 'toast-notifications', 'loaders', 'simple-timeline', 'glow-line', 'orbiting-skills', 'orbiting-circles', 'marquee-scroller', 'network-visualization', 'orbiting-spider', 'nexus-orb-sup', 'backgrounds'].includes(s.id) ||
        s.id === 'alerts'
      )
    },
    {
      title: 'Containers/Structural Components',
      items: sections.filter(s =>
        ['modal', 'accordion', '3d-card', '3d-carousel', 'user-profile-dropdown', 'image-swiper', 'glitch-vault-card', 'project-card', 'nft-marketplace', 'masonry-grid', 'chatbot-ui', 'job-card', 'code-profile'].includes(s.id)
      )
    }
  ], [sections])

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories

    const query = searchQuery.toLowerCase().trim()

    // Genius mapping for synonyms
    const synonyms = {
      'text': ['input', 'textarea', 'typography'],
      'box': ['input', 'checkbox', 'radio', 'container', 'card'],
      'choose': ['select', 'dropdown', 'radio', 'checkbox'],
      'pick': ['select', 'dropdown', 'date'],
      'loading': ['loader', 'spinner', 'wait'],
      'spin': ['loader', 'spinner'],
      'image': ['avatar', 'img', 'picture', 'gallery', 'carousel'],
      'pic': ['avatar', 'img', 'picture'],
      'nav': ['header', 'menu', 'sidebar', 'tabs'],
      'navigation': ['header', 'menu', 'sidebar', 'tabs'],
      'foot': ['footer'],
      'login': ['auth', 'sign in', 'form'],
      'signup': ['auth', 'register', 'form', 'sign up'],
      'register': ['auth', 'signup', 'form'],
      'authentication': ['login', 'signup', 'auth', 'form'],
      'msg': ['toast', 'alert', 'notification', 'message'],
      'popup': ['modal', 'dialog', 'toast', 'alert'],
      'notify': ['toast', 'alert', 'notification'],
      'switch': ['toggle', 'checkbox'],
      'tick': ['checkbox'],
      'option': ['radio', 'select', 'dropdown'],
      'list': ['menu', 'dropdown', 'table', 'tree'],
      'ask': ['chatbot', 'ai', 'prompt'],
      'bot': ['chatbot', 'ai'],
      'faq': ['accordion'],
      'collapse': ['accordion'],
      'expand': ['accordion'],
      'pass': ['password', 'input', 'auth'],
      'hero': ['header', 'landing', 'banner'],
      'grid': ['masonry', 'layout', 'gallery'],
      '3d': ['three', 'card', 'carousel'],
      'move': ['animation', 'motion', 'drag'],
      'anim': ['animation', 'motion', 'transition'],
      'step': ['multistep', 'wizard', 'progress'],
      'verify': ['otp', 'code', 'auth'],
      'badge': ['tag', 'label', 'pill'],
      'shop': ['nft', 'marketplace', 'commerce', 'product'],
      'money': ['nft', 'price', 'commerce'],
    }

    // Expand query with synonyms
    let expandedQueryTerms = [query]
    Object.keys(synonyms).forEach(key => {
      if (query.includes(key)) {
        expandedQueryTerms = [...expandedQueryTerms, ...synonyms[key]]
      }
    })

    return categories.map(cat => ({
      ...cat,
      items: cat.items.filter(section => {
        const searchContent = `
          ${section.title.toLowerCase()} 
          ${section.menuLabel.toLowerCase()} 
          ${section.description ? section.description.toLowerCase() : ''} 
          ${section.badge ? section.badge.toLowerCase() : ''}
        `
        return expandedQueryTerms.some(term => searchContent.includes(term))
      })
    })).filter(cat => cat.items.length > 0)
  }, [searchQuery, categories])

  const visibleItems = useMemo(() => {
    if (selectedComponentId) {
      const section = sections.find(s => s.id === selectedComponentId)
      return section ? [{ title: section.title, items: [section] }] : []
    }
    return filteredCategories
  }, [selectedComponentId, filteredCategories, sections])

  const handleComponentClick = (id) => {
    setSelectedComponentId(id === selectedComponentId ? null : id) // Toggle: click again to show all
  }

  return (
    <div className="wui-showcase-page">
      <div className="wui-showcase-shell">
        <aside className="wui-showcase-orbit" aria-label="UI Components Menu">
          <div className="wui-showcase-orbit-head">
            <div className="wui-showcase-crown">
              <span>UI Components</span>
            </div>
          </div>
          <nav className="wui-showcase-stack">
            <button
              type="button"
              className={`wui-showcase-trigger ${selectedComponentId === null ? 'active' : ''}`}
              onClick={() => setSelectedComponentId(null)}
            >
              <span className="wui-showcase-dot" aria-hidden="true"></span>
              <span className="wui-showcase-voice">Show All</span>
            </button>

            {filteredCategories.map((category, index) => (
              <div key={index} className="wui-showcase-group">
                <h5 className="wui-showcase-group-crown">{category.title}</h5>
                {category.items.map((s) => {
                  const isActive = selectedComponentId === s.id
                  return (
                    <button
                      key={s.id}
                      type="button"
                      className={`wui-showcase-trigger ${isActive ? 'active' : ''}`}
                      onClick={() => handleComponentClick(s.id)}
                    >
                      <span className="wui-showcase-dot" aria-hidden="true"></span>
                      <span className="wui-showcase-voice">{s.menuLabel}</span>
                      {s.badge && <span className="wui-showcase-gem">{s.badge}</span>}
                    </button>
                  )
                })}
              </div>
            ))}
          </nav>
        </aside>

        <main className="wui-showcase-core">
          <div className="wui-showcase-deck">
            <h1>Component Library</h1>
            <p className="wui-showcase-herald">
              {selectedComponentId
                ? `Showing: ${sections.find((s) => s.id === selectedComponentId)?.menuLabel || ''}`
                : 'All reusable components for your website'}
            </p>

            {visibleItems.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                <p>No component selected</p>
              </div>
            ) : (
              visibleItems.flatMap(cat => cat.items).map((s) => (
                <section key={s.id} id={s.id} className="wui-showcase-field">
                  {s.render()}
                </section>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Components
