import { DomainEventHandler } from '@generic-ui/hermes';
import { FieldsInitedEvent } from '../../../../structure/domain/structure/field/init/fields-inited.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldFactory } from '../field/colum-field.factory';
import { CompositionId } from '../../composition.id';
export declare class CompositionFieldsInitedEventHandler extends DomainEventHandler<CompositionId, FieldsInitedEvent> {
    private readonly compositionDispatcher;
    private readonly columnFieldFactory;
    constructor(compositionDispatcher: CompositionDispatcher, columnFieldFactory: ColumnFieldFactory);
    handle(event: FieldsInitedEvent): void;
    private convertColumnFieldIds;
    private convertColumns;
}
