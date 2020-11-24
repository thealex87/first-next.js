import React from 'react';
import Utils from '../../utils';

class FaturasService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._utils = new Utils();
    this.Get = this.Get.bind(this);
    this.GetReferenceName = this.GetReferenceName.bind(this);
    this.GetStatusColorByCode = this.GetStatusColorByCode.bind(this);
    this.GetConsumeBandString = this.GetConsumeBandString.bind(this);
    this.GetDueDateString = this.GetDueDateString.bind(this);
  }
  
  async Get() {
    const response = await fetch('/api/faturas/listar/1')
    return response.json()
  }

  GetReferenceName (referenceDate) {
    let date;
    
    if (typeof referenceDate == 'string') {
      date = new Date(referenceDate.indexOf('T') < 0 ? referenceDate + 'T23:59:59.000Z' : '');
    } else if (typeof referenceDate == 'object') {
      date = referenceDate;
    } else {
      return;
    };

    const monthIndex = date.getMonth();
    const year = date.getFullYear().toString().substring(2);
    const monthName = this._utils.GetMonthName(monthIndex + 1, true);
    return `${monthName} ${year}`;
  }

  GetStatusColorByCode (statusCode) {
    switch (statusCode) {
      case 1:
        return 'alternative';
      case 2:
        return 'success';
      case 3:
        return 'danger';
      default:
        return 'light';
    }
  }

  GetConsumeBandString (consumeBand) {
    return (consumeBand / 1000).toFixed(3).toString();
  }

  GetDueDateString (dueDate) {
    let date;
    
    if (typeof dueDate == 'string') {
      date = new Date(dueDate.indexOf('T') < 0 ? dueDate + 'T23:59:59.000Z' : '');
    } else if (typeof dueDate == 'object') {
      date = dueDate;
    } else {
      return;
    };

    const weekDayIndex = date.getDay();
    const weekDayName = this._utils.GetWeekDayName(weekDayIndex + 1);
    const day = `00${date.getDate().toString()}`;
    const month = `00${(date.getMonth() + 1).toString()}`;

    return {
      date: `${day.substring(day.length-2)}/${month.substring(month.length-2)}`,
      weekDay: weekDayName
    };
  }

}

export default FaturasService;