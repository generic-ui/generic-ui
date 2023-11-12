import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../../feature/gui.list.component';
import { ListViewFeatureModule } from '../../../../../feature-view/list-view/src/list-view.feature-module';
import { GridViewFeatureModule } from '../../../../../feature-view/grid-view/src/grid-view.feature-module';
import { GuiListItemComponent } from '../../feature/item/gui.list-item.component';
import { GuiListCardComponent } from '../../feature/card/gui.list-card.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../feature-view/grid-view/src/grid-view.feature-module";
const imports = [
    CommonModule,
    ListViewFeatureModule,
    GridViewFeatureModule.withConfig({
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: GuiListModule, declarations: [GuiListComponent,
            GuiListItemComponent,
            GuiListCardComponent], imports: [CommonModule,
            ListViewFeatureModule, i1.GridViewFeatureModule], exports: [GuiListComponent,
            GuiListItemComponent,
            GuiListCardComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiListModule, imports: [imports] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports,
                    declarations,
                    exports: exportDeclarations
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9ndWkvbGlzdC9zcmMvY29yZS9hcGkvZ3VpLmxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBRWxGLE1BQU0sT0FBTyxHQUFHO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUIsQ0FBQyxVQUFVLENBQUM7UUFDaEMsWUFBWSxFQUFFLE1BQU07UUFDcEIsa0JBQWtCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUc7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDcEIsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLEVBQXFCLENBQUM7QUFFeEMsTUFBTSxrQkFBa0IsR0FBRztJQUMxQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNwQixDQUFDO0FBT0YsTUFBTSxPQUFPLGFBQWE7SUFFekIsTUFBTSxDQUFDLE9BQU87UUFDYixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLFNBQVM7U0FDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNkLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsRUFBRTtTQUNiLENBQUM7SUFDSCxDQUFDO3VHQWRXLGFBQWE7d0dBQWIsYUFBYSxpQkFsQnpCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsb0JBQW9CLGFBYnBCLFlBQVk7WUFDWixxQkFBcUIsdUNBa0JyQixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjt3R0FRUixhQUFhLFlBSnpCLE9BQU87OzJGQUlLLGFBQWE7a0JBTHpCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTztvQkFDUCxZQUFZO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NyYy9saXN0LXZpZXcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgR3JpZFZpZXdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvZ3JpZC12aWV3LmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUxpc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jYXJkL2d1aS5saXN0LWNhcmQuY29tcG9uZW50JztcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRMaXN0Vmlld0ZlYXR1cmVNb2R1bGUsXG5cdEdyaWRWaWV3RmVhdHVyZU1vZHVsZS53aXRoQ29uZmlnKHtcblx0XHRjc3NDbGFzc05hbWU6ICdsaXN0Jyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdGxvZ2dlcnM6IHRydWVcblx0XHR9XG5cdH0pXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnQsXG5cdEd1aUxpc3RJdGVtQ29tcG9uZW50LFxuXHRHdWlMaXN0Q2FyZENvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW10gYXMgQXJyYXk8UHJvdmlkZXI+O1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnQsXG5cdEd1aUxpc3RJdGVtQ29tcG9uZW50LFxuXHRHdWlMaXN0Q2FyZENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZHVsZSB7XG5cblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHdWlMaXN0TW9kdWxlPiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHdWlMaXN0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R3VpTGlzdE1vZHVsZT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW11cblx0XHR9O1xuXHR9XG59XG4iXX0=