import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");
function ReactModal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalOpen(true)}>ModalOpen</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => {
          setModalOpen(false);
        }}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "tomato",
          },
        }}
        shouldCloseOnOverlayClick={false}
      >
        <h1>steve job</h1>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
    </>
  );
}

export default ReactModal;
