import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";
import { Button as AntdButton } from "antd";
import "./Button.css";

export default class Button extends Component {
  render() {
    const { children, variant, ...rest } = this.props;

    if (variant === "outline-violet") {
      return (
        <AntdButton {...rest} type="default" className="btn-outline-violet">
          {children}
        </AntdButton>
      );
    }

    if (variant === "violet") {
      return (
        <AntdButton {...rest} type="primary" className="btn-violet">
          {children}
        </AntdButton>
      );
    }

    if (variant === "outline-indigo") {
      return (
        <AntdButton {...rest} type="default" className="btn-outline-indigo">
          {children}
        </AntdButton>
      );
    }

    if (variant === "indigo") {
      return (
        <AntdButton {...rest} type="primary" className="btn-indigo">
          {children}
        </AntdButton>
      );
    }

    if (variant === "outline-secondary") {
      return (
        <AntdButton {...rest} type="default" className="btn-outline-secondary">
          {children}
        </AntdButton>
      );
    }

    if (variant === "secondary") {
      return (
        <AntdButton {...rest} type="primary" className="btn-secondary">
          {children}
        </AntdButton>
      );
    }

    if (variant === "outline-info") {
      return (
        <AntdButton {...rest} type="default" className="btn-outline-info">
          {children}
        </AntdButton>
      );
    }

    if (variant === "info") {
      return (
        <AntdButton {...rest} type="primary" className="btn-info">
          {children}
        </AntdButton>
      );
    }

    if (variant === "outline-success") {
      return (
        <AntdButton {...rest} type="default" className="btn-outline-success">
          {children}
        </AntdButton>
      );
    }

    if (variant === "success") {
      return (
        <AntdButton {...rest} type="primary" className="btn-success">
          {children}
        </AntdButton>
      );
    }

    if (variant === "outline-warning") {
      return (
        <AntdButton {...rest} type="default" className="btn-outline-warning">
          {children}
        </AntdButton>
      );
    }

    if (variant === "warning") {
      return (
        <AntdButton {...rest} type="primary" className="btn-warning">
          {children}
        </AntdButton>
      );
    }

    if (variant === "outline-danger") {
      return (
        <AntdButton {...rest} type="default" danger>
          {children}
        </AntdButton>
      );
    }

    if (variant === "danger")
      return (
        <AntdButton {...rest} type="primary" danger>
          {children}
        </AntdButton>
      );

    if (variant === "outline-primary") {
      return (
        <AntdButton {...rest} type="default">
          {children}
        </AntdButton>
      );
    }

    return (
      <AntdButton {...rest} type="primary">
        {children}
      </AntdButton>
    );
  }
}

Button.propTypes = {
  children: ReactNode,
  variant: PropTypes.oneOf([
    "primary",
    "outline-primary",
    "danger",
    "outline-danger",
    "warning",
    "outline-warning",
    "success",
    "outline-success",
    "info",
    "outline-info",
    "secondary",
    "outline-secondary",
    "indigo",
    "outline-indigo",
    "violet",
    "outline-violet",
  ]),
};
