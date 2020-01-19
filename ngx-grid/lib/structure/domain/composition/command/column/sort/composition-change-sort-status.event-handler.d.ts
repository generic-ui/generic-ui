import { DomainEvent, DomainEventHandler } from '@generic-ui/hermes';
import { CompositionDispatcher } from '../../composition.dispatcher';
export declare class CompositionChangeSortStatusEventHandler extends DomainEventHandler {
    private compositionDispatcher;
    constructor(compositionDispatcher: CompositionDispatcher);
    handle(event: DomainEvent): void;
}
