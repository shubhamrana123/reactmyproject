// import React, {
//   Component,
//   forwardRef,
//   useEffect,
//   useState,
//   useRef,
//   useImperativeHandle,
// } from 'react';

// import DatePicker from 'react-date-picker';

// import 'react-datepicker/dist/react-datepicker.css';

// const CustomDateComponent = forwardRef((props, ref) => {
//   const [date, setDate] = useState(null);
//   const [picker, setPicker] = useState(null);
//   const refDatePicker = useRef();
//   const refInput = useRef();

//   const onDateChanged = (selectedDate:any) => {
//     setDate(selectedDate);
//     props.onDateChanged();
//   };

//   useImperativeHandle(ref, () => ({
//     getDate() {
//       return date;
//     },

//     setDate(date:any) {
//       setDate(date);
//     },
//   }));

//   return (
//     <div ref={refInput} className="ag-input-wrapper">
//       <DatePicker
//         ref={refDatePicker}
//         portalId="root"
//         dateFormat="dd/MM/yyyy"
//         popperClassName="ag-custom-component-popup"
//         selected={date}
//         onChange={onDateChanged}
//       />
//     </div>
//   );
// });

// export default CustomDateComponent;
import React from 'react'

const CustomDate = () => {
  return (
    <div>CustomDate</div>
  )
}

export default CustomDate