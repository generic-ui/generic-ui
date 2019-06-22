import { Origin } from 'structure/domain/origin/query/origin';
import { Formation } from 'structure/domain/formation/query/formation';
import { Schema } from 'structure/domain/schema/query/schema';
import { Paging } from 'structure/domain/paging/query/paging';
import { Entity } from 'structure/domain/source/entity';
import { Presentation } from 'structure/domain/presentation/query/presentation';
import { AggregateId, QueryModel } from 'generic-ui-cqrs';
export declare class Structure extends QueryModel {
    private readonly origin;
    private readonly formation;
    private readonly schema;
    private readonly paging;
    private readonly source;
    private readonly presentation;
    constructor(uid: AggregateId, origin: Origin, formation: Formation, schema: Schema, paging: Paging, source: Array<Entity>, presentation: Presentation);
    getOrigin(): Origin;
    getFormation(): Formation;
    getSchema(): Schema;
    getPaging(): Paging;
    getSource(): Array<Entity>;
    getPresentation(): Presentation;
    isTopHeaderEnabled(): boolean;
    isBottomHeaderEnabled(): boolean;
    isReadyToDisplay(): boolean;
}
