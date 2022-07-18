import { ItemEntity } from '../../domain/item/item.entity';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { AggregateArchive } from '@generic-ui/hermes';
export declare class StructurePreparedItemsArchive extends AggregateArchive<ReadonlyArray<ItemEntity>> {
    static readonly default: ReadonlyArray<ItemEntity>;
    constructor();
    /**
     * @deprecated
     */
    getPreparedItems(structureId: StructureId): ReadonlyArray<ItemEntity>;
}
