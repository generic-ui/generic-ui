import { AggregateDefinition, AggregateId, AggregateRoot, Command, Container, DomainEvent, DomainProviders } from '@generic-ui/hermes';
export declare class CompositionDomainModule implements DomainProviders {
    defineAggregate(): AggregateDefinition<any, any, any> | null;
    registerKey(): string;
    registerProviders(container: Container): void;
    registerCommandHandlers<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(): Array<any>;
    registerDomainEventHandler(): Array<any>;
    registerMultiDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>>(): Array<any>;
}
