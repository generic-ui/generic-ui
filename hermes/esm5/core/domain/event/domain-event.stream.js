/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventStore } from './domain-event.store';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
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
}(HermesSubject));
export { DomainEventStream };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventStream.prototype.eventStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5zdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdqRjtJQUN1Qyw2Q0FBdUM7SUFFN0UsMkJBQTZCLFVBQTRCO1FBQXpELFlBQ0MsaUJBQU8sU0FDUDtRQUY0QixnQkFBVSxHQUFWLFVBQVUsQ0FBa0I7O0lBRXpELENBQUM7Ozs7O0lBRUQsZ0NBQUk7Ozs7SUFBSixVQUFLLEtBQStCO1FBQ25DLGlCQUFNLElBQUksWUFBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFWRCxVQUFVOzs7O2dCQUxGLGdCQUFnQjs7SUFnQnpCLHdCQUFDO0NBQUEsQUFYRCxDQUN1QyxhQUFhLEdBVW5EO1NBVlksaUJBQWlCOzs7Ozs7SUFFakIsdUNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RvcmUgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50U3RyZWFtIGV4dGVuZHMgSGVybWVzU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50U3RvcmU6IERvbWFpbkV2ZW50U3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmV4dChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0c3VwZXIubmV4dChldmVudCk7XG5cdFx0dGhpcy5ldmVudFN0b3JlLm5leHQoZXZlbnQpO1xuXHR9XG59XG4iXX0=