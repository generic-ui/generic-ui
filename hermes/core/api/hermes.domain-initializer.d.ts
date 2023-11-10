import { AggregateId } from './tactical/aggregate/aggregate-id';
import { AggregateRoot } from './tactical/aggregate/aggregate-root';
import { Command } from './command/command';
import { CommandHandler } from '../domain/command/handler/command.handler';
import { AggregateFactory, AggregateRepository, Container, CreateAggregateCommandHandler, DomainEvent, DomainEventHandler, MultiDomainEventHandler } from '../../index';
export interface Type<T> extends Function {
    new (...args: any[]): T;
}
export interface ApiProviders {
    registerProviders(container: Container): void;
}
export type AggregateDefinition<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>> = {
    aggregateKey: string;
    createCommandHandler: Type<CreateAggregateCommandHandler<C>>;
    factory: Type<AggregateFactory<I, A>>;
    repository: Type<AggregateRepository<I, A>>;
};
export interface DomainProviders {
    defineAggregate<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(): AggregateDefinition<I, A, C> | null;
    registerKey(container: Container): string;
    registerProviders(container: Container): void;
    registerCommandHandlers<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(): Array<Type<CommandHandler<A, C>>>;
    registerDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>>(): Array<Type<DomainEventHandler<I, E>>>;
    registerMultiDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>>(): Array<Type<MultiDomainEventHandler<I, E>>>;
}
export declare class DomainInitializer {
    private readonly api;
    private readonly domain;
    private readonly container;
    private initialized;
    constructor(api: ApiProviders, domain: DomainProviders);
    init(): void;
    private defineAggregate;
    private registerApiProviders;
    private registerDomainProviders;
    private registerCommandHandlers;
    private registerEventHandlers;
    private registerMultiEventHandlers;
}
