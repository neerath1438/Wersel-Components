import {
    ButtonView,
    OthersButton,
    SocialButton,
    ActionButton,
    OnlyIconButton,
    GlowButtonView,
    UserProfileDropdownView
} from '../../components'
import './ButtonShowcase.css'

const ButtonShowcase = () => {
    return (
        <div className="button-showcase">
            <div className="showcase-header">
                <h1>Button Component Showcase</h1>
                <p>Enhanced Button component with variants, icons, and loading states</p>
            </div>

            <div className="showcase-content">
                <ButtonView />
                <div className="divider" />
                <OthersButton />
                <div className="divider" />
                <SocialButton />
                <div className="divider" />
                <ActionButton />
                <div className="divider" />
                <OnlyIconButton />
                <div className="divider" />
                <GlowButtonView />
                <div className="divider" />
                <UserProfileDropdownView />
            </div>
        </div>
    )
}

export default ButtonShowcase
