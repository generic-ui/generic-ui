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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHckYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVsRjtJQUNrRCx3REFBUTtJQUV6RCxzQ0FBNkIsUUFBa0IsRUFDM0IseUJBQTBDLEVBQzFDLHVCQUFnRCxFQUNoRCxtQkFBOEM7UUFIbEUsWUFJQyxpQkFBTyxTQUNQO1FBTDRCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUFpQjtRQUMxQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7O0lBRWxFLENBQUM7Ozs7OztJQUVELDJDQUFJOzs7OztJQUFKLFVBQUssVUFBc0IsRUFBRSxNQUErQjtRQUE1RCxpQkF3QkM7O1lBdEJNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxRQUFROztvQkFDakIsUUFBUSxFQUFFLE1BQU07aUJBQ2hCLENBQUM7WUFDRixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDckIsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsYUFBYSxFQUFFO2FBQ2YsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjtZQUM3QixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTtnQkFDekUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxHQUFHO2dCQUNwQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNWLEtBQUssRUFBRSxLQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDdkQsV0FBVyxFQUFFLCtCQUErQjthQUM1QyxDQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0Q0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBdENELFVBQVU7Ozs7Z0JBWHNCLFFBQVE7Z0JBU2hDLGVBQWU7Z0JBRGYsdUJBQXVCO2dCQU52Qix5QkFBeUI7O0lBa0RsQyxtQ0FBQztDQUFBLEFBekNELENBQ2tELFFBQVEsR0F3Q3pEO1NBeENZLDRCQUE0Qjs7Ozs7O0lBRTVCLGdEQUFtQzs7Ozs7SUFDNUMsaUVBQTJEOzs7OztJQUMzRCwrREFBaUU7Ozs7O0lBQ2pFLDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UsIElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogJ2NvbHVtbicsIC8vIFRPRE9cblx0XHRcdFx0dXNlVmFsdWU6IGNvbHVtblxuXHRcdFx0fV0sXG5cdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3Jcblx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uU2luZ2xlVGhlbWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2Uub3BlbihlbGVtZW50UmVmLCBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsIHtcblx0XHRcdFx0XHRpbmplY3RvcjogaW5qZWN0b3IsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQuVG9wLFxuXHRcdFx0XHRcdG9mZnNldDogLTIsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKSxcblx0XHRcdFx0XHRjdXN0b21DbGFzczogJ2d1aS1pbmxpbmUtZGlhbG9nLWhlYWRlci1tZW51J1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXG59XG4iXX0=