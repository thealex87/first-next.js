class Utils {

  GetMonthName (monthNumber, shortName = false) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const month = months[monthNumber - 1];

    if (shortName) {
      return month.substr(0,3);
    }

    return month;
  }

  GetWeekDayName (weekDayNumber, shortName = false) {
    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const weekDay = days[weekDayNumber - 1];

    if (shortName) {
      return weekDay.substr(0,3);
    }

    return weekDay;
  }

}

export default Utils;