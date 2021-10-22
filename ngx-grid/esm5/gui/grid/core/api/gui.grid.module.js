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
import { GuiGridColumnComponent } from '../../feature/grid/column/gui.grid-column.component';
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
    GuiGridComponent,
    GuiGridColumnComponent
];
/** @type {?} */
var providers = (/** @type {?} */ ([
    GuiGridIdGenerator,
    GuiGridRegister
]));
/** @type {?} */
var exportDeclarations = [
    GuiGridComponent,
    GuiGridColumnComponent
];
/** @type {?} */
var entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
var elementComponents = [
    GuiGridComponent,
    GuiGridColumnComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7O0lBR3ZGLE9BQU8sR0FBRztJQUNmLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDMUIsWUFBWSxFQUFFLE1BQU07UUFDcEIsa0JBQWtCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUM7Q0FDRjs7SUFFSyxZQUFZLEdBQUc7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN0Qjs7SUFFSyxTQUFTLEdBQUcsbUJBQUE7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDZixFQUFtQjs7SUFFZCxrQkFBa0IsR0FBRztJQUMxQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3RCOztJQUVLLGVBQWUsR0FBRyxtQkFBQSxFQUFFLEVBQWM7O0lBRWxDLGlCQUFpQixHQUFHO0lBQ3pCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDdEI7QUFFRDtJQUFBO0lBY0EsQ0FBQztJQUxPLDZCQUFlLG9CQUFPLGVBQWUsRUFBRTtJQUV2QyxnQ0FBa0Isb0JBQU8sa0JBQWtCLEVBQUU7SUFFN0MsK0JBQWlCLG9CQUFPLGlCQUFpQixFQUFFOztnQkFibEQsUUFBUSxTQUFDO29CQUNULE9BQU8sU0FBQTtvQkFDUCxZQUFZLGNBQUE7b0JBQ1osU0FBUyxXQUFBO29CQUNULE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWUsaUJBQUE7aUJBQ2Y7O0lBUUQsb0JBQUM7Q0FBQSxBQWRELElBY0M7U0FQWSxhQUFhOzs7SUFFekIsOEJBQThDOztJQUU5QyxpQ0FBb0Q7O0lBRXBELGdDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL2d1aS5ncmlkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL3N0cnVjdHVyZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50JztcblxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50LFxuXHRHdWlHcmlkQ29sdW1uQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdEd1aUdyaWRJZEdlbmVyYXRvcixcblx0R3VpR3JpZFJlZ2lzdGVyXG5dIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50LFxuXHRHdWlHcmlkQ29sdW1uQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXSBhcyBBcnJheTxhbnk+O1xuXG5jb25zdCBlbGVtZW50Q29tcG9uZW50cyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUdyaWRNb2R1bGUge1xuXG5cdHN0YXRpYyBlbnRyeUNvbXBvbmVudHMgPSBbLi4uZW50cnlDb21wb25lbnRzXTtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIGVsZW1lbnRDb21wb25lbnRzID0gWy4uLmVsZW1lbnRDb21wb25lbnRzXTtcbn1cbiJdfQ==