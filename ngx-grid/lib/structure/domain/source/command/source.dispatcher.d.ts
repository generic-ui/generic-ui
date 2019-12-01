import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../structure-id';
import { StructureEditSourceItemParams } from './origin/edit/structure.edit-source-item.params';
export declare class SourceDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setLoading(structureId: StructureId, enabled: boolean): void;
    setOrigin(structureId: StructureId, items: Array<any>): void;
    editItem(structureId: StructureId, params: StructureEditSourceItemParams): void;
}
