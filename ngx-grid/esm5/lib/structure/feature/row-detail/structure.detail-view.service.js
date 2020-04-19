/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventService } from '../../feature-api/formation/formation-event.service';
import { StructureId } from '../../domain/structure.id';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureDetailViewConfigArchive } from './structure.detail-view.config-archive';
import { StructureDetailViewComponent } from './detail-view/structure.detail-view.component';
var StructureDetailViewService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDetailViewService, _super);
    function StructureDetailViewService(injector, structureId, structureDetailViewConfigArchive, formationEventService, drawerService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.structureId = structureId;
        _this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        _this.formationEventService = formationEventService;
        _this.drawerService = drawerService;
        _this.enabled = false;
        return _this;
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    StructureDetailViewService.prototype.init = /**
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        this.elementRef = ref;
        this.structureDetailViewConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.config = config;
            if (config.enabled === true) {
                _this.turnOn();
            }
            else if (config.enabled === false) {
                _this.turnOff();
            }
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            if (!_this.enabled) {
                return;
            }
            if (items.length === 0) {
                return;
            }
            /** @type {?} */
            var item = items[0];
            /** @type {?} */
            var injector = Injector.create({
                parent: _this.injector,
                providers: [
                    { provide: 'item', useValue: item },
                    { provide: 'template', useValue: _this.config.template }
                ]
            });
            _this.drawerService.open(_this.elementRef, StructureDetailViewComponent, { injector: injector });
            // this.drawerService.open(structureElement, StructureDetailViewComponent, { injector: this.injector });
            console.log('Open', item);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureDetailViewService.prototype.turnOn = /**
     * @private
     * @return {?}
     */
    function () {
        this.enabled = true;
    };
    /**
     * @private
     * @return {?}
     */
    StructureDetailViewService.prototype.turnOff = /**
     * @private
     * @return {?}
     */
    function () {
        this.enabled = false;
    };
    StructureDetailViewService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureDetailViewService.ctorParameters = function () { return [
        { type: Injector },
        { type: StructureId },
        { type: StructureDetailViewConfigArchive },
        { type: FormationEventService },
        { type: FabricDrawerService }
    ]; };
    return StructureDetailViewService;
}(Reactive));
export { StructureDetailViewService };
if (false) {
    /** @type {?} */
    StructureDetailViewService.prototype.enabled;
    /** @type {?} */
    StructureDetailViewService.prototype.config;
    /** @type {?} */
    StructureDetailViewService.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.structureDetailViewConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.formationEventService;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.drawerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRldGFpbC12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5kZXRhaWwtdmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUc3RjtJQUNnRCxzREFBUTtJQVF2RCxvQ0FBNkIsUUFBa0IsRUFDM0IsV0FBd0IsRUFDeEIsZ0NBQWtFLEVBQ2xFLHFCQUE0QyxFQUM1QyxhQUFrQztRQUp0RCxZQUtDLGlCQUFPLFNBQ1A7UUFONEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWEsR0FBYixhQUFhLENBQXFCO1FBVnRELGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBWXpCLENBQUM7Ozs7O0lBRUQseUNBQUk7Ozs7SUFBSixVQUFLLEdBQWU7UUFBcEIsaUJBNENDO1FBM0NBLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBRXRCLElBQUksQ0FBQyxnQ0FBZ0M7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxNQUF3QjtZQUVuQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUM1QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUNwQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDZjtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWlCO1lBRTVCLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPO2FBQ1A7WUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPO2FBQ1A7O2dCQUVLLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztnQkFFZixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsTUFBTSxFQUFFLEtBQUksQ0FBQyxRQUFRO2dCQUNyQixTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7b0JBQ25DLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7aUJBQ3ZEO2FBQ0QsQ0FBQztZQUVGLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvRix3R0FBd0c7WUFDeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDJDQUFNOzs7O0lBQWQ7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLDRDQUFPOzs7O0lBQWY7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOztnQkFyRUQsVUFBVTs7OztnQkFic0IsUUFBUTtnQkFLaEMsV0FBVztnQkFHWCxnQ0FBZ0M7Z0JBSmhDLHFCQUFxQjtnQkFGckIsbUJBQW1COztJQWlGNUIsaUNBQUM7Q0FBQSxBQXRFRCxDQUNnRCxRQUFRLEdBcUV2RDtTQXJFWSwwQkFBMEI7OztJQUV0Qyw2Q0FBeUI7O0lBRXpCLDRDQUF5Qjs7SUFFekIsZ0RBQXVCOzs7OztJQUVYLDhDQUFtQzs7Ozs7SUFDNUMsaURBQXlDOzs7OztJQUN6QyxzRUFBbUY7Ozs7O0lBQ25GLDJEQUE2RDs7Ozs7SUFDN0QsbURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5kZXRhaWwtdmlldy5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBEZXRhaWxWaWV3Q29uZmlnIH0gZnJvbSAnLi9kZXRhaWwtdmlldy5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsLXZpZXcvc3RydWN0dXJlLmRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURldGFpbFZpZXdTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25maWc6IERldGFpbFZpZXdDb25maWc7XG5cblx0ZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRyYXdlclNlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aW5pdChyZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYgPSByZWY7XG5cblx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBEZXRhaWxWaWV3Q29uZmlnKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cblx0XHRcdFx0aWYgKGNvbmZpZy5lbmFibGVkID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dGhpcy50dXJuT24oKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjb25maWcuZW5hYmxlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLnR1cm5PZmYoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZvcm1hdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uSXRlbVNlbGVjdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbMF07XG5cblx0XHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0XHRcdHsgcHJvdmlkZTogJ2l0ZW0nLCB1c2VWYWx1ZTogaXRlbSB9LFxuXHRcdFx0XHRcdFx0eyBwcm92aWRlOiAndGVtcGxhdGUnLCB1c2VWYWx1ZTogdGhpcy5jb25maWcudGVtcGxhdGUgfVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5kcmF3ZXJTZXJ2aWNlLm9wZW4odGhpcy5lbGVtZW50UmVmLCBTdHJ1Y3R1cmVEZXRhaWxWaWV3Q29tcG9uZW50LCB7IGluamVjdG9yOiBpbmplY3RvciB9KTtcblx0XHRcdFx0Ly8gdGhpcy5kcmF3ZXJTZXJ2aWNlLm9wZW4oc3RydWN0dXJlRWxlbWVudCwgU3RydWN0dXJlRGV0YWlsVmlld0NvbXBvbmVudCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ09wZW4nLCBpdGVtKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB0dXJuT24oKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9mZigpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxufVxuIl19