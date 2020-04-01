/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { StructureDialogColumnManagerComponent } from './structure.dialog-column-manager.component';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
var StructureDialogColumnManagerService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDialogColumnManagerService, _super);
    function StructureDialogColumnManagerService(injector, schemaReadModelService, structureThemeConverter, fabricDialogService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.schemaReadModelService = schemaReadModelService;
        _this.structureThemeConverter = structureThemeConverter;
        _this.fabricDialogService = fabricDialogService;
        return _this;
    }
    /**
     * @param {?} compositionId
     * @param {?} structureId
     * @return {?}
     */
    StructureDialogColumnManagerService.prototype.open = /**
     * @param {?} compositionId
     * @param {?} structureId
     * @return {?}
     */
    function (compositionId, structureId) {
        var _this = this;
        /** @type {?} */
        var injector = Injector.create({ parent: this.injector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.schemaReadModelService
            .onSingleTheme(structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            _this.fabricDialogService.open(StructureDialogColumnManagerComponent, {
                injector: injector,
                theme: _this.structureThemeConverter.convertTheme(theme)
            });
        }));
    };
    StructureDialogColumnManagerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureDialogColumnManagerService.ctorParameters = function () { return [
        { type: Injector },
        { type: SchemaReadModelService },
        { type: StructureThemeConverter },
        { type: FabricDialogService }
    ]; };
    return StructureDialogColumnManagerService;
}(Reactive));
export { StructureDialogColumnManagerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.schemaReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSWpGO0lBQ3lELCtEQUFRO0lBRWhFLDZDQUE2QixRQUFrQixFQUMzQixzQkFBOEMsRUFDOUMsdUJBQWdELEVBQ2hELG1CQUF3QztRQUg1RCxZQUlDLGlCQUFPLFNBQ1A7UUFMNEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjs7SUFFNUQsQ0FBQzs7Ozs7O0lBRUQsa0RBQUk7Ozs7O0lBQUosVUFBSyxhQUE0QixFQUFFLFdBQXdCO1FBQTNELGlCQWdCQzs7WUFkTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRTdILElBQUksQ0FBQyxzQkFBc0I7YUFDekIsYUFBYSxDQUFDLFdBQVcsQ0FBQzthQUMxQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBRTdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUU7Z0JBQ3BFLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkExQkQsVUFBVTs7OztnQkFiVSxRQUFRO2dCQU1wQixzQkFBc0I7Z0JBR3RCLHVCQUF1QjtnQkFQdkIsbUJBQW1COztJQXVDNUIsMENBQUM7Q0FBQSxBQTVCRCxDQUN5RCxRQUFRLEdBMkJoRTtTQTNCWSxtQ0FBbUM7Ozs7OztJQUVuQyx1REFBbUM7Ozs7O0lBQzVDLHFFQUErRDs7Ozs7SUFDL0Qsc0VBQWlFOzs7OztJQUNqRSxrRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NjaGVtYS9zY2hlbWEtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsU2VydmljZTogU2NoZW1hUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoeyBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tcG9zaXRpb25JZCwgdXNlVmFsdWU6IGNvbXBvc2l0aW9uSWQgfV0gfSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNpbmdsZVRoZW1lKHN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuZmFicmljRGlhbG9nU2VydmljZS5vcGVuKFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQsIHtcblx0XHRcdFx0XHRpbmplY3RvcjogaW5qZWN0b3IsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==