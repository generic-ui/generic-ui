import { StructureId } from '../../core/api/global/structure.id';
import { StructureEditSourceItemParams } from './origin/edit/structure.edit-source-item.params';
export declare class SourceDispatcher {
    private readonly commandDispatcher;
    setLoading(structureId: StructureId, enabled: boolean): void;
    setOrigin(structureId: StructureId, items: Array<any>): void;
    editItem(structureId: StructureId, params: StructureEditSourceItemParams): void;
}
