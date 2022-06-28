import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * APP
 */
import { HermesApi } from './hermes-api';
import { RandomStringGenerator } from '../../common/random-string.generator';
import { HermesLoggersInitializer } from './hermes.loggers.initializer';
import { createAggregateCommandHandlerFactory } from '../domain/command/create-aggregate/create-aggregate.command-handler-impl';
import { CREATE_AGGREGATE_COMMAND_HANDLERS } from '../domain/command/create-aggregate/create-aggregate.command-handlers-token';
import { aggregateDefinitionToken } from '../domain/command/config/aggregate-definition.token';
import { COMMAND_HANDLERS } from '../domain/command/handler/command-handlers';
import { commandHandlerFactory } from '../domain/command/handler/command-handler-impl';
import { Reactive } from '../../common/reactive/reactive';
import { domainEventHandlerFactory, multiDomainEventHandlerFactory } from '../domain/event/handler/domain-event-handler-impl';
import { DOMAIN_EVENT_HANDLERS } from './event/domain-event-handlers';
import { CoreContainer } from './core.container';
import { HermesRunner } from './runner/hermes.runner';
import * as i0 from "@angular/core";
import * as i1 from "./hermes.loggers.initializer";
import * as i2 from "./hermes-api";
const providers = [
    HermesLoggersInitializer,
    RandomStringGenerator,
    HermesApi
];
export function commandLoggerFactory(enabled, consoleCommandLogger, noopCommandLogger) {
    if (enabled) {
        return consoleCommandLogger;
    }
    else {
        return noopCommandLogger;
    }
}
export function eventLoggerFactory(enabled, consoleEventLogger, noopEventLogger) {
    if (enabled) {
        return consoleEventLogger;
    }
    else {
        return noopEventLogger;
    }
}
export class HermesBaseModule extends Reactive {
    constructor(hermesLoggersInitializer, hermesApi) {
        super();
        this.hermesLoggersInitializer = hermesLoggersInitializer;
        this.hermesApi = hermesApi;
        this.hermesRunner = CoreContainer.resolve(HermesRunner);
        this.hermesApi.init();
        this.hermesLoggersInitializer.start();
        this.hermesRunner.run();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hermesLoggersInitializer.stop();
    }
}
HermesBaseModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesBaseModule, deps: [{ token: i1.HermesLoggersInitializer }, { token: i2.HermesApi }], target: i0.ɵɵFactoryTarget.Injectable });
HermesBaseModule.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesBaseModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesBaseModule, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HermesLoggersInitializer }, { type: i2.HermesApi }]; } });
export class HermesModule extends HermesBaseModule {
    // static readonly container = CoreContainer;
    constructor(hermesLoggersInitializer, hermesApi) {
        super(hermesLoggersInitializer, hermesApi);
    }
    static defineAggregate(aggregateKey, createCommandHandler, factory, repository) {
        CoreContainer.provide(factory);
        CoreContainer.provide(repository);
        CoreContainer.provideValue(aggregateKey, aggregateKey);
        CoreContainer.provideValueCollection(aggregateDefinitionToken, {
            key: aggregateKey,
            factory: factory,
            repository: repository
        });
        HermesModule.registerCreateCommandHandler(createCommandHandler, aggregateKey);
    }
    static withConfig() {
        return {
            ngModule: HermesModule,
            providers: providers
        };
    }
    static registerCommandHandler(commandHandlerType, aggregateName) {
        CoreContainer.provide(commandHandlerType);
        CoreContainer.provideFactoryCollection(COMMAND_HANDLERS, {
            create: commandHandlerFactory,
            deps: [
                commandHandlerType,
                aggregateName
            ]
        });
    }
    static registerDomainEventHandler(domainEventHandlerType) {
        CoreContainer.provide(domainEventHandlerType);
        CoreContainer.provideFactoryCollection(DOMAIN_EVENT_HANDLERS, {
            create: domainEventHandlerFactory,
            deps: [
                domainEventHandlerType
            ]
        });
    }
    static registerMultiDomainEventHandler(domainEventHandlerType) {
        CoreContainer.provide(domainEventHandlerType);
        CoreContainer.provideFactoryCollection(DOMAIN_EVENT_HANDLERS, {
            create: multiDomainEventHandlerFactory,
            deps: [
                domainEventHandlerType
            ]
        });
    }
    static registerCreateCommandHandler(createCommandHandlerType, aggregateName) {
        CoreContainer.provide(createCommandHandlerType);
        CoreContainer.provideFactoryCollection(CREATE_AGGREGATE_COMMAND_HANDLERS, {
            create: createAggregateCommandHandlerFactory,
            deps: [
                createCommandHandlerType,
                aggregateName
            ]
        });
    }
}
HermesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesModule, deps: [{ token: i1.HermesLoggersInitializer }, { token: i2.HermesApi }], target: i0.ɵɵFactoryTarget.NgModule });
HermesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: HermesModule, imports: [CommonModule] });
HermesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesModule, providers: providers, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: HermesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: providers
                }]
        }], ctorParameters: function () { return [{ type: i1.HermesLoggersInitializer }, { type: i2.HermesApi }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2FwaS9oZXJtZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXVCLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DOztHQUVHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVF6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUcvRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUd2RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLDhCQUE4QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUd0RCxNQUFNLFNBQVMsR0FBRztJQUVqQix3QkFBd0I7SUFFeEIs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Q0wsc0JBQXNCO2FBQ3RCO1NBQ0QsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQywrQkFBK0IsQ0FDckMsc0JBQTJEO1FBRzNELGFBQWEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM5QyxhQUFhLENBQUMsd0JBQXdCLENBQ3JDLHFCQUFxQixFQUNyQjtZQUNDLE1BQU0sRUFBRSw4QkFBOEI7WUFDdEMsSUFBSSxFQUFFO2dCQUNMLHNCQUFzQjthQUN0QjtTQUNELENBQ0QsQ0FBQztJQUNILENBQUM7SUFFTyxNQUFNLENBQUMsNEJBQTRCLENBQzFDLHdCQUFnRSxFQUNoRSxhQUFxQjtRQUVyQixhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDaEQsYUFBYSxDQUFDLHdCQUF3QixDQUNyQyxpQ0FBaUMsRUFDakM7WUFDQyxNQUFNLEVBQUUsb0NBQW9DO1lBQzVDLElBQUksRUFBRTtnQkFDTCx3QkFBd0I7Z0JBQ3hCLGFBQWE7YUFDYjtTQUNELENBQ0QsQ0FBQztJQUNILENBQUM7O3lHQXhHVyxZQUFZOzBHQUFaLFlBQVksWUFKdkIsWUFBWTswR0FJRCxZQUFZLGFBRmIsU0FBUyxZQUZuQixZQUFZOzJGQUlELFlBQVk7a0JBTnhCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFLFNBQVM7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8qKlxuICogQ29tbWFuZFxuICovXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQnO1xuLyoqXG4gKiBBUFBcbiAqL1xuaW1wb3J0IHsgSGVybWVzQXBpIH0gZnJvbSAnLi9oZXJtZXMtYXBpJztcbi8qKlxuICogSW5mcmFzdHJ1Y3R1cmVcbiAqL1xuaW1wb3J0IHsgQ29uc29sZUNvbW1hbmRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvY29tbWFuZC9jb25zb2xlLmNvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IE5vb3BDb21tYW5kTG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvbm9vcC5jb21tYW5kLmxvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlRXZlbnRMb2dnZXIgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgTm9vcEV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2V2ZW50L25vb3AuZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uLy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2hlcm1lcy5sb2dnZXJzLmluaXRpYWxpemVyJztcbmltcG9ydCB7IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVycy10b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgYWdncmVnYXRlRGVmaW5pdGlvblRva2VuIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29uZmlnL2FnZ3JlZ2F0ZS1kZWZpbml0aW9uLnRva2VuJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBjb21tYW5kSGFuZGxlckZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaGFuZGxlci9jb21tYW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vcmVhY3RpdmUvcmVhY3RpdmUnO1xuaW1wb3J0IHsgZG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeSwgbXVsdGlEb21haW5FdmVudEhhbmRsZXJGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9ldmVudC9tdWx0aS1kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyIH0gZnJvbSAnLi9jb3JlLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBIZXJtZXNSdW5uZXIgfSBmcm9tICcuL3J1bm5lci9oZXJtZXMucnVubmVyJztcblxuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cblx0SGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXG5cdFJhbmRvbVN0cmluZ0dlbmVyYXRvcixcblxuXHRIZXJtZXNBcGlcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kTG9nZ2VyRmFjdG9yeShlbmFibGVkOiBib29sZWFuLCBjb25zb2xlQ29tbWFuZExvZ2dlcjogQ29uc29sZUNvbW1hbmRMb2dnZXIsIG5vb3BDb21tYW5kTG9nZ2VyOiBOb29wQ29tbWFuZExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVDb21tYW5kTG9nZ2VyO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBub29wQ29tbWFuZExvZ2dlcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRMb2dnZXJGYWN0b3J5KGVuYWJsZWQ6IGJvb2xlYW4sIGNvbnNvbGVFdmVudExvZ2dlcjogQ29uc29sZUV2ZW50TG9nZ2VyLCBub29wRXZlbnRMb2dnZXI6IE5vb3BFdmVudExvZ2dlcikge1xuXG5cdGlmIChlbmFibGVkKSB7XG5cdFx0cmV0dXJuIGNvbnNvbGVFdmVudExvZ2dlcjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbm9vcEV2ZW50TG9nZ2VyO1xuXHR9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZXJtZXNCYXNlTW9kdWxlIGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVybWVzUnVubmVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEhlcm1lc1J1bm5lcik7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBoZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXI6IEhlcm1lc0xvZ2dlcnNJbml0aWFsaXplcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNBcGk6IEhlcm1lc0FwaSkgeyAvLyBIZXJtZXNBcGkgaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5oZXJtZXNBcGkuaW5pdCgpO1xuXG5cdFx0dGhpcy5oZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuaGVybWVzUnVubmVyLnJ1bigpO1xuXHR9XG5cblx0b3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0XHR0aGlzLmhlcm1lc0xvZ2dlcnNJbml0aWFsaXplci5zdG9wKCk7XG5cblx0fVxuXG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgSGVybWVzTW9kdWxlIGV4dGVuZHMgSGVybWVzQmFzZU1vZHVsZSB7XG5cblx0Ly8gc3RhdGljIHJlYWRvbmx5IGNvbnRhaW5lciA9IENvcmVDb250YWluZXI7XG5cblx0Y29uc3RydWN0b3IoaGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyOiBIZXJtZXNMb2dnZXJzSW5pdGlhbGl6ZXIsXG5cdFx0XHRcdGhlcm1lc0FwaTogSGVybWVzQXBpKSB7IC8vIEhlcm1lc0FwaSBpbml0aWFsaXphdGlvblxuXHRcdHN1cGVyKFxuXHRcdFx0aGVybWVzTG9nZ2Vyc0luaXRpYWxpemVyLFxuXHRcdFx0aGVybWVzQXBpXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZWZpbmVBZ2dyZWdhdGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KFxuXHRcdGFnZ3JlZ2F0ZUtleTogc3RyaW5nLFxuXHRcdGNyZWF0ZUNvbW1hbmRIYW5kbGVyOiBUeXBlPENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEM+Pixcblx0XHRmYWN0b3J5OiBUeXBlPEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4+LFxuXHRcdHJlcG9zaXRvcnk6IFR5cGU8QWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPj4pOiB2b2lkIHtcblxuXHRcdENvcmVDb250YWluZXIucHJvdmlkZShmYWN0b3J5KTtcblx0XHRDb3JlQ29udGFpbmVyLnByb3ZpZGUocmVwb3NpdG9yeSk7XG5cdFx0Q29yZUNvbnRhaW5lci5wcm92aWRlVmFsdWUoYWdncmVnYXRlS2V5LCBhZ2dyZWdhdGVLZXkpO1xuXHRcdENvcmVDb250YWluZXIucHJvdmlkZVZhbHVlQ29sbGVjdGlvbihcblx0XHRcdGFnZ3JlZ2F0ZURlZmluaXRpb25Ub2tlbixcblx0XHRcdHtcblx0XHRcdFx0a2V5OiBhZ2dyZWdhdGVLZXksXG5cdFx0XHRcdGZhY3Rvcnk6IGZhY3RvcnksXG5cdFx0XHRcdHJlcG9zaXRvcnk6IHJlcG9zaXRvcnlcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ3JlYXRlQ29tbWFuZEhhbmRsZXIoY3JlYXRlQ29tbWFuZEhhbmRsZXIsIGFnZ3JlZ2F0ZUtleSk7XG5cdH1cblxuXHRzdGF0aWMgd2l0aENvbmZpZygpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEhlcm1lc01vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSGVybWVzTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KFxuXHRcdGNvbW1hbmRIYW5kbGVyVHlwZTogVHlwZTxDb21tYW5kSGFuZGxlcjxBLCBDPj4sXG5cdFx0YWdncmVnYXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRDb3JlQ29udGFpbmVyLnByb3ZpZGUoY29tbWFuZEhhbmRsZXJUeXBlKTtcblx0XHRDb3JlQ29udGFpbmVyLnByb3ZpZGVGYWN0b3J5Q29sbGVjdGlvbihcblx0XHRcdENPTU1BTkRfSEFORExFUlMsXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZTogY29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWVcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRcdGRvbWFpbkV2ZW50SGFuZGxlclR5cGU6IFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEksIEU+PlxuXHQpOiB2b2lkIHtcblxuXHRcdENvcmVDb250YWluZXIucHJvdmlkZShkb21haW5FdmVudEhhbmRsZXJUeXBlKTtcblx0XHRDb3JlQ29udGFpbmVyLnByb3ZpZGVGYWN0b3J5Q29sbGVjdGlvbihcblx0XHRcdERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlOiBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0ZG9tYWluRXZlbnRIYW5kbGVyVHlwZVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyByZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlOiBUeXBlPE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+PlxuXHQpOiB2b2lkIHtcblxuXHRcdENvcmVDb250YWluZXIucHJvdmlkZShkb21haW5FdmVudEhhbmRsZXJUeXBlKTtcblx0XHRDb3JlQ29udGFpbmVyLnByb3ZpZGVGYWN0b3J5Q29sbGVjdGlvbihcblx0XHRcdERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlOiBtdWx0aURvbWFpbkV2ZW50SGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRkb21haW5FdmVudEhhbmRsZXJUeXBlXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXJDcmVhdGVDb21tYW5kSGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEMgZXh0ZW5kcyBDb21tYW5kPEk+Pihcblx0XHRjcmVhdGVDb21tYW5kSGFuZGxlclR5cGU6IFR5cGU8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8Qz4+LFxuXHRcdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0Q29yZUNvbnRhaW5lci5wcm92aWRlKGNyZWF0ZUNvbW1hbmRIYW5kbGVyVHlwZSk7XG5cdFx0Q29yZUNvbnRhaW5lci5wcm92aWRlRmFjdG9yeUNvbGxlY3Rpb24oXG5cdFx0XHRDUkVBVEVfQUdHUkVHQVRFX0NPTU1BTkRfSEFORExFUlMsXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZTogY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRkZXBzOiBbXG5cdFx0XHRcdFx0Y3JlYXRlQ29tbWFuZEhhbmRsZXJUeXBlLFxuXHRcdFx0XHRcdGFnZ3JlZ2F0ZU5hbWVcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxufVxuIl19