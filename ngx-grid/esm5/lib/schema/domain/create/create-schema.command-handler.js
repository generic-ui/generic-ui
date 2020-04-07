/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CreateSchemaCommand } from './create-schema.command';
import { SchemaCreatedEvent } from './schema-created.event';
import { SchemaAggregateRepository } from '../schema.aggregate-repository';
var CreateSchemaCommandHandler = /** @class */ (function () {
    function CreateSchemaCommandHandler(schemaAggregateRepository, domainEventPublisher) {
        this.schemaAggregateRepository = schemaAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    CreateSchemaCommandHandler.prototype.getAggregateRepository = /**
     * @return {?}
     */
    function () {
        return this.schemaAggregateRepository;
    };
    /**
     * @return {?}
     */
    CreateSchemaCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return CreateSchemaCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CreateSchemaCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new SchemaCreatedEvent(command.getAggregateId()));
    };
    CreateSchemaCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CreateSchemaCommandHandler.ctorParameters = function () { return [
        { type: SchemaAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return CreateSchemaCommandHandler;
}());
export { CreateSchemaCommandHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNjaGVtYS5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL2NyZWF0ZS9jcmVhdGUtc2NoZW1hLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWdELG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHM0U7SUFHQyxvQ0FBNkIseUJBQW9ELEVBQzdELG9CQUEwQztRQURqQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQzdELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELDJEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELCtDQUFVOzs7SUFBVjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsd0RBQW1COzs7OztJQUFuQixVQUFvQixTQUEwQixFQUFFLE9BQTRCO1FBQzNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQUhGLHlCQUF5QjtnQkFOcUIsb0JBQW9COztJQTJCM0UsaUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSwwQkFBMEI7Ozs7OztJQUUxQiwrREFBcUU7Ozs7O0lBQzlFLDBEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnksIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ3JlYXRlU2NoZW1hQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlLXNjaGVtYS5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc2NoZW1hLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxTY2hlbWFBZ2dyZWdhdGUsIENyZWF0ZVNjaGVtYUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRnZXRBZ2dyZWdhdGVSZXBvc2l0b3J5KCk6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8U2NoZW1hSWQsIFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnk7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8Q3JlYXRlU2NoZW1hQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDcmVhdGVTY2hlbWFDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ3JlYXRlU2NoZW1hQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU2NoZW1hQ3JlYXRlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG59XG4iXX0=