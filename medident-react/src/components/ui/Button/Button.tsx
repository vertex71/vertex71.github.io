import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  iconOnly?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  rounded = false,
  iconOnly = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className = '',
  href,
  target,
  rel,
  ...props
}) => {
  const baseClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    rounded && styles.rounded,
    iconOnly && styles.iconOnly,
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  const buttonContent = (
    <>
      {loading ? (
        <i className={`fas fa-spinner ${styles.icon}`} aria-hidden="true" />
      ) : (
        leftIcon && <i className={leftIcon} aria-hidden="true" />
      )}
      {!iconOnly && children}
      {!loading && rightIcon && <i className={rightIcon} aria-hidden="true" />}
    </>
  );

  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        onClick={handleClick}
        aria-disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={iconOnly ? String(children) : undefined}
      {...props}
    >
      {buttonContent}
    </button>
  );
};


export default Button;