import { ReadModelRoot } from '@generic-ui/hermes';
import { Formation } from '../formation/read/formation';
import { Paging } from '../../../../structure/paging/domain-api/read/paging';
import { Source } from '../source/source';
import { ItemEntity } from '../../domain/source/item.entity';
import { VerticalFormationReadModel } from '../vertical-formation/vertical-formation.read-model';
import { StructureReadModelRootId } from './structure.read-model-root-id';
export declare class StructureReadModelRoot extends ReadModelRoot<StructureReadModelRootId> {
    private readonly formation;
    private readonly paging;
    private readonly entities;
    private readonly source;
    private readonly verticalFormation;
    constructor(uid: StructureReadModelRootId, formation: Formation, paging: Paging, entities: Array<ItemEntity>, source: Source, verticalFormation: VerticalFormationReadModel);
    getFormation(): Formation;
    getPaging(): Paging;
    getEntities(): Array<ItemEntity>;
    getSource(): Source;
    getVerticalFormation(): VerticalFormationReadModel;
    getSelectedEntities(): Array<ItemEntity>;
    getTopMargin(): number;
    isLoaderVisible(): boolean;
    getSourceHeight(): number;
    isReadyToDisplay(): boolean;
    isVerticalScrollEnabled(): boolean;
}
