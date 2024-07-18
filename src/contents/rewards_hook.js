const rewards_hook = `//-- useRewards hook
//graphQL call to fetch rewards data
useEffect(() => {
    const getRewards = async (currentPage: number) => {
      const response = await client.query({
        query: GET_REWARD_INFO,
        context: {
          headers: { authorization: 'bearer {token}' }
        },
        variables: {
          historyCurrentPage: 1,
          transactionCurrentPage: currentPage
        },
        fetchPolicy: 'network-only'
      });
      return response;
    };

    getRewards(rewardsCurrentPage)
      .then(({ data }) => { setRewards(data.getRewardInfo) })
      .catch(() => {
        dispatch(
          setMessage({
            type: 'ERROR'
          })
        );
      });
  }, [dispatch, token, rewardsCurrentPage]);

  //Using returned data to fill in rewardPage Object 
  useEffect(() => {
    ...
    setRewardsPage({
      transactions: rewards.transactions,
      overview: {
        balance: rewards.balance.amount,
        tier: rewards.tiers.current_tier.name,
        ptsWithinTimeFrame: rewards.balance.rolling_period_points_earned,
        tierTimeFrame: rewards.rolling_period_tier_caculation.days,
        toolTip: settings?.rewardsTooltipHtml || "<h4 class='font-extrabold'>Point Value</h4><p>1 point = $0.01</p>"},
      basePointsContents: basePoint,
      multiplierContents: multiplier,
      pageSize: rewards.transactions.count_per_page
    });
  }, [rewards, settings]);

`;

export default rewards_hook;