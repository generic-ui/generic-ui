/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GuiGridComponent } from '../../feature/grid/gui.grid.component';
import { StructureModule } from '../../../../structure/grid/core/api/structure.module';
import { GuiGridIdGenerator } from '../../feature/grid/register/gui.grid-id.generator';
import { GuiGridRegister } from '../../feature/grid/register/gui.grid.register';
/** @type {?} */
const imports = [
    StructureModule.withConfig({
        cssClassName: 'grid',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
/** @type {?} */
const declarations = [
    GuiGridComponent
];
/** @type {?} */
const providers = (/** @type {?} */ ([
    GuiGridIdGenerator,
    GuiGridRegister
]));
/** @type {?} */
const exportDeclarations = [
    GuiGridComponent
];
/** @type {?} */
const entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
const elementComponents = [
    GuiGridComponent
];
export class GuiGridModule {
}
GuiGridModule.entryComponents = [...entryComponents];
GuiGridModule.exportDeclarations = [...exportDeclarations];
GuiGridModule.elementComponents = [...elementComponents];
GuiGridModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations,
                providers,
                exports: exportDeclarations,
                entryComponents
            },] }
];
if (false) {
    /** @type {?} */
    GuiGridModule.entryComponents;
    /** @type {?} */
    GuiGridModule.exportDeclarations;
    /** @type {?} */
    GuiGridModule.elementComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7TUFHMUUsT0FBTyxHQUFHO0lBQ2YsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGOztNQUVLLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7Q0FDaEI7O01BRUssU0FBUyxHQUFHLG1CQUFBO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2YsRUFBbUI7O01BRWQsa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0NBQ2hCOztNQUVLLGVBQWUsR0FBRyxtQkFBQSxFQUFFLEVBQWM7O01BRWxDLGlCQUFpQixHQUFHO0lBQ3pCLGdCQUFnQjtDQUNoQjtBQVNELE1BQU0sT0FBTyxhQUFhOztBQUVsQiw2QkFBZSxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUV2QyxnQ0FBa0IsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztBQUU3QywrQkFBaUIsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQzs7WUFibEQsUUFBUSxTQUFDO2dCQUNULE9BQU87Z0JBQ1AsWUFBWTtnQkFDWixTQUFTO2dCQUNULE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWU7YUFDZjs7OztJQUdBLDhCQUE4Qzs7SUFFOUMsaUNBQW9EOztJQUVwRCxnQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3JpZC9ndWkuZ3JpZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9jb3JlL2FwaS9zdHJ1Y3R1cmUubW9kdWxlJztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2d1aS5ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHdWlHcmlkUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuXG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdFN0cnVjdHVyZU1vZHVsZS53aXRoQ29uZmlnKHtcblx0XHRjc3NDbGFzc05hbWU6ICdncmlkJyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdGxvZ2dlcnM6IHRydWVcblx0XHR9XG5cdH0pXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0R3VpR3JpZElkR2VuZXJhdG9yLFxuXHRHdWlHcmlkUmVnaXN0ZXJcbl0gYXMgQXJyYXk8UHJvdmlkZXI+O1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cbmNvbnN0IGVsZW1lbnRDb21wb25lbnRzID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdHByb3ZpZGVycyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3VpR3JpZE1vZHVsZSB7XG5cblx0c3RhdGljIGVudHJ5Q29tcG9uZW50cyA9IFsuLi5lbnRyeUNvbXBvbmVudHNdO1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBbLi4uZXhwb3J0RGVjbGFyYXRpb25zXTtcblxuXHRzdGF0aWMgZWxlbWVudENvbXBvbmVudHMgPSBbLi4uZWxlbWVudENvbXBvbmVudHNdO1xufVxuIl19