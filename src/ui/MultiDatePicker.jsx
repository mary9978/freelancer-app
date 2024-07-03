import React, { useState } from 'react'
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_fa"
function MultiDatePicker({date,setDate}) {

  return (
    <div>
        <label className='font-bYekan text-secondary-900' htmlFor="date-picker">زمان ارسال پروژه</label>
        <DatePicker
          calendarPosition='bottom-cenetr'
          value={date}
          onChange={date => setDate(date)}
          format="MM/DD/YYYY"
          calendar={persian}
          locale={persian_en}
        />
    </div>
  )
}

export default MultiDatePicker