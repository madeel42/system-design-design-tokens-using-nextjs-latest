import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >;
  size?: string | number; // if provided, overrides CSS variable
  color?: string;         // if provided, overrides CSS variable
  "aria-label"?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: LucideIcon, size, color, style, "aria-label": ariaLabel, ...props }, ref) => {
    // Prefer props, fallback to CSS variables
    const iconSize = size ?? (getComputedStyle(document.documentElement).getPropertyValue('--icon-size') || '1.25em');
    const iconColor = color ?? (getComputedStyle(document.documentElement).getPropertyValue('--icon-color') || 'currentColor');

    return (
      <LucideIcon
        ref={ref}
        width={iconSize}
        height={iconSize}
        color={iconColor}
        style={{
          ...style,
          "--icon-size": iconSize,
          "--icon-color": iconColor,
        } as React.CSSProperties}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
        focusable={false}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";
