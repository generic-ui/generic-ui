/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CreateSchemaCommand } from './create-schema.command';
import { SchemaCreatedEvent } from './schema-created.event';
import { SchemaAggregateRepository } from '../schema.aggregate-repository';
export class CreateSchemaCommandHandler {
    /**
     * @param {?} schemaAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(schemaAggregateRepository, domainEventPublisher) {
        this.schemaAggregateRepository = schemaAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    getAggregateRepository() {
        return this.schemaAggregateRepository;
    }
    /**
     * @return {?}
     */
    forCommand() {
        return CreateSchemaCommand;
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.domainEventPublisher.publish(new SchemaCreatedEvent(command.getAggregateId()));
    }
}
CreateSchemaCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CreateSchemaCommandHandler.ctorParameters = () => [
    { type: SchemaAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateSchemaCommandHandler.prototype.schemaAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    CreateSchemaCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNjaGVtYS5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL2NyZWF0ZS9jcmVhdGUtc2NoZW1hLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWdELG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJM0UsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFFdEMsWUFBNkIseUJBQW9ELEVBQzdELG9CQUEwQztRQURqQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQzdELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBMEIsRUFBRSxPQUE0QjtRQUMzRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7WUFqQkQsVUFBVTs7OztZQUhGLHlCQUF5QjtZQU5xQixvQkFBb0I7Ozs7Ozs7SUFZOUQsK0RBQXFFOzs7OztJQUM5RSwwREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBBZ2dyZWdhdGVSZXBvc2l0b3J5LCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENyZWF0ZVNjaGVtYUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1zY2hlbWEuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFDcmVhdGVkRXZlbnQgfSBmcm9tICcuL3NjaGVtYS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZVNjaGVtYUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8U2NoZW1hQWdncmVnYXRlLCBDcmVhdGVTY2hlbWFDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlUmVwb3NpdG9yeSgpOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PFNjaGVtYUlkLCBTY2hlbWFBZ2dyZWdhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5O1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPENyZWF0ZVNjaGVtYUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ3JlYXRlU2NoZW1hQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IENyZWF0ZVNjaGVtYUNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNjaGVtYUNyZWF0ZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxufVxuIl19