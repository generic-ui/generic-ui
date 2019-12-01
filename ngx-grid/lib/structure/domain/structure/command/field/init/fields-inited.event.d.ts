import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { CompositionId } from '../../../../composition/composition-id';
import { ColumnConfig } from '../../../../composition/column.config';
import { Field } from '../data-type/field';
export declare class FieldsInitedEvent extends DomainEvent {
    readonly compositionId: CompositionId;
    readonly columns: Array<ColumnConfig>;
    private readonly fields;
    constructor(aggregateId: StructureId, compositionId: CompositionId, columns: Array<ColumnConfig>, // TODO merge
    fields: Array<Field>);
    getFields(): Array<Field>;
}
