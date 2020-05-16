/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricInlineDialogService, InlineDialogPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
import { SchemaWarehouse } from '../../../../../schema/domain-api/schema.warehouse';
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
                placement: InlineDialogPlacement.Top,
                offset: -2,
                theme: _this.structureThemeConverter.convertTheme(theme)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdyRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXBGO0lBQ2tELHdEQUFRO0lBRXpELHNDQUE2QixRQUFrQixFQUMzQix5QkFBMEMsRUFDMUMsdUJBQWdELEVBQ2hELG1CQUE4QztRQUhsRSxZQUlDLGlCQUFPLFNBQ1A7UUFMNEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiwrQkFBeUIsR0FBekIseUJBQXlCLENBQWlCO1FBQzFDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjs7SUFFbEUsQ0FBQzs7Ozs7O0lBRUQsMkNBQUk7Ozs7O0lBQUosVUFBSyxVQUFzQixFQUFFLE1BQStCO1FBQTVELGlCQXVCQzs7WUFyQk0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLFFBQVE7O29CQUNqQixRQUFRLEVBQUUsTUFBTTtpQkFDaEIsQ0FBQztZQUNGLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQixDQUFDO1FBRUYsSUFBSSxDQUFDLHlCQUF5QjthQUM1QixhQUFhLEVBQUU7YUFDZixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBQzdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDhCQUE4QixFQUFFO2dCQUN6RSxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLHFCQUFxQixDQUFDLEdBQUc7Z0JBQ3BDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkFyQ0QsVUFBVTs7OztnQkFYc0IsUUFBUTtnQkFTaEMsZUFBZTtnQkFEZix1QkFBdUI7Z0JBTnZCLHlCQUF5Qjs7SUFpRGxDLG1DQUFDO0NBQUEsQUF4Q0QsQ0FDa0QsUUFBUSxHQXVDekQ7U0F2Q1ksNEJBQTRCOzs7Ozs7SUFFNUIsZ0RBQW1DOzs7OztJQUM1QyxpRUFBMkQ7Ozs7O0lBQzNELCtEQUFpRTs7Ozs7SUFDakUsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSwgSW5saW5lRGlhbG9nUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5OiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXI6IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6ICdjb2x1bW4nLCAvLyBUT0RPXG5cdFx0XHRcdHVzZVZhbHVlOiBjb2x1bW5cblx0XHRcdH1dLFxuXHRcdFx0cGFyZW50OiB0aGlzLmluamVjdG9yXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vblNpbmdsZVRoZW1lKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4oZWxlbWVudFJlZiwgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LCB7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogSW5saW5lRGlhbG9nUGxhY2VtZW50LlRvcCxcblx0XHRcdFx0XHRvZmZzZXQ6IC0yLFxuXHRcdFx0XHRcdHRoZW1lOiB0aGlzLnN0cnVjdHVyZVRoZW1lQ29udmVydGVyLmNvbnZlcnRUaGVtZSh0aGVtZSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblxufVxuIl19