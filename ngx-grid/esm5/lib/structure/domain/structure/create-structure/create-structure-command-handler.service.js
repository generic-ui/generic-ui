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
    CreateStructureCommandHandler.prototype.getAggregateRepository = /**
     * @return {?}
     */
    function () {
        return this.structureAggregateRepository;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXN0cnVjdHVyZS1jb21tYW5kLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS1jb21tYW5kLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStELG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLbEU7SUFHQyx1Q0FBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUR4QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQzs7OztJQUVELDhEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGtEQUFVOzs7SUFBVjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsMkRBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQStCO1FBQ2pGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQVBGLDRCQUE0QjtnQkFGaUMsb0JBQW9COztJQTRCMUYsb0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSw2QkFBNkI7Ozs7OztJQUU3QixxRUFBMkU7Ozs7O0lBQ3BGLDZEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSwgQ29tbWFuZCwgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtc3RydWN0dXJlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRnZXRBZ2dyZWdhdGVSZXBvc2l0b3J5KCk6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8U3RydWN0dXJlSWQsIFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmQgfCBhbnkge1xuXHRcdHJldHVybiBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ3JlYXRlU3RydWN0dXJlQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlQ3JlYXRlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cbn1cbiJdfQ==