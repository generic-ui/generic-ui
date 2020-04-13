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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXhEO0lBQ3VDLDZDQUFpQztJQUV2RSwyQkFBb0IsVUFBNEI7UUFBaEQsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFrQjs7SUFFaEQsQ0FBQzs7Ozs7SUFFRCxnQ0FBSTs7OztJQUFKLFVBQUssS0FBK0I7UUFDbkMsaUJBQU0sSUFBSSxZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBSkYsZ0JBQWdCOztJQWV6Qix3QkFBQztDQUFBLEFBWEQsQ0FDdUMsT0FBTyxHQVU3QztTQVZZLGlCQUFpQjs7Ozs7O0lBRWpCLHVDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFN0b3JlIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFN0cmVhbSBleHRlbmRzIFN1YmplY3Q8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBldmVudFN0b3JlOiBEb21haW5FdmVudFN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5leHQoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdHN1cGVyLm5leHQoZXZlbnQpO1xuXHRcdHRoaXMuZXZlbnRTdG9yZS5uZXh0KGV2ZW50KTtcblx0fVxufVxuIl19