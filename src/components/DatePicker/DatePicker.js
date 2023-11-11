'use client'
import "react-datepicker/dist/react-datepicker.css";
import styles from './DatePicker.module.scss';
const { default: DatePicker } = require("react-datepicker");

const BaseDatePicker = ({ selectedDate, onChange }) => {
    return (
        <div className={styles.datepicker}>
            <DatePicker selected={selectedDate} onChange={date => onChange(date)} inline />
        </div>
    );
}

export default BaseDatePicker;