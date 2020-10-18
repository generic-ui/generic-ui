/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
var SetSchemaVerticalGridCommandHandler = /** @class */ (function () {
    function SetSchemaVerticalGridCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSchemaVerticalGridCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSchemaVerticalGridCommand;
    };
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    SetSchemaVerticalGridCommandHandler.prototype.publishDomainEvents = /**
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
    SetSchemaVerticalGridCommandHandler.prototype.handleAggregate = /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    function (schemaAggregate, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        schemaAggregate.setVerticalGrid(enabled);
    };
    SetSchemaVerticalGridCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaVerticalGridCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaVerticalGridCommandHandler;
}());
export { SetSchemaVerticalGridCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaVerticalGridCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJbEY7SUFHQyw2Q0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELHdEQUFVOzs7SUFBVjtRQUNDLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsaUVBQW1COzs7OztJQUFuQixVQUFvQixlQUFnQyxFQUFFLE9BQXFDO1FBQzFGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCw2REFBZTs7Ozs7SUFBZixVQUFnQixlQUFnQyxFQUFFLE9BQXFDOztZQUVoRixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUVuQyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU4yQixvQkFBb0I7O0lBMkIxRCwwQ0FBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLG1DQUFtQzs7Ozs7O0lBRW5DLG1FQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQgfSBmcm9tICcuL3NldC1zY2hlbWEtdmVydGljYWwtZ3JpZC5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFNjaGVtYUFnZ3JlZ2F0ZSwgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoc2NoZW1hQWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKHNjaGVtYUFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc2NoZW1hQWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzRW5hYmxlZCgpO1xuXG5cdFx0c2NoZW1hQWdncmVnYXRlLnNldFZlcnRpY2FsR3JpZChlbmFibGVkKTtcblx0fVxuXG59XG4iXX0=