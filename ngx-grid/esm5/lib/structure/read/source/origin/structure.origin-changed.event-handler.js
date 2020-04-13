/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
var StructureOriginChangedEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureOriginChangedEventHandler, _super);
    function StructureOriginChangedEventHandler(structureSourceOriginRepository) {
        var _this = _super.call(this) || this;
        _this.structureSourceOriginRepository = structureSourceOriginRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureOriginChangedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof OriginSetEvent) {
            /** @type {?} */
            var origin_1 = event.getOrigin();
            this.structureSourceOriginRepository.setOrigin(origin_1, event.getAggregateId());
        }
    };
    StructureOriginChangedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureOriginChangedEventHandler.ctorParameters = function () { return [
        { type: StructureSourceOriginRepository }
    ]; };
    return StructureOriginChangedEventHandler;
}(DomainEventHandler));
export { StructureOriginChangedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedEventHandler.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zb3VyY2Uvb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFJM0Y7SUFDd0QsOERBQStCO0lBRXRGLDRDQUFvQiwrQkFBZ0U7UUFBcEYsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLHFDQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7O0lBRXBGLENBQUM7Ozs7O0lBRUQsbURBQU07Ozs7SUFBTixVQUFPLEtBQXFCO1FBRTNCLElBQUksS0FBSyxZQUFZLGNBQWMsRUFBRTs7Z0JBQzlCLFFBQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBRWhDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsUUFBTSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQy9FO0lBRUYsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFMRiwrQkFBK0I7O0lBcUJ4Qyx5Q0FBQztDQUFBLEFBaEJELENBQ3dELGtCQUFrQixHQWV6RTtTQWZZLGtDQUFrQzs7Ozs7O0lBRWxDLDZFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeTogU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IE9yaWdpblNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBPcmlnaW5TZXRFdmVudCkge1xuXHRcdFx0Y29uc3Qgb3JpZ2luID0gZXZlbnQuZ2V0T3JpZ2luKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeS5zZXRPcmlnaW4ob3JpZ2luLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxufVxuIl19