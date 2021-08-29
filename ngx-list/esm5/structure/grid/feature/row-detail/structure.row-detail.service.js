/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../source/core/api/formation/formation.event-repository';
import { StructureId } from '../../../core/domain/structure.id';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
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
            .on()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBSXJIO0lBQytDLHFEQUFRO0lBUXRELG1DQUE2QixRQUFrQixFQUMzQixXQUF3QixFQUN4QixnQ0FBaUUsRUFDakUscUJBQStDLEVBQy9DLGFBQWtDO1FBSnRELFlBS0MsaUJBQU8sU0FDUDtRQU40QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBaUM7UUFDakUsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQjtRQUMvQyxtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFWdEQsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFZekIsQ0FBQzs7Ozs7SUFFRCx3Q0FBSTs7OztJQUFKLFVBQUssR0FBZTtRQUFwQixpQkE0Q0M7UUEzQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdDQUFnQzthQUNuQyxFQUFFLEVBQUU7YUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXVCO1lBRWxDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNkO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsS0FBeUI7WUFFcEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLE9BQU87YUFDUDtZQUVELEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTzthQUNQOztnQkFFSyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBRWYsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxLQUFJLENBQUMsUUFBUTtnQkFDckIsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7b0JBQ3ZELEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtpQkFDM0U7YUFDRCxDQUFDO1lBRUYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25HLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTywwQ0FBTTs7OztJQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTywyQ0FBTzs7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBZnNCLFFBQVE7Z0JBS2hDLFdBQVc7Z0JBR1gsK0JBQStCO2dCQUovQix3QkFBd0I7Z0JBRnhCLG1CQUFtQjs7SUFtRjVCLGdDQUFDO0NBQUEsQUF0RUQsQ0FDK0MsUUFBUSxHQXFFdEQ7U0FyRVkseUJBQXlCOzs7SUFFckMsNENBQXlCOztJQUV6QiwyQ0FBd0I7O0lBRXhCLCtDQUF1Qjs7Ozs7SUFFWCw2Q0FBbUM7Ozs7O0lBQzVDLGdEQUF5Qzs7Ozs7SUFDekMscUVBQWtGOzs7OztJQUNsRiwwREFBZ0U7Ozs7O0lBQ2hFLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFJvd0RldGFpbENvbmZpZyB9IGZyb20gJy4vcm93LWRldGFpbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSwgc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlIH0gZnJvbSAnLi92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25maWc6IFJvd0RldGFpbENvbmZpZztcblxuXHRlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkcmF3ZXJTZXJ2aWNlOiBGYWJyaWNEcmF3ZXJTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGluaXQocmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50UmVmID0gcmVmO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb25maWc6IFJvd0RldGFpbENvbmZpZykgPT4ge1xuXG5cdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG5cdFx0XHRcdGlmIChjb25maWcuZW5hYmxlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLmVuYWJsZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy50dXJuT2ZmKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5mb3JtYXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxTZWxlY3RlZFJvdz4pID0+IHtcblxuXHRcdFx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuZHJhd2VyU2VydmljZS5jbG9zZSgpO1xuXG5cdFx0XHRcdGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbMF07XG5cblx0XHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0XHRcdHsgcHJvdmlkZTogc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHVzZVZhbHVlOiBpdGVtIH0sXG5cdFx0XHRcdFx0XHR7IHByb3ZpZGU6IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSwgdXNlVmFsdWU6IHRoaXMuY29uZmlnLnRlbXBsYXRlIH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKHRoaXMuZWxlbWVudFJlZiwgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCwgeyBpbmplY3RvcjogaW5qZWN0b3IgfSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9uKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHR1cm5PZmYoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cbn1cbiJdfQ==