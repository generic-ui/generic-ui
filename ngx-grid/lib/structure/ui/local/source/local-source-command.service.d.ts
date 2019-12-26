import { SourceCommandService } from '../../../ui-api/source/source-command.service';
import { StructureId } from '../../../domain/structure-id';
import { SourceDispatcher } from '../../../domain/source/command/source.dispatcher';
import { StructureFieldUiRepository } from '../../../ui-api/structure/field/structure.field.ui-repository';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureEditSourceItemParams } from '../../../domain/source/command/origin/edit/structure.edit-source-item.params';
export declare class LocalSourceCommandService extends SourceCommandService {
    private readonly structureId;
    constructor(structureId: StructureId, sourceDispatcher: SourceDispatcher, structureFieldUiRepository: StructureFieldUiRepository, sourceQueryService: SourceReadModelService);
    setOrigin(items: Array<any>): void;
    setLoading(enabled: boolean): void;
    editItem(params: StructureEditSourceItemParams): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any): void;
}
