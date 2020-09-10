/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaWarehouse } from '../../../domain-api/schema.warehouse';
import { StructureThemeConverter } from '../../../../structure/core/feature/schema/structure.theme.converter';
import { SchemaReadModelRootId } from '../../../domain-api/read/schema.read-model-root-id';
import { StructureDialogSchemaManagerComponent } from './structure.dialog-schema-manager.component';
import { Reactive } from '../../../../common/cdk/reactive';
var StructureDialogSchemaManagerService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDialogSchemaManagerService, _super);
    function StructureDialogSchemaManagerService(injector, schemaReadModelRepository, structureThemeConverter, fabricDialogService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.schemaReadModelRepository = schemaReadModelRepository;
        _this.structureThemeConverter = structureThemeConverter;
        _this.fabricDialogService = fabricDialogService;
        return _this;
    }
    /**
     * @param {?} readModelId
     * @return {?}
     */
    StructureDialogSchemaManagerService.prototype.open = /**
     * @param {?} readModelId
     * @return {?}
     */
    function (readModelId) {
        var _this = this;
        /** @type {?} */
        var injector = Injector.create({
            parent: this.injector,
            providers: [{ provide: SchemaReadModelRootId, useValue: readModelId }]
        });
        this.schemaReadModelRepository
            .onSingleTheme(readModelId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            _this.fabricDialogService.open(StructureDialogSchemaManagerComponent, {
                injector: injector,
                theme: _this.structureThemeConverter.convertTheme(theme)
            });
        }));
    };
    StructureDialogSchemaManagerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureDialogSchemaManagerService.ctorParameters = function () { return [
        { type: Injector },
        { type: SchemaWarehouse },
        { type: StructureThemeConverter },
        { type: FabricDialogService }
    ]; };
    return StructureDialogSchemaManagerService;
}(Reactive));
export { StructureDialogSchemaManagerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFM0YsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzNEO0lBQ3lELCtEQUFRO0lBRWhFLDZDQUE2QixRQUFrQixFQUMzQix5QkFBMEMsRUFDMUMsdUJBQWdELEVBQ2hELG1CQUF3QztRQUg1RCxZQUlDLGlCQUFPLFNBQ1A7UUFMNEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiwrQkFBeUIsR0FBekIseUJBQXlCLENBQWlCO1FBQzFDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjs7SUFFNUQsQ0FBQzs7Ozs7SUFFRCxrREFBSTs7OztJQUFKLFVBQUssV0FBa0M7UUFBdkMsaUJBbUJDOztZQWpCTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDckIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQ3RFLENBQUM7UUFFRixJQUFJLENBQUMseUJBQXlCO2FBQzVCLGFBQWEsQ0FBQyxXQUFXLENBQUM7YUFDMUIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjtZQUU3QixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxFQUFFO2dCQUNwRSxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0JELFVBQVU7Ozs7Z0JBWlUsUUFBUTtnQkFJcEIsZUFBZTtnQkFDZix1QkFBdUI7Z0JBSHZCLG1CQUFtQjs7SUF3QzVCLDBDQUFDO0NBQUEsQUE5QkQsQ0FDeUQsUUFBUSxHQTZCaEU7U0E3QlksbUNBQW1DOzs7Ozs7SUFFbkMsdURBQW1DOzs7OztJQUM1Qyx3RUFBMkQ7Ozs7O0lBQzNELHNFQUFpRTs7Ozs7SUFDakUsa0VBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKHJlYWRNb2RlbElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCB1c2VWYWx1ZTogcmVhZE1vZGVsSWQgfV1cblx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uU2luZ2xlVGhlbWUocmVhZE1vZGVsSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5mYWJyaWNEaWFsb2dTZXJ2aWNlLm9wZW4oU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCwge1xuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdFx0XHR0aGVtZTogdGhpcy5zdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlci5jb252ZXJ0VGhlbWUodGhlbWUpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==