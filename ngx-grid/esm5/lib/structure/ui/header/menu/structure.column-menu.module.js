/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { StructureColumnConfigTriggerComponent } from './structure.column-config-trigger.component';
import { StructureColumnConfigSortComponent } from './main/sort/structure.column-config-sort.component';
import { StructureColumnConfigColumnHideComponent } from './main/hide/structure.column-config-column-hide.component';
import { StructureColumnConfigColumnMoveComponent } from './main/move/structure.column-config-column-move.component';
import { fabricImports } from '../../structure-fabric.imports';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
/** @type {?} */
var declarations = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent
];
var StructureColumnMenuModule = /** @class */ (function () {
    function StructureColumnMenuModule() {
    }
    StructureColumnMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        StructureColumnManagerModule
                    ],
                    declarations: declarations,
                    exports: declarations
                },] }
    ];
    return StructureColumnMenuModule;
}());
export { StructureColumnMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7O0lBRTlGLFlBQVksR0FBRztJQUNwQiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0NBQ3hDO0FBRUQ7SUFBQTtJQVVBLENBQUM7O2dCQVZBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLDRCQUE0QjtxQkFDNUI7b0JBQ0QsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sRUFBRSxZQUFZO2lCQUNyQjs7SUFFRCxnQ0FBQztDQUFBLEFBVkQsSUFVQztTQURZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3NvcnQvc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21vdmUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnVHJpZ2dlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGRlY2xhcmF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIHtcbn1cbiJdfQ==