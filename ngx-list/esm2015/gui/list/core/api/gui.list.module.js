import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../../feature/gui.list.component';
import { ListViewFeatureModule } from '../../../../structure/list/feature/list-view.feature-module';
import { StructureModule } from '../../../../structure/grid/core/api/structure.module';
import { GuiListItemComponent } from '../../feature/item/gui.list-item.component';
import { GuiListCardComponent } from '../../feature/card/gui.list-card.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../structure/grid/core/api/structure.module";
const imports = [
    CommonModule,
    ListViewFeatureModule,
    StructureModule.withConfig({
        cssClassName: 'list',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
const declarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
const providers = [];
const exportDeclarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
const entryComponents = [];
export class GuiListModule {
    static forRoot() {
        return {
            ngModule: GuiListModule,
            providers: providers
        };
    }
    static forChild() {
        return {
            ngModule: GuiListModule,
            providers: []
        };
    }
}
GuiListModule.ɵfac = function GuiListModule_Factory(t) { return new (t || GuiListModule)(); };
GuiListModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GuiListModule });
GuiListModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [imports] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiListModule, [{
        type: NgModule,
        args: [{
                imports,
                declarations,
                exports: exportDeclarations,
                entryComponents
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GuiListModule, { declarations: [GuiListComponent,
        GuiListItemComponent,
        GuiListCardComponent], imports: [CommonModule,
        ListViewFeatureModule, i1.StructureModule], exports: [GuiListComponent,
        GuiListItemComponent,
        GuiListCardComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9ndWkvbGlzdC9jb3JlL2FwaS9ndWkubGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBRWxGLE1BQU0sT0FBTyxHQUFHO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzFCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3BCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxFQUFxQixDQUFDO0FBRXhDLE1BQU0sa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDcEIsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHLEVBQWdCLENBQUM7QUFTekMsTUFBTSxPQUFPLGFBQWE7SUFFekIsTUFBTSxDQUFDLE9BQU87UUFDYixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLFNBQVM7U0FDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNkLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsRUFBRTtTQUNiLENBQUM7SUFDSCxDQUFDOzswRUFkVyxhQUFhOytEQUFiLGFBQWE7bUVBTHpCLE9BQU87dUZBS0ssYUFBYTtjQU56QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTztnQkFDUCxZQUFZO2dCQUNaLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWU7YUFDZjs7d0ZBQ1ksYUFBYSxtQkF0QnpCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsb0JBQW9CLGFBYnBCLFlBQVk7UUFDWixxQkFBcUIsaUNBa0JyQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3VpLmxpc3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTGlzdFZpZXdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLm1vZHVsZSc7XG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlMaXN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY2FyZC9ndWkubGlzdC1jYXJkLmNvbXBvbmVudCc7XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0TGlzdFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnbGlzdCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtdIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlMaXN0TW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEd1aUxpc3RNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEd1aUxpc3RNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHdWlMaXN0TW9kdWxlPiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHdWlMaXN0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXVxuXHRcdH07XG5cdH1cbn1cbiJdfQ==