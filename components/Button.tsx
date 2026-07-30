import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

type BaseProps = {
 variant?: Variant;
 size?: Size;
 arrow?: boolean;
 icon?: ReactNode;
 children: ReactNode;
 className?: string;
};

type AsLink = BaseProps & {
 href: string;
 type?: never;
 onClick?: never;
};

type AsButton = BaseProps &
 ButtonHTMLAttributes<HTMLButtonElement> & {
 href?: never;
 };

type ButtonProps = AsLink | AsButton;

/**
 * McCoy button system — layered depth, keyboard-key edge, tactile press.
 * Variants:
 * - primary: brand-green gradient, white text (for light + dark bg)
 * - secondary: white-on-dark outline with backdrop blur (for hero / dark sections)
 * - outline: primary-outline on light bg (turns filled on hover)
 * - ghost: text + arrow only, no bg (for inline CTAs / card links)
 */
export default function Button(props: ButtonProps) {
 const {
 variant = "primary",
 size = "md",
 arrow = false,
 icon,
 children,
 className = "",
 } = props;

 const base =
 "group relative inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap select-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full will-change-transform";

 const sizing =
 size === "lg"
 ? "px-8 py-4 text-[15px]"
 : "px-7 py-3 text-[14px]";

 const variants: Record<Variant, string> = {
 primary: [
 // Gradient bg for subtle depth
 "bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-deep)] text-white",
 // Keyboard-key feel: thin darker bottom edge + inset top highlight
 "border-b-[3px] border-[rgba(0,0,0,0.28)]",
 "shadow-[0_6px_16px_-4px_rgba(36,64,48,0.45),0_2px_4px_rgba(36,64,48,0.2),inset_0_1px_0_rgba(255,255,255,0.18)]",
 // Hover: lift + deepen shadow + accent ring glow
 "hover:-translate-y-[2px] hover:from-[#2c4c3a] hover:to-[var(--color-primary)] hover:border-b-[3px] hover:border-[rgba(0,0,0,0.35)]",
 "hover:shadow-[0_14px_28px_-6px_rgba(36,64,48,0.55),0_4px_8px_rgba(36,64,48,0.3),0_0_0_3px_rgba(145,182,122,0.25),inset_0_1px_0_rgba(255,255,255,0.22)]",
 // Active: press down
 "active:translate-y-0 active:border-b-[1px] active:shadow-[0_2px_6px_rgba(36,64,48,0.35),inset_0_2px_4px_rgba(0,0,0,0.2)]",
 ].join(" "),
 secondary: [
 // Glass look on dark bg
 "bg-white/10 text-white backdrop-blur-sm",
 "border-[1.5px] border-white/80",
 "border-b-[2.5px] border-b-white",
 "shadow-[0_6px_16px_-4px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]",
 "hover:bg-white hover:text-[var(--color-primary)] hover:-translate-y-[2px]",
 "hover:shadow-[0_14px_28px_-6px_rgba(0,0,0,0.4),0_0_0_3px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]",
 "active:translate-y-0 active:border-b-[1px] active:shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.15)]",
 ].join(" "),
 outline: [
 "bg-white text-[var(--color-primary)]",
 "border-[1.5px] border-[var(--color-primary)]",
 "border-b-[3px] border-b-[var(--color-primary)]",
 "shadow-[0_4px_12px_-4px_rgba(36,64,48,0.25),inset_0_1px_0_rgba(255,255,255,0.8)]",
 "hover:bg-[var(--color-primary)] hover:text-white hover:-translate-y-[2px]",
 "hover:shadow-[0_12px_24px_-6px_rgba(36,64,48,0.45),0_0_0_3px_rgba(145,182,122,0.2),inset_0_1px_0_rgba(255,255,255,0.18)]",
 "active:translate-y-0 active:border-b-[1px] active:shadow-[0_2px_6px_rgba(36,64,48,0.25)]",
 ].join(" "),
 ghost: [
 "bg-transparent text-[var(--color-accent-mid)]",
 "hover:text-[var(--color-primary)]",
 "border-b-[1.5px] border-[var(--color-accent-mid)]",
 "pb-1 !rounded-none !px-0",
 ].join(" "),
 };

 const classes = `${base} ${sizing} ${variants[variant]} ${className}`;

 const inner = (
 <>
 {icon && <span className="inline-flex shrink-0">{icon}</span>}
 <span>{children}</span>
 {arrow && (
 <ArrowRight
 size={15}
 strokeWidth={2.2}
 className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
 />
 )}
 </>
 );

 if ("href" in props && props.href) {
 return (
 <Link href={props.href} className={classes}>
 {inner}
 </Link>
 );
 }

 // Strip every custom prop so only valid <button> attributes hit the DOM.
 const {
 href: _h,
 variant: _v,
 size: _s,
 arrow: _a,
 icon: _i,
 children: _c,
 className: _cn,
 ...buttonProps
 } = props as AsButton;
 return (
 <button {...buttonProps} className={classes}>
 {inner}
 </button>
 );
}
