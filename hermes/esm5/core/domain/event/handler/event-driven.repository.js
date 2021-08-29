/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateArchive } from '../../../../common/aggregate.archive';
/**
 * @abstract
 * @template I, E, V
 */
var /**
 * @abstract
 * @template I, E, V
 */
EventDrivenRepository = /** @class */ (function (_super) {
    tslib_1.__extends(EventDrivenRepository, _super);
    function EventDrivenRepository(defaultValues) {
        return _super.call(this, defaultValues) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EventDrivenRepository.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.next(event.getAggregateId(), event.getPayload());
    };
    return EventDrivenRepository;
}(AggregateArchive));
/**
 * @abstract
 * @template I, E, V
 */
export { EventDrivenRepository };
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    EventDrivenRepository.prototype.forEvent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZHJpdmVuLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9ldmVudC9oYW5kbGVyL2V2ZW50LWRyaXZlbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUtoRzs7Ozs7SUFDUyxpREFBbUI7SUFFM0IsK0JBQXNCLGFBQXlDO2VBQzlELGtCQUFNLGFBQWEsQ0FBQztJQUNyQixDQUFDOzs7OztJQUlELHNDQUFNOzs7O0lBQU4sVUFBTyxLQUFRO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNGLDRCQUFDO0FBQUQsQ0FBQyxBQVpELENBQ1MsZ0JBQWdCLEdBV3hCOzs7Ozs7Ozs7OztJQUxBLDJEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnLi9kb21haW4tZXZlbnQtdHlwZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVBcmNoaXZlLCBEZWZhdWx0QWdncmVnYXRlVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2FnZ3JlZ2F0ZS5hcmNoaXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50RHJpdmVuUmVwb3NpdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPiwgVj5cblx0ZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPFY+IGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZGVmYXVsdFZhbHVlcz86IERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXM8Vj4pIHtcblx0XHRzdXBlcihkZWZhdWx0VmFsdWVzKTtcblx0fVxuXG5cdGFic3RyYWN0IGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxFPjtcblxuXHRoYW5kbGUoZXZlbnQ6IEUpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0UGF5bG9hZCgpKTtcblx0fVxufVxuIl19