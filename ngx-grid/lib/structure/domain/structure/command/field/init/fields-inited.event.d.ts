import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { CompositionId } from '../../../../../../composition/domain/composition-id';
import { ColumnConfig } from '../../../../../../composition/domain/column.config';
import { TypeField } from '../data-type/type.field';
export declare class FieldsInitedEvent extends DomainEvent {
    readonly compositionId: CompositionId;
    readonly columns: Array<ColumnConfig>;
    private readonly fields;
    constructor(aggregateId: StructureId, compositionId: CompositionId, columns: Array<ColumnConfig>, // TODO merge
    fields: Array<TypeField>);
    getFields(): Array<TypeField>;
}
