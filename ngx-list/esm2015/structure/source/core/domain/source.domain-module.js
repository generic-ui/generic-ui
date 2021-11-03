import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SourceSetLoadingCommandHandler } from './loading/source-set-loading.command-handler';
import { SetOriginCommandHandler } from './origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from './origin/edit/structure.edit-source-item.command-handler';
import { SourceDispatcher } from './source.dispatcher';
import { SourceManagerFactory } from './core/source.manager-factory';
import { SourceDomainEventPublisher } from './source.domain-event.publisher';
import { SetEnabledSelectionCommandHandler } from './formation/set-enabled/set-enabled-selection.command-handler';
import { ToggleSelectedRowCommandHandler } from './formation/toggle/toggle-selected-row.command-handler';
import { FormationDispatcher } from './formation/formation.dispatcher';
import { FormationManagerFactory } from './formation/core/formation.manager-factory';
import { SelectedRowChangedEventHandler } from '../api/formation/row-selected/selected-row-changed.event-handler';
import { SetSelectionModeCommandHandler } from './formation/mode/set-selection-mode.command-handler';
import { SelectAllRowsCommandHandler } from './formation/select-all/select-all-rows.command-handler';
import { UnselectAllRowsCommandHandler } from './formation/unselect-all/unselect-all-rows.command-handler';
import { SelectionModeSetEventHandler } from '../api/formation/mode/selection-mode-set.event-handler';
import { DeleteOriginItemCommandHandler } from './origin/delete/delete-origin-item.command-handler';
import { structureKey } from '../../../core/api/structre.key';
import { StructureOriginChangedEventHandler } from './origin/structure.origin-changed.event-handler';
import { StructurePreparedItemsEventHandler } from './prepared/structure.prepared-items.event-handler';
import * as i0 from "@angular/core";
export class SourceDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetOriginCommandHandler, structureKey),
            HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetEnabledSelectionCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetSelectionModeCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SelectAllRowsCommandHandler, structureKey),
            HermesModule.registerCommandHandler(UnselectAllRowsCommandHandler, structureKey),
            HermesModule.registerCommandHandler(DeleteOriginItemCommandHandler, structureKey),
            HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(StructureOriginChangedEventHandler),
            HermesModule.registerDomainEventHandler(SelectedRowChangedEventHandler),
            HermesModule.registerDomainEventHandler(SelectionModeSetEventHandler),
            HermesModule.registerDomainEventHandler(StructurePreparedItemsEventHandler)
        ];
    }
}
SourceDomainModule.ɵfac = function SourceDomainModule_Factory(t) { return new (t || SourceDomainModule)(); };
SourceDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SourceDomainModule });
SourceDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        SourceDispatcher,
        SourceManagerFactory,
        SourceDomainEventPublisher,
        FormationDispatcher,
        FormationManagerFactory
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceDomainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    SourceDispatcher,
                    SourceManagerFactory,
                    SourceDomainEventPublisher,
                    FormationDispatcher,
                    FormationManagerFactory
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SourceDomainModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNsSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7O0FBa0J2RyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsWUFBWTtJQUVuRDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlO1FBQ3JCLE9BQU87WUFDTixZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDO1lBQ2pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUM7WUFDMUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksQ0FBQztZQUN4RixZQUFZLENBQUMsc0JBQXNCLENBQUMsaUNBQWlDLEVBQUUsWUFBWSxDQUFDO1lBQ3BGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUM7WUFDakYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixFQUFFLFlBQVksQ0FBQztZQUM5RSxZQUFZLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLEVBQUUsWUFBWSxDQUFDO1lBQ2hGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUM7WUFDakYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixFQUFFLFlBQVksQ0FBQztTQUNsRixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMzRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7WUFDdkUsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDO1lBQ3JFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQztTQUMzRSxDQUFDO0lBQ0gsQ0FBQzs7b0ZBM0JXLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3lFQVhuQjtRQUNWLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBRTFCLG1CQUFtQjtRQUNuQix1QkFBdUI7S0FDdkIsWUFWUTtZQUNSLFlBQVk7U0FDWjt1RkFZVyxrQkFBa0I7Y0FmOUIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUUxQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLGtCQUFrQixjQWI3QixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU291cmNlU2V0TG9hZGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9sb2FkaW5nL3NvdXJjZS1zZXQtbG9hZGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vY29yZS9zb3VyY2UubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi9zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtZW5hYmxlZC1zZWxlY3Rpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9mb3JtYXRpb24vY29yZS9mb3JtYXRpb24ubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vbW9kZS9zZXQtc2VsZWN0aW9uLW1vZGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlbGVjdEFsbFJvd3NDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZm9ybWF0aW9uL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFJvd3NDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZm9ybWF0aW9uL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtcm93cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2FwaS9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNFdmVudEhhbmRsZXIgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5ldmVudC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0U291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0U291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cblx0XHRGb3JtYXRpb25EaXNwYXRjaGVyLFxuXHRcdEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZURvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNlbGVjdGlvbk1vZGVDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNlbGVjdEFsbFJvd3NDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRFdmVudEhhbmRsZXIpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2VsZWN0aW9uTW9kZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==