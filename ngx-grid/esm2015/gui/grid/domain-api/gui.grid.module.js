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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9kb21haW4tYXBpL2d1aS5ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRS9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztNQUdoRSxPQUFPLEdBQUc7SUFDZixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzFCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0Y7O01BRUssWUFBWSxHQUFHO0lBQ3BCLGFBQWE7Q0FDYjs7TUFFSyxTQUFTLEdBQUcsbUJBQUE7SUFDakIsZUFBZTtJQUNmLFlBQVk7Q0FDWixFQUFtQjs7TUFFZCxrQkFBa0IsR0FBRztJQUMxQixhQUFhO0NBQ2I7O01BRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7TUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsYUFBYTtDQUNiO0FBU0QsTUFBTSxPQUFPLGFBQWE7O0FBRWxCLDZCQUFlLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO0FBRXZDLGdDQUFrQixHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTdDLCtCQUFpQixHQUFHLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDOztZQWJsRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTztnQkFDUCxZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmOzs7O0lBR0EsOEJBQThDOztJQUU5QyxpQ0FBb0Q7O0lBRXBELGdDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciwgQ29tcGlsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvZ3JpZC9ncmlkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUubW9kdWxlJztcblxuaW1wb3J0IHsgR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2dyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEdyaWRSZWdpc3RlciB9IGZyb20gJy4uL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ncmlkLnJlZ2lzdGVyJztcblxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdEdyaWRJZEdlbmVyYXRvcixcblx0R3JpZFJlZ2lzdGVyXG5dIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXSBhcyBBcnJheTxhbnk+O1xuXG5jb25zdCBlbGVtZW50Q29tcG9uZW50cyA9IFtcblx0R3JpZENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUdyaWRNb2R1bGUge1xuXG5cdHN0YXRpYyBlbnRyeUNvbXBvbmVudHMgPSBbLi4uZW50cnlDb21wb25lbnRzXTtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIGVsZW1lbnRDb21wb25lbnRzID0gWy4uLmVsZW1lbnRDb21wb25lbnRzXTtcbn1cbiJdfQ==