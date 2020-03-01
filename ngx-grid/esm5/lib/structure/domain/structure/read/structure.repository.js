/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
var /**
 * @abstract
 */
StructureRepository = /** @class */ (function () {
    function StructureRepository(domainEventBus) {
        var _this = this;
        this.unsubscribe$ = new Subject();
        domainEventBus
            .ofEvent.apply(domainEventBus, tslib_1.__spread(this.forEvents())).pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                _this.subs(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
    }
    /**
     * @return {?}
     */
    StructureRepository.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    return StructureRepository;
}());
/**
 * @abstract
 */
export { StructureRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureRepository.prototype.unsubscribe$;
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureRepository.prototype.onStructure = function (aggregateId) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    StructureRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    StructureRepository.prototype.subs = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHM0M7Ozs7SUFJQyw2QkFBc0IsY0FBOEI7UUFBcEQsaUJBZ0JDO1FBbEJnQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHN0MsY0FBYzthQUNaLE9BQU8sT0FEVCxjQUFjLG1CQUVULElBQUksQ0FBQyxTQUFTLEVBQUUsR0FFbkIsSUFBSSxDQUNKLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7WUFFN0IsSUFBSTtnQkFDSCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQVFELHlDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDOzs7Ozs7Ozs7O0lBL0JBLDJDQUE4Qzs7Ozs7O0lBb0I5Qyx1RUFBc0U7Ozs7OztJQUV0RSwwREFBMEQ7Ozs7Ozs7SUFFMUQsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4vc3RydWN0dXJlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlUmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnQoXG5cdFx0XHRcdC4uLnRoaXMuZm9yRXZlbnRzKClcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuc3VicyhldmVudCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdGFic3RyYWN0IG9uU3RydWN0dXJlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9ic2VydmFibGU8U3RydWN0dXJlPjtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IHN1YnMoZXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZDtcblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG59XG4iXX0=