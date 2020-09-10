/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SourceApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SourceApiModule, _super);
    function SourceApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return SourceApiModule;
}(ApiModule));
export { SourceApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2UuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRzVGO0lBeUJxQywyQ0FBUztJQXpCOUM7O0lBMEJBLENBQUM7O2dCQTFCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osa0JBQWtCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsK0JBQStCO3dCQUMvQixnQ0FBZ0M7d0JBQ2hDLGVBQWU7d0JBRWYsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGtCQUFrQjt3QkFFbEIscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBRXhCLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQiwwQkFBMEI7cUJBRTFCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFFRCxzQkFBQztDQUFBLEFBMUJELENBeUJxQyxTQUFTLEdBQzdDO1NBRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2UuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNvdXJjZURvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5LFxuXHRcdFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LFxuXHRcdFNvdXJjZUNvbnZlcnRlcixcblxuXHRcdFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFNvdXJjZVdhcmVob3VzZSxcblx0XHRTb3VyY2VFdmVudFNlcnZpY2UsXG5cblx0XHRSb3dTZWxlY3RlZFJlcG9zaXRvcnksXG5cdFx0Rm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0Rm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0Rm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5XG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==