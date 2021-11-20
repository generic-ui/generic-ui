import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FormationEventRepository } from '../../../formation/core/api/formation.event-repository';
import { FormationCommandInvoker } from '../../../formation/core/api/formation.command-invoker';
import { FormationWarehouse } from '../../../formation/core/api/formation.warehouse';
import { RowSelectedArchive } from './row-selected/row-selected.archive';
import { RowSelectionModeArchive } from './mode/row-selection-mode.archive';
import { FormationDomainModule } from '../domain/formation.domain-module';
import { FormationDomainWarehouse } from '../domain-read/formation.domain-warehouse';
import { FormationDomainCommandInvoker } from '../domain/formation.domain-command-invoker';
export class FormationApiModule extends ApiModule {
}
FormationApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormationDomainModule
                ],
                providers: [
                    RowSelectedArchive,
                    FormationEventRepository,
                    {
                        provide: FormationCommandInvoker,
                        useClass: FormationDomainCommandInvoker
                    },
                    {
                        provide: FormationWarehouse,
                        useClass: FormationDomainWarehouse
                    },
                    RowSelectionModeArchive
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9hcGkvZm9ybWF0aW9uLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBMEIzRixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsU0FBUzs7O1lBdkJoRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysa0JBQWtCO29CQUNsQix3QkFBd0I7b0JBRXhCO3dCQUNDLE9BQU8sRUFBRSx1QkFBdUI7d0JBQ2hDLFFBQVEsRUFBRSw2QkFBNkI7cUJBQ3ZDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBRSx3QkFBd0I7cUJBQ2xDO29CQUNELHVCQUF1QjtpQkFFdkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvYXBpL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRBcmNoaXZlIH0gZnJvbSAnLi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2Zvcm1hdGlvbi5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZvcm1hdGlvbkRvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2Zvcm1hdGlvbi5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvbkRvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL2Zvcm1hdGlvbi5kb21haW4tY29tbWFuZC1pbnZva2VyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1hdGlvbkRvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRSb3dTZWxlY3RlZEFyY2hpdmUsXG5cdFx0Rm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogRm9ybWF0aW9uRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBGb3JtYXRpb25Eb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdFJvd1NlbGVjdGlvbk1vZGVBcmNoaXZlXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==