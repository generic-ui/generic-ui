import { AggregateId, ReadModel } from '@generic-ui/hermes';
import { Formation } from '../../formation/query/formation';
import { Schema } from '../../schema/query/schema';
import { Paging } from '../../paging/query/paging';
import { Entity } from '../../source/entity';
import { Source } from '../../source/query/source';
import { VerticalFormationReadModel } from './vertical-formation/vertical-formation.read-model';
export declare class Structure extends ReadModel {
    private readonly formation;
    private readonly schema;
    private readonly paging;
    private readonly entities;
    private readonly source;
    private readonly verticalFormation;
    constructor(uid: AggregateId, formation: Formation, schema: Schema, paging: Paging, entities: Array<Entity>, source: Source, verticalFormation: VerticalFormationReadModel);
    getFormation(): Formation;
    getSchema(): Schema;
    getPaging(): Paging;
    getEntities(): Array<Entity>;
    getSource(): Source;
    getSelectedEntities(): Array<Entity>;
    getTopMargin(): number;
    getContainerHeight(): number;
    isLoaderVisible(): boolean;
    isTopHeaderEnabled(): boolean;
    isBottomHeaderEnabled(): boolean;
    isReadyToDisplay(): boolean;
    isVerticalScrollEnabled(): boolean;
}
