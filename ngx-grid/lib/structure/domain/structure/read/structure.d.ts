import { AggregateId, ReadModel } from '@generic-ui/hermes';
import { Formation } from '../../formation/read/formation';
import { Schema } from '../../schema/read/schema';
import { Paging } from '../../paging/read/paging';
import { Source } from '../../source/read/source';
import { ItemEntity } from '../../source/item.entity';
import { VerticalFormationReadModel } from './vertical-formation/vertical-formation.read-model';
export declare class Structure extends ReadModel {
    private readonly formation;
    private readonly schema;
    private readonly paging;
    private readonly entities;
    private readonly source;
    private readonly verticalFormation;
    constructor(uid: AggregateId, formation: Formation, schema: Schema, paging: Paging, entities: Array<ItemEntity>, source: Source, verticalFormation: VerticalFormationReadModel);
    getFormation(): Formation;
    getSchema(): Schema;
    getPaging(): Paging;
    getEntities(): Array<ItemEntity>;
    getSource(): Source;
    getSelectedEntities(): Array<ItemEntity>;
    getTopMargin(): number;
    getContainerHeight(): number;
    isLoaderVisible(): boolean;
    isTopHeaderEnabled(): boolean;
    isBottomHeaderEnabled(): boolean;
    isReadyToDisplay(): boolean;
    isVerticalScrollEnabled(): boolean;
}