import { AggregateArchive } from '@generic-ui/hermes';
import { CellEditorManager } from '../../core/domain/edit/cell-editor.manager';
export declare class StructureCellEditArchive extends AggregateArchive<CellEditorManager> {
    static default: CellEditorManager;
    constructor();
}
