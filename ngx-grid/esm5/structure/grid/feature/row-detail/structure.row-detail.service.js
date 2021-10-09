/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../source/core/api/formation/formation.event-repository';
import { StructureId } from '../../../core/api/structure.id';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { StructureRowDetailViewComponent } from './view/structure.row-detail-view.component';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './view/structure.row-detail-view.tokens';
import { Reactive } from '@generic-ui/hermes';
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
            .on()
            .pipe(this.hermesTakeUntil())
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
            .pipe(this.hermesTakeUntil())
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
        { type: FormationEventRepository },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzlDO0lBQytDLHFEQUFRO0lBUXRELG1DQUE2QixRQUFrQixFQUMzQixXQUF3QixFQUN4QixnQ0FBaUUsRUFDakUscUJBQStDLEVBQy9DLGFBQWtDO1FBSnRELFlBS0MsaUJBQU8sU0FDUDtRQU40QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBaUM7UUFDakUsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQjtRQUMvQyxtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFWdEQsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFZekIsQ0FBQzs7Ozs7SUFFRCx3Q0FBSTs7OztJQUFKLFVBQUssR0FBZTtRQUFwQixpQkE0Q0M7UUEzQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdDQUFnQzthQUNuQyxFQUFFLEVBQUU7YUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVCLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXVCO1lBRWxDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNkO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUIsU0FBUzs7OztRQUFDLFVBQUMsS0FBeUI7WUFFcEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLE9BQU87YUFDUDtZQUVELEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTzthQUNQOztnQkFFSyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBRWYsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxLQUFJLENBQUMsUUFBUTtnQkFDckIsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7b0JBQ3ZELEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtpQkFDM0U7YUFDRCxDQUFDO1lBRUYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25HLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTywwQ0FBTTs7OztJQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTywyQ0FBTzs7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBZnNCLFFBQVE7Z0JBS2hDLFdBQVc7Z0JBRVgsK0JBQStCO2dCQUgvQix3QkFBd0I7Z0JBRnhCLG1CQUFtQjs7SUFtRjVCLGdDQUFDO0NBQUEsQUF0RUQsQ0FDK0MsUUFBUSxHQXFFdEQ7U0FyRVkseUJBQXlCOzs7SUFFckMsNENBQXlCOztJQUV6QiwyQ0FBd0I7O0lBRXhCLCtDQUF1Qjs7Ozs7SUFFWCw2Q0FBbUM7Ozs7O0lBQzVDLGdEQUF5Qzs7Ozs7SUFDekMscUVBQWtGOzs7OztJQUNsRiwwREFBZ0U7Ozs7O0lBQ2hFLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgUm93RGV0YWlsQ29uZmlnIH0gZnJvbSAnLi9yb3ctZGV0YWlsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy50b2tlbnMnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0RldGFpbFNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0ZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbmZpZzogUm93RGV0YWlsQ29uZmlnO1xuXG5cdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRyYXdlclNlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aW5pdChyZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYgPSByZWY7XG5cblx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUodGhpcy5oZXJtZXNUYWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogUm93RGV0YWlsQ29uZmlnKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cblx0XHRcdFx0aWYgKGNvbmZpZy5lbmFibGVkID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dGhpcy50dXJuT24oKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjb25maWcuZW5hYmxlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLnR1cm5PZmYoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZvcm1hdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uSXRlbVNlbGVjdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PFNlbGVjdGVkUm93PikgPT4ge1xuXG5cdFx0XHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5kcmF3ZXJTZXJ2aWNlLmNsb3NlKCk7XG5cblx0XHRcdFx0aWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSBpdGVtc1swXTtcblxuXHRcdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdFx0cGFyZW50OiB0aGlzLmluamVjdG9yLFxuXHRcdFx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRcdFx0eyBwcm92aWRlOiBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSwgdXNlVmFsdWU6IGl0ZW0gfSxcblx0XHRcdFx0XHRcdHsgcHJvdmlkZTogc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlLCB1c2VWYWx1ZTogdGhpcy5jb25maWcudGVtcGxhdGUgfVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5kcmF3ZXJTZXJ2aWNlLm9wZW4odGhpcy5lbGVtZW50UmVmLCBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LCB7IGluamVjdG9yOiBpbmplY3RvciB9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB0dXJuT24oKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9mZigpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxufVxuIl19