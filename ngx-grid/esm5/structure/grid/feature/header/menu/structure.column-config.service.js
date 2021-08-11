/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricInlineDialogService, FabricPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
var StructureColumnConfigService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigService, _super);
    function StructureColumnConfigService(injector, schemaReadModelRepository, structureThemeConverter, inlineDialogService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.schemaReadModelRepository = schemaReadModelRepository;
        _this.structureThemeConverter = structureThemeConverter;
        _this.inlineDialogService = inlineDialogService;
        return _this;
    }
    /**
     * @param {?} elementRef
     * @param {?} column
     * @return {?}
     */
    StructureColumnConfigService.prototype.open = /**
     * @param {?} elementRef
     * @param {?} column
     * @return {?}
     */
    function (elementRef, column) {
        var _this = this;
        this.close();
        /** @type {?} */
        var injector = Injector.create({
            providers: [{
                    provide: 'column',
                    // TODO
                    useValue: column
                }],
            parent: this.injector
        });
        this.schemaReadModelRepository
            .onSingleTheme()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            _this.inlineDialogService.open(elementRef, StructureColumnConfigComponent, {
                injector: injector,
                placement: FabricPlacement.BOTTOM,
                offset: -34,
                theme: _this.structureThemeConverter.convertTheme(theme),
                customClass: 'gui-inline-dialog-header-menu'
            });
        }));
    };
    /**
     * @return {?}
     */
    StructureColumnConfigService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.inlineDialogService.close();
    };
    StructureColumnConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureColumnConfigService.ctorParameters = function () { return [
        { type: Injector },
        { type: SchemaWarehouse },
        { type: StructureThemeConverter },
        { type: FabricInlineDialogService }
    ]; };
    return StructureColumnConfigService;
}(Reactive));
export { StructureColumnConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.schemaReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.structureThemeConverter;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.inlineDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3JGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFbEY7SUFDa0Qsd0RBQVE7SUFFekQsc0NBQTZCLFFBQWtCLEVBQzNCLHlCQUEwQyxFQUMxQyx1QkFBZ0QsRUFDaEQsbUJBQThDO1FBSGxFLFlBSUMsaUJBQU8sU0FDUDtRQUw0QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUI7UUFDMUMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTJCOztJQUVsRSxDQUFDOzs7Ozs7SUFFRCwyQ0FBSTs7Ozs7SUFBSixVQUFLLFVBQXNCLEVBQUUsTUFBK0I7UUFBNUQsaUJBd0JDO1FBdkJBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDUCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsUUFBUTs7b0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2lCQUNoQixDQUFDO1lBQ0YsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JCLENBQUM7UUFFRixJQUFJLENBQUMseUJBQXlCO2FBQzVCLGFBQWEsRUFBRTthQUNmLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7WUFDN0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsOEJBQThCLEVBQUU7Z0JBQ3pFLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU07Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUN2RCxXQUFXLEVBQUUsK0JBQStCO2FBQzVDLENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkF0Q0QsVUFBVTs7OztnQkFYc0IsUUFBUTtnQkFTaEMsZUFBZTtnQkFEZix1QkFBdUI7Z0JBTnZCLHlCQUF5Qjs7SUFnRGxDLG1DQUFDO0NBQUEsQUF2Q0QsQ0FDa0QsUUFBUSxHQXNDekQ7U0F0Q1ksNEJBQTRCOzs7Ozs7SUFFNUIsZ0RBQW1DOzs7OztJQUM1QyxpRUFBMkQ7Ozs7O0lBQzNELCtEQUFpRTs7Ozs7SUFDakUsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSwgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZS9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeTogU2NoZW1hV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRoZW1lQ29udmVydGVyOiBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2UoKTtcblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6ICdjb2x1bW4nLCAvLyBUT0RPXG5cdFx0XHRcdHVzZVZhbHVlOiBjb2x1bW5cblx0XHRcdH1dLFxuXHRcdFx0cGFyZW50OiB0aGlzLmluamVjdG9yXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vblNpbmdsZVRoZW1lKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4oZWxlbWVudFJlZiwgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LCB7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogRmFicmljUGxhY2VtZW50LkJPVFRPTSxcblx0XHRcdFx0XHRvZmZzZXQ6IC0zNCxcblx0XHRcdFx0XHR0aGVtZTogdGhpcy5zdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlci5jb252ZXJ0VGhlbWUodGhlbWUpLFxuXHRcdFx0XHRcdGN1c3RvbUNsYXNzOiAnZ3VpLWlubGluZS1kaWFsb2ctaGVhZGVyLW1lbnUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxufVxuIl19