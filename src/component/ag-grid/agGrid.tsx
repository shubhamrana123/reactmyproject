// import { Fragment } from 'react';
// import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
// import { render } from 'react-dom';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import DatePicker from 'react-date-picker'
// // import DatePicker from './DatePicker';
// import {
//     CellClassParams,
//     ColDef,
//     ColGroupDef,
//     EditableCallbackParams,
//     Grid,
//     GridOptions,
//     GridReadyEvent,
// } from 'ag-grid-community';
// import { copyFile } from 'fs/promises';
// // import './styles.css';

// const AgGrid = () => {
//     const [edit, setEdit] = useState(false)
//     const [rowData] = useState([
//         { make: 'Toyota', model: 'Celica', price: 35000 ,date:"09-02-2021"},
//         { make: 'Ford', model: 'Mondeo', price: 32000 ,date:"09-02-2021"},
//         { make: 'Porsche', model: 'Boxter', price: 72000,date:"09-02-2021" },
//     ]);
//     console.log(rowData);

//     const [columnDefs, setcolumnDefs] = useState([
//         { field: 'make', type: 'editableColumn' },
//         { field: 'model', type: 'editableColumn' },
//         { field: 'price', type: 'editableColumn' },
//             {field:'date',type:'editablecolumn'}
//     ]);
//     const gridRef = useRef<any>(null);
//     const onAddHandler = () => {
//         setEdit(true)

//         gridRef.current.api.applyTransaction({ add: [{ make: "", model: "" ,price:'', date:""}],addIndex: 0  })

//     }

//     const onAddDataHandler = () => {

//     }
    // function isCellEditable(params: EditableCallbackParams | CellClassParams) {
    //     console.log("Check edit")
    //     return params.data.make === "" || params.data.model === "" || params.data.date === ""
    //     // if(params.data.make === "")
    //     // {
    //     //     return true;
    //     // }
    //     // return false;
    // }
    // const columnTypes = useMemo<{
    //     [key: string]: ColDef;
    // }>(() => {
    //     console.log("edit cell");
    //     return {
    //         editableColumn: {
    //             editable: (params: EditableCallbackParams<any>) => {
    //                 console.log("edit cell", params);
    //                 return isCellEditable(params);
    //             },
    //             cellStyle: (params: CellClassParams<any>) => {
    //                 if (isCellEditable(params)) {
    //                   return { backgroundColor: 'lightBlue' };
    //                 }
    //               },
    //         },
    //     };
    // }, []);

//     return (
//         <Fragment>
//             <button className='btn btn-primary' onClick={onAddHandler}>Add Row</button>
//             <div className="ag-theme-alpine container" style={{ height: 400, width: 800 }}>
//                 <AgGridReact
//                     ref={gridRef}
//                     rowData={rowData}
//                     columnDefs={columnDefs}
//                     columnTypes={columnTypes}
//                 ></AgGridReact>

//             </div>
//             <button className='btn btn-primary' onClick={onAddDataHandler}>Add Row Data</button>
//         </Fragment>
//     )
// }
// export default AgGrid

// import React, { useCallback, useMemo, useRef, useState } from 'react';
// import { render } from 'react-dom';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// // import './styles.css';
// import {
//   ColDef,
//   ColGroupDef,
//   Grid,
//   GridOptions,
//   GridReadyEvent,
// } from 'ag-grid-community';
// import CustomDateComponent from './CustomDate';
// import { IOlympicData } from '../../types/interfaces'

// const filterParams = {
//   comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
//     const dateAsString = cellValue;
//     const dateParts = dateAsString.split('/');
//     const cellDate = new Date(
//       Number(dateParts[2]),
//       Number(dateParts[1]) - 1,
//       Number(dateParts[0])
//     );
//     if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
//       return 0;
//     }
//     if (cellDate < filterLocalDateAtMidnight) {
//       return -1;
//     }
//     if (cellDate > filterLocalDateAtMidnight) {
//       return 1;
//     }
//   },
// };

