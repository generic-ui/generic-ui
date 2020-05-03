/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { StructureFilterIconComponent } from './icon/structure.filter-icon.component';
import { StructureFilterMenuTriggerComponent } from './structure.filter-menu-trigger.component';
import { StructureFilterMenuComponent } from './structure.filter-menu.component';
import { StructureColumnSelectorComponent } from './column-selector/structure.column-selector.component';
export class StructureFilterMenuModule {
}
StructureFilterMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule
                ],
                declarations: [
                    StructureFilterIconComponent,
                    StructureFilterMenuComponent,
                    StructureFilterMenuTriggerComponent,
                    StructureColumnSelectorComponent
                ],
                exports: [
                    StructureFilterMenuTriggerComponent
                ],
                entryComponents: [
                    StructureFilterMenuComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFxQnpHLE1BQU0sT0FBTyx5QkFBeUI7OztZQWxCckMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLDRCQUE0QjtvQkFDNUIsNEJBQTRCO29CQUM1QixtQ0FBbUM7b0JBQ25DLGdDQUFnQztpQkFDaEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLG1DQUFtQztpQkFDbkM7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQiw0QkFBNEI7aUJBQzVCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zdHJ1Y3R1cmUuZmlsdGVyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLXNlbGVjdG9yL3N0cnVjdHVyZS5jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVGaWx0ZXJJY29uQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUZpbHRlck1lbnVDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlRmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlQ29sdW1uU2VsZWN0b3JDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZUZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFN0cnVjdHVyZUZpbHRlck1lbnVDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXJNZW51TW9kdWxlIHtcblxufVxuIl19