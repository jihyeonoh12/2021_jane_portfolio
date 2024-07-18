const rewards_ms_hook = `//-- useRedemption hook
setRedemptionValue({
    points:
      redemptionValue.points === -1 || redemptionValue.points > availablePoints || !applyRewards ? availablePoints : redemptionValue.points,
    maxPoints: availablePoints,
    earningPoints: Number(
      Math.floor(remainingTotal * rewards.multiplier_settings[currentTier].multiplier)
    ),
    displayRedemption:
      !redemptionOpted.optedForRedemption && availablePoints >= 1 && !checkCustomerGroupID(group_id), 
      autoRedeem: rewards.redemption_settings.redemption_method === 'automatic'
  });

//Dispatching submitRedemption function
const submitRedemption = () => {
    ...
    const input = {
      redemptionMethod: rewards.redemption_settings.redemption_method,
      pointsToRedeem: redemptionValue.points,
      optedForRedemption: true,
      subscriptionId: entityId
    };
    if (applyRewards && redemptionValue.displayRedemption) {
      dispatch(setLoading(true));
      dispatch(updateRedemption(input))
        .unwrap()
        .then(() => {
          dispatch(setLoading(false));
          if (callback) {
            callback('');
          }
        })
        .catch((error) => {
          const ErrorMessage = formatErrorMsg(error.message);
          if (callback) {
            callback(ErrorMessage as string);
          }
          dispatch(
            setMessage({
              type: 'ERROR',
              content: ErrorMessage
            })
          );
          dispatch(setLoading(false));
        });
    } else {
      if (callback) {
        callback('');
      }
    }
  };
`
export default rewards_ms_hook;