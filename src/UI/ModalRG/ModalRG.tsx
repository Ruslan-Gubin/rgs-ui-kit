import React from "react";
import { ButtonRG } from "../ButtonRG";
import { CloseIcon } from "../CloseIcon";
import "./ModalRG.css";
import { ModalRGProps } from "./types";

const ModalRG: React.FC<ModalRGProps> = React.memo((props) => {
  const rootRef = React.useRef<HTMLDivElement>(null);

  const rootClasses = {
    wrapper: ["modalrg-wrapper"],
    container: ["modalrg-container"],
  };

  if (props.active) {
    rootClasses.wrapper.push("modalrg-wrapper__active");
    rootClasses.container.push("modalrg-container__active");
  }

  const handleCloseModal = (e: any) => {
    if (!rootRef.current) return;
    if (e.target.contains(rootRef.current)) {
      props.handleClose();
    }
  };

  React.useEffect(() => {
    if (!rootRef.current) return;

    const node = rootRef.current;

    node.addEventListener("click", handleCloseModal);

    return () => {
      node.removeEventListener("click", handleCloseModal);
    };
  }, []);

  return (
    <div ref={rootRef} className={rootClasses.wrapper.join(" ")}>
      <div
        style={props.width ? { width: props.width } : { width: 400 }}
        className={rootClasses.container.join(" ")}
      >
        {props.title && (
          <div className="modalrg-header">
            <h1 className="modalrg-header__title">{props.title}</h1>
            <CloseIcon onClick={props.handleClose} size="md" />
          </div>
        )}
        <div className="modalrg-content">{props.children}</div>
        {props.footer && props.handleCancel && props.submitModal && (
          <div className="modalrg-footer">
            <ButtonRG size="md" color="success" handleClick={props.submitModal}>
              {props.footer.submitText}
            </ButtonRG>
            <ButtonRG size="md" color="danger" handleClick={props.handleCancel}>
              {props.footer.cancelText}
            </ButtonRG>
          </div>
        )}
      </div>
    </div>
  );
});

export { ModalRG };
