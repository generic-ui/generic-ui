import { AggregateEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SummariesCalculator } from './calculation/summaries.calculator';
import { ItemEntity } from '../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../field/src/domain/field/field.entity';
export declare class SummariesManager {
    private readonly calculators;
    static readonly DEFAULT_ENABLED = false;
    private readonly structureId;
    private enabled;
    private readonly values;
    constructor(structureId: StructureId, calculators: Array<SummariesCalculator<any, any>>);
    calculate(fields: Array<FieldEntity>, entities: Array<ItemEntity>): Array<AggregateEvent<StructureId>>;
    setEnabled(enabled: boolean): void;
    add(): void;
    remove(): void;
    update(): void;
}