// const GridExample = () => {
//   const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
//   const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
//   const [rowData, setRowData] = useState<IOlympicData[]>();
//   const [columnDefs, setColumnDefs] = useState<ColDef[]>([
//     { field: 'athlete' },
//     { field: 'age', filter: 'agNumberColumnFilter' },
//     { field: 'country' },
//     { field: 'year' },
//     {
//       field: 'date',
//       minWidth: 190,
//       filter: 'agDateColumnFilter',
//       filterParams: filterParams,
//     },
//     { field: 'sport' },
//     { field: 'gold', filter: 'agNumberColumnFilter' },
//     { field: 'silver', filter: 'agNumberColumnFilter' },
//     { field: 'bronze', filter: 'agNumberColumnFilter' },
//     { field: 'total', filter: false },
//   ]);
//   const defaultColDef = useMemo<ColDef>(() => {
//     return {
//       editable: true,
//       sortable: true,
//       flex: 1,
//       minWidth: 100,
//       filter: true,
//       floatingFilter: true,
//       resizable: true,
//     };
//   }, []);
//   const components = useMemo<{
//     [p: string]: any;
//   }>(() => {
//     return {
//       agDateInput: CustomDateComponent,
//     };
//   }, []);

//   const onGridReady = useCallback((params: GridReadyEvent) => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//       .then((resp) => resp.json())
//       .then((data: IOlympicData[]) => {
//         setRowData(data);
//       });
//   }, []);

//   return (
//     <div style={containerStyle}>
//       <div style={gridStyle} className="ag-theme-alpine">
//         <AgGridReact<IOlympicData>
//           rowData={rowData}
//           columnDefs={columnDefs}
//           defaultColDef={defaultColDef}
//           components={components}
//           onGridReady={onGridReady}
//         ></AgGridReact>
//       </div>
//     </div>
//   );
// };
// export default GridExample

// import logo from './logo.svg';
// // import './App.css';
// import React, { useEffect, useState ,useRef,useMemo} from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import {
//     CellClassParams,
//     ColDef,
//     ColGroupDef,
//     EditableCallbackParams,
//     Grid,
//     GridOptions,
//     GridReadyEvent,
// } from 'ag-grid-community';
// const dateFilterParams = {
//   comparator: function (filterLocalDateAtMidnight:any, cellValue:any) {
//     var dateAsString = cellValue;
//     if (dateAsString == null) return -1;
//     var dateParts = dateAsString.split('-');
//     var cellDate = new Date(
//       Number(dateParts[2]),
//       Number(dateParts[1]) - 1,
//       Number(dateParts[0])
//     );
//     if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
//       return 0;
//     }
//     if (cellDate < filterLocalDateAtMidnight) {
//       return -1;
//     }
//     if (cellDate > filterLocalDateAtMidnight) {
//       return 1;
//     }
//   },
//   browserDatePicker: true,
// };

