import { hermesFilter, hermesMap, HermesReplaySubject, Optional } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../core-read/composition.read-model-root-repository';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionCreatedEvent } from '../../core/create/composition-created.event';
import { CompositionResizeWidthSetEvent } from '../../core/width/resize-width/composition-resize-width-set.event';
import { CompositionColumnsSetEvent } from '../../core/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../../core/width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from '../../core/width/set-width/composition-width-set.event';
import { CompositionChangeSortStatusEvent } from '../../core/column/sort/composition-change-sort-status.event';
import { CompositionColumnSetEnabledEvent } from '../../core/column/set-enabled/composition.column-set-enabled.event';
import { CompositionColumnMovedLeftEvent } from '../../core/column/move/left/composition.column-moved-left.event';
import { CompositionColumnMovedRightEvent } from '../../core/column/move/right/composition.column-moved-right.event';
export class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    inMemoryCompositionReadStore;
    compositionIdToComposition = new Map();
    composition$ = new HermesReplaySubject(1);
    constructor(inMemoryCompositionReadStore) {
        super();
        this.inMemoryCompositionReadStore = inMemoryCompositionReadStore;
    }
    static services = [InMemoryCompositionReadStore];
    on(compositionId) {
        return this.composition$
            .toObservable()
            .pipe(hermesFilter((compositionIdToComposition) => {
            const key = compositionId.getId();
            return compositionIdToComposition.has(key);
        }), hermesMap((compositionIdToComposition) => compositionIdToComposition.get(compositionId.getId())));
    }
    find(compositionId) {
        const key = compositionId.getId();
        return Optional.of(this.compositionIdToComposition.get(key));
    }
    forEvents() {
        return [
            CompositionCreatedEvent,
            CompositionResizeWidthSetEvent,
            CompositionColumnsSetEvent,
            CompositionContainerWidthSetEvent,
            CompositionWidthSetEvent,
            CompositionColumnSetEnabledEvent,
            CompositionColumnMovedLeftEvent,
            CompositionColumnMovedRightEvent,
            CompositionChangeSortStatusEvent
        ];
    }
    subscribe(event) {
        const aggregateId = event.getAggregateId();
        const optComposition = this.inMemoryCompositionReadStore.getById(aggregateId);
        optComposition.ifPresent((composition) => {
            const key = composition.getId().toString();
            this.compositionIdToComposition.set(key, composition);
            this.composition$.next(this.compositionIdToComposition);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL3BlcnNpc3QvYXBpL2luLW1lbW9yeS5jb21wb3NpdGlvbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZSxZQUFZLEVBQUUsU0FBUyxFQUFvQixtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUU1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUlySCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsa0NBQWtDO0lBTWhFO0lBSkgsMEJBQTBCLEdBQUcsSUFBSSxHQUFHLEVBQW1DLENBQUM7SUFFeEUsWUFBWSxHQUFHLElBQUksbUJBQW1CLENBQXVDLENBQUMsQ0FBQyxDQUFDO0lBRWpHLFlBQW9CLDRCQUEwRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFFOUUsQ0FBQztJQUVELE1BQU0sQ0FBVSxRQUFRLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBRTFELEVBQUUsQ0FBQyxhQUE0QjtRQUU5QixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ2xCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQywwQkFBZ0UsRUFBRSxFQUFFO1lBRWpGLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVsQyxPQUFPLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsQ0FBQywwQkFBZ0UsRUFBRSxFQUFFLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ3RJLENBQUM7SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDLGFBQTRCO1FBRWhDLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsQyxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFUyxTQUFTO1FBQ2xCLE9BQU87WUFDTix1QkFBdUI7WUFDdkIsOEJBQThCO1lBQzlCLDBCQUEwQjtZQUMxQixpQ0FBaUM7WUFDakMsd0JBQXdCO1lBQ3hCLGdDQUFnQztZQUNoQywrQkFBK0I7WUFDL0IsZ0NBQWdDO1lBQ2hDLGdDQUF1QztTQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVTLFNBQVMsQ0FBQyxLQUFpQztRQUVwRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFM0MsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU5RSxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFO1lBQ2pFLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUUzQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCwgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1JlcGxheVN1YmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUtcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB9IGZyb20gJy4uLy4uL2NvcmUtcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY3JlYXRlL2NvbXBvc2l0aW9uLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uJCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290Pj4oMSk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlXTtcblxuXHRvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seTxDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4+IHtcblxuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uJFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbjogTWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IGNvbXBvc2l0aW9uSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb246IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PikgPT4gY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uZ2V0KGNvbXBvc2l0aW9uSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRmaW5kKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPcHRpb25hbDxDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4ge1xuXG5cdFx0Y29uc3Qga2V5ID0gY29tcG9zaXRpb25JZC5nZXRJZCgpO1xuXG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uZ2V0KGtleSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q29tcG9zaXRpb25DcmVhdGVkRXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgYXMgYW55XG5cdFx0XTtcblx0fVxuXG5cdHByb3RlY3RlZCBzdWJzY3JpYmUoZXZlbnQ6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+KTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRDb21wb3NpdGlvbiA9IHRoaXMuaW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdENvbXBvc2l0aW9uLmlmUHJlc2VudCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiB7XG5cdFx0XHRjb25zdCBrZXkgPSBjb21wb3NpdGlvbi5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uc2V0KGtleSwgY29tcG9zaXRpb24pO1xuXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uJC5uZXh0KHRoaXMuY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24pO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=