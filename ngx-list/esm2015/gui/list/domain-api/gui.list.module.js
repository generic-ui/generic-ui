/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../feature/gui.list.component';
import { ListViewFeatureModule } from '../../../structure/list/feature/list-view.feature-module';
import { StructureModule } from '../../../lib/structure/domain-api/structure.module';
import { GuiListItemComponent } from '../feature/item/gui.list-item.component';
import { GuiListCardComponent } from '../feature/card/gui.list-card.component';
/** @type {?} */
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
/** @type {?} */
const declarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
/** @type {?} */
const providers = (/** @type {?} */ ([]));
/** @type {?} */
const exportDeclarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
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
                    ListViewFeatureModule,
                    StructureModule.withConfig({
                        cssClassName: 'list',
                        hermesModuleConfig: {
                            loggers: true
                        }
                    })
                ]
                // declarations,
                // exports: exportDeclarations,
                // entryComponents
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
}
GuiListModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations,
                exports: exportDeclarations,
                entryComponents
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9kb21haW4tYXBpL2d1aS5saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7TUFFekUsT0FBTyxHQUFHO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzFCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0Y7O01BRUssWUFBWSxHQUFHO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3BCOztNQUVLLFNBQVMsR0FBRyxtQkFBQSxFQUFFLEVBQW1COztNQUVqQyxrQkFBa0IsR0FBRztJQUMxQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNwQjs7TUFFSyxlQUFlLEdBQUcsbUJBQUEsRUFBRSxFQUFjOztNQUVsQyxpQkFBaUIsR0FBRztJQUN6QixnQkFBZ0I7Q0FDaEI7QUFpQkQsTUFBTSxPQUFPLHFCQUFxQjs7O1lBZmpDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLGVBQWUsQ0FBQyxVQUFVLENBQUM7d0JBQzFCLFlBQVksRUFBRSxNQUFNO3dCQUNwQixrQkFBa0IsRUFBRTs0QkFDbkIsT0FBTyxFQUFFLElBQUk7eUJBQ2I7cUJBQ0QsQ0FBQztpQkFDRjtnQkFDRCxnQkFBZ0I7Z0JBQ2hCLCtCQUErQjtnQkFDL0Isa0JBQWtCO2FBQ2xCOztBQVVELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXpCLE1BQU0sQ0FBQyxPQUFPO1FBQ2IsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLFFBQVE7UUFDZCxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7O1lBcEJELFFBQVEsU0FBQztnQkFDVCxPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLm1vZHVsZSc7XG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlMaXN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvY2FyZC9ndWkubGlzdC1jYXJkLmNvbXBvbmVudCc7XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0TGlzdFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnbGlzdCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtdIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cbmNvbnN0IGVsZW1lbnRDb21wb25lbnRzID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExpc3RWaWV3RmVhdHVyZU1vZHVsZSxcblx0XHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0XHRjc3NDbGFzc05hbWU6ICdsaXN0Jyxcblx0XHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XVxuXHQvLyBkZWNsYXJhdGlvbnMsXG5cdC8vIGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0Ly8gZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RXaXRoR3JpZE1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZHVsZSB7XG5cblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHdWlMaXN0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW11cblx0XHR9O1xuXHR9XG59XG4iXX0=