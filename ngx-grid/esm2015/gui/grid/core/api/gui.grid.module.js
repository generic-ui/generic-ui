import { NgModule } from '@angular/core';
import { GuiGridComponent } from '../../feature/grid/gui.grid.component';
import { StructureModule } from '../../../../structure/grid/core/api/structure.module';
import { GuiGridIdGenerator } from '../../feature/grid/register/gui.grid-id.generator';
import { GuiGridRegister } from '../../feature/grid/register/gui.grid.register';
import { GuiGridColumnComponent } from '../../feature/grid/column/gui.grid-column.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../structure/grid/core/api/structure.module";
const imports = [
    StructureModule.withConfig({
        cssClassName: 'grid',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
const declarations = [
    GuiGridComponent,
    GuiGridColumnComponent
];
const providers = [
    GuiGridIdGenerator,
    GuiGridRegister
];
const exportDeclarations = [
    GuiGridComponent,
    GuiGridColumnComponent
];
const entryComponents = [];
const elementComponents = [
    GuiGridComponent,
    GuiGridColumnComponent
];
export class GuiGridModule {
}
GuiGridModule.entryComponents = Array.from(entryComponents);
GuiGridModule.exportDeclarations = Array.from(exportDeclarations);
GuiGridModule.elementComponents = Array.from(elementComponents);
GuiGridModule.ɵfac = function GuiGridModule_Factory(t) { return new (t || GuiGridModule)(); };
GuiGridModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GuiGridModule });
GuiGridModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: providers, imports: [imports] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiGridModule, [{
        type: NgModule,
        args: [{
                imports,
                declarations,
                providers,
                exports: exportDeclarations,
                entryComponents
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GuiGridModule, { declarations: [GuiGridComponent,
        GuiGridColumnComponent], imports: [i1.StructureModule], exports: [GuiGridComponent,
        GuiGridColumnComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7QUFHN0YsTUFBTSxPQUFPLEdBQUc7SUFDZixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzFCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDdEIsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ0ksQ0FBQztBQUVyQixNQUFNLGtCQUFrQixHQUFHO0lBQzFCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDdEIsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHLEVBQWdCLENBQUM7QUFFekMsTUFBTSxpQkFBaUIsR0FBRztJQUN6QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3RCLENBQUM7QUFTRixNQUFNLE9BQU8sYUFBYTs7QUFFbEIsNkJBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTlDLGdDQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVwRCwrQkFBaUIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7MEVBTjdDLGFBQWE7K0RBQWIsYUFBYTtvRUFKekIsU0FBUyxZQUZULE9BQU87dUZBTUssYUFBYTtjQVB6QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTztnQkFDUCxZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmOzt3RkFDWSxhQUFhLG1CQTVCekIsZ0JBQWdCO1FBQ2hCLHNCQUFzQiw0Q0FTdEIsZ0JBQWdCO1FBQ2hCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL2d1aS5ncmlkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL3N0cnVjdHVyZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50JztcblxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50LFxuXHRHdWlHcmlkQ29sdW1uQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdEd1aUdyaWRJZEdlbmVyYXRvcixcblx0R3VpR3JpZFJlZ2lzdGVyXG5dIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50LFxuXHRHdWlHcmlkQ29sdW1uQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXSBhcyBBcnJheTxhbnk+O1xuXG5jb25zdCBlbGVtZW50Q29tcG9uZW50cyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUdyaWRNb2R1bGUge1xuXG5cdHN0YXRpYyBlbnRyeUNvbXBvbmVudHMgPSBBcnJheS5mcm9tKGVudHJ5Q29tcG9uZW50cyk7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IEFycmF5LmZyb20oZXhwb3J0RGVjbGFyYXRpb25zKTtcblxuXHRzdGF0aWMgZWxlbWVudENvbXBvbmVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnRDb21wb25lbnRzKTtcbn1cbiJdfQ==