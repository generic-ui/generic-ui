/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Reactive } from '../../common/reactive';
/**
 * @abstract
 * @template I
 */
export class ReadModelRootRepository extends Reactive {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super();
        domainEventBus
            .ofEvent(...this.forEvents())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            try {
                this.subscribe(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4tYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFHakQsTUFBTSxPQUFnQix1QkFBK0MsU0FBUSxRQUFROzs7OztJQUVwRixZQUFzQixjQUE4QjtRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLGNBQWM7YUFDWixPQUFPLENBQ1AsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ25CO2FBQ0EsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFFcEMsSUFBSTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQU1EOzs7Ozs7O0lBSkEsOERBQTBEOzs7Ozs7O0lBRTFELG1FQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vcmVhY3RpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4gZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKCk7XG5cdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHQuLi50aGlzLmZvckV2ZW50cygpXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmliZShldmVudCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBmb3JFdmVudHMoKTogQXJyYXk8dHlwZW9mIERvbWFpbkV2ZW50PjtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3Qgc3Vic2NyaWJlKGV2ZW50OiBEb21haW5FdmVudDxJPik6IHZvaWQ7XG5cbn1cbiJdfQ==