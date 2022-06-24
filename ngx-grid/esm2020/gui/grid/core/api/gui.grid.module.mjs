import { NgModule } from '@angular/core';
import { GuiGridComponent } from '../../feature/grid/gui.grid.component';
import { GridViewFeatureModule } from '../../../../feature-view/grid-view/grid-view.feature-module';
import { GuiGridIdGenerator } from '../../feature/grid/register/gui.grid-id.generator';
import { GuiGridRegister } from '../../feature/grid/register/gui.grid.register';
import { GuiGridColumnComponent } from '../../feature/grid/column/gui.grid-column.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../feature-view/grid-view/grid-view.feature-module";
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
GuiGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GuiGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridModule, declarations: [GuiGridComponent,
        GuiGridColumnComponent], imports: [i1.GridViewFeatureModule], exports: [GuiGridComponent,
        GuiGridColumnComponent] });
GuiGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridModule, providers: providers, imports: [imports] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports,
                    declarations,
                    providers,
                    exports: exportDeclarations,
                    entryComponents
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUVwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7OztBQUc3RixNQUFNLE9BQU8sR0FBRztJQUNmLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztRQUNoQyxZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3RCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtDQUNJLENBQUM7QUFFckIsTUFBTSxrQkFBa0IsR0FBRztJQUMxQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3RCLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxFQUFnQixDQUFDO0FBRXpDLE1BQU0saUJBQWlCLEdBQUc7SUFDekIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN0QixDQUFDO0FBU0YsTUFBTSxPQUFPLGFBQWE7O0FBRWxCLDZCQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU5QyxnQ0FBa0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFcEQsK0JBQWlCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzJHQU43QyxhQUFhOzRHQUFiLGFBQWEsaUJBNUJ6QixnQkFBZ0I7UUFDaEIsc0JBQXNCLGtEQVN0QixnQkFBZ0I7UUFDaEIsc0JBQXNCOzRHQWlCVixhQUFhLGFBSnpCLFNBQVMsWUFGVCxPQUFPOzRGQU1LLGFBQWE7a0JBUHpCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTztvQkFDUCxZQUFZO29CQUNaLFNBQVM7b0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZTtpQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL2d1aS5ncmlkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEdyaWRWaWV3RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlJztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2d1aS5ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHdWlHcmlkUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vZ3VpLmdyaWQtY29sdW1uLmNvbXBvbmVudCc7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0R3JpZFZpZXdGZWF0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdGNzc0NsYXNzTmFtZTogJ2dyaWQnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdH1cblx0fSlcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHRHdWlHcmlkSWRHZW5lcmF0b3IsXG5cdEd1aUdyaWRSZWdpc3RlclxuXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnQsXG5cdEd1aUdyaWRDb2x1bW5Db21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkTW9kdWxlIHtcblxuXHRzdGF0aWMgZW50cnlDb21wb25lbnRzID0gQXJyYXkuZnJvbShlbnRyeUNvbXBvbmVudHMpO1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBBcnJheS5mcm9tKGV4cG9ydERlY2xhcmF0aW9ucyk7XG5cblx0c3RhdGljIGVsZW1lbnRDb21wb25lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50Q29tcG9uZW50cyk7XG59XG4iXX0=