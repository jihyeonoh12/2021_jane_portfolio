const snack_popup_sidebar= `//-- Sidebar Component

const [activatePopup, setActivatePopup] = useState(false);
const [hasSeenPopup, setHasSeenPopup] = useState(false);

const handleSubmit = async () => {
  submitRedemption(settings.entity_id, (error?: string) => {
    submit('update', error);
  });
};

const handleTest = async (prop?: string) => {
  if (!addonData.addonTotal && !hasSeenPopup) {
    setActivatePopup(true);
  }
  if (hasSeenPopup || prop === 'confirmed' || addonData.addonTotal) {
    submitRedemption(settings.entity_id, (error?: string) => {
      submit('update', error);
    });
  }
};
return (

<div>
...
  <div>
    <button onClick={() => handleSubmit()} > // Original button
      {buttonText}
    </button>
    <button id="popup-button" onClick={() => handleTest()} className='hidden' >   //Test button displayed hidden as default
      {buttonText}
    </button>
  </div>
  <AddonModal
    showModal={activatePopup}
    setModal={setActivatePopup}
    setHasSeenPopup={setHasSeenPopup}
    handleSubmit={handleTest}
    openAddOnTab={openAddOnTab}
    visible={visible}
    setSidebar={setSidebar}
  />
  </div>
  )
  `
  export default snack_popup_sidebar;