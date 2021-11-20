import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetEnabledSelectionCommandHandler } from '../../../formation/core/domain/set-enabled/set-enabled-selection.command-handler';
import { ToggleSelectedRowCommandHandler } from '../../../formation/core/domain/toggle/toggle-selected-row.command-handler';
import { FormationDispatcher } from '../../../formation/core/domain/formation.dispatcher';
import { FormationManagerFactory } from '../../../formation/core/domain/core/formation.manager-factory';
import { SelectedRowChangedEventHandler } from '../../../formation/core/api/row-selected/selected-row-changed.event-handler';
import { SetSelectionModeCommandHandler } from '../../../formation/core/domain/mode/set-selection-mode.command-handler';
import { SelectAllRowsCommandHandler } from '../../../formation/core/domain/select-all/select-all-rows.command-handler';
import { UnselectAllRowsCommandHandler } from '../../../formation/core/domain/unselect-all/unselect-all-rows.command-handler';
import { SelectionModeSetEventHandler } from '../../../formation/core/api/mode/selection-mode-set.event-handler';
import { structureKey } from '../../../core/api/structre.key';
export class FormationDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetEnabledSelectionCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetSelectionModeCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SelectAllRowsCommandHandler, structureKey),
            HermesModule.registerCommandHandler(UnselectAllRowsCommandHandler, structureKey),
            HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(SelectedRowChangedEventHandler),
            HermesModule.registerDomainEventHandler(SelectionModeSetEventHandler)
        ];
    }
}
FormationDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    FormationDispatcher,
                    FormationManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
FormationDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9kb21haW4vZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUNySSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN4SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUM5SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFjOUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFlBQVk7SUFFdEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLGlDQUFpQyxFQUFFLFlBQVksQ0FBQztZQUNwRixZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDO1lBQ2pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsRUFBRSxZQUFZLENBQUM7WUFDOUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixFQUFFLFlBQVksQ0FBQztZQUNoRixZQUFZLENBQUMsc0JBQXNCLENBQUMsK0JBQStCLEVBQUUsWUFBWSxDQUFDO1NBQ2xGLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQjtRQUN6QixPQUFPO1lBQ04sWUFBWSxDQUFDLDBCQUEwQixDQUFDLDhCQUE4QixDQUFDO1lBQ3ZFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztTQUNyRSxDQUFDO0lBQ0gsQ0FBQzs7O1lBaENELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUJBQW1CO29CQUNuQix1QkFBdUI7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5pbXBvcnQgeyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LWVuYWJsZWQvc2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvZG9tYWluL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvZG9tYWluL2NvcmUvZm9ybWF0aW9uLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9mb3JtYXRpb24vY29yZS9hcGkvcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvZG9tYWluL21vZGUvc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9mb3JtYXRpb24vY29yZS9kb21haW4vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtcm93cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdGlvbi9jb3JlL2FwaS9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHJlLmtleSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGb3JtYXRpb25EaXNwYXRjaGVyLFxuXHRcdEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkRvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNlbGVjdGlvbk1vZGVDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNlbGVjdEFsbFJvd3NDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2VsZWN0aW9uTW9kZVNldEV2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==