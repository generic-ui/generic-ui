import { ModuleWithProviders, OnDestroy } from '@angular/core';
import { CommandBus } from '../domain/command/command.bus';
import { CommandHandler } from '../domain/command/command.handler';
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
export declare function commandLoggerFactory(enabled: boolean, consoleCommandLogger: ConsoleCommandLogger, noopCommandLogger: NoopCommandLogger): ConsoleCommandLogger | NoopCommandLogger;
export declare function eventLoggerFactory(enabled: boolean, consoleEventLogger: ConsoleEventLogger, noopEventLogger: NoopEventLogger): ConsoleEventLogger | NoopEventLogger;
export declare class HermesModule implements OnDestroy {
    private hermesLoggersInitializer;
    private hermesApi;
    private unsubscribe$;
    static withConfig(config?: HermesModuleConfig): ModuleWithProviders;
    constructor(commandHandlers: Array<CommandHandler>, eventHandlers: Array<DomainEventHandler>, commandBus: CommandBus, domainEventBus: DomainEventBus, hermesLoggersInitializer: HermesLoggersInitializer, hermesApi: HermesApi);
    ngOnDestroy(): void;
    private checkNullCommand;
    private checkCommandHandlerIsCollection;
}
