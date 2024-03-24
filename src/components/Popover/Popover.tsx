"use client";
import React, { useState } from "react";
import styles from "./Popover.module.css";

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;

  onOpen: (open: boolean) => void;
  isOpen: boolean;
}

const Popover: React.FC<PopoverProps> = ({ trigger, children, onOpen, isOpen }) => {
 
  return (
    <div className={styles.popover}>
      <div className={styles.popoverButton} onPointerOver={() => onOpen(true)} onClick={() => onOpen(true)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={styles.popoverWrapper}>
          <div className={styles.popoverContent}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
