import React from "react";
import { SizeVariantType } from "../../types/SizeVariantType";
import "./CloseIcon.css";
interface CloseIconProps {
    size?: SizeVariantType;
    className?: string;
    onClick?: () => void;
}
declare const CloseIcon: React.FC<CloseIconProps>;
export { CloseIcon };
