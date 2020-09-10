/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from './prepared/structure.prepared-items.repository';
import { SourceConverter } from './source.converter';
import { SourceCommandInvoker } from './source.command-invoker';
import { SourceWarehouse } from './source.warehouse';
import { SourceEventService } from './event/source-event.service';
import { SourceDomainModule } from '../domain/source.domain-module';
import { FormationEventRepository } from './formation/formation.event-repository';
import { FormationCommandInvoker } from './formation/formation.command-invoker';
import { FormationWarehouse } from './formation/formation.warehouse';
import { RowSelectedRepository } from './formation/row-selected/row-selected.repository';
import { RowSelectionModeRepository } from './formation/mode/row-selection-mode.repository';
export class SourceApiModule extends ApiModule {
}
SourceApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SourceDomainModule
                ],
                providers: [
                    StructureSourceOriginRepository,
                    StructurePreparedItemsRepository,
                    SourceConverter,
                    SourceCommandInvoker,
                    SourceWarehouse,
                    SourceEventService,
                    RowSelectedRepository,
                    FormationEventRepository,
                    FormationCommandInvoker,
                    FormationWarehouse,
                    RowSelectionModeRepository
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2UuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUE0QjVGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQXpCN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLCtCQUErQjtvQkFDL0IsZ0NBQWdDO29CQUNoQyxlQUFlO29CQUVmLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixrQkFBa0I7b0JBRWxCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUV4Qix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsMEJBQTBCO2lCQUUxQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2UuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNvdXJjZURvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5LFxuXHRcdFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LFxuXHRcdFNvdXJjZUNvbnZlcnRlcixcblxuXHRcdFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFNvdXJjZVdhcmVob3VzZSxcblx0XHRTb3VyY2VFdmVudFNlcnZpY2UsXG5cblx0XHRSb3dTZWxlY3RlZFJlcG9zaXRvcnksXG5cdFx0Rm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0Rm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0Rm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5XG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==