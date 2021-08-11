/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { StructureDialogColumnManagerComponent } from './structure.dialog-column-manager.component';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
var StructureDialogColumnManagerService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDialogColumnManagerService, _super);
    function StructureDialogColumnManagerService(injector, schemaWarehouse, structureThemeConverter, fabricDialogService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.schemaWarehouse = schemaWarehouse;
        _this.structureThemeConverter = structureThemeConverter;
        _this.fabricDialogService = fabricDialogService;
        return _this;
    }
    /**
     * @param {?} compositionId
     * @param {?} readModelId
     * @param {?=} parentInjector
     * @return {?}
     */
    StructureDialogColumnManagerService.prototype.open = /**
     * @param {?} compositionId
     * @param {?} readModelId
     * @param {?=} parentInjector
     * @return {?}
     */
    function (compositionId, readModelId, parentInjector) {
        var _this = this;
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        /** @type {?} */
        var injector = Injector.create({ parent: parentInjector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.schemaWarehouse
            .onSingleTheme(readModelId)
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
        { type: SchemaWarehouse },
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
    StructureDialogColumnManagerService.prototype.schemaWarehouse;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbkYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUlsRjtJQUN5RCwrREFBUTtJQUVoRSw2Q0FBNkIsUUFBa0IsRUFDM0IsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELG1CQUF3QztRQUg1RCxZQUlDLGlCQUFPLFNBQ1A7UUFMNEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOztJQUU1RCxDQUFDOzs7Ozs7O0lBRUQsa0RBQUk7Ozs7OztJQUFKLFVBQUssYUFBNEIsRUFBRSxXQUFrQyxFQUFFLGNBQXlCO1FBQWhHLGlCQW9CQztRQWxCQSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQy9COztZQUVLLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUU5SCxJQUFJLENBQUMsZUFBZTthQUNsQixhQUFhLENBQUMsV0FBVyxDQUFDO2FBQzFCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7WUFFN0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRTtnQkFDcEUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxLQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzthQUN2RCxDQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTlCRCxVQUFVOzs7O2dCQWJVLFFBQVE7Z0JBU3BCLGVBQWU7Z0JBRGYsdUJBQXVCO2dCQU52QixtQkFBbUI7O0lBMkM1QiwwQ0FBQztDQUFBLEFBaENELENBQ3lELFFBQVEsR0ErQmhFO1NBL0JZLG1DQUFtQzs7Ozs7O0lBRW5DLHVEQUFtQzs7Ozs7SUFDNUMsOERBQWlEOzs7OztJQUNqRCxzRUFBaUU7Ozs7O0lBQ2pFLGtFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZS9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHJlYWRNb2RlbElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3IpIHtcblxuXHRcdGlmICghcGFyZW50SW5qZWN0b3IpIHtcblx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHBhcmVudDogcGFyZW50SW5qZWN0b3IsIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tcG9zaXRpb25JZCwgdXNlVmFsdWU6IGNvbXBvc2l0aW9uSWQgfV0gfSk7XG5cblx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZVxuXHRcdFx0Lm9uU2luZ2xlVGhlbWUocmVhZE1vZGVsSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5mYWJyaWNEaWFsb2dTZXJ2aWNlLm9wZW4oU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCwge1xuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdFx0XHR0aGVtZTogdGhpcy5zdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlci5jb252ZXJ0VGhlbWUodGhlbWUpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19