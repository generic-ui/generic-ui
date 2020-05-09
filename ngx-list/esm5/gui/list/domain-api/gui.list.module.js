/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../feature/gui.list.component';
import { ContainerModule } from '../../../structure/list/feature/container.module';
import { StructureModule } from '../../../lib/structure/feature-api/structure.module';
import { GuiListItemComponent } from '../feature/item/gui.list-item.component';
/** @type {?} */
var imports = [
    CommonModule,
    ContainerModule
];
/** @type {?} */
var declarations = [
    GuiListComponent,
    GuiListItemComponent
];
/** @type {?} */
var providers = (/** @type {?} */ ([]));
/** @type {?} */
var exportDeclarations = [
    GuiListComponent,
    GuiListItemComponent
];
/** @type {?} */
var entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
var elementComponents = [
    GuiListComponent
];
var GuiListWithGridModule = /** @class */ (function () {
    function GuiListWithGridModule() {
    }
    GuiListWithGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ContainerModule,
                        StructureModule.withConfig({
                            cssClassName: 'list',
                            hermesModuleConfig: {
                                loggers: true
                            }
                        })
                    ],
                },] }
    ];
    return GuiListWithGridModule;
}());
export { GuiListWithGridModule };
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
    /**
     * @return {?}
     */
    GuiListModule.withoutGrid = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GuiListWithGridModule,
            providers: providers
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9kb21haW4tYXBpL2d1aS5saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0lBRXpFLE9BQU8sR0FBRztJQUNmLFlBQVk7SUFDWixlQUFlO0NBQ2Y7O0lBRUssWUFBWSxHQUFHO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDcEI7O0lBRUssU0FBUyxHQUFHLG1CQUFBLEVBQUUsRUFBbUI7O0lBRWpDLGtCQUFrQixHQUFHO0lBQzFCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDcEI7O0lBRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7SUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsZ0JBQWdCO0NBQ2hCO0FBRUQ7SUFBQTtJQWdCQSxDQUFDOztnQkFoQkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZSxDQUFDLFVBQVUsQ0FBQzs0QkFDMUIsWUFBWSxFQUFFLE1BQU07NEJBQ3BCLGtCQUFrQixFQUFFO2dDQUNuQixPQUFPLEVBQUUsSUFBSTs2QkFDYjt5QkFDRCxDQUFDO3FCQUNGO2lCQUlEOztJQUVELDRCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FEWSxxQkFBcUI7QUFHbEM7SUFBQTtJQTRCQSxDQUFDOzs7O0lBcEJPLHFCQUFPOzs7SUFBZDtRQUNDLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVNLHNCQUFROzs7SUFBZjtRQUNDLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsRUFBRTtTQUNiLENBQUM7SUFDSCxDQUFDOzs7O0lBRU0seUJBQVc7OztJQUFsQjtRQUNDLE9BQU87WUFDTixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUM7SUFDSCxDQUFDOztnQkEzQkQsUUFBUSxTQUFDO29CQUNULE9BQU8sU0FBQTtvQkFDUCxZQUFZLGNBQUE7b0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZSxpQkFBQTtpQkFDZjs7SUF1QkQsb0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXRCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb250YWluZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NvbnRhaW5lci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUubW9kdWxlJztcbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRDb250YWluZXJNb2R1bGVcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3VpTGlzdENvbXBvbmVudCxcblx0R3VpTGlzdEl0ZW1Db21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtdIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Q29udGFpbmVyTW9kdWxlLFxuXHRcdFN0cnVjdHVyZU1vZHVsZS53aXRoQ29uZmlnKHtcblx0XHRcdGNzc0NsYXNzTmFtZTogJ2xpc3QnLFxuXHRcdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRcdGxvZ2dlcnM6IHRydWVcblx0XHRcdH1cblx0XHR9KVxuXHRdLFxuXHQvLyBkZWNsYXJhdGlvbnMsXG5cdC8vIGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0Ly8gZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RXaXRoR3JpZE1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZHVsZSB7XG5cblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHdWlMaXN0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW11cblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHdpdGhvdXRHcmlkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdFdpdGhHcmlkTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG59XG4iXX0=