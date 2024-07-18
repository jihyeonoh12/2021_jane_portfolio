const snack_popup = `//-- Add-on modal

const AddonModal = ({
  showModal,
  setModal,
  setHasSeenPopup,
  handleSubmit,
  openAddOnTab,
  visible,
  setSidebar
}) => {

const continueShopping = () => {
    setModal(false);
    setHasSeenPopup(true);
    openAddOnTab('addon');
    if (visible) {
      setSidebar(false);
    }
  };
  const confirmSelection = () => {
    handleSubmit('confirmed');
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setModal(false)}
      container={this}
    >
    ...
        <button onClick={continueShopping} >
          Add Add-Ons
        </button>
        <button onClick={confirmSelection}>
          Confirm Meal Selection
        </button>
    </Modal>
  );
};

export default AddonModal;


`
export default snack_popup