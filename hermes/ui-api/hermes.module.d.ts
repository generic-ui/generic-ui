import { Injector, ModuleWithProviders, OnDestroy, Provider, Type } from '@angular/core';
/**
 * Command
 */
import { Aggregate } from '../domain/command/aggregate/aggregate';
import { Command } from '../domain/command/command';
import { CommandBus } from '../domain/command/command.bus';
import { DomainEventBus } from '../domain/event/domain-event.bus';
import { DomainEventHandler } from '../domain/event/domain-event.handler';
/**
 * APP
 */
import { HermesModuleConfig } from './hermes-module-config';
import { HermesApi } from '../ui-api/hermes-api';
/**
 * Infrastructure
 */
import { ConsoleCommandLogger } from '../infrastructure/logger/command/console.command.logger';
import { NoopCommandLogger } from '../infrastructure/logger/command/noop.command.logger';
import { ConsoleEventLogger } from '../infrastructure/logger/event/console.event.logger';
import { NoopEventLogger } from '../infrastructure/logger/event/noop.event.logger';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
import { AggregateCommandHandlerImpl } from '../domain/command/create-handler/aggregate-command-handler.impl';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../domain/command/config/define';
import { AggregateFactory } from '../domain/command/create-handler/aggregate.factory';
import { AggregateDefinition } from '../domain/command/config/aggregate-definition';
import { AggregateRepository } from '../domain/command/aggregate/aggregate-repository';
import { AggregateCommandHandler } from '../domain/command/create-handler/aggregate-command.handler';
import { CommandHandlerImpl } from '../domain/command/handler/command-handler-impl';
import { CommandHandler } from '../domain/command/handler/command.handler';
export declare function commandLoggerFactory(enabled: boolean, consoleCommandLogger: ConsoleCommandLogger, noopCommandLogger: NoopCommandLogger): ConsoleCommandLogger | NoopCommandLogger;
export declare function eventLoggerFactory(enabled: boolean, consoleEventLogger: ConsoleEventLogger, noopEventLogger: NoopEventLogger): ConsoleEventLogger | NoopEventLogger;
export declare class HermesModule implements OnDestroy {
    private hermesLoggersInitializer;
    private hermesApi;
    private readonly unsubscribe$;
    static defineAggregate<A extends Aggregate, C extends Command>(aggregateKey: string, factory: Type<AggregateFactory<A>>, repository: Type<AggregateRepository<A>>, createHandler: Type<AggregateCommandHandler<A, C>>, handlers: Array<Provider>): ModuleWithProviders;
    static withConfig(config?: HermesModuleConfig): ModuleWithProviders;
    static registerCommandHandler<A extends Aggregate, C extends Command>(commandHandlerType: Type<CommandHandler<A, C>>, aggregateName: string): Array<Provider>;
    private static registerCreateCommandHandler;
    constructor(eventHandlers: Array<DomainEventHandler>, aggregateCommandHandlers: Array<AggregateCommandHandlerImpl<Aggregate, Command>>, handlers: Array<CommandHandlerImpl<Aggregate, Command>>, definedAggregate: Array<AggregateDefinition>, injector: Injector, aggregateFactoryArchive: AggregateFactoryArchive, aggregateRepositoryArchive: AggregateRepositoryArchive, commandBus: CommandBus, domainEventBus: DomainEventBus, hermesLoggersInitializer: HermesLoggersInitializer, hermesApi: HermesApi);
    ngOnDestroy(): void;
    private checkNullCommand;
    private checkCommandHandlerIsCollection;
}
