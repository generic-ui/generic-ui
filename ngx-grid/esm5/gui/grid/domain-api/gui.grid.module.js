/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { GridComponent } from '../feature/grid/grid.component';
import { StructureModule } from '../../../lib/structure/domain-api/structure.module';
import { GridIdGenerator } from '../feature/grid/register/grid-id.generator';
import { GridRegister } from '../feature/grid/register/grid.register';
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
var GuiGridModule = /** @class */ (function () {
    function GuiGridModule() {
    }
    GuiGridModule.entryComponents = tslib_1.__spread(entryComponents);
    GuiGridModule.exportDeclarations = tslib_1.__spread(exportDeclarations);
    GuiGridModule.elementComponents = tslib_1.__spread(elementComponents);
    GuiGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    providers: providers,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    return GuiGridModule;
}());
export { GuiGridModule };
if (false) {
    /** @type {?} */
    GuiGridModule.entryComponents;
    /** @type {?} */
    GuiGridModule.exportDeclarations;
    /** @type {?} */
    GuiGridModule.elementComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9kb21haW4tYXBpL2d1aS5ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRS9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztJQUdoRSxPQUFPLEdBQUc7SUFDZixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzFCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0Y7O0lBRUssWUFBWSxHQUFHO0lBQ3BCLGFBQWE7Q0FDYjs7SUFFSyxTQUFTLEdBQUcsbUJBQUE7SUFDakIsZUFBZTtJQUNmLFlBQVk7Q0FDWixFQUFtQjs7SUFFZCxrQkFBa0IsR0FBRztJQUMxQixhQUFhO0NBQ2I7O0lBRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7SUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsYUFBYTtDQUNiO0FBRUQ7SUFBQTtJQWNBLENBQUM7SUFMTyw2QkFBZSxvQkFBTyxlQUFlLEVBQUU7SUFFdkMsZ0NBQWtCLG9CQUFPLGtCQUFrQixFQUFFO0lBRTdDLCtCQUFpQixvQkFBTyxpQkFBaUIsRUFBRTs7Z0JBYmxELFFBQVEsU0FBQztvQkFDVCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxjQUFBO29CQUNaLFNBQVMsV0FBQTtvQkFDVCxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixlQUFlLGlCQUFBO2lCQUNmOztJQVFELG9CQUFDO0NBQUEsQUFkRCxJQWNDO1NBUFksYUFBYTs7O0lBRXpCLDhCQUE4Qzs7SUFFOUMsaUNBQW9EOztJQUVwRCxnQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvZ3JpZC9ncmlkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUubW9kdWxlJztcblxuaW1wb3J0IHsgR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2dyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEdyaWRSZWdpc3RlciB9IGZyb20gJy4uL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ncmlkLnJlZ2lzdGVyJztcblxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdEdyaWRJZEdlbmVyYXRvcixcblx0R3JpZFJlZ2lzdGVyXG5dIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXSBhcyBBcnJheTxhbnk+O1xuXG5jb25zdCBlbGVtZW50Q29tcG9uZW50cyA9IFtcblx0R3JpZENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUdyaWRNb2R1bGUge1xuXG5cdHN0YXRpYyBlbnRyeUNvbXBvbmVudHMgPSBbLi4uZW50cnlDb21wb25lbnRzXTtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIGVsZW1lbnRDb21wb25lbnRzID0gWy4uLmVsZW1lbnRDb21wb25lbnRzXTtcbn1cbiJdfQ==