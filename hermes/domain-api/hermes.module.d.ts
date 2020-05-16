import { Injector, ModuleWithProviders, OnDestroy, Provider, Type } from '@angular/core';
/**
 * Command
 */
import { AggregateRoot } from '../domain/command/aggregate/aggregate-root';
import { Command } from '../domain/command/command';
import { CommandBus } from '../domain/command/command.bus';
import { DomainEvent } from '../domain/event/domain-event';
import { DomainEventBus } from '../domain/event/domain-event.bus';
import { DomainEventHandler } from '../domain/event/domain-event.handler';
/**
 * APP
 */
import { HermesModuleConfig } from './hermes-module-config';
import { HermesApi } from './/hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from '../infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from '../infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from '../infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from '../infrastructure/logger/event/noop.event.logger';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
import { CreateAggregateCommandHandlerImpl } from '../domain/command/aggregate/create/create-aggregate.command-handler-impl';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../domain/command/config/define';
import { AggregateFactory } from '../domain/command/aggregate/aggregate-factory';
import { AggregateDefinition } from '../domain/command/config/aggregate-definition';
import { AggregateRepository } from '../domain/command/aggregate/aggregate-repository';
import { CreateAggregateCommandHandler } from '../domain/command/aggregate/create/create-aggregate.command-handler';
import { CommandHandlerImpl } from '../domain/command/handler/command-handler-impl';
import { CommandHandler } from '../domain/command/handler/command.handler';
import { AggregateId } from '../domain/aggregate-id';
import { Reactive } from '../common/reactive';
export declare function commandLoggerFactory(enabled: boolean, consoleCommandLogger: ConsoleCommandLogger, noopCommandLogger: NoopCommandLogger): ConsoleCommandLogger | NoopCommandLogger;
export declare function eventLoggerFactory(enabled: boolean, consoleEventLogger: ConsoleEventLogger, noopEventLogger: NoopEventLogger): ConsoleEventLogger | NoopEventLogger;
export declare class HermesModule<I extends AggregateId, A extends AggregateRoot<I>, C extends Command, E extends DomainEvent<I>> extends Reactive implements OnDestroy {
    private hermesLoggersInitializer;
    private hermesApi;
    static defineAggregate<I extends AggregateId, A extends AggregateRoot<I>, C extends Command>(aggregateKey: string, factory: Type<AggregateFactory<I, A>>, repository: Type<AggregateRepository<I, A>>, createHandler: Type<CreateAggregateCommandHandler<A, C>>, handlers: Array<Provider>): ModuleWithProviders;
    static withConfig(config?: HermesModuleConfig): ModuleWithProviders;
    static registerCommandHandler<I extends AggregateId, A extends AggregateRoot<I>, C extends Command>(commandHandlerType: Type<CommandHandler<A, C>>, aggregateName: string): Array<Provider>;
    private static registerCreateCommandHandler;
    constructor(eventHandlers: Array<DomainEventHandler<I, E>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<I, A, C>>, handlers: Array<CommandHandlerImpl<I, A, C>>, definedAggregate: Array<AggregateDefinition<I, A>>, injector: Injector, aggregateFactoryArchive: AggregateFactoryArchive<I, A>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, commandBus: CommandBus, domainEventBus: DomainEventBus, hermesLoggersInitializer: HermesLoggersInitializer, hermesApi: HermesApi);
    ngOnDestroy(): void;
    private checkNullCommand;
    private checkCommandHandlerIsCollection;
}
