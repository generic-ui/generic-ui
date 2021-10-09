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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9jb3JlL2FwaS9ndWkubGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O01BRTVFLE9BQU8sR0FBRztJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMxQixZQUFZLEVBQUUsTUFBTTtRQUNwQixrQkFBa0IsRUFBRTtZQUNuQixPQUFPLEVBQUUsSUFBSTtTQUNiO0tBQ0QsQ0FBQztDQUNGOztNQUVLLFlBQVksR0FBRztJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNwQjs7TUFFSyxTQUFTLEdBQUcsbUJBQUEsRUFBRSxFQUFtQjs7TUFFakMsa0JBQWtCLEdBQUc7SUFDMUIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDcEI7O01BRUssZUFBZSxHQUFHLG1CQUFBLEVBQUUsRUFBYztBQVN4QyxNQUFNLE9BQU8sYUFBYTs7OztJQUV6QixNQUFNLENBQUMsT0FBTztRQUNiLE9BQU87WUFDTixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxRQUFRO1FBQ2QsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxFQUFFO1NBQ2IsQ0FBQztJQUNILENBQUM7OztZQXBCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTztnQkFDUCxZQUFZO2dCQUNaLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWU7YUFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvZ3VpLmxpc3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTGlzdFZpZXdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9saXN0LXZpZXcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLm1vZHVsZSc7XG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlMaXN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY2FyZC9ndWkubGlzdC1jYXJkLmNvbXBvbmVudCc7XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0TGlzdFZpZXdGZWF0dXJlTW9kdWxlLFxuXHRTdHJ1Y3R1cmVNb2R1bGUud2l0aENvbmZpZyh7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnbGlzdCcsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7XG5cdFx0XHRsb2dnZXJzOiB0cnVlXG5cdFx0fVxuXHR9KVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtdIGFzIEFycmF5PFByb3ZpZGVyPjtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRHdWlMaXN0Q29tcG9uZW50LFxuXHRHdWlMaXN0SXRlbUNvbXBvbmVudCxcblx0R3VpTGlzdENhcmRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlMaXN0TW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEd1aUxpc3RNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IHByb3ZpZGVyc1xuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBHdWlMaXN0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXVxuXHRcdH07XG5cdH1cbn1cbiJdfQ==