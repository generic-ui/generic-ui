import { AggregateEvent } from '@generic-ui/hermes';
import { ColumnConfig } from '../../../../../../composition/domain/column.config';
import { StructureId } from '../../../../structure-id';
import { TypeField } from '../data-type/type.field';
export declare class FieldsInitedAggregateEvent extends AggregateEvent {
    private readonly columns;
    private readonly fields;
    constructor(structureId: StructureId, columns: Array<ColumnConfig>, // TODO merge
    fields: Array<TypeField>);
    getColumns(): Array<ColumnConfig>;
    getFields(): Array<TypeField>;
}
