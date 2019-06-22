import { OriginItemEntity } from 'structure/domain/origin/command/origin-item-entity';
export declare class OriginAggregate {
    static default(): OriginAggregate;
    private readonly entities;
    constructor(items?: Array<any>);
    getEntities(): Array<OriginItemEntity>;
    getSize(): number;
    private convertItems;
}
