/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GridComponent } from '../feature/grid/grid.component';
import { StructureModule } from '../../../lib/structure/feature-api/structure.module';
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
export class GridModule {
}
GridModule.entryComponents = [...entryComponents];
GridModule.exportDeclarations = [...exportDeclarations];
GridModule.elementComponents = [...elementComponents];
GridModule.decorators = [
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
    GridModule.entryComponents;
    /** @type {?} */
    GridModule.exportDeclarations;
    /** @type {?} */
    GridModule.elementComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUtYXBpL2dyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFFdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7TUFHaEUsT0FBTyxHQUFHO0lBQ2YsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGOztNQUVLLFlBQVksR0FBRztJQUNwQixhQUFhO0NBQ2I7O01BRUssU0FBUyxHQUFHLG1CQUFBO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0NBQ1osRUFBbUI7O01BRWQsa0JBQWtCLEdBQUc7SUFDMUIsYUFBYTtDQUNiOztNQUVLLGVBQWUsR0FBRyxtQkFBQSxFQUFFLEVBQWM7O01BRWxDLGlCQUFpQixHQUFHO0lBQ3pCLGFBQWE7Q0FDYjtBQVNELE1BQU0sT0FBTyxVQUFVOztBQUVmLDBCQUFlLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO0FBRXZDLDZCQUFrQixHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTdDLDRCQUFpQixHQUFHLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDOztZQWJsRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTztnQkFDUCxZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmOzs7O0lBR0EsMkJBQThDOztJQUU5Qyw4QkFBb0Q7O0lBRXBELDZCQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9ncmlkL2dyaWQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUubW9kdWxlJztcblxuaW1wb3J0IHsgR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2dyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEdyaWRSZWdpc3RlciB9IGZyb20gJy4uL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ncmlkLnJlZ2lzdGVyJztcblxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdEdyaWRJZEdlbmVyYXRvcixcblx0R3JpZFJlZ2lzdGVyXG5dIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXSBhcyBBcnJheTxhbnk+O1xuXG5jb25zdCBlbGVtZW50Q29tcG9uZW50cyA9IFtcblx0R3JpZENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRNb2R1bGUge1xuXG5cdHN0YXRpYyBlbnRyeUNvbXBvbmVudHMgPSBbLi4uZW50cnlDb21wb25lbnRzXTtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIGVsZW1lbnRDb21wb25lbnRzID0gWy4uLmVsZW1lbnRDb21wb25lbnRzXTtcbn1cbiJdfQ==