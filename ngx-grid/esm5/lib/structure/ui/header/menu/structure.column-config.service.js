/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricInlineDialogService, InlineDialogPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureThemeConverter } from '../../schema/structure.theme.converter';
var StructureColumnConfigService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigService, _super);
    function StructureColumnConfigService(injector, schemaReadModelService, structureThemeConverter, inlineDialogService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.schemaReadModelService = schemaReadModelService;
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
        this.schemaReadModelService
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
        { type: SchemaReadModelService },
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
    StructureColumnConfigService.prototype.schemaReadModelService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGO0lBQ2tELHdEQUFRO0lBRXpELHNDQUE2QixRQUFrQixFQUMzQixzQkFBOEMsRUFDOUMsdUJBQWdELEVBQ2hELG1CQUE4QztRQUhsRSxZQUlDLGlCQUFPLFNBQ1A7UUFMNEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjs7SUFFbEUsQ0FBQzs7Ozs7O0lBRUQsMkNBQUk7Ozs7O0lBQUosVUFBSyxVQUFzQixFQUFFLE1BQStCO1FBQTVELGlCQXVCQzs7WUFyQk0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLFFBQVE7O29CQUNqQixRQUFRLEVBQUUsTUFBTTtpQkFDaEIsQ0FBQztZQUNGLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQixDQUFDO1FBRUYsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixhQUFhLEVBQUU7YUFDZixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBQzdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDhCQUE4QixFQUFFO2dCQUN6RSxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLHFCQUFxQixDQUFDLEdBQUc7Z0JBQ3BDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkFyQ0QsVUFBVTs7OztnQkFYc0IsUUFBUTtnQkFPaEMsc0JBQXNCO2dCQUV0Qix1QkFBdUI7Z0JBUHZCLHlCQUF5Qjs7SUFpRGxDLG1DQUFDO0NBQUEsQUF4Q0QsQ0FDa0QsUUFBUSxHQXVDekQ7U0F2Q1ksNEJBQTRCOzs7Ozs7SUFFNUIsZ0RBQW1DOzs7OztJQUM1Qyw4REFBK0Q7Ozs7O0lBQy9ELCtEQUFpRTs7Ozs7SUFDakUsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSwgSW5saW5lRGlhbG9nUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zY2hlbWEvc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXI6IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6ICdjb2x1bW4nLCAvLyBUT0RPXG5cdFx0XHRcdHVzZVZhbHVlOiBjb2x1bW5cblx0XHRcdH1dLFxuXHRcdFx0cGFyZW50OiB0aGlzLmluamVjdG9yXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNpbmdsZVRoZW1lKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4oZWxlbWVudFJlZiwgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LCB7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogSW5saW5lRGlhbG9nUGxhY2VtZW50LlRvcCxcblx0XHRcdFx0XHRvZmZzZXQ6IC0yLFxuXHRcdFx0XHRcdHRoZW1lOiB0aGlzLnN0cnVjdHVyZVRoZW1lQ29udmVydGVyLmNvbnZlcnRUaGVtZSh0aGVtZSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblxufVxuIl19