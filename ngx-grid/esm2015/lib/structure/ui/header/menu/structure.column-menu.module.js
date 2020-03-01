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
const declarations = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent
];
export class StructureColumnMenuModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7O01BRTlGLFlBQVksR0FBRztJQUNwQiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0NBQ3hDO0FBV0QsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBVHJDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLDRCQUE0QjtpQkFDNUI7Z0JBQ0QsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLE9BQU8sRUFBRSxZQUFZO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXRyaWdnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQgfSBmcm9tICcuL21haW4vc29ydC9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2hpZGUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQgfSBmcm9tICcuL21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZGVjbGFyYXRpb25zXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUge1xufVxuIl19