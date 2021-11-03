import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../../feature/gui.list.component';
import { ListViewFeatureModule } from '../../../../structure/list/feature/list-view.feature-module';
import { StructureModule } from '../../../../structure/grid/core/api/structure.module';
import { GuiListItemComponent } from '../../feature/item/gui.list-item.component';
import { GuiListCardComponent } from '../../feature/card/gui.list-card.component';
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
GuiListModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations,
                exports: exportDeclarations,
                entryComponents
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9ndWkvbGlzdC9jb3JlL2FwaS9ndWkubGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRixNQUFNLE9BQU8sR0FBRztJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNwQixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsRUFBcUIsQ0FBQztBQUV4QyxNQUFNLGtCQUFrQixHQUFHO0lBQzFCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3BCLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxFQUFnQixDQUFDO0FBU3pDLE1BQU0sT0FBTyxhQUFhO0lBRXpCLE1BQU0sQ0FBQyxPQUFPO1FBQ2IsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVE7UUFDZCxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7O1lBcEJELFFBQVEsU0FBQztnQkFDVCxPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9jb3JlL2FwaS9zdHJ1Y3R1cmUubW9kdWxlJztcbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUxpc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jYXJkL2d1aS5saXN0LWNhcmQuY29tcG9uZW50JztcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRMaXN0Vmlld0ZlYXR1cmVNb2R1bGUsXG5cdFN0cnVjdHVyZU1vZHVsZS53aXRoQ29uZmlnKHtcblx0XHRjc3NDbGFzc05hbWU6ICdsaXN0Jyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdGxvZ2dlcnM6IHRydWVcblx0XHR9XG5cdH0pXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnQsXG5cdEd1aUxpc3RJdGVtQ29tcG9uZW50LFxuXHRHdWlMaXN0Q2FyZENvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW10gYXMgQXJyYXk8UHJvdmlkZXI+O1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnQsXG5cdEd1aUxpc3RJdGVtQ29tcG9uZW50LFxuXHRHdWlMaXN0Q2FyZENvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R3VpTGlzdE1vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEd1aUxpc3RNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEd1aUxpc3RNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtdXG5cdFx0fTtcblx0fVxufVxuIl19