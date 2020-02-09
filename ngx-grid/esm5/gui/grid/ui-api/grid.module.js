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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpLWFwaS9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQUczRCxPQUFPLEdBQUc7SUFDZixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzFCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0Y7O0lBRUssWUFBWSxHQUFHO0lBQ3BCLGFBQWE7Q0FDYjs7SUFFSyxTQUFTLEdBQUcsbUJBQUE7SUFDakIsZUFBZTtJQUNmLFlBQVk7Q0FDWixFQUFtQjs7SUFFZCxrQkFBa0IsR0FBRztJQUMxQixhQUFhO0NBQ2I7O0lBRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7SUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsYUFBYTtDQUNiO0FBRUQ7SUFBQTtJQWNBLENBQUM7SUFMTywwQkFBZSxvQkFBTyxlQUFlLEVBQUU7SUFFdkMsNkJBQWtCLG9CQUFPLGtCQUFrQixFQUFFO0lBRTdDLDRCQUFpQixvQkFBTyxpQkFBaUIsRUFBRTs7Z0JBYmxELFFBQVEsU0FBQztvQkFDVCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxjQUFBO29CQUNaLFNBQVMsV0FBQTtvQkFDVCxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixlQUFlLGlCQUFBO2lCQUNmOztJQVFELGlCQUFDO0NBQUEsQUFkRCxJQWNDO1NBUFksVUFBVTs7O0lBRXRCLDJCQUE4Qzs7SUFFOUMsOEJBQW9EOztJQUVwRCw2QkFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3VpL2dyaWQvZ3JpZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL3VpL3N0cnVjdHVyZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi91aS9ncmlkL3JlZ2lzdGVyL2dyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEdyaWRSZWdpc3RlciB9IGZyb20gJy4uL3VpL2dyaWQvcmVnaXN0ZXIvZ3JpZC5yZWdpc3Rlcic7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdGNzc0NsYXNzTmFtZTogJ2dyaWQnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdH1cblx0fSlcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3JpZENvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHRHcmlkSWRHZW5lcmF0b3IsXG5cdEdyaWRSZWdpc3RlclxuXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3JpZENvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEdyaWRDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHcmlkTW9kdWxlIHtcblxuXHRzdGF0aWMgZW50cnlDb21wb25lbnRzID0gWy4uLmVudHJ5Q29tcG9uZW50c107XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyBlbGVtZW50Q29tcG9uZW50cyA9IFsuLi5lbGVtZW50Q29tcG9uZW50c107XG59XG4iXX0=