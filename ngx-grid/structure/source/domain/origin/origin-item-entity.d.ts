import { Entity } from '@generic-ui/hermes';
import { OriginId } from './origin-id';
export declare class OriginItemEntity extends Entity<OriginId> {
    rawData: any;
    private version;
    private position;
    constructor(id: OriginId, rawData: any, position: number, version?: number);
    getData(): any;
    getVersion(): number;
    getPosition(): number;
    bumpVersion(): void;
    setPosition(position: number): void;
    clone(): OriginItemEntity;
}
