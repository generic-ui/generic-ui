/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventService } from '../../domain-api/formation/formation-event.service';
import { StructureId } from '../../domain/structure.id';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { StructureRowDetailViewComponent } from './view/structure.row-detail-view.component';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './view/structure.row-detail-view.tokens';
var StructureRowDetailService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowDetailService, _super);
    function StructureRowDetailService(injector, structureId, structureDetailViewConfigArchive, formationEventService, drawerService) {
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
    StructureRowDetailService.prototype.init = /**
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
            _this.drawerService.close();
            if (items.length === 0) {
                return;
            }
            /** @type {?} */
            var item = items[0];
            /** @type {?} */
            var injector = Injector.create({
                parent: _this.injector,
                providers: [
                    { provide: structureRowDetailViewItem, useValue: item },
                    { provide: structureRowDetailViewTemplate, useValue: _this.config.template }
                ]
            });
            _this.drawerService.open(_this.elementRef, StructureRowDetailViewComponent, { injector: injector });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureRowDetailService.prototype.turnOn = /**
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
    StructureRowDetailService.prototype.turnOff = /**
     * @private
     * @return {?}
     */
    function () {
        this.enabled = false;
    };
    StructureRowDetailService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureRowDetailService.ctorParameters = function () { return [
        { type: Injector },
        { type: StructureId },
        { type: StructureRowDetailConfigArchive },
        { type: FormationEventService },
        { type: FabricDrawerService }
    ]; };
    return StructureRowDetailService;
}(Reactive));
export { StructureRowDetailService };
if (false) {
    /** @type {?} */
    StructureRowDetailService.prototype.enabled;
    /** @type {?} */
    StructureRowDetailService.prototype.config;
    /** @type {?} */
    StructureRowDetailService.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.structureDetailViewConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.formationEventService;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.drawerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3Jvdy1kZXRhaWwvc3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHckg7SUFDK0MscURBQVE7SUFRdEQsbUNBQTZCLFFBQWtCLEVBQzNCLFdBQXdCLEVBQ3hCLGdDQUFpRSxFQUNqRSxxQkFBNEMsRUFDNUMsYUFBa0M7UUFKdEQsWUFLQyxpQkFBTyxTQUNQO1FBTjRCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFpQztRQUNqRSwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1CQUFhLEdBQWIsYUFBYSxDQUFxQjtRQVZ0RCxhQUFPLEdBQVksS0FBSyxDQUFDOztJQVl6QixDQUFDOzs7OztJQUVELHdDQUFJOzs7O0lBQUosVUFBSyxHQUFlO1FBQXBCLGlCQTRDQztRQTNDQSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsTUFBdUI7WUFFbEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFckIsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDNUIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Q7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDcEMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2Y7UUFDRixDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxLQUFpQjtZQUU1QixJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsT0FBTzthQUNQO1lBRUQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUzQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPO2FBQ1A7O2dCQUVLLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztnQkFFZixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsTUFBTSxFQUFFLEtBQUksQ0FBQyxRQUFRO2dCQUNyQixTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtvQkFDdkQsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2lCQUMzRTthQUNELENBQUM7WUFFRixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLCtCQUErQixFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbkcsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDBDQUFNOzs7O0lBQWQ7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLDJDQUFPOzs7O0lBQWY7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOztnQkFyRUQsVUFBVTs7OztnQkFkc0IsUUFBUTtnQkFLaEMsV0FBVztnQkFHWCwrQkFBK0I7Z0JBSi9CLHFCQUFxQjtnQkFGckIsbUJBQW1COztJQWtGNUIsZ0NBQUM7Q0FBQSxBQXRFRCxDQUMrQyxRQUFRLEdBcUV0RDtTQXJFWSx5QkFBeUI7OztJQUVyQyw0Q0FBeUI7O0lBRXpCLDJDQUF3Qjs7SUFFeEIsK0NBQXVCOzs7OztJQUVYLDZDQUFtQzs7Ozs7SUFDNUMsZ0RBQXlDOzs7OztJQUN6QyxxRUFBa0Y7Ozs7O0lBQ2xGLDBEQUE2RDs7Ozs7SUFDN0Qsa0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucm93LWRldGFpbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dEZXRhaWxDb25maWcgfSBmcm9tICcuL3Jvdy1kZXRhaWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4vdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LnRva2Vucyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0RldGFpbFNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0ZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbmZpZzogUm93RGV0YWlsQ29uZmlnO1xuXG5cdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRyYXdlclNlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aW5pdChyZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYgPSByZWY7XG5cblx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBSb3dEZXRhaWxDb25maWcpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuXHRcdFx0XHRpZiAoY29uZmlnLmVuYWJsZWQgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnR1cm5PbigpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9mZigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5kcmF3ZXJTZXJ2aWNlLmNsb3NlKCk7XG5cblx0XHRcdFx0aWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSBpdGVtc1swXTtcblxuXHRcdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdFx0cGFyZW50OiB0aGlzLmluamVjdG9yLFxuXHRcdFx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRcdFx0eyBwcm92aWRlOiBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSwgdXNlVmFsdWU6IGl0ZW0gfSxcblx0XHRcdFx0XHRcdHsgcHJvdmlkZTogc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlLCB1c2VWYWx1ZTogdGhpcy5jb25maWcudGVtcGxhdGUgfVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5kcmF3ZXJTZXJ2aWNlLm9wZW4odGhpcy5lbGVtZW50UmVmLCBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LCB7IGluamVjdG9yOiBpbmplY3RvciB9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB0dXJuT24oKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9mZigpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxufVxuIl19