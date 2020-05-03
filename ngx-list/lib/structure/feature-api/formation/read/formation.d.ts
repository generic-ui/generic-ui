import { SelectedRowsList } from './selected-rows/selected-rows-list';
export declare class Formation {
    private readonly selectedRowsList;
    constructor(selectedRows: Array<string>);
    getSelectedRows(): SelectedRowsList;
}
