/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../feature/gui.list.component';
import { ContainerModule } from '../../../lib/container/container.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlLWFwaS9ndWkubGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztJQUV6RSxPQUFPLEdBQUc7SUFDZixZQUFZO0lBQ1osZUFBZTtDQUNmOztJQUVLLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3BCOztJQUVLLFNBQVMsR0FBRyxtQkFBQSxFQUFFLEVBQW1COztJQUVqQyxrQkFBa0IsR0FBRztJQUMxQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3BCOztJQUVLLGVBQWUsR0FBRyxtQkFBQSxFQUFFLEVBQWM7O0lBRWxDLGlCQUFpQixHQUFHO0lBQ3pCLGdCQUFnQjtDQUNoQjtBQUVEO0lBQUE7SUFnQkEsQ0FBQzs7Z0JBaEJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGVBQWUsQ0FBQyxVQUFVLENBQUM7NEJBQzFCLFlBQVksRUFBRSxNQUFNOzRCQUNwQixrQkFBa0IsRUFBRTtnQ0FDbkIsT0FBTyxFQUFFLElBQUk7NkJBQ2I7eUJBQ0QsQ0FBQztxQkFDRjtpQkFJRDs7SUFFRCw0QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBRFkscUJBQXFCO0FBR2xDO0lBQUE7SUE0QkEsQ0FBQzs7OztJQXBCTyxxQkFBTzs7O0lBQWQ7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLFNBQVM7U0FDcEIsQ0FBQztJQUNILENBQUM7Ozs7SUFFTSxzQkFBUTs7O0lBQWY7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVNLHlCQUFXOzs7SUFBbEI7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO0lBQ0gsQ0FBQzs7Z0JBM0JELFFBQVEsU0FBQztvQkFDVCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxjQUFBO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWUsaUJBQUE7aUJBQ2Y7O0lBdUJELG9CQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F0QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvZ3VpLmxpc3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc3RydWN0dXJlLm1vZHVsZSc7XG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0Q29udGFpbmVyTW9kdWxlXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEd1aUxpc3RDb21wb25lbnQsXG5cdEd1aUxpc3RJdGVtQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3VpTGlzdENvbXBvbmVudCxcblx0R3VpTGlzdEl0ZW1Db21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cbmNvbnN0IGVsZW1lbnRDb21wb25lbnRzID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdENvbnRhaW5lck1vZHVsZSxcblx0XHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0XHRjc3NDbGFzc05hbWU6ICdsaXN0Jyxcblx0XHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XSxcblx0Ly8gZGVjbGFyYXRpb25zLFxuXHQvLyBleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdC8vIGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlMaXN0V2l0aEdyaWRNb2R1bGUge1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEd1aUxpc3RNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtdXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyB3aXRob3V0R3JpZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEd1aUxpc3RXaXRoR3JpZE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxufVxuIl19