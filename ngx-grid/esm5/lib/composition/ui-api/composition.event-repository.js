/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/width/set-container-width/composition-container-width-set.event';
var CompositionEventRepository = /** @class */ (function () {
    function CompositionEventRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onColumnsChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === compositionId.toString(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onContainerWidthChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionContainerWidthSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().equals(compositionId); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getPayload();
        })), filter((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return !!width; })));
    };
    CompositionEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionEventRepository;
}());
export { CompositionEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBRzlIO0lBR0Msb0NBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELHFEQUFnQjs7OztJQUFoQixVQUFpQixhQUE0QjtRQUU1QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCwwQkFBMEIsQ0FDMUI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQTlELENBQThELEVBQUMsQ0FDN0csQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsNERBQXVCOzs7O0lBQXZCLFVBQXdCLGFBQTRCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLGlDQUFpQyxDQUNqQzthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUFpQyxJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxFQUMzRixHQUFHOzs7O1FBQUMsVUFBQyxLQUF3QztZQUM1QyxPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsVUFBQyxLQUFhLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sRUFBQyxDQUNsQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBN0JELFVBQVU7Ozs7Z0JBUFcsY0FBYzs7SUFzQ3BDLGlDQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksMEJBQTBCOzs7Ozs7SUFFMUIsb0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gY29tcG9zaXRpb25JZC50b1N0cmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkuZXF1YWxzKGNvbXBvc2l0aW9uSWQpKSxcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBldmVudC5nZXRQYXlsb2FkKCk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKCh3aWR0aDogbnVtYmVyKSA9PiAhIXdpZHRoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==