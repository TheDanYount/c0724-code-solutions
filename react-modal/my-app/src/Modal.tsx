import { ReactNode, useEffect, useRef } from 'react';

type Prop = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Prop) {
  useEffect(() => (isOpen ? modal.current?.show() : modal.current?.close()));
  const modal = useRef<HTMLDialogElement>(null);
  return (
    <dialog ref={modal} onClose={onClose}>
      {children}
    </dialog>
  );
}
