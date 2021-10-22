/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GuiGridComponent } from '../../feature/grid/gui.grid.component';
import { StructureModule } from '../../../../structure/grid/core/api/structure.module';
import { GuiGridIdGenerator } from '../../feature/grid/register/gui.grid-id.generator';
import { GuiGridRegister } from '../../feature/grid/register/gui.grid.register';
import { GuiGridColumnComponent } from '../../feature/grid/column/gui.grid-column.component';
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
    GuiGridComponent,
    GuiGridColumnComponent
];
/** @type {?} */
const providers = (/** @type {?} */ ([
    GuiGridIdGenerator,
    GuiGridRegister
]));
/** @type {?} */
const exportDeclarations = [
    GuiGridComponent,
    GuiGridColumnComponent
];
/** @type {?} */
const entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
const elementComponents = [
    GuiGridComponent,
    GuiGridColumnComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7TUFHdkYsT0FBTyxHQUFHO0lBQ2YsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGOztNQUVLLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3RCOztNQUVLLFNBQVMsR0FBRyxtQkFBQTtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtDQUNmLEVBQW1COztNQUVkLGtCQUFrQixHQUFHO0lBQzFCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDdEI7O01BRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7TUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN0QjtBQVNELE1BQU0sT0FBTyxhQUFhOztBQUVsQiw2QkFBZSxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUV2QyxnQ0FBa0IsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztBQUU3QywrQkFBaUIsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQzs7WUFibEQsUUFBUSxTQUFDO2dCQUNULE9BQU87Z0JBQ1AsWUFBWTtnQkFDWixTQUFTO2dCQUNULE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWU7YUFDZjs7OztJQUdBLDhCQUE4Qzs7SUFFOUMsaUNBQW9EOztJQUVwRCxnQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3JpZC9ndWkuZ3JpZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9jb3JlL2FwaS9zdHJ1Y3R1cmUubW9kdWxlJztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2d1aS5ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHdWlHcmlkUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vZ3VpLmdyaWQtY29sdW1uLmNvbXBvbmVudCc7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdGNzc0NsYXNzTmFtZTogJ2dyaWQnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdH1cblx0fSlcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHRHdWlHcmlkSWRHZW5lcmF0b3IsXG5cdEd1aUdyaWRSZWdpc3RlclxuXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnQsXG5cdEd1aUdyaWRDb2x1bW5Db21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkTW9kdWxlIHtcblxuXHRzdGF0aWMgZW50cnlDb21wb25lbnRzID0gWy4uLmVudHJ5Q29tcG9uZW50c107XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyBlbGVtZW50Q29tcG9uZW50cyA9IFsuLi5lbGVtZW50Q29tcG9uZW50c107XG59XG4iXX0=