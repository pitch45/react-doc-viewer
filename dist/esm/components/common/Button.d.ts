/// <reference types="react" />
import { IStyledProps } from "../..";
interface ButtonProps extends IStyledProps {
    disabled?: boolean;
}
export declare const ButtonPrimaryStyle: import("styled-components").RuleSet<object>;
export declare const ButtonSecondaryStyle: import("styled-components").RuleSet<object>;
export declare const Button: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps>>;
export declare const LinkButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>;
export declare const ButtonPrimary: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonProps> & ButtonProps, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps>>, keyof import("react").Component<any, {}, any>>;
export declare const ButtonSecondary: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonProps> & ButtonProps, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps>>, keyof import("react").Component<any, {}, any>>;
export {};
