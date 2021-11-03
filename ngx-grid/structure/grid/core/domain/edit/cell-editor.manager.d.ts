import { CellEditConfig } from '../../api/edit/cell-edit.config';
export declare class CellEditorManager {
    private readonly enabled;
    private readonly rowEdit;
    private readonly cellEdit;
    constructor(config: CellEditConfig);
    isEnabled(value: any, item: any, index: number): boolean;
}
