import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { FieldUiRepository } from '../../../../structure/field/domain-api/read/field.ui-repository';
import { StructureSourceWarehouse } from './structure-source.warehouse';
import { StructureId } from '../../domain/structure.id';
import { StructureEditSourceItemParams } from '../../domain/source/origin/edit/structure.edit-source-item.params';
export declare class SourceCommandDispatcher extends Reactive {
    private sourceDispatcher;
    private structureFieldUiRepository;
    private sourceReadModelService;
    constructor(sourceDispatcher: SourceDispatcher, structureFieldUiRepository: FieldUiRepository, sourceReadModelService: StructureSourceWarehouse);
    setOrigin(items: Array<any>, structureId?: StructureId): void;
    setLoading(enabled: boolean, structureId?: StructureId): void;
    editItem(params: StructureEditSourceItemParams, structureId?: StructureId): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId?: StructureId): void;
}
