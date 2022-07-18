import { ReadModelRoot } from '@generic-ui/hermes';
import { PagingModel } from '../../../../paging/src/api/model/paging.model';
import { SourceIsLoadingModel } from '../../../../source/src/core-read/source-is-loading.model';
import { Item } from '../../../../source/src/api/item/item';
import { VerticalFormationModel } from '../../../../vertical-formation/src/core-read/vertical-formation.model';
import { StructureReadModelRootId } from './structure.read-model-root-id';
export declare class StructureReadModelRoot extends ReadModelRoot<StructureReadModelRootId> {
    private readonly paging;
    private readonly entities;
    private readonly source;
    private readonly verticalFormation;
    constructor(uid: StructureReadModelRootId, paging: PagingModel, entities: Array<Item>, source: SourceIsLoadingModel, verticalFormation: VerticalFormationModel);
    getPaging(): PagingModel;
    getEntities(): Array<Item>;
    getSource(): SourceIsLoadingModel;
    getVerticalFormation(): VerticalFormationModel;
    getTopMargin(): number;
    isLoaderVisible(): boolean;
    getSourceHeight(): number;
    isReadyToDisplay(): boolean;
    isVerticalScrollEnabled(): boolean;
}
