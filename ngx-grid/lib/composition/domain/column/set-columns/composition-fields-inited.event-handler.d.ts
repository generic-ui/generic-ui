import { DomainEvent, DomainEventHandler } from '@generic-ui/hermes';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldFactory } from '../field/colum-field.factory';
import { CompositionId } from '../../composition.id';
export declare class CompositionFieldsInitedEventHandler extends DomainEventHandler<CompositionId> {
    private compositionDispatcher;
    private readonly columnFieldFactory;
    constructor(compositionDispatcher: CompositionDispatcher, columnFieldFactory: ColumnFieldFactory);
    handle(event: DomainEvent<CompositionId>): void;
    private convertColumnFieldIds;
    private convertColumns;
}
