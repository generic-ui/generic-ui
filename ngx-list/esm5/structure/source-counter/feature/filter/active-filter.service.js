/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { Reactive } from '../../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../../../schema/core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../schema/core/domain-read/schema.read-model-root-id';
import { ActiveFilterMenuComponent } from './active-filter-menu.component';
import { StructureId } from '../../../core/api/structure.id';
var ActiveFilterService = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveFilterService, _super);
    function ActiveFilterService(injector, schemaReadModelRepository, structureThemeConverter, fabricDialogService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.schemaReadModelRepository = schemaReadModelRepository;
        _this.structureThemeConverter = structureThemeConverter;
        _this.fabricDialogService = fabricDialogService;
        return _this;
    }
    /**
     * @param {?} readModelId
     * @param {?} structureId
     * @return {?}
     */
    ActiveFilterService.prototype.open = /**
     * @param {?} readModelId
     * @param {?} structureId
     * @return {?}
     */
    function (readModelId, structureId) {
        var _this = this;
        /** @type {?} */
        var injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: SchemaReadModelRootId, useValue: readModelId },
                { provide: StructureId, useValue: structureId }
            ]
        });
        this.schemaReadModelRepository
            .onSingleTheme(readModelId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            _this.fabricDialogService.open(ActiveFilterMenuComponent, {
                injector: injector,
                theme: _this.structureThemeConverter.convertTheme(theme)
            });
        }));
    };
    ActiveFilterService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ActiveFilterService.ctorParameters = function () { return [
        { type: Injector },
        { type: SchemaWarehouse },
        { type: StructureThemeConverter },
        { type: FabricDialogService }
    ]; };
    return ActiveFilterService;
}(Reactive));
export { ActiveFilterService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveFilterService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlLWNvdW50ZXIvZmVhdHVyZS9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0Q7SUFDeUMsK0NBQVE7SUFFaEQsNkJBQTZCLFFBQWtCLEVBQzNCLHlCQUEwQyxFQUMxQyx1QkFBZ0QsRUFDaEQsbUJBQXdDO1FBSDVELFlBSUMsaUJBQU8sU0FDUDtRQUw0QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUI7UUFDMUMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOztJQUU1RCxDQUFDOzs7Ozs7SUFFRCxrQ0FBSTs7Ozs7SUFBSixVQUFLLFdBQWtDLEVBQUUsV0FBd0I7UUFBakUsaUJBc0JDOztZQXBCTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDckIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3pELEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQy9DO1NBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsYUFBYSxDQUFDLFdBQVcsQ0FBQzthQUMxQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBRTdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQ3hELFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoQ0QsVUFBVTs7OztnQkFaVSxRQUFRO2dCQUtwQixlQUFlO2dCQUNmLHVCQUF1QjtnQkFKdkIsbUJBQW1COztJQTZDNUIsMEJBQUM7Q0FBQSxBQW5DRCxDQUN5QyxRQUFRLEdBa0NoRDtTQWxDWSxtQkFBbUI7Ozs7OztJQUVuQix1Q0FBbUM7Ozs7O0lBQzVDLHdEQUEyRDs7Ozs7SUFDM0Qsc0RBQWlFOzs7OztJQUNqRSxrREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9mZWF0dXJlL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5OiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXI6IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RpYWxvZ1NlcnZpY2U6IEZhYnJpY0RpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihyZWFkTW9kZWxJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdXNlVmFsdWU6IHJlYWRNb2RlbElkIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogU3RydWN0dXJlSWQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVJZCB9XG5cdFx0XHRdXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vblNpbmdsZVRoZW1lKHJlYWRNb2RlbElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZmFicmljRGlhbG9nU2VydmljZS5vcGVuKEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQsIHtcblx0XHRcdFx0XHRpbmplY3RvcjogaW5qZWN0b3IsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblxufVxuIl19