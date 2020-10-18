/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { GuiGridComponent } from '../../feature/grid/gui.grid.component';
import { StructureModule } from '../../../../structure/grid/core/api/structure.module';
import { GuiGridIdGenerator } from '../../feature/grid/register/gui.grid-id.generator';
import { GuiGridRegister } from '../../feature/grid/register/gui.grid.register';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7O0lBRzFFLE9BQU8sR0FBRztJQUNmLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDMUIsWUFBWSxFQUFFLE1BQU07UUFDcEIsa0JBQWtCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUM7Q0FDRjs7SUFFSyxZQUFZLEdBQUc7SUFDcEIsZ0JBQWdCO0NBQ2hCOztJQUVLLFNBQVMsR0FBRyxtQkFBQTtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtDQUNmLEVBQW1COztJQUVkLGtCQUFrQixHQUFHO0lBQzFCLGdCQUFnQjtDQUNoQjs7SUFFSyxlQUFlLEdBQUcsbUJBQUEsRUFBRSxFQUFjOztJQUVsQyxpQkFBaUIsR0FBRztJQUN6QixnQkFBZ0I7Q0FDaEI7QUFFRDtJQUFBO0lBY0EsQ0FBQztJQUxPLDZCQUFlLG9CQUFPLGVBQWUsRUFBRTtJQUV2QyxnQ0FBa0Isb0JBQU8sa0JBQWtCLEVBQUU7SUFFN0MsK0JBQWlCLG9CQUFPLGlCQUFpQixFQUFFOztnQkFibEQsUUFBUSxTQUFDO29CQUNULE9BQU8sU0FBQTtvQkFDUCxZQUFZLGNBQUE7b0JBQ1osU0FBUyxXQUFBO29CQUNULE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWUsaUJBQUE7aUJBQ2Y7O0lBUUQsb0JBQUM7Q0FBQSxBQWRELElBY0M7U0FQWSxhQUFhOzs7SUFFekIsOEJBQThDOztJQUU5QyxpQ0FBb0Q7O0lBRXBELGdDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL2d1aS5ncmlkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL3N0cnVjdHVyZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlcic7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdGNzc0NsYXNzTmFtZTogJ2dyaWQnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdH1cblx0fSlcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHRHdWlHcmlkSWRHZW5lcmF0b3IsXG5cdEd1aUdyaWRSZWdpc3RlclxuXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkTW9kdWxlIHtcblxuXHRzdGF0aWMgZW50cnlDb21wb25lbnRzID0gWy4uLmVudHJ5Q29tcG9uZW50c107XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyBlbGVtZW50Q29tcG9uZW50cyA9IFsuLi5lbGVtZW50Q29tcG9uZW50c107XG59XG4iXX0=