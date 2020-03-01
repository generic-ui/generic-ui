/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '../../common/reactive';
/**
 * @abstract
 */
var /**
 * @abstract
 */
ReadModelRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ReadModelRepository, _super);
    function ReadModelRepository(domainEventBus) {
        var _this = _super.call(this) || this;
        domainEventBus
            .ofEvent.apply(domainEventBus, tslib_1.__spread(_this.forEvents())).pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                _this.subscribe(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
        return _this;
    }
    return ReadModelRepository;
}(Reactive));
/**
 * @abstract
 */
export { ReadModelRepository };
if (false) {
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    ReadModelRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    ReadModelRepository.prototype.subscribe = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL3JlYWQvcmVhZC1tb2RlbC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRWpEOzs7O0lBQWtELCtDQUFRO0lBRXpELDZCQUFzQixjQUE4QjtRQUFwRCxZQUNDLGlCQUFPLFNBZ0JQO1FBZkEsY0FBYzthQUNaLE9BQU8sT0FEVCxjQUFjLG1CQUVULEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FFbkIsSUFBSSxDQUNKLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjtZQUU3QixJQUFJO2dCQUNILEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0YsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQztJQU1GLDBCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFrRCxRQUFRLEdBeUJ6RDs7Ozs7Ozs7Ozs7SUFKQSwwREFBMEQ7Ozs7Ozs7SUFFMUQsK0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFkTW9kZWxSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcigpO1xuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Li4udGhpcy5mb3JFdmVudHMoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5zdWJzY3JpYmUoZXZlbnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQpOiB2b2lkO1xuXG59XG4iXX0=