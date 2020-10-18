/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var VerticalFormationDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationDomainModule, _super);
    function VerticalFormationDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    VerticalFormationDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, structureKey), HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, structureKey), HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, structureKey), HermesModule.registerCommandHandler(SetRowHeightCommandHandler, structureKey), HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, structureKey), HermesModule.registerCommandHandler(SetScrollBarPositionCommandHandler, structureKey));
    };
    /**
     * @return {?}
     */
    VerticalFormationDomainModule.domainEventHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerDomainEventHandler(ScrollBarPositionSetEventHandler));
    };
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
    VerticalFormationDomainModule.ctorParameters = function () { return []; };
    return VerticalFormationDomainModule;
}(DomainModule));
export { VerticalFormationDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNuSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM5SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUcxRztJQVVtRCx5REFBWTtJQUU5RDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLDZDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQ2xGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQ0FBc0MsRUFBRSxZQUFZLENBQUMsRUFDekYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLFlBQVksQ0FBQyxFQUN6RixZQUFZLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxDQUFDLEVBQzdFLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFDbkYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGtDQUFrQyxFQUFFLFlBQVksQ0FBQyxFQUN2RjtJQUNILENBQUM7Ozs7SUFFTSxpREFBbUI7OztJQUExQjtRQUNDLHdCQUNJLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUMzRTtJQUNILENBQUM7O2dCQS9CRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLHdCQUF3QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOzs7O0lBd0JELG9DQUFDO0NBQUEsQUFqQ0QsQ0FVbUQsWUFBWSxHQXVCOUQ7U0F2QlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHJlLmFwaSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3Njcm9sbC1wb3NpdGlvbi9zZXQtc2Nyb2xsLXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2V0LXJvdy1oZWlnaHQtdGhlbWUvc2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1zZXQtaGVpZ2h0LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zY3JvbGwtYmFyL3NldC1zY3JvbGwtYmFyLXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRWZXJ0aWNhbEZvcm1hdGlvbkZhY3Rvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Eb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93SGVpZ2h0Q29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSlcblx0XHRdO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19