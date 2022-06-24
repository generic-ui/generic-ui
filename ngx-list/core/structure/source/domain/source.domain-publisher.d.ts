import { SourceDispatcher } from './source.dispatcher';
import { StructureId } from '../../core/api/global/structure.id';
import { StructureEditSourceItemParams } from './origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../field/api/field.warehouse';
import { OriginId } from './origin/origin-id';
import { SourceWarehouse } from '../api/source.warehouse';
import { SelectedRow } from '../../formation/api/row-selected/selected-row';
import { SourcePublisher } from '../api/source.publisher';
export declare class SourceDomainPublisher extends SourcePublisher {
    private readonly sourceDispatcher;
    private readonly fieldWarehouse;
    private readonly sourceReadModelService;
    private readonly commandDispatcher;
    constructor(sourceDispatcher: SourceDispatcher, fieldWarehouse: FieldWarehouse, sourceReadModelService: SourceWarehouse);
    static readonly services: (typeof SourceWarehouse | typeof FieldWarehouse | typeof SourceDispatcher)[];
    setOrigin(items: Array<any>, structureId: StructureId): void;
    setLoading(enabled: boolean, structureId: StructureId): void;
    editItem(params: StructureEditSourceItemParams, structureId: StructureId): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId: StructureId): void;
    deleteRow(row: SelectedRow, structureId: StructureId): void;
    deleteRows(rows: Array<SelectedRow>, structureId: StructureId): void;
    deleteItemByIndex(index: number, structureId: StructureId): void;
    deleteItemById(itemId: OriginId, structureId: StructureId): void;
    deleteManyItemsByIndex(indexes: Array<number>, structureId: StructureId): void;
    deleteManyItemsByItemIds(itemIds: Array<OriginId>, structureId: StructureId): void;
}
