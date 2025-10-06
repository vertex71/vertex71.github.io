import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  rounded = false,
  iconOnly = false,
  leftIcon = null,
  rightIcon = null,
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

  const handleClick = (e) => {
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
      aria-label={iconOnly ? children : undefined}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'ghost',
    'success',
    'warning',
    'danger'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  iconOnly: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string
};

export default Button;