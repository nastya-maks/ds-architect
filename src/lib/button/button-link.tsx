import styled from "styled-components";
import { Icon, iconsType } from '../icon';

interface IButtonLinkProps {
    appearance?: 'primary',
    size?: 'base',
    disabled?: boolean,
    iconBefore?: iconsType,
    iconAfter?: iconsType,
    text: string,
}

const StyledButtonLink = styled.button<IButtonLinkProps> `
    min-width: ${(props) => props.theme.spacing.size.xxxxxxLarge};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing.inner.small};
    border: none;
    outline: none;
    font-family: ${(props) => props.theme.typography.fontFamily.text};
    cursor: pointer;
    transition: ${(props) => props.theme.animation.base};

    ${(props) => props.appearance === 'primary' &&
        `
        &:enabled {
            background-color: transparent;
            color: ${props.theme.colors.text.brand.normal.enabled};
        }
        &:hover {
            color: ${props.theme.colors.text.brand.normal.hover};
        }
        &:active {
            color: ${props.theme.colors.text.brand.normal.active};
        }
        &:focus {
            box-shadow: ${props.theme.focus.base};
        }
    `}

    ${(props) => props.disabled &&
        `
        &:disabled {
            background-color: transparent;
            color: ${props.theme.colors.text.base.disabled};
            cursor: not-allowed;
        }
    `}

    ${(props) => props.size === 'base' &&
        `
        height: ${props.theme.spacing.size.large};
        padding: ${props.theme.spacing.padding.small} ${props.theme.spacing.padding.medium};
        font-size: ${props.theme.typography.fontSize.component.base};
        font-weight: ${props.theme.typography.fontWeight.semiBold};
        line-height: ${props.theme.typography.lineHeight.component.base};
    `}
`;

export const ButtonLink: React.FC<IButtonLinkProps> = ({
    appearance = 'primary',
    size = 'base',
    disabled,
    iconBefore,
    iconAfter,
    text = 'Button',
}) => {
    return (
        <StyledButtonLink
            appearance={appearance}
            size={size}
            disabled={disabled}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
            text={text}
        >
            {iconBefore && <Icon size={20} iconName={iconBefore}/>}
            {text}
            {iconAfter && <Icon size={20} iconName={iconAfter}/>}
        </StyledButtonLink>
    );
};