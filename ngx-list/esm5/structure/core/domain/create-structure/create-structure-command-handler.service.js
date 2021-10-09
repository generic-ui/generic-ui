/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { CreateStructureCommand } from './create-structure.command';
import { StructureCreatedEvent } from './structure-created.event';
var CreateStructureCommandHandler = /** @class */ (function () {
    function CreateStructureCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    CreateStructureCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return CreateStructureCommand;
    };
    /**
     * @return {?}
     */
    CreateStructureCommandHandler.prototype.getAggregateRepository = /**
     * @return {?}
     */
    function () {
        return this.structureAggregateRepository;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CreateStructureCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new StructureCreatedEvent(command.getAggregateId()));
    };
    CreateStructureCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CreateStructureCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return CreateStructureCommandHandler;
}());
export { CreateStructureCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CreateStructureCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    CreateStructureCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXN0cnVjdHVyZS1jb21tYW5kLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS1jb21tYW5kLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQW1FLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0gsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLbEU7SUFHQyx1Q0FBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUR4QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQzs7OztJQUVELGtEQUFVOzs7SUFBVjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELDhEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsMkRBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQStCO1FBQ2pGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQVBGLDRCQUE0QjtnQkFGcUMsb0JBQW9COztJQTRCOUYsb0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSw2QkFBNkI7Ozs7OztJQUU3QixxRUFBMkU7Ozs7O0lBQ3BGLDZEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSwgQ29tbWFuZFR5cGUsIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlLXN0cnVjdHVyZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8Q3JlYXRlU3RydWN0dXJlQ29tbWFuZD4gfCBhbnkge1xuXHRcdHJldHVybiBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kO1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlUmVwb3NpdG9yeSgpOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5O1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ3JlYXRlU3RydWN0dXJlQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlQ3JlYXRlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cbn1cbiJdfQ==