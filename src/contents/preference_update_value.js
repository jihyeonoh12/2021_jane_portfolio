const preference_update_value =
`useEffect(() => {
    ...
    const { userSelectedProtein, proteinDropdownOptions, warning } = checkPreferenceType(prefTempList, formatOptions(product.proteins));
    setUserSubscription({
      ...prefTempList,
      protein: userSelectedProtein
    });
    if (proteinDropdownOptions) {
      setProtein(proteinDropdownOptions);
    }
    if (warning) {
      setPrefWarning(warning);
    }
    ...
  }, [prefTempList, product.proteins]);

//when new value is selected from dropdown
const updatePreference = useCallback((option | name) => {
    ...
      if (name === 'diet') {
        const singleSelectOption = option as SelectOption;
        const newValue = isArray
          ? option
              .map((list) => {
                return list.value;
              })
              .join()
          : (singleSelectOption.value as string);

        setPlanUpdateType('diet');
        setPrefTempList({
          ...userSubscription,
          diet: newValue
        });
      }
     ...
    [userSubscription]
  );

  `

  export default preference_update_value;
