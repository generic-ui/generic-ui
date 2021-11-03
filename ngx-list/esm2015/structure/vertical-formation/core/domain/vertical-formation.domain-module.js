import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { structureKey } from '../../../core/api/structre.key';
import { VerticalFormationFactory } from './vertical-formation.factory';
import { SetScrollPositionCommandHandler } from './scroll-position/set-scroll-position.command-handler';
import { SetVerticalScrollEnabledCommandHandler } from './set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetRowHeightBasedOnThemeCommandHandler } from './set-row-height-theme/set-row-height-based-on-theme.command-handler';
import { SetRowHeightCommandHandler } from './set-row-height/set-row-height.command-handler';
import { StructureSetHeightCommandHandler } from './container/set-height/structure-set-height.command-handler';
import { ScrollBarPositionSetEventHandler } from '../domain-read/scroll-bar/scroll-bar-position-set.event-handler';
import { SetScrollBarPositionCommandHandler } from './scroll-bar/set-scroll-bar-position.command-handler';
import * as i0 from "@angular/core";
export class VerticalFormationDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetRowHeightCommandHandler, structureKey),
            HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetScrollBarPositionCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(ScrollBarPositionSetEventHandler)
        ];
    }
}
VerticalFormationDomainModule.ɵfac = function VerticalFormationDomainModule_Factory(t) { return new (t || VerticalFormationDomainModule)(); };
VerticalFormationDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: VerticalFormationDomainModule });
VerticalFormationDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        VerticalFormationFactory
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerticalFormationDomainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    VerticalFormationFactory
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VerticalFormationDomainModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDeEcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbkgsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0YsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDL0csT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBYTFHLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxZQUFZO0lBRTlEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywrQkFBK0IsRUFBRSxZQUFZLENBQUM7WUFDbEYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLFlBQVksQ0FBQztZQUN6RixZQUFZLENBQUMsc0JBQXNCLENBQUMsc0NBQXNDLEVBQUUsWUFBWSxDQUFDO1lBQ3pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUM7WUFDN0UsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGdDQUFnQyxFQUFFLFlBQVksQ0FBQztZQUNuRixZQUFZLENBQUMsc0JBQXNCLENBQUMsa0NBQWtDLEVBQUUsWUFBWSxDQUFDO1NBQ3JGLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQjtRQUN6QixPQUFPO1lBQ04sWUFBWSxDQUFDLDBCQUEwQixDQUFDLGdDQUFnQyxDQUFDO1NBQ3pFLENBQUM7SUFDSCxDQUFDOzswR0FyQlcsNkJBQTZCOytFQUE3Qiw2QkFBNkI7b0ZBTjlCO1FBQ1Ysd0JBQXdCO0tBQ3hCLFlBTFE7WUFDUixZQUFZO1NBQ1o7dUZBT1csNkJBQTZCO2NBVnpDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysd0JBQXdCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWDs7d0ZBQ1ksNkJBQTZCLGNBUnhDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0cmUua2V5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtcm93LWhlaWdodC10aGVtZS9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC1yb3ctaGVpZ2h0L3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3Njcm9sbC1iYXIvc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudEhhbmRsZXIpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=