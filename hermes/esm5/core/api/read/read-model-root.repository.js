/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '../../../common/reactive';
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
            .ofEvent.apply(domainEventBus, tslib_1.__spread(_this.forEvents())).pipe(_this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                _this.subscribe(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2FwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUdwRDs7Ozs7SUFBNkUsbURBQVE7SUFFcEYsaUNBQXNCLGNBQThCO1FBQXBELFlBQ0MsaUJBQU8sU0FpQlA7UUFoQkEsY0FBYzthQUNaLE9BQU8sT0FEVCxjQUFjLG1CQUVULEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FFbkIsSUFBSSxDQUNKLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFxQjtZQUVoQyxJQUFJO2dCQUNILEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxzQ0FBc0M7Z0JBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7UUFDRixDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBTUYsOEJBQUM7QUFBRCxDQUFDLEFBMUJELENBQTZFLFFBQVEsR0EwQnBGOzs7Ozs7Ozs7Ozs7SUFKQSw4REFBMEQ7Ozs7Ozs7SUFFMUQsbUVBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4gZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKCk7XG5cdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHQuLi50aGlzLmZvckV2ZW50cygpXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmliZShldmVudCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+O1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBzdWJzY3JpYmUoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KTogdm9pZDtcblxufVxuIl19