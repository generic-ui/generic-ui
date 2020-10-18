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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9jb3JlL2FwaS9ndWkubGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBRTVFLE9BQU8sR0FBRztJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGOztJQUVLLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNwQjs7SUFFSyxTQUFTLEdBQUcsbUJBQUEsRUFBRSxFQUFtQjs7SUFFakMsa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDcEI7O0lBRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYzs7SUFFbEMsaUJBQWlCLEdBQUc7SUFDekIsZ0JBQWdCO0NBQ2hCO0FBRUQ7SUFBQTtJQWdCQSxDQUFDOztnQkFoQkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsZUFBZSxDQUFDLFVBQVUsQ0FBQzs0QkFDMUIsWUFBWSxFQUFFLE1BQU07NEJBQ3BCLGtCQUFrQixFQUFFO2dDQUNuQixPQUFPLEVBQUUsSUFBSTs2QkFDYjt5QkFDRCxDQUFDO3FCQUNGO29CQUNELGdCQUFnQjtvQkFDaEIsK0JBQStCO29CQUMvQixrQkFBa0I7aUJBQ2xCOztJQUVELDRCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FEWSxxQkFBcUI7QUFHbEM7SUFBQTtJQXFCQSxDQUFDOzs7O0lBYk8scUJBQU87OztJQUFkO1FBQ0MsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUM7SUFDSCxDQUFDOzs7O0lBRU0sc0JBQVE7OztJQUFmO1FBQ0MsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxFQUFFO1NBQ2IsQ0FBQztJQUNILENBQUM7O2dCQXBCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxTQUFBO29CQUNQLFlBQVksY0FBQTtvQkFDWixPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixlQUFlLGlCQUFBO2lCQUNmOztJQWdCRCxvQkFBQztDQUFBLEFBckJELElBcUJDO1NBZlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3VpLmxpc3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTGlzdFZpZXdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLm1vZHVsZSc7XG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlMaXN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY2FyZC9ndWkubGlzdC1jYXJkLmNvbXBvbmVudCc7XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0TGlzdFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnbGlzdCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtdIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cbmNvbnN0IGVsZW1lbnRDb21wb25lbnRzID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExpc3RWaWV3RmVhdHVyZU1vZHVsZSxcblx0XHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0XHRjc3NDbGFzc05hbWU6ICdsaXN0Jyxcblx0XHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XVxuXHQvLyBkZWNsYXJhdGlvbnMsXG5cdC8vIGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0Ly8gZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RXaXRoR3JpZE1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMsXG5cdGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZHVsZSB7XG5cblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHdWlMaXN0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBwcm92aWRlcnNcblx0XHR9O1xuXHR9XG5cblx0c3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW11cblx0XHR9O1xuXHR9XG59XG4iXX0=