// function GridExample() {
//   const [gridApi, setGridApi] = useState()
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const rowData = [
//     { make: "Toyota", model: "Celica", price: 35000, date: "09-02-2022" },
//     { make: "Ford", model: "Mondeo", price: 32000, date: "11-02-2022" },
//     { make: "Porsche", model: "Boxter", price: 72000, date: "10-02-2022" },
//     { make: "Mers", model: "Mers", price: 92000, date: "12-02-2022" }
//   ];

//   const columns = [{ headerName: "Make", field: "make",type: 'editableColumn' },
//   { headerName: "Price", field: "price",type: 'editableColumn' },
//   { headerName: "Model", field: "model",type: 'editableColumn' },
//   { headerName: "Date", field: "date", filter: 'agDateColumnFilter', filterParams: dateFilterParams,type: 'editableColumn' }
//   ]
//   const defColumnDefs = { flex: 1, }
//   const gridRef = useRef<any>(null);
//   const getRowId = (params:any) => params.data.id;
//   const onAddHandler = () => {
//             // setEdit(true)
    
//             gridRef.current.api.applyTransaction({ add: [{ make: "", model: "" ,price:'', date:""}],addIndex: 0  })
    
          

//         }
//         const onRemoveHandler = () => {
//             // setEdit(true)
    
//             gridRef.current.api.applyTransaction({ remove: [{}],addIndex: 0  })
    
//         }
//         // const onRemoveSelected = useCallback(() => {
//         //     const selectedData = gridRef.current!.api.getSelectedRows();
//         //     const res = gridRef.current!.api.applyTransaction({
//         //       remove: selectedData,
//         //     })!;
//         //     printResult(res);
//         //   }, []);
        
//   const onGridReady = (params:any) => {
//     setGridApi(params)
//   }
//   const getFilterType = () => {
//     if (startDate !== '' && endDate !== '') return 'inRange';
//     else if (startDate !== '') return 'greaterThan'
//     else if (endDate !== '') return 'lessThan'
//   };
//   useEffect(() => {
//     if (gridApi) {
//       if (startDate !== '' && endDate !== '' && startDate > endDate) {
//         alert("Start Date should be before End Date")
//         setEndDate('')
//       } else {
//         var dateFilterComponent = gridRef.current.api.getFilterInstance('date');
//         dateFilterComponent.setModel({
//           type: getFilterType(),
//           dateFrom: startDate ? startDate : endDate,
//           dateTo: endDate,
//         });
//         gridRef.current.api.onFilterChanged();
//       }

//     }

//   }, [startDate, endDate])


//   function isCellEditable(params: EditableCallbackParams | CellClassParams) {
//     console.log("Check edit")
//     return params.data.make === "" || params.data.model === "" || params.data.date === "" ||params.data.price === ""
//     // if(params.data.make === "")
//     // {
//     //     return true;
//     // }
//     // return false;
// }
//   const columnTypes = useMemo<{
//     [key: string]: ColDef;
// }>(() => {
//     console.log("edit cell");
//     return {
//         editableColumn: {
//             editable: (params: EditableCallbackParams<any>) => {
//                 console.log("edit cell", params);
//                 return isCellEditable(params);
//             },
//             cellStyle: (params: CellClassParams<any>) => {
//                 if (isCellEditable(params)) {
//                   return { backgroundColor: 'lightBlue' };
//                 }
//               },
//         },
//     };
// }, []);
//   return (
//     <div className="App">
//         <button onClick={onAddHandler}>Add new row</button>
//         <button onClick={onAddHandler}>Remove  row</button>
//       {/* <h2 align="center">Ag Grid with React</h2> */}
//       {/* <p align="center">Date Range Filtering </p> */}
//       <div className="ag-theme-alpine" style={{ height: 400 }}>
//         From : <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
//         To : <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
//         <AgGridReact
//          ref={gridRef}
//             rowData={rowData}
//             getRowId={getRowId}
//           columnDefs={columns}
//           columnTypes={columnTypes}
//           defaultColDef={defColumnDefs}
        
//           //                    
//                             //   columnTypes={columnTypes}
//           onGridReady={onGridReady} />
//       </div>
     
//     </div>
//   );

// }
// export default GridExample

import { Fragment } from 'react';
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridReact,AgGridColumn } from 'ag-grid-react';
import CustomDateComponent from './CustomDate';
import CustomEditorComponent from './customEditor';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import NumericCellEditor from './NumericCellEditor';
import { IRow, getDatas } from '../../dummyData/dummyData'
import {
    CellClassParams,
    ColDef,
    ColGroupDef,
    EditableCallbackParams,
    ICellEditorParams,
    Grid,
    GridOptions,
    GridReadyEvent,
} from 'ag-grid-community';
import { copyFile } from 'fs/promises';
// import './styles.css';

const filterParams = {
  comparator: function(filterLocalDateAtMidnight:any, cellValue:any) {
    var dateAsString = cellValue;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  }
};
const frameworkComponents = {
  agDateInput: CustomDateComponent,
  customEditor: CustomEditorComponent
};

