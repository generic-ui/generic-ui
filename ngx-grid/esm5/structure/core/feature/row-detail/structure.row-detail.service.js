/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../source/domain-api/formation/formation.event-repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBSXJIO0lBQytDLHFEQUFRO0lBUXRELG1DQUE2QixRQUFrQixFQUMzQixXQUF3QixFQUN4QixnQ0FBaUUsRUFDakUscUJBQStDLEVBQy9DLGFBQWtDO1FBSnRELFlBS0MsaUJBQU8sU0FDUDtRQU40QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBaUM7UUFDakUsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQjtRQUMvQyxtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFWdEQsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFZekIsQ0FBQzs7Ozs7SUFFRCx3Q0FBSTs7OztJQUFKLFVBQUssR0FBZTtRQUFwQixpQkE0Q0M7UUEzQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdDQUFnQzthQUNuQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXVCO1lBRWxDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNkO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsS0FBeUI7WUFFcEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLE9BQU87YUFDUDtZQUVELEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTzthQUNQOztnQkFFSyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBRWYsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxLQUFJLENBQUMsUUFBUTtnQkFDckIsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7b0JBQ3ZELEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtpQkFDM0U7YUFDRCxDQUFDO1lBRUYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25HLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTywwQ0FBTTs7OztJQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTywyQ0FBTzs7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Z0JBckVELFVBQVU7Ozs7Z0JBZnNCLFFBQVE7Z0JBS2hDLFdBQVc7Z0JBR1gsK0JBQStCO2dCQUovQix3QkFBd0I7Z0JBRnhCLG1CQUFtQjs7SUFtRjVCLGdDQUFDO0NBQUEsQUF0RUQsQ0FDK0MsUUFBUSxHQXFFdEQ7U0FyRVkseUJBQXlCOzs7SUFFckMsNENBQXlCOztJQUV6QiwyQ0FBd0I7O0lBRXhCLCtDQUF1Qjs7Ozs7SUFFWCw2Q0FBbUM7Ozs7O0lBQzVDLGdEQUF5Qzs7Ozs7SUFDekMscUVBQWtGOzs7OztJQUNsRiwwREFBZ0U7Ozs7O0lBQ2hFLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFJvd0RldGFpbENvbmZpZyB9IGZyb20gJy4vcm93LWRldGFpbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSwgc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlIH0gZnJvbSAnLi92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0RldGFpbFNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0ZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbmZpZzogUm93RGV0YWlsQ29uZmlnO1xuXG5cdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRyYXdlclNlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aW5pdChyZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYgPSByZWY7XG5cblx0XHR0aGlzLnN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBSb3dEZXRhaWxDb25maWcpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuXHRcdFx0XHRpZiAoY29uZmlnLmVuYWJsZWQgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnR1cm5PbigpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9mZigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8U2VsZWN0ZWRSb3c+KSA9PiB7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2UuY2xvc2UoKTtcblxuXHRcdFx0XHRpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuXG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFx0XHR7IHByb3ZpZGU6IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCB1c2VWYWx1ZTogaXRlbSB9LFxuXHRcdFx0XHRcdFx0eyBwcm92aWRlOiBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZy50ZW1wbGF0ZSB9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2Uub3Blbih0aGlzLmVsZW1lbnRSZWYsIFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQsIHsgaW5qZWN0b3I6IGluamVjdG9yIH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHR1cm5PbigpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSB0dXJuT2ZmKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG59XG4iXX0=