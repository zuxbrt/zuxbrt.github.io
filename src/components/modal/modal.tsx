import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <motion.div
            className="modal-content relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(0, 0, 0, 0.85)",
              padding: "2rem",
              minWidth: "300px",
              maxWidth: "80vw",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              maxHeight: "95vh",
              overflowY: "scroll"
            }}
          >
            <motion.p
              className="absolute top-2 right-3 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.8 }} onClick={onClose}>
              &#x2715;
            </motion.p>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
