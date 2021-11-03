import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
import { StructureId } from '../../../../core/api/structure.id';
import { AggregateArchive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructurePreparedItemsArchive extends AggregateArchive<ReadonlyArray<OriginItemEntity>> {
    static readonly default: ReadonlyArray<OriginItemEntity>;
    constructor();
    /**
     * @deprecated
     */
    getPreparedItems(structureId: StructureId): ReadonlyArray<OriginItemEntity>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructurePreparedItemsArchive, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructurePreparedItemsArchive>;
}
//# sourceMappingURL=structure.prepared-items.archive.d.ts.map