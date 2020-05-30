import { AggregateEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
import { SummariesCalculator } from './calculation/summaries.calculator';
import { OriginItemEntity } from '../../source/origin/origin-item-entity';
import { TypeField } from '../../../../../structure/field/domain/data-type/type.field';
export declare class SummariesManager {
    private readonly calculators;
    static DEFAULT_ENABLED: boolean;
    private readonly structureId;
    private enabled;
    private readonly values;
    constructor(structureId: StructureId, calculators: Array<SummariesCalculator<any, any>>);
    calculate(fields: Array<TypeField>, entities: Array<OriginItemEntity>): Array<AggregateEvent<StructureId>>;
    setEnabled(enabled: boolean): void;
    add(): void;
    remove(): void;
    update(): void;
}
