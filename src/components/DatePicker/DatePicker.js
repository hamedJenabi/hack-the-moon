'use client'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import styles from './DatePicker.module.scss';
const { default: DatePicker } = require("react-datepicker");

const FormDatePicker = () =>{

    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className={styles.datepicker}>

        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        );
    }

    export default FormDatePicker;