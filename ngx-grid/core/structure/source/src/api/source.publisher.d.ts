import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { StructureEditSourceItemParams } from '../core/origin/edit/structure.edit-source-item.params';
import { SelectedRow } from '../../../formation/src/api/row-selected/selected-row';
import { ItemEntityId } from '../domain/item/item.entity-id';
import { Publisher } from '@generic-ui/hermes';
export declare abstract class SourcePublisher implements Publisher {
    protected constructor();
    abstract setOrigin(items: Array<any>, structureId: StructureId): void;
    abstract setLoading(enabled: boolean, structureId: StructureId): void;
    abstract editItem(params: StructureEditSourceItemParams, structureId: StructureId): void;
    abstract editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId: StructureId): void;
    abstract deleteRow(row: SelectedRow, structureId: StructureId): void;
    abstract deleteRows(rows: Array<SelectedRow>, structureId: StructureId): void;
    abstract deleteItemByIndex(index: number, structureId: StructureId): void;
    abstract deleteItemById(itemId: ItemEntityId, structureId: StructureId): void;
    abstract deleteManyItemsByIndex(indexes: Array<number>, structureId: StructureId): void;
    abstract deleteManyItemsByItemIds(itemIds: Array<ItemEntityId>, structureId: StructureId): void;
}
