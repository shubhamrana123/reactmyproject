// import React, {
//     Component,
//     forwardRef,
//     useState,
//     useRef,
//     useEffect,
//     useImperativeHandle
//   } from 'react';
  
//   import DatePicker from 'react-date-picker';
  
//   import 'react-datepicker/dist/react-datepicker.css';
//   import moment from 'moment';
//   const CustomEditorComponent = forwardRef((props, ref) => {
//     const refDatePicker = useRef();
//     const [date, setDate] = useState(moment(props.value, 'DD MM YYYY').toDate());
//     const [editing, setEditing] = useState(true);
  
//     useEffect(() => {
//       if (!editing) {
//         props.api.stopEditing();
//       }
//     }, [editing]);
  
//     useImperativeHandle(ref, () => {
//       return {
//         getValue() {
//           return moment(date).format('DD/MM/YYYY');
//         }
//       };
//     });
  
//     const onChange = (selectedDate:any) => {
//       setDate(selectedDate);
//       setEditing(false);
//     };
  
//     return (
//       <div>
//         <DatePicker
//           ref={refDatePicker}
//           portalId="root"
//           popperClassName="ag-custom-component-popup"
//           selected={date}
//           dateFormat="dd/MM/yyyy"
//           onChange={onChange}
//         />
//       </div>
//     );
//   });
//   export default  CustomEditorComponent 
// import React from 'react'

// const customEditor = () => {
//   return (
//     <div>customEditor</div>
//   )
// }

// export default customEditor
import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const GridDateEditor = forwardRef((props: any, ref: any) => {
  const [date, setDate] = useState(
    moment(props.value, 'YYYY-MM-DD HH:mm:ss').toDate()
  );
  const [editing, setEditing] = useState(true);

  useEffect(() => {
    if (!editing) {
      props.api.stopEditing();
    }
  }, [editing, props.api]);

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return moment(date)
      },
    };
  });

  const onChange = (selectedDate: any) => {
    setDate(selectedDate);
    setEditing(false);
  };

  return (
    <div>
      <DatePicker
        portalId="root"
        dateFormat="MM-DD-YYYY"
        popperClassName="ag-custom-component-popup"
        selected={date}
        onChange={onChange}
      />
    </div>
  );
});
export default GridDateEditor