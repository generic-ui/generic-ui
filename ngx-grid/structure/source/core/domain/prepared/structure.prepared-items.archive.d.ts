import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
import { StructureId } from '../../../../core/api/structure.id';
import { AggregateArchive } from '@generic-ui/hermes';
export declare class StructurePreparedItemsArchive extends AggregateArchive<ReadonlyArray<OriginItemEntity>> {
    static readonly default: ReadonlyArray<OriginItemEntity>;
    constructor();
    /**
     * @deprecated
     */
    getPreparedItems(structureId: StructureId): ReadonlyArray<OriginItemEntity>;
}
