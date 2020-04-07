import { SourceCommandDispatcher } from '../../../ui-api/source/source.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { StructureFieldUiRepository } from '../../../ui-api/structure/field/structure.field.ui-repository';
import { StructureSourceReadModelWarehouse } from '../../../ui-api/source/structure-source.read-model-warehouse';
import { StructureEditSourceItemParams } from '../../../domain/source/origin/edit/structure.edit-source-item.params';
export declare class LocalSourceCommandDispatcher extends SourceCommandDispatcher {
    private readonly structureId;
    constructor(structureId: StructureId, sourceDispatcher: SourceDispatcher, structureFieldUiRepository: StructureFieldUiRepository, sourceReadModelService: StructureSourceReadModelWarehouse);
    setOrigin(items: Array<any>): void;
    setLoading(enabled: boolean): void;
    editItem(params: StructureEditSourceItemParams): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any): void;
}
