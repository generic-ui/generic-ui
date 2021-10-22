import { AggregateEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesCalculator } from './calculation/summaries.calculator';
import { OriginItemEntity } from '../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../field/core/domain/field/field';
export declare class SummariesManager {
    private readonly calculators;
    static readonly DEFAULT_ENABLED = false;
    private readonly structureId;
    private enabled;
    private readonly values;
    constructor(structureId: StructureId, calculators: Array<SummariesCalculator<any, any>>);
    calculate(fields: Array<Field>, entities: Array<OriginItemEntity>): Array<AggregateEvent<StructureId>>;
    setEnabled(enabled: boolean): void;
    add(): void;
    remove(): void;
    update(): void;
}
