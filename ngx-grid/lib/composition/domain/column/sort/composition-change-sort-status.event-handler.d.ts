import { DomainEvent, DomainEventHandler } from '@generic-ui/hermes';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { CompositionId } from '../../composition.id';
export declare class CompositionChangeSortStatusEventHandler extends DomainEventHandler<CompositionId> {
    private compositionDispatcher;
    constructor(compositionDispatcher: CompositionDispatcher);
    handle(event: DomainEvent<CompositionId>): void;
}
