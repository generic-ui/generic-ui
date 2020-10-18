/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { structureKey } from '../../../core/api/structre.api';
import { VerticalFormationFactory } from './vertical-formation.factory';
import { SetScrollPositionCommandHandler } from './scroll-position/set-scroll-position.command-handler';
import { SetVerticalScrollEnabledCommandHandler } from './set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetRowHeightBasedOnThemeCommandHandler } from './set-row-height-theme/set-row-height-based-on-theme.command-handler';
import { SetRowHeightCommandHandler } from './set-row-height/set-row-height.command-handler';
import { StructureSetHeightCommandHandler } from './container/set-height/structure-set-height.command-handler';
import { ScrollBarPositionSetEventHandler } from '../domain-read/scroll-bar/scroll-bar-position-set.event-handler';
import { SetScrollBarPositionCommandHandler } from './scroll-bar/set-scroll-bar-position.command-handler';
export class VerticalFormationDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SetRowHeightCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SetScrollBarPositionCommandHandler, structureKey)
        ];
    }
    /**
     * @return {?}
     */
    static domainEventHandlers() {
        return [
            ...HermesModule.registerDomainEventHandler(ScrollBarPositionSetEventHandler)
        ];
    }
}
VerticalFormationDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    VerticalFormationFactory
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
VerticalFormationDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25ILE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzlILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQy9HLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBYTFHLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxZQUFZO0lBRTlEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixFQUFFLFlBQVksQ0FBQztZQUNyRixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQ0FBc0MsRUFBRSxZQUFZLENBQUM7WUFDNUYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsc0NBQXNDLEVBQUUsWUFBWSxDQUFDO1lBQzVGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixFQUFFLFlBQVksQ0FBQztZQUNoRixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLENBQUM7WUFDdEYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsa0NBQWtDLEVBQUUsWUFBWSxDQUFDO1NBQ3hGLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLG1CQUFtQjtRQUN6QixPQUFPO1lBQ04sR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsZ0NBQWdDLENBQUM7U0FDNUUsQ0FBQztJQUNILENBQUM7OztZQS9CRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHdCQUF3QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0cmUuYXBpJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtcm93LWhlaWdodC10aGVtZS9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC1yb3ctaGVpZ2h0L3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3Njcm9sbC1iYXIvc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudEhhbmRsZXIpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=