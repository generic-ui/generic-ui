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
GuiGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GuiGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: GuiGridModule, declarations: [GuiGridComponent,
        GuiGridColumnComponent], imports: [i1.GridViewFeatureModule], exports: [GuiGridComponent,
        GuiGridColumnComponent] });
GuiGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridModule, providers: providers, imports: [imports] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports,
                    declarations,
                    providers,
                    exports: exportDeclarations,
                    entryComponents
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9zcmMvY29yZS9hcGkvZ3VpLmdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFFM0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFHeEYsTUFBTSxPQUFPLEdBQUc7SUFDZixxQkFBcUIsQ0FBQyxVQUFVLENBQUM7UUFDaEMsWUFBWSxFQUFFLE1BQU07UUFDcEIsa0JBQWtCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUc7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN0QixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUc7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDSSxDQUFDO0FBRXJCLE1BQU0sa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN0QixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsRUFBZ0IsQ0FBQztBQUV6QyxNQUFNLGlCQUFpQixHQUFHO0lBQ3pCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDdEIsQ0FBQztBQVNGLE1BQU0sT0FBTyxhQUFhOztBQUVsQiw2QkFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFOUMsZ0NBQWtCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRXBELCtCQUFpQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzswR0FON0MsYUFBYTsyR0FBYixhQUFhLGlCQTVCekIsZ0JBQWdCO1FBQ2hCLHNCQUFzQixrREFTdEIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjsyR0FpQlYsYUFBYSxhQUp6QixTQUFTLFlBRlQsT0FBTzsyRkFNSyxhQUFhO2tCQVB6QixRQUFRO21CQUFDO29CQUNULE9BQU87b0JBQ1AsWUFBWTtvQkFDWixTQUFTO29CQUNULE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWU7aUJBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3VpLmdyaWQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3JpZFZpZXdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlJztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9yZWdpc3Rlci9ndWkuZ3JpZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgR3VpR3JpZFJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlcic7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb2x1bW4vZ3VpLmdyaWQtY29sdW1uLmNvbXBvbmVudCc7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0R3JpZFZpZXdGZWF0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdGNzc0NsYXNzTmFtZTogJ2dyaWQnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdH1cblx0fSlcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHRHdWlHcmlkSWRHZW5lcmF0b3IsXG5cdEd1aUdyaWRSZWdpc3RlclxuXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3VpR3JpZENvbXBvbmVudCxcblx0R3VpR3JpZENvbHVtbkNvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEd1aUdyaWRDb21wb25lbnQsXG5cdEd1aUdyaWRDb2x1bW5Db21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0cHJvdmlkZXJzLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkTW9kdWxlIHtcblxuXHRzdGF0aWMgZW50cnlDb21wb25lbnRzID0gQXJyYXkuZnJvbShlbnRyeUNvbXBvbmVudHMpO1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBBcnJheS5mcm9tKGV4cG9ydERlY2xhcmF0aW9ucyk7XG5cblx0c3RhdGljIGVsZW1lbnRDb21wb25lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50Q29tcG9uZW50cyk7XG59XG4iXX0=