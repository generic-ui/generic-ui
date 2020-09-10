/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionContainerWidthSetEvent } from './composition-container-width-set.event';
var CompositionContainerWidthSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionContainerWidthSetAggregateEvent, _super);
    function CompositionContainerWidthSetAggregateEvent(compositionId, containerWidth) {
        var _this = _super.call(this, compositionId, 'CompositionContainerWidthSetAggregateEvent') || this;
        _this.containerWidth = containerWidth;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionContainerWidthSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionContainerWidthSetEvent(this.getAggregateId(), this.containerWidth);
    };
    return CompositionContainerWidthSetAggregateEvent;
}(AggregateEvent));
export { CompositionContainerWidthSetAggregateEvent };
if (false) {
    /** @type {?} */
    CompositionContainerWidthSetAggregateEvent.prototype.containerWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzVGO0lBQWdFLHNFQUE2QjtJQUU1RixvREFBWSxhQUE0QixFQUNyQixjQUFzQjtRQUR6QyxZQUVDLGtCQUFNLGFBQWEsRUFBRSw0Q0FBNEMsQ0FBQyxTQUNsRTtRQUZrQixvQkFBYyxHQUFkLGNBQWMsQ0FBUTs7SUFFekMsQ0FBQzs7OztJQUVELGtFQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRixpREFBQztBQUFELENBQUMsQUFWRCxDQUFnRSxjQUFjLEdBVTdFOzs7O0lBUEcsb0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyV2lkdGg6IG51bWJlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5jb250YWluZXJXaWR0aCk7XG5cdH1cbn1cbiJdfQ==