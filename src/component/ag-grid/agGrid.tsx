import { Fragment } from 'react';
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
    CellClassParams,
    ColDef,
    ColGroupDef,
    EditableCallbackParams,
    Grid,
    GridOptions,
    GridReadyEvent,
} from 'ag-grid-community';
import { copyFile } from 'fs/promises';
// import './styles.css';

const AgGrid = () => {
    const [edit, setEdit] = useState(false)
    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]);
    console.log(rowData);

    const [columnDefs, setcolumnDefs] = useState([
        { field: 'make', type: 'editableColumn' },
        { field: 'model', type: 'editableColumn' },
        { field: 'price', type: 'editableColumn' },
    ]);
    const gridRef = useRef<any>(null);
    const onAddHandler = () => {
        setEdit(true)

        gridRef.current.api.applyTransaction({ add: [{ make: "", model: "", price: "" }] })

    }

    const onAddDataHandler = () => {

    }
    function isCellEditable(params: EditableCallbackParams | CellClassParams) {
        console.log("Check edit")
        return params.data.make === "" || params.data.model === "" || params.data.price === ""
        // if(params.data.make === "")
        // {
        //     return true;
        // }
        // return false;
    }
    const columnTypes = useMemo<{
        [key: string]: ColDef;
    }>(() => {
        console.log("edit cell");
        return {
            editableColumn: {
                editable: (params: EditableCallbackParams<any>) => {
                    console.log("edit cell", params);
                    return isCellEditable(params);
                },
                cellStyle: (params: CellClassParams<any>) => {
                    if (isCellEditable(params)) {
                      return { backgroundColor: 'lightBlue' };
                    }
                  },
            },
        };
    }, []);

    return (
        <Fragment>
            <button className='btn btn-primary' onClick={onAddHandler}>Add Row</button>
            <div className="ag-theme-alpine container" style={{ height: 400, width: 600 }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    columnTypes={columnTypes}
                ></AgGridReact>

            </div>
            <button className='btn btn-primary' onClick={onAddDataHandler}>Add Row Data</button>
        </Fragment>
    )
}
export default AgGrid