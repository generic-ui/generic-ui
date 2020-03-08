import { AggregateEvent } from '@generic-ui/hermes';
import { ColumnConfig } from '../../../../../../composition/domain/column.config';
import { Field } from '../data-type/field';
import { StructureId } from '../../../../structure-id';
export declare class FieldsInitedAggregateEvent extends AggregateEvent {
    private readonly columns;
    private readonly fields;
    constructor(structureId: StructureId, columns: Array<ColumnConfig>, // TODO merge
    fields: Array<Field>);
    getColumns(): Array<ColumnConfig>;
    getFields(): Array<Field>;
}
