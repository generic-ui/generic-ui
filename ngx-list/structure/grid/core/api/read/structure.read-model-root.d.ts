import { ReadModelRoot } from '@generic-ui/hermes';
import { Paging } from '../../../../paging/core/api/read/paging';
import { Source } from '../../../../source/core/api/read/source';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { VerticalFormationReadModel } from '../../../../vertical-formation/core/api/vertical-formation.read-model';
import { StructureReadModelRootId } from './structure.read-model-root-id';
export declare class StructureReadModelRoot extends ReadModelRoot<StructureReadModelRootId> {
    private readonly paging;
    private readonly entities;
    private readonly source;
    private readonly verticalFormation;
    constructor(uid: StructureReadModelRootId, paging: Paging, entities: Array<ItemEntity>, source: Source, verticalFormation: VerticalFormationReadModel);
    getPaging(): Paging;
    getEntities(): Array<ItemEntity>;
    getSource(): Source;
    getVerticalFormation(): VerticalFormationReadModel;
    getTopMargin(): number;
    isLoaderVisible(): boolean;
    getSourceHeight(): number;
    isReadyToDisplay(): boolean;
    isVerticalScrollEnabled(): boolean;
}
//# sourceMappingURL=structure.read-model-root.d.ts.map