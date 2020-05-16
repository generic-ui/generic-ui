/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '../../common/reactive';
/**
 * @abstract
 * @template I
 */
var /**
 * @abstract
 * @template I
 */
ReadModelRootRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ReadModelRootRepository, _super);
    function ReadModelRootRepository(domainEventBus) {
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
    return ReadModelRootRepository;
}(Reactive));
/**
 * @abstract
 * @template I
 */
export { ReadModelRootRepository };
if (false) {
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    ReadModelRootRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    ReadModelRootRepository.prototype.subscribe = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4tYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBR2pEOzs7OztJQUE2RSxtREFBUTtJQUVwRixpQ0FBc0IsY0FBOEI7UUFBcEQsWUFDQyxpQkFBTyxTQWdCUDtRQWZBLGNBQWM7YUFDWixPQUFPLE9BRFQsY0FBYyxtQkFFVCxLQUFJLENBQUMsU0FBUyxFQUFFLEdBRW5CLElBQUksQ0FDSixLQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBcUI7WUFFaEMsSUFBSTtnQkFDSCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7SUFNRiw4QkFBQztBQUFELENBQUMsQUF6QkQsQ0FBNkUsUUFBUSxHQXlCcEY7Ozs7Ozs7Ozs7OztJQUpBLDhEQUEwRDs7Ozs7OztJQUUxRCxtRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlYWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFkTW9kZWxSb290UmVwb3NpdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcigpO1xuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Li4udGhpcy5mb3JFdmVudHMoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4ge1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5zdWJzY3JpYmUoZXZlbnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiB2b2lkO1xuXG59XG4iXX0=