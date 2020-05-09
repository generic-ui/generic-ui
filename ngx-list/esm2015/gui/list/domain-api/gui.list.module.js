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
const imports = [
    CommonModule,
    ContainerModule
];
/** @type {?} */
const declarations = [
    GuiListComponent,
    GuiListItemComponent
];
/** @type {?} */
const providers = (/** @type {?} */ ([]));
/** @type {?} */
const exportDeclarations = [
    GuiListComponent,
    GuiListItemComponent
];
/** @type {?} */
const entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
const elementComponents = [
    GuiListComponent
];
export class GuiListWithGridModule {
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
export class GuiListModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: GuiListModule,
            providers: providers
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: GuiListModule,
            providers: []
        };
    }
    /**
     * @return {?}
     */
    static withoutGrid() {
        return {
            ngModule: GuiListWithGridModule,
            providers: providers
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9kb21haW4tYXBpL2d1aS5saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O01BRXpFLE9BQU8sR0FBRztJQUNmLFlBQVk7SUFDWixlQUFlO0NBQ2Y7O01BRUssWUFBWSxHQUFHO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDcEI7O01BRUssU0FBUyxHQUFHLG1CQUFBLEVBQUUsRUFBbUI7O01BRWpDLGtCQUFrQixHQUFHO0lBQzFCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDcEI7O01BRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7TUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsZ0JBQWdCO0NBQ2hCO0FBaUJELE1BQU0sT0FBTyxxQkFBcUI7OztZQWZqQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixlQUFlLENBQUMsVUFBVSxDQUFDO3dCQUMxQixZQUFZLEVBQUUsTUFBTTt3QkFDcEIsa0JBQWtCLEVBQUU7NEJBQ25CLE9BQU8sRUFBRSxJQUFJO3lCQUNiO3FCQUNELENBQUM7aUJBQ0Y7YUFJRDs7QUFVRCxNQUFNLE9BQU8sYUFBYTs7OztJQUV6QixNQUFNLENBQUMsT0FBTztRQUNiLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxRQUFRO1FBQ2QsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxFQUFFO1NBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsV0FBVztRQUNqQixPQUFPO1lBQ04sUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO0lBQ0gsQ0FBQzs7O1lBM0JELFFBQVEsU0FBQztnQkFDVCxPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb250YWluZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NvbnRhaW5lci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUubW9kdWxlJztcbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcblxuY29uc3QgaW1wb3J0cyA9IFtcblx0Q29tbW9uTW9kdWxlLFxuXHRDb250YWluZXJNb2R1bGVcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3VpTGlzdENvbXBvbmVudCxcblx0R3VpTGlzdEl0ZW1Db21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtdIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW10gYXMgQXJyYXk8YW55PjtcblxuY29uc3QgZWxlbWVudENvbXBvbmVudHMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Q29udGFpbmVyTW9kdWxlLFxuXHRcdFN0cnVjdHVyZU1vZHVsZS53aXRoQ29uZmlnKHtcblx0XHRcdGNzc0NsYXNzTmFtZTogJ2xpc3QnLFxuXHRcdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRcdGxvZ2dlcnM6IHRydWVcblx0XHRcdH1cblx0XHR9KVxuXHRdLFxuXHQvLyBkZWNsYXJhdGlvbnMsXG5cdC8vIGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0Ly8gZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RXaXRoR3JpZE1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZHVsZSB7XG5cblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHdWlMaXN0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW11cblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIHdpdGhvdXRHcmlkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdFdpdGhHcmlkTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG59XG4iXX0=