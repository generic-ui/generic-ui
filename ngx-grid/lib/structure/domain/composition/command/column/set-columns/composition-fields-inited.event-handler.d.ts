import { DomainEventHandler, DomainEvent } from '@generic-ui/hermes';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldFactory } from '../field/colum-field.factory';
export declare class CompositionFieldsInitedEventHandler extends DomainEventHandler {
    private compositionDispatcher;
    private readonly columnFieldFactory;
    constructor(compositionDispatcher: CompositionDispatcher, columnFieldFactory: ColumnFieldFactory);
    handle(event: DomainEvent): void;
}
