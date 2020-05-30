import { SourceCommandDispatcher } from '../../../domain-api/source/source.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { FieldUiRepository } from '../../../../../structure/field/domain-api/read/field.ui-repository';
import { StructureSourceWarehouse } from '../../../domain-api/source/structure-source.warehouse';
import { StructureEditSourceItemParams } from '../../../domain/source/origin/edit/structure.edit-source-item.params';
export declare class LocalSourceCommandDispatcher extends SourceCommandDispatcher {
    private readonly structureId;
    constructor(structureId: StructureId, sourceDispatcher: SourceDispatcher, structureFieldUiRepository: FieldUiRepository, sourceReadModelService: StructureSourceWarehouse);
    setOrigin(items: Array<any>): void;
    setLoading(enabled: boolean): void;
    editItem(params: StructureEditSourceItemParams): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any): void;
}
