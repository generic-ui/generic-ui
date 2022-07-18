import { Entity } from '@generic-ui/hermes';
import { ItemEntityId } from './item.entity-id';
export declare class ItemEntity extends Entity<ItemEntityId> {
    sourceItem: any;
    private version;
    private position;
    constructor(id: ItemEntityId, sourceItem: any, position: number, version?: number);
    getSourceItem(): any;
    getVersion(): number;
    getPosition(): number;
    bumpVersion(): void;
    setPosition(position: number): void;
    clone(): ItemEntity;
}
