/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
var SetSchemaHorizontalGridCommandHandler = /** @class */ (function () {
    function SetSchemaHorizontalGridCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSchemaHorizontalGridCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSchemaHorizontalGridCommand;
    };
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    SetSchemaHorizontalGridCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    function (schemaAggregate, command) {
        this.domainEventPublisher.publishFromAggregate(schemaAggregate);
    };
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    SetSchemaHorizontalGridCommandHandler.prototype.handleAggregate = /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    function (schemaAggregate, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        schemaAggregate.setHorizontalGrid(enabled);
    };
    SetSchemaHorizontalGridCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaHorizontalGridCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaHorizontalGridCommandHandler;
}());
export { SetSchemaHorizontalGridCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUl0RjtJQUdDLCtDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsMERBQVU7OztJQUFWO1FBQ0MsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFRCxtRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLGVBQWdDLEVBQUUsT0FBdUM7UUFDNUYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVELCtEQUFlOzs7OztJQUFmLFVBQWdCLGVBQWdDLEVBQUUsT0FBdUM7O1lBRWxGLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRW5DLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFOYyxvQkFBb0I7O0lBMEI3Qyw0Q0FBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLHFDQUFxQzs7Ozs7O0lBRXJDLHFFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kIH0gZnJvbSAnLi9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U2NoZW1hQWdncmVnYXRlLCBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKHNjaGVtYUFnZ3JlZ2F0ZTogU2NoZW1hQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKHNjaGVtYUFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc2NoZW1hQWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuaXNFbmFibGVkKCk7XG5cblx0XHRzY2hlbWFBZ2dyZWdhdGUuc2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZCk7XG5cdH1cbn1cbiJdfQ==