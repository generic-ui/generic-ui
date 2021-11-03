import { Entity } from '@generic-ui/hermes';
import { OriginId } from './origin-id';
export declare class OriginItemEntity extends Entity<OriginId> {
    sourceItem: any;
    private version;
    private position;
    constructor(id: OriginId, sourceItem: any, position: number, version?: number);
    getSourceItem(): any;
    getVersion(): number;
    getPosition(): number;
    bumpVersion(): void;
    setPosition(position: number): void;
    clone(): OriginItemEntity;
}
