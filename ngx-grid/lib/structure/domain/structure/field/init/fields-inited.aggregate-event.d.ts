import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { ColumnConfig } from '../../../../../composition/domain/column/column.config';
import { StructureId } from '../../../structure.id';
import { TypeField } from '../data-type/type.field';
export declare class FieldsInitedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly columns;
    private readonly fields;
    constructor(structureId: StructureId, columns: Array<ColumnConfig>, // TODO merge
    fields: Array<TypeField>);
    toDomainEvent(): DomainEvent<StructureId>;
    getColumns(): Array<ColumnConfig>;
    getFields(): Array<TypeField>;
}
