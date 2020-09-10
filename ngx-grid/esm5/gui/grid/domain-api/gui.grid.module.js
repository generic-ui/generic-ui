/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { GuiGridComponent } from '../feature/grid/gui.grid.component';
import { StructureModule } from '../../../structure/core/domain-api/structure.module';
import { GuiGridIdGenerator } from '../feature/grid/register/gui.grid-id.generator';
import { GuiGridRegister } from '../feature/grid/register/gui.grid.register';
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
    GuiGridComponent
];
/** @type {?} */
var providers = (/** @type {?} */ ([
    GuiGridIdGenerator,
    GuiGridRegister
]));
/** @type {?} */
var exportDeclarations = [
    GuiGridComponent
];
/** @type {?} */
var entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
var elementComponents = [
    GuiGridComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9kb21haW4tYXBpL2d1aS5ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRXRGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUFHdkUsT0FBTyxHQUFHO0lBQ2YsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGOztJQUVLLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7Q0FDaEI7O0lBRUssU0FBUyxHQUFHLG1CQUFBO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2YsRUFBbUI7O0lBRWQsa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0NBQ2hCOztJQUVLLGVBQWUsR0FBRyxtQkFBQSxFQUFFLEVBQWM7O0lBRWxDLGlCQUFpQixHQUFHO0lBQ3pCLGdCQUFnQjtDQUNoQjtBQUVEO0lBQUE7SUFjQSxDQUFDO0lBTE8sNkJBQWUsb0JBQU8sZUFBZSxFQUFFO0lBRXZDLGdDQUFrQixvQkFBTyxrQkFBa0IsRUFBRTtJQUU3QywrQkFBaUIsb0JBQU8saUJBQWlCLEVBQUU7O2dCQWJsRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxTQUFBO29CQUNQLFlBQVksY0FBQTtvQkFDWixTQUFTLFdBQUE7b0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZSxpQkFBQTtpQkFDZjs7SUFRRCxvQkFBQztDQUFBLEFBZEQsSUFjQztTQVBZLGFBQWE7OztJQUV6Qiw4QkFBOEM7O0lBRTlDLGlDQUFvRDs7SUFFcEQsZ0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUubW9kdWxlJztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2d1aS5ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHdWlHcmlkUmVnaXN0ZXIgfSBmcm9tICcuLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuXG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdFN0cnVjdHVyZU1vZHVsZS53aXRoQ29uZmlnKHtcblx0XHRjc3NDbGFzc05hbWU6ICdncmlkJyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdGxvZ2dlcnM6IHRydWVcblx0XHR9XG5cdH0pXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0R3VpR3JpZElkR2VuZXJhdG9yLFxuXHRHdWlHcmlkUmVnaXN0ZXJcbl0gYXMgQXJyYXk8UHJvdmlkZXI+O1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cbmNvbnN0IGVsZW1lbnRDb21wb25lbnRzID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdHByb3ZpZGVycyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3VpR3JpZE1vZHVsZSB7XG5cblx0c3RhdGljIGVudHJ5Q29tcG9uZW50cyA9IFsuLi5lbnRyeUNvbXBvbmVudHNdO1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBbLi4uZXhwb3J0RGVjbGFyYXRpb25zXTtcblxuXHRzdGF0aWMgZWxlbWVudENvbXBvbmVudHMgPSBbLi4uZWxlbWVudENvbXBvbmVudHNdO1xufVxuIl19