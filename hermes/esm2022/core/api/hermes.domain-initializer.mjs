import { CoreContainer } from '../../index';
import { aggregateDefinitionToken } from '../domain/command/config/aggregate-definition.token';
import { CREATE_AGGREGATE_COMMAND_HANDLERS } from '../domain/command/create-aggregate/create-aggregate.command-handlers-token';
import { createAggregateCommandHandlerFactory } from '../domain/command/create-aggregate/create-aggregate.command-handler-impl';
import { COMMAND_HANDLERS } from '../domain/command/handler/command-handlers';
import { commandHandlerFactory } from '../domain/command/handler/command-handler-impl';
import { DOMAIN_EVENT_HANDLERS } from './event/domain-event-handlers';
import { domainEventHandlerFactory, multiDomainEventHandlerFactory } from '../domain/event/handler/domain-event-handler-impl';
export class DomainInitializer {
    api;
    domain;
    container = CoreContainer;
    initialized = false;
    constructor(api, domain) {
        this.api = api;
        this.domain = domain;
    }
    init() {
        if (this.initialized) {
            return;
        }
        this.defineAggregate();
        this.registerApiProviders();
        this.registerDomainProviders();
        this.registerCommandHandlers();
        this.registerEventHandlers();
        this.registerMultiEventHandlers();
        this.initialized = true;
    }
    defineAggregate() {
        const definition = this.domain.defineAggregate();
        if (definition) {
            this.container.provide(definition.factory);
            this.container.provide(definition.repository);
            this.container.provideValue(definition.aggregateKey, definition.aggregateKey);
            this.container.provideValueCollection(aggregateDefinitionToken, {
                key: definition.aggregateKey,
                factory: definition.factory,
                repository: definition.repository
            });
            this.container.provide(definition.createCommandHandler);
            this.container.provideFactoryCollection(CREATE_AGGREGATE_COMMAND_HANDLERS, {
                create: createAggregateCommandHandlerFactory,
                deps: [
                    definition.createCommandHandler,
                    definition.aggregateKey
                ]
            });
        }
    }
    registerApiProviders() {
        this.api.registerProviders(this.container);
    }
    registerDomainProviders() {
        this.domain.registerProviders(this.container);
    }
    registerCommandHandlers() {
        this.domain
            .registerCommandHandlers()
            .forEach((ch) => {
            this.container.provide(ch);
            this.container.provideFactoryCollection(COMMAND_HANDLERS, {
                create: commandHandlerFactory,
                deps: [
                    ch,
                    this.domain.registerKey(this.container)
                ]
            });
        });
    }
    registerEventHandlers() {
        this.domain
            .registerDomainEventHandler()
            .forEach((eh) => {
            this.container.provide(eh);
            this.container.provideFactoryCollection(DOMAIN_EVENT_HANDLERS, {
                create: domainEventHandlerFactory,
                deps: [
                    eh
                ]
            });
        });
    }
    registerMultiEventHandlers() {
        this.domain
            .registerMultiDomainEventHandler()
            .forEach((eh) => {
            this.container.provide(eh);
            this.container.provideFactoryCollection(DOMAIN_EVENT_HANDLERS, {
                create: multiDomainEventHandlerFactory,
                deps: [
                    eh
                ]
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmRvbWFpbi1pbml0aWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2FwaS9oZXJtZXMuZG9tYWluLWluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFHTixhQUFhLEVBS2IsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDL0gsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDaEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLDhCQUE4QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFvQzlILE1BQU0sT0FBTyxpQkFBaUI7SUFNQTtJQUNUO0lBTEgsU0FBUyxHQUFjLGFBQWEsQ0FBQztJQUU5QyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBRTVCLFlBQTZCLEdBQWlCLEVBQzFCLE1BQXVCO1FBRGQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUMzQyxDQUFDO0lBRUQsSUFBSTtRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1A7UUFHRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFD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dEMscUJBQXFCLEVBQ3JCO2dCQUNDLE1BQU0sRUFBRSw4QkFBOEI7Z0JBQ3RDLElBQUksRUFBRTtvQkFDTCxFQUFFO2lCQUNGO2FBQ0QsQ0FDRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaGFuZGxlci9jb21tYW5kLmhhbmRsZXInO1xuXG5pbXBvcnQge1xuXHRBZ2dyZWdhdGVGYWN0b3J5LCBBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRDb250YWluZXIsXG5cdENvcmVDb250YWluZXIsXG5cdENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLFxuXHREb21haW5FdmVudCxcblx0RG9tYWluRXZlbnRIYW5kbGVyLFxuXHRNdWx0aURvbWFpbkV2ZW50SGFuZGxlclxufSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4gfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb25maWcvYWdncmVnYXRlLWRlZmluaXRpb24udG9rZW4nO1xuaW1wb3J0IHsgQ1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcnMtdG9rZW4nO1xuaW1wb3J0IHsgY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgY29tbWFuZEhhbmRsZXJGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvaGFuZGxlci9jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LCBtdWx0aURvbWFpbkV2ZW50SGFuZGxlckZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQtaGFuZGxlci1pbXBsJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFR5cGU8VD4gZXh0ZW5kcyBGdW5jdGlvbiB7XG5cdG5ldyguLi5hcmdzOiBhbnlbXSk6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpUHJvdmlkZXJzIHtcblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQ7XG5cbn1cblxuZXhwb3J0IHR5cGUgQWdncmVnYXRlRGVmaW5pdGlvbjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4gPSB7XG5cdGFnZ3JlZ2F0ZUtleTogc3RyaW5nLFxuXHRjcmVhdGVDb21tYW5kSGFuZGxlcjogVHlwZTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxDPj4sXG5cdGZhY3Rvcnk6IFR5cGU8QWdncmVnYXRlRmFjdG9yeTxJLCBBPj4sXG5cdHJlcG9zaXRvcnk6IFR5cGU8QWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPj5cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluUHJvdmlkZXJzIHtcblxuXHRkZWZpbmVBZ2dyZWdhdGU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KCk6IEFnZ3JlZ2F0ZURlZmluaXRpb248SSwgQSwgQz4gfCBudWxsO1xuXG5cdHJlZ2lzdGVyS2V5KGNvbnRhaW5lcjogQ29udGFpbmVyKTogc3RyaW5nO1xuXG5cdHJlZ2lzdGVyUHJvdmlkZXJzKGNvbnRhaW5lcjogQ29udGFpbmVyKTogdm9pZDtcblxuXHRyZWdpc3RlckNvbW1hbmRIYW5kbGVyczxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4oKTogQXJyYXk8VHlwZTxDb21tYW5kSGFuZGxlcjxBLCBDPj4+O1xuXG5cdHJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PigpOiBBcnJheTxUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj4+O1xuXG5cdHJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PFR5cGU8TXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+PjtcblxufVxuXG5leHBvcnQgY2xhc3MgRG9tYWluSW5pdGlhbGl6ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBDb250YWluZXIgPSBDb3JlQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFwaTogQXBpUHJvdmlkZXJzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbjogRG9tYWluUHJvdmlkZXJzKSB7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblxuXHRcdHRoaXMuZGVmaW5lQWdncmVnYXRlKCk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyQXBpUHJvdmlkZXJzKCk7XG5cdFx0dGhpcy5yZWdpc3RlckRvbWFpblByb3ZpZGVycygpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckNvbW1hbmRIYW5kbGVycygpO1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG5cdFx0dGhpcy5yZWdpc3Rlck11bHRpRXZlbnRIYW5kbGVycygpO1xuXG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIGRlZmluZUFnZ3JlZ2F0ZSgpOiB2b2lkIHtcblx0XHRjb25zdCBkZWZpbml0aW9uID0gdGhpcy5kb21haW4uZGVmaW5lQWdncmVnYXRlKCk7XG5cblx0XHRpZiAoZGVmaW5pdGlvbikge1xuXHRcdFx0dGhpcy5jb250YWluZXIucHJvdmlkZShkZWZpbml0aW9uLmZhY3RvcnkpO1xuXHRcdFx0dGhpcy5jb250YWluZXIucHJvdmlkZShkZWZpbml0aW9uLnJlcG9zaXRvcnkpO1xuXHRcdFx0dGhpcy5jb250YWluZXIucHJvdmlkZVZhbHVlKGRlZmluaXRpb24uYWdncmVnYXRlS2V5LCBkZWZpbml0aW9uLmFnZ3JlZ2F0ZUtleSk7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5wcm92aWRlVmFsdWVDb2xsZWN0aW9uKFxuXHRcdFx0XHRhZ2dyZWdhdGVEZWZpbml0aW9uVG9rZW4sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRrZXk6IGRlZmluaXRpb24uYWdncmVnYXRlS2V5LFxuXHRcdFx0XHRcdGZhY3Rvcnk6IGRlZmluaXRpb24uZmFjdG9yeSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5OiBkZWZpbml0aW9uLnJlcG9zaXRvcnlcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5jb250YWluZXIucHJvdmlkZShkZWZpbml0aW9uLmNyZWF0ZUNvbW1hbmRIYW5kbGVyKTtcblx0XHRcdHRoaXMuY29udGFpbmVyLnByb3ZpZGVGYWN0b3J5Q29sbGVjdGlvbihcblx0XHRcdFx0Q1JFQVRFX0FHR1JFR0FURV9DT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y3JlYXRlOiBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3RvcnksXG5cdFx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdFx0ZGVmaW5pdGlvbi5jcmVhdGVDb21tYW5kSGFuZGxlcixcblx0XHRcdFx0XHRcdGRlZmluaXRpb24uYWdncmVnYXRlS2V5XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJBcGlQcm92aWRlcnMoKSB7XG5cdFx0dGhpcy5hcGkucmVnaXN0ZXJQcm92aWRlcnModGhpcy5jb250YWluZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckRvbWFpblByb3ZpZGVycygpIHtcblx0XHR0aGlzLmRvbWFpbi5yZWdpc3RlclByb3ZpZGVycyh0aGlzLmNvbnRhaW5lcik7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHRoaXMuZG9tYWluXG5cdFx0XHQucmVnaXN0ZXJDb21tYW5kSGFuZGxlcnMoKVxuXHRcdFx0LmZvckVhY2goKGNoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyLnByb3ZpZGUoY2gpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5wcm92aWRlRmFjdG9yeUNvbGxlY3Rpb24oXG5cdFx0XHRcdFx0Q09NTUFORF9IQU5ETEVSUyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjcmVhdGU6IGNvbW1hbmRIYW5kbGVyRmFjdG9yeSxcblx0XHRcdFx0XHRcdGRlcHM6IFtcblx0XHRcdFx0XHRcdFx0Y2gsXG5cdFx0XHRcdFx0XHRcdHRoaXMuZG9tYWluLnJlZ2lzdGVyS2V5KHRoaXMuY29udGFpbmVyKVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0dGhpcy5kb21haW5cblx0XHRcdC5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcigpXG5cdFx0XHQuZm9yRWFjaCgoZWgpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXIucHJvdmlkZShlaCk7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyLnByb3ZpZGVGYWN0b3J5Q29sbGVjdGlvbihcblx0XHRcdFx0XHRET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y3JlYXRlOiBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdFx0XHRlaFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3Rlck11bHRpRXZlbnRIYW5kbGVycygpIHtcblx0XHR0aGlzLmRvbWFpblxuXHRcdFx0LnJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXIoKVxuXHRcdFx0LmZvckVhY2goKGVoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyLnByb3ZpZGUoZWgpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5wcm92aWRlRmFjdG9yeUNvbGxlY3Rpb24oXG5cdFx0XHRcdFx0RE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNyZWF0ZTogbXVsdGlEb21haW5FdmVudEhhbmRsZXJGYWN0b3J5LFxuXHRcdFx0XHRcdFx0ZGVwczogW1xuXHRcdFx0XHRcdFx0XHRlaFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==