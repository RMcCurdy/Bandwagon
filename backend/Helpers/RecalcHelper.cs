using System;

namespace backend.Helpers
{
    public static class RecalcHelper
    {

       

        public static int recalcWinPercentage (
            double points, 
            double fieldGoal, 
            double threePoint,
            double _pointsWeight,
            double _fieldGoalWeight,
            double _threePointWeight)
        {
            

            var dblCalculation = (points * _pointsWeight) + (fieldGoal * _fieldGoalWeight) + (threePoint * _threePointWeight);
            var intCalculation = Convert.ToInt32(dblCalculation);

            return intCalculation;
        } 

        public static int randomGenerator(int bottom, int top)
        {
            Random rnd = new Random();
            return rnd.Next(bottom, top);
        }

    }
}