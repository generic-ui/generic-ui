import { SourceCommandDispatcher } from '../../../../../structure/source/domain-api/source.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../../../structure/source/domain/source.dispatcher';
import { SourceWarehouse } from '../../../../../structure/source/domain-api/source.warehouse';
import { StructureEditSourceItemParams } from '../../../../../structure/source/domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../../../structure/field/domain-api/field.warehouse';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class LocalSourceCommandDispatcher extends SourceCommandDispatcher {
    private readonly structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, sourceDispatcher: SourceDispatcher, fieldWarehouse: FieldWarehouse, sourceReadModelService: SourceWarehouse);
    setOrigin(items: Array<any>): void;
    setLoading(enabled: boolean): void;
    editItem(params: StructureEditSourceItemParams): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any): void;
}
