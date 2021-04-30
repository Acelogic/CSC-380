import React from 'react';


import { Typography } from "@material-ui/core";
import RecentWorkoutBlock from '../../reusables/RecentWorkoutsBlock';

function RecentWorkouts() {
  return (
    <div>
      <Typography variant="h3">
        Recent Workouts
      </Typography>
      <RecentWorkoutBlock></RecentWorkoutBlock>
    </div>
  );
}




export default RecentWorkouts;
