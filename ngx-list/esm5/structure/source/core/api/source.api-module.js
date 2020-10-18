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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUc1RjtJQXlCcUMsMkNBQVM7SUF6QjlDOztJQTBCQSxDQUFDOztnQkExQkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLCtCQUErQjt3QkFDL0IsZ0NBQWdDO3dCQUNoQyxlQUFlO3dCQUVmLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBRWxCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUV4Qix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsMEJBQTBCO3FCQUUxQjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBRUQsc0JBQUM7Q0FBQSxBQTFCRCxDQXlCcUMsU0FBUyxHQUM3QztTQURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZUNvbnZlcnRlciB9IGZyb20gJy4vc291cmNlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4vc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc291cmNlLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4vZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9mb3JtYXRpb24vcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3RlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9mb3JtYXRpb24vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTb3VyY2VEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSxcblx0XHRTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSxcblx0XHRTb3VyY2VDb252ZXJ0ZXIsXG5cblx0XHRTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRTb3VyY2VXYXJlaG91c2UsXG5cdFx0U291cmNlRXZlbnRTZXJ2aWNlLFxuXG5cdFx0Um93U2VsZWN0ZWRSZXBvc2l0b3J5LFxuXHRcdEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblxuXHRcdEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=