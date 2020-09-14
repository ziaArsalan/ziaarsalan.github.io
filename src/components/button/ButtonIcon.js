import React from "react";
import "./Button.css";
import { Icon, InlineIcon } from '@iconify/react';
import arrowRight from '@iconify/icons-mdi/arrow-right';

export default function ButtonIcon({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a class="main-button" href={href} target={newTab && "_blank"}>
        {text}
        <Icon icon={arrowRight} className="button-icon"/>
      </a>
    </div>
  );
}
