import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { StructureFieldUiRepository } from '../structure/field/structure.field.ui-repository';
import { StructureSourceReadModelWarehouse } from './structure-source.read-model-warehouse';
import { StructureId } from '../../domain/structure.id';
import { StructureEditSourceItemParams } from '../../domain/source/origin/edit/structure.edit-source-item.params';
export declare class SourceCommandDispatcher extends Reactive {
    private sourceDispatcher;
    private structureFieldUiRepository;
    private sourceReadModelService;
    constructor(sourceDispatcher: SourceDispatcher, structureFieldUiRepository: StructureFieldUiRepository, sourceReadModelService: StructureSourceReadModelWarehouse);
    setOrigin(items: Array<any>, structureId?: StructureId): void;
    setLoading(enabled: boolean, structureId?: StructureId): void;
    editItem(params: StructureEditSourceItemParams, structureId?: StructureId): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId?: StructureId): void;
}
