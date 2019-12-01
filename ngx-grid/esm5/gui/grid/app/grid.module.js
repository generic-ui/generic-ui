/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { GridComponent } from '../ui/grid/grid.component';
import { StructureModule } from '../../../lib/structure/ui/structure.module';
import { GridIdGenerator } from '../ui/grid/register/grid-id.generator';
import { GridRegister } from '../ui/grid/register/grid.register';
/** @type {?} */
var imports = [
    StructureModule.withConfig({
        cssClassName: 'grid',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
/** @type {?} */
var declarations = [
    GridComponent
];
/** @type {?} */
var providers = (/** @type {?} */ ([
    GridIdGenerator,
    GridRegister
]));
/** @type {?} */
var exportDeclarations = [
    GridComponent
];
/** @type {?} */
var entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
var elementComponents = [
    GridComponent
];
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.entryComponents = tslib_1.__spread(entryComponents);
    GridModule.exportDeclarations = tslib_1.__spread(exportDeclarations);
    GridModule.elementComponents = tslib_1.__spread(elementComponents);
    GridModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    providers: providers,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    return GridModule;
}());
export { GridModule };
if (false) {
    /** @type {?} */
    GridModule.entryComponents;
    /** @type {?} */
    GridModule.exportDeclarations;
    /** @type {?} */
    GridModule.elementComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2FwcC9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQUczRCxPQUFPLEdBQUc7SUFDZixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQ3pCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0g7O0lBRUssWUFBWSxHQUFHO0lBQ3BCLGFBQWE7Q0FDYjs7SUFFSyxTQUFTLEdBQUcsbUJBQUE7SUFDakIsZUFBZTtJQUNmLFlBQVk7Q0FDWixFQUFtQjs7SUFFZCxrQkFBa0IsR0FBRztJQUMxQixhQUFhO0NBQ2I7O0lBRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7SUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsYUFBYTtDQUNiO0FBRUQ7SUFBQTtJQWNBLENBQUM7SUFMTywwQkFBZSxvQkFBTyxlQUFlLEVBQUU7SUFFdkMsNkJBQWtCLG9CQUFPLGtCQUFrQixFQUFFO0lBRTdDLDRCQUFpQixvQkFBTyxpQkFBaUIsRUFBRTs7Z0JBYmxELFFBQVEsU0FBQztvQkFDVCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxjQUFBO29CQUNaLFNBQVMsV0FBQTtvQkFDVCxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixlQUFlLGlCQUFBO2lCQUNmOztJQVFELGlCQUFDO0NBQUEsQUFkRCxJQWNDO1NBUFksVUFBVTs7O0lBRXRCLDJCQUE4Qzs7SUFFOUMsOEJBQW9EOztJQUVwRCw2QkFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3VpL2dyaWQvZ3JpZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL3VpL3N0cnVjdHVyZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi91aS9ncmlkL3JlZ2lzdGVyL2dyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEdyaWRSZWdpc3RlciB9IGZyb20gJy4uL3VpL2dyaWQvcmVnaXN0ZXIvZ3JpZC5yZWdpc3Rlcic7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0R3JpZElkR2VuZXJhdG9yLFxuXHRHcmlkUmVnaXN0ZXJcbl0gYXMgQXJyYXk8UHJvdmlkZXI+O1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cbmNvbnN0IGVsZW1lbnRDb21wb25lbnRzID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdHByb3ZpZGVycyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3JpZE1vZHVsZSB7XG5cblx0c3RhdGljIGVudHJ5Q29tcG9uZW50cyA9IFsuLi5lbnRyeUNvbXBvbmVudHNdO1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBbLi4uZXhwb3J0RGVjbGFyYXRpb25zXTtcblxuXHRzdGF0aWMgZWxlbWVudENvbXBvbmVudHMgPSBbLi4uZWxlbWVudENvbXBvbmVudHNdO1xufVxuIl19