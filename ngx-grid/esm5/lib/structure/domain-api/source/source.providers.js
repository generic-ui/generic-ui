/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOMAIN_EVENT_HANDLERS, HermesModule } from '@generic-ui/hermes';
import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { SourceManagerFactory } from '../../domain/source/source.manager-factory';
import { SetOriginCommandHandler } from '../../domain/source/origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from '../../domain/source/origin/edit/structure.edit-source-item.command-handler';
import { StructureSourceDomainEventPublisher } from '../../domain/source/structure.source.domain-event.publisher';
import { StructureOriginChangedEventHandler } from './origin/structure.origin-changed.event-handler';
import { SourceConverter } from './source.converter';
import { SourceCommandDispatcher } from './source.command-dispatcher';
import { StructureSourceWarehouse } from './structure-source.warehouse';
import { SourceEventService } from './event/source-event.service';
import { StructureSourceOriginRepository } from './origin/structure.source-origin.repository';
import { SourceSetLoadingCommandHandler } from '../../domain/source/loading/source-set-loading.command-handler';
import { StructurePreparedItemsRepository } from './prepared/structure.prepared-items.repository';
import { StructurePreparedItemsEventHandler } from './prepared/structure.prepared-items.event-handler';
/** @type {?} */
var commandProviders = [
    SourceDispatcher,
    SourceManagerFactory,
    StructureSourceDomainEventPublisher
];
/** @type {?} */
var readProviders = [
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureOriginChangedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructurePreparedItemsEventHandler,
        multi: true
    },
    StructureSourceOriginRepository,
    StructurePreparedItemsRepository
];
/** @type {?} */
export var sourceCommandHandlers = tslib_1.__spread(HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetOriginCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, 'StructureAggregate'));
/** @type {?} */
export var sourceProviders = tslib_1.__spread(commandProviders, readProviders, [
    SourceConverter,
    SourceCommandDispatcher,
    StructureSourceWarehouse,
    SourceEventService
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7SUFHakcsZ0JBQWdCLEdBQUc7SUFDeEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQ0FBbUM7Q0FDbkM7O0lBRUssYUFBYSxHQUFHO0lBQ3JCO1FBQ0MsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsa0NBQWtDO1FBQzVDLEtBQUssRUFBRSxJQUFJO0tBQ1gsRUFBRTtRQUNGLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsUUFBUSxFQUFFLGtDQUFrQztRQUM1QyxLQUFLLEVBQUUsSUFBSTtLQUNYO0lBQ0QsK0JBQStCO0lBQy9CLGdDQUFnQztDQUNoQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLG9CQUM5QixZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsb0JBQW9CLENBQUMsRUFDekYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLEVBQ2xGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxxQ0FBcUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUNuRzs7QUFFRCxNQUFNLEtBQU8sZUFBZSxvQkFDeEIsZ0JBQWdCLEVBQ2hCLGFBQWE7SUFFaEIsZUFBZTtJQUVmLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2Uvc3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuL3NvdXJjZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuL29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvbG9hZGluZy9zb3VyY2Utc2V0LWxvYWRpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuZXZlbnQtaGFuZGxlcic7XG5cblxuY29uc3QgY29tbWFuZFByb3ZpZGVycyA9IFtcblx0U291cmNlRGlzcGF0Y2hlcixcblx0U291cmNlTWFuYWdlckZhY3RvcnksXG5cdFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyXG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkRXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0U3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnlcbl07XG5cbmV4cG9ydCBjb25zdCBzb3VyY2VDb21tYW5kSGFuZGxlcnMgPSBbXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRPcmlnaW5Db21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJylcbl07XG5cbmV4cG9ydCBjb25zdCBzb3VyY2VQcm92aWRlcnMgPSBbXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnJlYWRQcm92aWRlcnMsXG5cblx0U291cmNlQ29udmVydGVyLFxuXG5cdFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UsXG5cdFNvdXJjZUV2ZW50U2VydmljZVxuXTtcbiJdfQ==