import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Prop = {
  poppedUp: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: number;
};

export function Popup({
  poppedUp,
  positionTo,
  onClose,
  children,
  opacity,
}: Prop) {
  const boundingRect = positionTo?.getBoundingClientRect() as DOMRect;
  const top = positionTo ? boundingRect?.top + boundingRect?.height : '50%';
  const left = positionTo
    ? boundingRect?.left + boundingRect?.width / 2
    : '50%';
  if (!poppedUp) return null;
  return createPortal(
    <>
      <div
        className={`fixed inset-0 bg-[#000000${
          opacity ? (opacity * 256).toString(16) : '00'
        }]`}
        onClick={onClose}></div>
      <div className={`absolute top-[${top}] left-[${left}]`}>{children}</div>
    </>,
    document.body
  );
}
