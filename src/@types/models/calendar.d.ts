interface ICalendar extends TimeStamp {
  id: number;
  userId: IUser['id'];
  numberOfBreastfeed: string;
  numberOfFormulaMilk: string;
  isFeedingFood: number;
  calenderDate: string;
  averageTimeFeeding: string;
  averageTimeFeedingFormulaMilk: string;
}
