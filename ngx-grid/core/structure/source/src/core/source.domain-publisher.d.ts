import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { StructureEditSourceItemParams } from './origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../field/src/api/field.warehouse';
import { ItemEntityId } from '../domain/item/item.entity-id';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { SelectedRow } from '../../../formation/src/api/row-selected/selected-row';
import { SourcePublisher } from '../api/source.publisher';
export declare class SourceDomainPublisher extends SourcePublisher {
    private readonly commandDispatcher;
    private readonly fieldWarehouse;
    private readonly sourceReadModelService;
    constructor(commandDispatcher: CommandDispatcher, fieldWarehouse: FieldWarehouse, sourceReadModelService: SourceWarehouse);
    static readonly services: readonly [typeof CommandDispatcher, typeof FieldWarehouse, typeof SourceWarehouse];
    setOrigin(items: Array<any>, structureId: StructureId): void;
    setLoading(enabled: boolean, structureId: StructureId): void;
    editItem(params: StructureEditSourceItemParams, structureId: StructureId): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId: StructureId): void;
    deleteRow(row: SelectedRow, structureId: StructureId): void;
    deleteRows(rows: Array<SelectedRow>, structureId: StructureId): void;
    deleteItemByIndex(index: number, structureId: StructureId): void;
    deleteItemById(itemId: ItemEntityId, structureId: StructureId): void;
    deleteManyItemsByIndex(indexes: Array<number>, structureId: StructureId): void;
    deleteManyItemsByItemIds(itemIds: Array<ItemEntityId>, structureId: StructureId): void;
}
