import { Injector, ModuleWithProviders, OnDestroy, Provider, Type } from '@angular/core';
/**
 * Command
 */
import { AggregateRoot } from '../domain/tactical/aggregate/aggregate-root';
import { Command } from '../domain/command/command';
import { CommandBus } from '../domain/command/command.bus';
import { DomainEvent } from '../domain/event/domain-event';
import { DomainEventBus } from '../domain/event/domain-event.bus';
/**
 * APP
 */
import { HermesModuleConfig } from './hermes-module-config';
import { HermesApi } from './hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from '../infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from '../infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from '../infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from '../infrastructure/logger/event/noop.event.logger';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
import { CreateAggregateCommandHandlerImpl } from '../domain/command/create-aggregate/create-aggregate.command-handler-impl';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../domain/command/config/define';
import { AggregateFactory } from '../domain/tactical/aggregate/aggregate-factory';
import { AggregateDefinition } from '../domain/command/config/aggregate-definition';
import { AggregateRepository } from '../domain/tactical/aggregate/aggregate-repository';
import { CreateAggregateCommandHandler } from '../domain/command/create-aggregate/create-aggregate.command-handler';
import { CommandHandlerImpl } from '../domain/command/handler/command-handler-impl';
import { CommandHandler } from '../domain/command/handler/command.handler';
import { AggregateId } from '../domain/tactical/aggregate/aggregate-id';
import { Reactive } from '../../common/reactive';
import { DomainEventHandlerImpl } from '../domain/event/handler/domain-event-handler-impl';
import { DomainEventHandler } from '../domain/event/handler/domain-event.handler';
import { MultiDomainEventHandler } from '../domain/event/handler/multi-domain-event.handler';
export declare function commandLoggerFactory(enabled: boolean, consoleCommandLogger: ConsoleCommandLogger, noopCommandLogger: NoopCommandLogger): ConsoleCommandLogger | NoopCommandLogger;
export declare function eventLoggerFactory(enabled: boolean, consoleEventLogger: ConsoleEventLogger, noopEventLogger: NoopEventLogger): ConsoleEventLogger | NoopEventLogger;
export declare class HermesBaseModule<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>, E extends DomainEvent<I>> extends Reactive implements OnDestroy {
    private hermesLoggersInitializer;
    private hermesApi;
    constructor(eventHandlers: Array<DomainEventHandlerImpl<I, E>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<I, A, C>>, commandHandlers: Array<CommandHandlerImpl<I, A, C>>, definedAggregate: Array<AggregateDefinition<I, A>>, injector: Injector, aggregateFactoryArchive: AggregateFactoryArchive<I, A>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, commandBus: CommandBus, domainEventBus: DomainEventBus, hermesLoggersInitializer: HermesLoggersInitializer, hermesApi: HermesApi);
    ngOnDestroy(): void;
    private checkNullCommand;
    private checkCommandHandlerIsCollection;
    private checkDomainEventHandlerIsCollection;
}
export declare class HermesModule extends HermesBaseModule<any, any, any, any> {
    static defineAggregate<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(aggregateKey: string, factory: Type<AggregateFactory<I, A>>, repository: Type<AggregateRepository<I, A>>, createCommandHandler: Type<CreateAggregateCommandHandler<A, C>>, commandHandlers?: ReadonlyArray<Provider>, domainEventHandlers?: ReadonlyArray<Provider>): ModuleWithProviders<any>;
    static withConfig(config?: HermesModuleConfig): ModuleWithProviders<HermesModule>;
    static registerCommandHandler<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(commandHandlerType: Type<CommandHandler<A, C>>, aggregateName: string): Array<Provider>;
    static registerDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>>(domainEventHandlerType: Type<DomainEventHandler<I, E>>): Array<Provider>;
    static registerMultiDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>>(domainEventHandlerType: Type<MultiDomainEventHandler<I, E>>): Array<Provider>;
    constructor(eventHandlers: Array<DomainEventHandlerImpl<any, any>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<any, any, any>>, commandHandlers: Array<CommandHandlerImpl<any, any, any>>, definedAggregate: Array<AggregateDefinition<any, any>>, injector: Injector, aggregateFactoryArchive: AggregateFactoryArchive<any, any>, aggregateRepositoryArchive: AggregateRepositoryArchive<any, any>, commandBus: CommandBus, domainEventBus: DomainEventBus, hermesLoggersInitializer: HermesLoggersInitializer, hermesApi: HermesApi);
    private static registerCreateCommandHandler;
}
