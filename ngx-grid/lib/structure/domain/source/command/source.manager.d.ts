import { AggregateEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin/origin-item-entity';
import { StructureId } from '../../structure-id';
import { Field } from '../../structure/command/field/data-type/field';
export declare class SourceManager {
    private loading;
    private fetched;
    private origin;
    private entities;
    private slicedEntities;
    isLoading(): boolean;
    isFetched(): boolean;
    setLoading(enabled: boolean): void;
    setEntities(ent: Array<OriginItemEntity>): void;
    getEntities(): Array<OriginItemEntity>;
    setSlicedEntities(ent: Array<OriginItemEntity>): void;
    getSlicedEntities(): Array<OriginItemEntity>;
    setOrigin(items: Array<any>, structureId: StructureId): AggregateEvent;
    setConvertedOrigin(items: Array<any>, structureId: StructureId): AggregateEvent;
    getOrigin(): Array<OriginItemEntity>;
    getOriginSize(): number;
    editOriginItem(itemId: string, value: any, field: Field, structureId: StructureId): ReadonlyArray<AggregateEvent>;
    removeOriginItem(itemId: string, structureId: StructureId): Array<AggregateEvent>;
    private convertItems;
    private createOriginChangedEvent;
    private findOriginItem;
    private findOriginItemIndex;
}
