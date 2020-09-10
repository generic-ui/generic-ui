import { SourceCommandInvoker } from '../../../../source/domain-api/source.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../../source/domain/source.dispatcher';
import { SourceWarehouse } from '../../../../source/domain-api/source.warehouse';
import { StructureEditSourceItemParams } from '../../../../source/domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../../field/domain-api/field.warehouse';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class LocalSourceCommandDispatcher extends SourceCommandInvoker {
    private readonly structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, sourceDispatcher: SourceDispatcher, fieldWarehouse: FieldWarehouse, sourceReadModelService: SourceWarehouse);
    setOrigin(items: Array<any>): void;
    setLoading(enabled: boolean): void;
    editItem(params: StructureEditSourceItemParams): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any): void;
}
