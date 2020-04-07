import { AggregateEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
import { AggregationCalculator } from './calculation/aggregation.calculator';
import { OriginItemEntity } from '../../source/origin/origin-item-entity';
import { TypeField } from '../field/data-type/type.field';
export declare class AggregationManager {
    private readonly calculators;
    private readonly structureId;
    private enabled;
    private readonly values;
    constructor(structureId: StructureId, calculators: Array<AggregationCalculator<any, any>>);
    calculate(fields: Array<TypeField>, entities: Array<OriginItemEntity>): Array<AggregateEvent<StructureId>>;
    setEnabled(enabled: boolean): void;
    add(): void;
    remove(): void;
    update(): void;
}
