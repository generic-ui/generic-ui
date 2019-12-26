import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { StructureFieldUiRepository } from '../structure/field/structure.field.ui-repository';
import { SourceReadModelService } from './source-read-model.service';
import { StructureId } from '../../domain/structure-id';
import { StructureEditSourceItemParams } from '../../domain/source/command/origin/edit/structure.edit-source-item.params';
export declare class SourceCommandService extends Reactive {
    private sourceDispatcher;
    private structureFieldUiRepository;
    private sourceQueryService;
    constructor(sourceDispatcher: SourceDispatcher, structureFieldUiRepository: StructureFieldUiRepository, sourceQueryService: SourceReadModelService);
    setOrigin(items: Array<any>, structureId?: StructureId): void;
    setLoading(enabled: boolean, structureId?: StructureId): void;
    editItem(params: StructureEditSourceItemParams, structureId?: StructureId): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId?: StructureId): void;
}
