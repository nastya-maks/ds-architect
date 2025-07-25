import styled from "styled-components";
import { Icon, iconsType } from '../icon';

interface IButtonProps {
    appearance: 'commerce' | 'primary' | 'secondary',
    size?: 'base',
    disabled?: boolean,
    loading?: boolean,
    iconBefore?: iconsType,
    iconAfter?: iconsType,
    text: string,
}

const StyledButton = styled.button<IButtonProps> `
    min-width: ${(props) => props.theme.spacing.size.xxxxxxLarge};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing.inner.small};
    border: none;
    outline: none;
    border-radius: ${(props) => props.theme.borderRadius.componentBase};
    font-family: ${(props) => props.theme.typography.fontFamily.text};
    cursor: pointer;
    transition: ${(props) => props.theme.animation.base};

    ${(props) => props.appearance === 'commerce' &&
        `
        &:enabled {
            background-color: ${props.theme.colors.bg.commerce.normal.enabled};
            color: ${props.theme.colors.text.base.onLight};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.commerce.normal.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.commerce.normal.active};
        }
        &:focus {
            box-shadow: ${props.theme.focus.commerce};
        }
    `}

    ${(props) => props.appearance === 'primary' &&
        `
        &:enabled {
            background-color: ${props.theme.colors.bg.brand.normal.enabled};
            color: ${props.theme.colors.text.base.onDark};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.brand.normal.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.brand.normal.active};
        }
        &:focus {
            box-shadow: ${props.theme.focus.base};
        }
    `}

    ${(props) => props.appearance === 'secondary' &&
        `
        &:enabled {
            background-color: ${props.theme.colors.bg.brand.light.enabled};
            color: ${props.theme.colors.text.brand.normal.enabled};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.brand.light.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.brand.light.active};
        }
        &:focus {
            box-shadow: ${props.theme.focus.base};
        }
    `}

    ${(props) => props.disabled &&
        `
        &:disabled {
            background-color: ${props.theme.colors.bg.base.disabled};
            color: ${props.theme.colors.text.base.disabled};
            cursor: not-allowed;
        }
    `}

    ${(props) => props.size === 'base' &&
        `
        height: ${props.theme.spacing.size.xxxxLarge};
        padding: ${props.theme.spacing.padding.small} ${props.theme.spacing.padding.medium};
        font-size: ${props.theme.typography.fontSize.component.base};
        font-weight: ${props.theme.typography.fontWeight.semiBold};
        line-height: ${props.theme.typography.lineHeight.component.base};
    `}
`;

export const Button: React.FC<IButtonProps> = ({
    appearance = 'primary',
    size = 'base',
    disabled,
    loading,
    iconBefore,
    iconAfter,
    text = 'Button',
}) => {
    return (
        <StyledButton
            appearance={appearance}
            size={size}
            disabled={disabled}
            loading={loading}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
            text={text}
        >
            {iconBefore && <Icon size={20} iconName={iconBefore}/>}
            {text}
            {iconAfter && <Icon size={20} iconName={iconAfter}/>}
        </StyledButton>
    );
};