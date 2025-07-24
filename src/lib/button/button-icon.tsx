import styled from "styled-components";
import { Icon, iconsType } from '../icon';

interface IButtonIconProps {
    appearance: 'commerce' | 'primary' | 'secondary',
    size?: 'base',
    disabled?: boolean,
    loading?: boolean,
    icon: iconsType,
}

const StyledButtonIcon = styled.button<IButtonIconProps> `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: ${(props) => props.theme.borderRadius.rounded};
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
        width: ${props.theme.spacing.size.xxLarge};
        height: ${props.theme.spacing.size.xxLarge};
    `}
`;

export const ButtonIcon: React.FC<IButtonIconProps> = ({
    appearance = 'primary',
    size = 'base',
    disabled,
    loading,
    icon,
}) => {
    return (
        <StyledButtonIcon
            appearance={appearance}
            size={size}
            disabled={disabled}
            loading={loading}
            icon={icon}
        >
            {icon && <Icon size={16} iconName={icon}/>}
        </StyledButtonIcon>
    );
};