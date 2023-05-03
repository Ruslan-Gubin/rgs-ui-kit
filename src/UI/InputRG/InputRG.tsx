import React, { FC, memo } from "react";
import { SearchIcon } from "./components/SearchIcon/SearchIcon";
import { PhoneSvg } from "./components/PhoneSvg/PhoneSvg";
import "./InputRG.css";
import { InputProps } from "./types";
import { topIconContainer } from "./helpers";

const InputRG: FC<InputProps> = memo(
  ({
    value,
    searchClick,
    variant,
    error,
    errorText,
    name,
    sizeInput = "md",
    placeholder,
    label,
    type = "text",
    ...props
  }) => {
    const classes = [`inputrg-input inputrg-size__${sizeInput}`];

    if (sizeInput) {
      classes.push(`inputrg-input__${sizeInput}`);
    }

    if (error) {
      classes.push("inputrg-error__input");
    }

    const variants = {
      search: <SearchIcon onClick={searchClick} />,
      email: <span>@</span>,
      phone: <PhoneSvg />,
    };

    return (
      <label htmlFor={name} className="inputrg-label">
        {label}
        <input
          value={value}
          type={type}
          id={name}
          className={classes.join(" ")}
          placeholder={placeholder}
          {...props}
        />
        <div
          style={{ top: topIconContainer(label, sizeInput) }}
          className="inputrg-icon__container"
        >
          {variant && sizeInput !== "sm" && variants[variant]}
        </div>
        {errorText && <p className="inputrg-error">{error && errorText}</p>}
      </label>
    );
  }
);

export { InputRG };
