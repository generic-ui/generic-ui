import { NgModule } from '@angular/core';
import { GuiGridComponent } from '../../feature/gui.grid.component';
import { GridViewFeatureModule } from '../../../../../feature-view/grid-view/src/grid-view.feature-module';
import { GuiGridIdGenerator } from '../../feature/register/gui.grid-id.generator';
import { GuiGridRegister } from '../../feature/register/gui.grid.register';
import { GuiGridColumnComponent } from '../../feature/column/gui.grid-column.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../feature-view/grid-view/src/grid-view.feature-module";
const imports = [
    GridViewFeatureModule.withConfig({
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
const elementComponents = [
    GuiGridComponent,
    GuiGridColumnComponent
];
export class GuiGridModule {
    static exportDeclarations = Array.from(exportDeclarations);
    static elementComponents = Array.from(elementComponents);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: GuiGridModule, declarations: [GuiGridComponent,
            GuiGridColumnComponent], imports: [i1.GridViewFeatureModule], exports: [GuiGridComponent,
            GuiGridColumnComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiGridModule, providers: providers, imports: [imports] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports,
                    declarations,
                    providers,
                    exports: exportDeclarations
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9zcmMvY29yZS9hcGkvZ3VpLmdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFFM0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFHeEYsTUFBTSxPQUFPLEdBQUc7SUFDZixxQkFBcUIsQ0FBQyxVQUFVLENBQUM7UUFDaEMsWUFBWSxFQUFFLE1BQU07UUFDcEIsa0JBQWtCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUc7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN0QixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUc7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDSSxDQUFDO0FBRXJCLE1BQU0sa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN0QixDQUFDO0FBRUYsTUFBTSxpQkFBaUIsR0FBRztJQUN6QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3RCLENBQUM7QUFRRixNQUFNLE9BQU8sYUFBYTtJQUV6QixNQUFNLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRTNELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7dUdBSjdDLGFBQWE7d0dBQWIsYUFBYSxpQkF6QnpCLGdCQUFnQjtZQUNoQixzQkFBc0Isa0RBU3RCLGdCQUFnQjtZQUNoQixzQkFBc0I7d0dBY1YsYUFBYSxhQUh6QixTQUFTLFlBRlQsT0FBTzs7MkZBS0ssYUFBYTtrQkFOekIsUUFBUTttQkFBQztvQkFDVCxPQUFPO29CQUNQLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxPQUFPLEVBQUUsa0JBQWtCO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ndWkuZ3JpZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBHcmlkVmlld0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9ncmlkLXZpZXcuZmVhdHVyZS1tb2R1bGUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3JlZ2lzdGVyL2d1aS5ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHdWlHcmlkUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3JlZ2lzdGVyL2d1aS5ncmlkLnJlZ2lzdGVyJztcbmltcG9ydCB7IEd1aUdyaWRDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbHVtbi9ndWkuZ3JpZC1jb2x1bW4uY29tcG9uZW50JztcblxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRHcmlkVmlld0ZlYXR1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50LFxuXHRHdWlHcmlkQ29sdW1uQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdEd1aUdyaWRJZEdlbmVyYXRvcixcblx0R3VpR3JpZFJlZ2lzdGVyXG5dIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlHcmlkQ29tcG9uZW50LFxuXHRHdWlHcmlkQ29sdW1uQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbGVtZW50Q29tcG9uZW50cyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRwcm92aWRlcnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkTW9kdWxlIHtcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gQXJyYXkuZnJvbShleHBvcnREZWNsYXJhdGlvbnMpO1xuXG5cdHN0YXRpYyBlbGVtZW50Q29tcG9uZW50cyA9IEFycmF5LmZyb20oZWxlbWVudENvbXBvbmVudHMpO1xufVxuIl19