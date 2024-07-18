const snack_popup_sidebar= `//-- Script on VWO

/* Displaying test button */
vwo_$("#popup-button").vwoAttr({"class":{"removedClasses":["hidden"]}}).vwoCss({"display":"block !important"});

/* Removing original button */
vwo_$("#save-button").vwoCss({"display":"none !important"});

  `
  export default snack_popup_sidebar;