import { ReadModelRoot } from '@generic-ui/hermes';
import { PagingModel } from '../../../paging/api/model/paging.model';
import { SourceIsLoadingModel } from '../../../source/domain-read/source-is-loading.model';
import { ItemEntity } from '../../../source/domain/core/item/item.entity';
import { VerticalFormationModel } from '../../../vertical-formation/domain-read/vertical-formation.model';
import { StructureReadModelRootId } from './structure.read-model-root-id';
export declare class StructureReadModelRoot extends ReadModelRoot<StructureReadModelRootId> {
    private readonly paging;
    private readonly entities;
    private readonly source;
    private readonly verticalFormation;
    constructor(uid: StructureReadModelRootId, paging: PagingModel, entities: Array<ItemEntity>, source: SourceIsLoadingModel, verticalFormation: VerticalFormationModel);
    getPaging(): PagingModel;
    getEntities(): Array<ItemEntity>;
    getSource(): SourceIsLoadingModel;
    getVerticalFormation(): VerticalFormationModel;
    getTopMargin(): number;
    isLoaderVisible(): boolean;
    getSourceHeight(): number;
    isReadyToDisplay(): boolean;
    isVerticalScrollEnabled(): boolean;
}
