import React from "react"
import ReactDatePicker from "react-datepicker"
import type { ControllerRenderProps, FieldValues } from "react-hook-form"
import clsx from "clsx"

import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormField.module.scss"

interface DatePickerProps {
  error?: string
  field?: ControllerRenderProps | FieldValues
}
const DatePicker = React.forwardRef(
  ({ error, field, ...props }: DatePickerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={clsx(styles)} ref={ref}>
        <ReactDatePicker
          selected={field?.value}
          onChange={(date) => field?.onChange(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy HH:mm"
          {...props}
        />
      </div>
    )
  }
)

export default DatePicker
