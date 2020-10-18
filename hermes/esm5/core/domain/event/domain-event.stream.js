/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DomainEventStore } from './domain-event.store';
var DomainEventStream = /** @class */ (function (_super) {
    tslib_1.__extends(DomainEventStream, _super);
    function DomainEventStream(eventStore) {
        var _this = _super.call(this) || this;
        _this.eventStore = eventStore;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEventStream.prototype.next = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        _super.prototype.next.call(this, event);
        this.eventStore.next(event);
    };
    DomainEventStream.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DomainEventStream.ctorParameters = function () { return [
        { type: DomainEventStore }
    ]; };
    return DomainEventStream;
}(Subject));
export { DomainEventStream };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventStream.prototype.eventStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJeEQ7SUFDdUMsNkNBQWlDO0lBRXZFLDJCQUFvQixVQUE0QjtRQUFoRCxZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsZ0JBQVUsR0FBVixVQUFVLENBQWtCOztJQUVoRCxDQUFDOzs7OztJQUVELGdDQUFJOzs7O0lBQUosVUFBSyxLQUErQjtRQUNuQyxpQkFBTSxJQUFJLFlBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBVkQsVUFBVTs7OztnQkFKRixnQkFBZ0I7O0lBZXpCLHdCQUFDO0NBQUEsQUFYRCxDQUN1QyxPQUFPLEdBVTdDO1NBVlksaUJBQWlCOzs7Ozs7SUFFakIsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RvcmUgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFN0cmVhbSBleHRlbmRzIFN1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBldmVudFN0b3JlOiBEb21haW5FdmVudFN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5leHQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdHN1cGVyLm5leHQoZXZlbnQpO1xuXHRcdHRoaXMuZXZlbnRTdG9yZS5uZXh0KGV2ZW50KTtcblx0fVxufVxuIl19