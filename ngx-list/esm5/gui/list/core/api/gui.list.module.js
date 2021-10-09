/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../../feature/gui.list.component';
import { ListViewFeatureModule } from '../../../../structure/list/feature/list-view.feature-module';
import { StructureModule } from '../../../../structure/grid/core/api/structure.module';
import { GuiListItemComponent } from '../../feature/item/gui.list-item.component';
import { GuiListCardComponent } from '../../feature/card/gui.list-card.component';
/** @type {?} */
var imports = [
    CommonModule,
    ListViewFeatureModule,
    StructureModule.withConfig({
        cssClassName: 'list',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
/** @type {?} */
var declarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
/** @type {?} */
var providers = (/** @type {?} */ ([]));
/** @type {?} */
var exportDeclarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
/** @type {?} */
var entryComponents = (/** @type {?} */ ([]));
var GuiListModule = /** @class */ (function () {
    function GuiListModule() {
    }
    /**
     * @return {?}
     */
    GuiListModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GuiListModule,
            providers: providers
        };
    };
    /**
     * @return {?}
     */
    GuiListModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GuiListModule,
            providers: []
        };
    };
    GuiListModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    return GuiListModule;
}());
export { GuiListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9jb3JlL2FwaS9ndWkubGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBRTVFLE9BQU8sR0FBRztJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGOztJQUVLLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNwQjs7SUFFSyxTQUFTLEdBQUcsbUJBQUEsRUFBRSxFQUFtQjs7SUFFakMsa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDcEI7O0lBRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYztBQUd4QztJQUFBO0lBcUJBLENBQUM7Ozs7SUFiTyxxQkFBTzs7O0lBQWQ7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLFNBQVM7U0FDcEIsQ0FBQztJQUNILENBQUM7Ozs7SUFFTSxzQkFBUTs7O0lBQWY7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7Z0JBcEJELFFBQVEsU0FBQztvQkFDVCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxjQUFBO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWUsaUJBQUE7aUJBQ2Y7O0lBZ0JELG9CQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FmWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9jb3JlL2FwaS9zdHJ1Y3R1cmUubW9kdWxlJztcbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUxpc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jYXJkL2d1aS5saXN0LWNhcmQuY29tcG9uZW50JztcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRMaXN0Vmlld0ZlYXR1cmVNb2R1bGUsXG5cdFN0cnVjdHVyZU1vZHVsZS53aXRoQ29uZmlnKHtcblx0XHRjc3NDbGFzc05hbWU6ICdsaXN0Jyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdGxvZ2dlcnM6IHRydWVcblx0XHR9XG5cdH0pXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnQsXG5cdEd1aUxpc3RJdGVtQ29tcG9uZW50LFxuXHRHdWlMaXN0Q2FyZENvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW10gYXMgQXJyYXk8UHJvdmlkZXI+O1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnQsXG5cdEd1aUxpc3RJdGVtQ29tcG9uZW50LFxuXHRHdWlMaXN0Q2FyZENvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEd1aUxpc3RNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtdXG5cdFx0fTtcblx0fVxufVxuIl19