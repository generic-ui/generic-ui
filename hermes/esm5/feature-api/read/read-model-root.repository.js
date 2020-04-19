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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJmZWF0dXJlLWFwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUdqRDs7Ozs7SUFBNkUsbURBQVE7SUFFcEYsaUNBQXNCLGNBQThCO1FBQXBELFlBQ0MsaUJBQU8sU0FnQlA7UUFmQSxjQUFjO2FBQ1osT0FBTyxPQURULGNBQWMsbUJBRVQsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUVuQixJQUFJLENBQ0osS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQXFCO1lBRWhDLElBQUk7Z0JBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7UUFDRixDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBTUYsOEJBQUM7QUFBRCxDQUFDLEFBekJELENBQTZFLFFBQVEsR0F5QnBGOzs7Ozs7Ozs7Ozs7SUFKQSw4REFBMEQ7Ozs7Ozs7SUFFMUQsbUVBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdC4uLnRoaXMuZm9yRXZlbnRzKClcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQ8ST4pID0+IHtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuc3Vic2NyaWJlKGV2ZW50KTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+O1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBzdWJzY3JpYmUoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KTogdm9pZDtcblxufVxuIl19