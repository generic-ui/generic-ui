/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var CompositionChangeSortStatusEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionChangeSortStatusEvent, _super);
    function CompositionChangeSortStatusEvent(aggregateId, activeColumns) {
        var _this = _super.call(this, aggregateId, 'CompositionChangeSortStatusEvent') || this;
        _this.activeColumns = activeColumns;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionChangeSortStatusEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    CompositionChangeSortStatusEvent.prototype.getActiveColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    return CompositionChangeSortStatusEvent;
}(DomainEvent));
export { CompositionChangeSortStatusEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRDtJQUFzRCw0REFBVztJQUVoRSwwQ0FBWSxXQUEwQixFQUNsQixhQUF3QztRQUQ1RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSxrQ0FBa0MsQ0FBQyxTQUN0RDtRQUZtQixtQkFBYSxHQUFiLGFBQWEsQ0FBMkI7O0lBRTVELENBQUM7Ozs7SUFFRCwyREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMkRBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVGLHVDQUFDO0FBQUQsQ0FBQyxBQWZELENBQXNELFdBQVcsR0FlaEU7Ozs7Ozs7SUFaRyx5REFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0fVxuXG59XG4iXX0=