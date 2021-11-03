import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
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
import { SourceDomainWarehouse } from '../domain-read/source.domain-warehouse';
import { SourceDomainCommandInvoker } from '../domain/source.domain.command-invoker';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
export class SourceApiModule extends ApiModule {
}
SourceApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SourceDomainModule
                ],
                providers: [
                    StructureSourceOriginArchive,
                    StructurePreparedItemsArchive,
                    SourceConverter,
                    {
                        provide: SourceCommandInvoker,
                        useClass: SourceDomainCommandInvoker
                    },
                    {
                        provide: SourceWarehouse,
                        useClass: SourceDomainWarehouse
                    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDaEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFrQ3BHLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQS9CN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLDRCQUE0QjtvQkFDNUIsNkJBQTZCO29CQUM3QixlQUFlO29CQUVmO3dCQUNDLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSwwQkFBMEI7cUJBQ3BDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixRQUFRLEVBQUUscUJBQXFCO3FCQUMvQjtvQkFDRCxrQkFBa0I7b0JBRWxCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUV4Qix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsMEJBQTBCO2lCQUUxQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuL3NvdXJjZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4vZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4vZm9ybWF0aW9uL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc291cmNlLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9kb21haW4vc291cmNlLmRvbWFpbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4uYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuYXJjaGl2ZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTb3VyY2VEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZSxcblx0XHRTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSxcblx0XHRTb3VyY2VDb252ZXJ0ZXIsXG5cblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdHVzZUNsYXNzOiBTb3VyY2VEb21haW5Db21tYW5kSW52b2tlclxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0dXNlQ2xhc3M6IFNvdXJjZURvbWFpbldhcmVob3VzZVxuXHRcdH0sXG5cdFx0U291cmNlRXZlbnRTZXJ2aWNlLFxuXG5cdFx0Um93U2VsZWN0ZWRSZXBvc2l0b3J5LFxuXHRcdEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblxuXHRcdEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=