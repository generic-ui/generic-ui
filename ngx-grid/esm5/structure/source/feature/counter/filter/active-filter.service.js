/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { StructureThemeConverter } from '../../../../grid/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { ActiveFilterMenuComponent } from './active-filter-menu.component';
import { StructureId } from '../../../../core/api/structure.id';
import { Reactive } from '@generic-ui/hermes';
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
            .onceTheme(readModelId)
            .pipe(this.hermesTakeUntil())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRWpHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUM7SUFDeUMsK0NBQVE7SUFFaEQsNkJBQTZCLFFBQWtCLEVBQzNCLHlCQUEwQyxFQUMxQyx1QkFBZ0QsRUFDaEQsbUJBQXdDO1FBSDVELFlBSUMsaUJBQU8sU0FDUDtRQUw0QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUI7UUFDMUMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOztJQUU1RCxDQUFDOzs7Ozs7SUFFRCxrQ0FBSTs7Ozs7SUFBSixVQUFLLFdBQWtDLEVBQUUsV0FBd0I7UUFBakUsaUJBc0JDOztZQXBCTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDckIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3pELEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQy9DO1NBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsU0FBUyxDQUFDLFdBQVcsQ0FBQzthQUN0QixJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBRTdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQ3hELFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoQ0QsVUFBVTs7OztnQkFiVSxRQUFRO2dCQUlwQixlQUFlO2dCQUNmLHVCQUF1QjtnQkFIdkIsbUJBQW1COztJQTZDNUIsMEJBQUM7Q0FBQSxBQWxDRCxDQUN5QyxRQUFRLEdBaUNoRDtTQWpDWSxtQkFBbUI7Ozs7OztJQUVuQix1Q0FBbUM7Ozs7O0lBQzVDLHdEQUEyRDs7Ozs7SUFDM0Qsc0RBQWlFOzs7OztJQUNqRSxrREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2ZlYXR1cmUvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKHJlYWRNb2RlbElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0cGFyZW50OiB0aGlzLmluamVjdG9yLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCB1c2VWYWx1ZTogcmVhZE1vZGVsSWQgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVJZCwgdXNlVmFsdWU6IHN0cnVjdHVyZUlkIH1cblx0XHRcdF1cblx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uY2VUaGVtZShyZWFkTW9kZWxJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblxuXHRcdFx0XHR0aGlzLmZhYnJpY0RpYWxvZ1NlcnZpY2Uub3BlbihBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50LCB7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0XHRcdHRoZW1lOiB0aGlzLnN0cnVjdHVyZVRoZW1lQ29udmVydGVyLmNvbnZlcnRUaGVtZSh0aGVtZSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=