'use client'
import "react-datepicker/dist/react-datepicker.css";
import styles from './DatePicker.module.scss';
const { default: DatePicker } = require("react-datepicker");

const BaseDatePicker = ({ minDate, selectedDate, onChange }) => {
    return (
        <div className={styles.datepicker}>
            <DatePicker minDate={minDate} selected={selectedDate} onChange={date => onChange(date)} inline />
        </div>
    );
}

export default BaseDatePicker;