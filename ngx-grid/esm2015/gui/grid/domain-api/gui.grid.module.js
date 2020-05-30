/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GridComponent } from '../feature/grid/grid.component';
import { StructureModule } from '../../../lib/structure/domain-api/structure.module';
import { GridIdGenerator } from '../feature/grid/register/grid-id.generator';
import { GridRegister } from '../feature/grid/register/grid.register';
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
    GridComponent
];
/** @type {?} */
const providers = (/** @type {?} */ ([
    GridIdGenerator,
    GridRegister
]));
/** @type {?} */
const exportDeclarations = [
    GridComponent
];
/** @type {?} */
const entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
const elementComponents = [
    GridComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9kb21haW4tYXBpL2d1aS5ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7O01BR2hFLE9BQU8sR0FBRztJQUNmLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDMUIsWUFBWSxFQUFFLE1BQU07UUFDcEIsa0JBQWtCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUM7Q0FDRjs7TUFFSyxZQUFZLEdBQUc7SUFDcEIsYUFBYTtDQUNiOztNQUVLLFNBQVMsR0FBRyxtQkFBQTtJQUNqQixlQUFlO0lBQ2YsWUFBWTtDQUNaLEVBQW1COztNQUVkLGtCQUFrQixHQUFHO0lBQzFCLGFBQWE7Q0FDYjs7TUFFSyxlQUFlLEdBQUcsbUJBQUEsRUFBRSxFQUFjOztNQUVsQyxpQkFBaUIsR0FBRztJQUN6QixhQUFhO0NBQ2I7QUFTRCxNQUFNLE9BQU8sYUFBYTs7QUFFbEIsNkJBQWUsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7QUFFdkMsZ0NBQWtCLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUM7QUFFN0MsK0JBQWlCLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUM7O1lBYmxELFFBQVEsU0FBQztnQkFDVCxPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixlQUFlO2FBQ2Y7Ozs7SUFHQSw4QkFBOEM7O0lBRTlDLGlDQUFvRDs7SUFFcEQsZ0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2dyaWQvZ3JpZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLm1vZHVsZSc7XG5cbmltcG9ydCB7IEdyaWRJZEdlbmVyYXRvciB9IGZyb20gJy4uL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHcmlkUmVnaXN0ZXIgfSBmcm9tICcuLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3JpZC5yZWdpc3Rlcic7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdGNzc0NsYXNzTmFtZTogJ2dyaWQnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdH1cblx0fSlcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3JpZENvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHRHcmlkSWRHZW5lcmF0b3IsXG5cdEdyaWRSZWdpc3RlclxuXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3JpZENvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEdyaWRDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkTW9kdWxlIHtcblxuXHRzdGF0aWMgZW50cnlDb21wb25lbnRzID0gWy4uLmVudHJ5Q29tcG9uZW50c107XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyBlbGVtZW50Q29tcG9uZW50cyA9IFsuLi5lbGVtZW50Q29tcG9uZW50c107XG59XG4iXX0=