function cellEditorSelector(params: ICellEditorParams<IRow>) {
  if (params.data.type === 'price') {
    
    return {
      component: NumericCellEditor,
    };
  }
  // if (params.data.type === 'gender') {
  //   return {
  //     component: 'agRichSelectCellEditor',
  //     params: {
  //       values: ['Male', 'Female'],
  //     },
  //     popup: true,
  //   };
  // }
  // if (params.data.type === 'mood') {
  //   return {
  //     component: MoodEditor,
  //     popup: true,
  //     popupPosition: 'under',
  //   };
  // }
  return undefined;
}
const AgGrid = () => {
  const [gridApi, setGridApi] = useState()
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [edit, setEdit] = useState(false);
    const [refresh,setRefresh] = useState(false);

    // const [rowData] = useState([
    //     { make: 'Toyota', model: 'Celica', price: 35000 },
    //     { make: 'Ford', model: 'Mondeo', price: 32000 },
    //     { make: 'Porsche', model: 'Boxter', price: 72000 },
    // ]);
    const [rowData, setRowData] = useState<IRow[]>(getDatas());
    const BtnCellRenderer = (params : any)=>
    {
        console.log("REBDER")
        let editingCells = params.api.getEditingCells();

        let isCurrentRowEditing = editingCells.some((cell:any) => {
            return cell.rowIndex === params.node.rowIndex;
        });

        if (isCurrentRowEditing) {
            return  ( <button className='btn btn-success' data-action="save">Save</button>)
        }
        else{
            return  ( <button className='btn btn-primary' data-action="edit">Edit</button>)
        }
      
    }
    const onCellClicked=(params :any)=> {
        console.log(params,"edit ",params.event.target.dataset.action)
        // Handle click event for action cells
        if (params.column.colId === "action" && params.event.target.dataset.action) {
          let action = params.event.target.dataset.action;
    
          if (action === "edit") {
            console.log("EDIT",params)
            params.api.startEditingCell({
              rowIndex: params.node.rowIndex,
              // gets the first columnKey
              colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
            });
          }
    
          if (action === "delete") {
            params.api.applyTransaction({
              remove: [params.node.data]
            });
          }
    
          if (action === "save") {  
            console.log("SAVE",params)

            params.api.stopEditing(false);
           
          }
    
          if (action === "cancel") {
            params.api.stopEditing(true);
          }
        }
      }
    
      const onRowEditingStarted=(params:any)=> {
        console.log("on row edit start")
        params.api.refreshCells({
          columns: ["action"],
          rowNodes: [params.node],
          force: true
        });
      }
      const onRowEditingStopped = (params:any)=> {
        console.log("on row edit stop")
        params.api.refreshCells({
          columns: ["action"],
          rowNodes: [params.node],
          force: true
        });
      }
    
    const [columnDefs, setcolumnDefs] = useState([
        { field: 'make' },
        { field: 'model',
      
        cellEditor: 'agLargeTextCellEditor',
        cellEditorPopup: true,
        minWidth: 550,},
        {
          field: 'price',
          editable: true,
          cellEditorSelector: cellEditorSelector,
        },
        // { field: 'date'},
        { field: 'action',  cellRenderer: BtnCellRenderer, editable: false,
            colId: "action" }
    ]);
    // const [columnDefs, setColumnDefs] = useState<ColDef[]>([
     
      
    //     // field: 'value',
        
    //     {
    //       field: 'price',
    //       editable: true,
    //       cellEditorSelector: cellEditorSelector,
    //     },
    // { field: 'action',  cellRenderer: BtnCellRenderer, editable: false,
    // colId: "action" }
    //   ,
    // ]);
    const defaultColDef = {
        editable: true
      }
    const gridRef = useRef<any>(null);

    const onAddHandler = () => {
        setEdit(true)
        gridRef.current.api.applyTransaction({ add: [{ make: "", model: "", price: "" }],addIndex: 0  })

    }

    function isCellEditable(params: EditableCallbackParams | CellClassParams) {
       
        return params.data.make === "" || params.data.model === "" || params.data.price === ""
    }
    
    const columnTypes = useMemo<{
        [key: string]: ColDef;
    }>(() => {
       
        return {
            editableColumn: {
                editable: (params: EditableCallbackParams<any>) => {
                  
                    return isCellEditable(params);
                },
                // cellStyle: (params: CellClassParams<any>) => {
                //     if (isCellEditable(params)) {
                //       return { backgroundColor: 'lightBlue' };
                //     }
                //   },
            },
        };
    }, []);

    return (
        <Fragment>
            <div className='container'>
            <button className='btn btn-primary' onClick={onAddHandler}>Add Row</button>
            <div className="ag-theme-alpine container" style={{ height: 400, width: 1000 }}>
                <AgGridReact
                    onRowEditingStopped={onRowEditingStopped}
                    onRowEditingStarted={onRowEditingStarted}
                    onCellClicked={onCellClicked}
                    suppressClickEdit={true}
                    editType="fullRow"
                    defaultColDef={defaultColDef}
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    columnTypes={columnTypes}
                >

<AgGridColumn
          field="date"
          filter={'agDateColumnFilter'}
          cellEditor={'customEditor'}
          filterParams={filterParams}
        />
                </AgGridReact>

            </div>
            </div>
          
            
        </Fragment>
    )
}
export default AgGrid