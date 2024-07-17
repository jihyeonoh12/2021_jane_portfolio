const preference_util = 
`const checkPreferenceType = () => {
 ...
  //If only Vegan and Vegetarian Selected
  if ( diet && /^(?=.*(V|VGT))(?!.*(K|P|PP|MD|WTA)).*$/.test(diet as string)) {
    userSelectedProtein = proteinList.includes('Plant-based') && 'Plant-based';

    proteinDropdownOptions = defaultProteinList.filter((item) => {
      return item.value === 'Plant-based';
    });
    warning = false;
    restrictionMsg =
      userSelectedProtein !== 'Plant-based' && "Vegan and Vegetarian diets are only compatible with plant-based protein.";
  }
...
};
`;

export default preference_util;
