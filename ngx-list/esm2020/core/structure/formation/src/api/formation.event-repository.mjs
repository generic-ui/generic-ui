import { DomainEventBus, EventRepository, hermesFilter, hermesMap, HermesSubject, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../../../source/src/api/source.warehouse';
import { SelectedRow } from './row-selected/selected-row';
import { SelectedRowChangedEvent } from '../core/selected-row-changed.event';
export class FormationEventRepository extends EventRepository {
    constructor(sourceWarehouse, domainEventBusTOREMOVE) {
        super();
        this.sourceWarehouse = sourceWarehouse;
        this.domainEventBusTOREMOVE = domainEventBusTOREMOVE;
        this.map = new Map();
        this.subject$ = new HermesSubject();
        this.domainEventBusTOREMOVE
            .ofEvents([
            SelectedRowChangedEvent
        ])
            .pipe(hermesSwitchMap((event) => {
            const selectedRows = event.getSelectedRows();
            const structureId = event.getAggregateId();
            return this.sourceWarehouse
                .onPreparedItems(structureId)
                .pipe(hermesTake(1), hermesMap((items) => {
                const selectedItems = [], length = items.length, itemsMap = new Map();
                for (let i = 0; i < length; i += 1) {
                    itemsMap.set(items[i].getId().toString(), items[i]);
                }
                for (let j = 0; j < selectedRows.length; j += 1) {
                    const item = itemsMap.get(selectedRows[j]);
                    selectedItems.push(new SelectedRow(item.getSourceItem(), j, item.getId()));
                }
                return {
                    id: structureId,
                    items: selectedItems
                };
            }));
        }))
            .subscribe((e) => {
            this.map.set(e.id.toString(), e.items);
            this.subject$.next(this.map);
        });
    }
    onItemSelected(structureId) {
        return this.subject$
            .toObservable()
            .pipe(hermesFilter((map) => {
            return map.has(structureId.toString());
        }), hermesMap((map) => {
            return map.get(structureId.toString());
        }));
    }
}
FormationEventRepository.services = [SourceWarehouse, DomainEventBus];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHNUosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs3RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBeUM7SUFNdEYsWUFBNkIsZUFBZ0MsRUFDekMsc0JBQXNDO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBRm9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN6QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQWdCO1FBTHpDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTS9DLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsUUFBUSxDQUFDO1lBQ1IsdUJBQThCO1NBQzlCLENBQ0Q7YUFDQSxJQUFJLENBQ0osZUFBZSxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO1lBRWxELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFM0MsT0FBTyxJQUFJLENBQUMsZUFBZTtpQkFDckIsZUFBZSxDQUFDLFdBQVcsQ0FBQztpQkFDNUIsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFDYixTQUFTLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7Z0JBRXRDLE1BQU0sYUFBYSxHQUFHLEVBQUUsRUFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQ3JCLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztnQkFFMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDaEQsTUFBTSxJQUFJLEdBQWUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzNFO2dCQUVELE9BQU87b0JBQ04sRUFBRSxFQUFFLFdBQVc7b0JBQ2YsS0FBSyxFQUFFLGFBQWE7aUJBQ3BCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FDRixDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsY0FBYyxDQUFDLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7QUFiZSxpQ0FBUSxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QsIGhlcm1lc1N3aXRjaE1hcCwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zcmMvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2Uvc3JjL2RvbWFpbi9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcCgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViamVjdCQgPSBuZXcgSGVybWVzU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXNUT1JFTU9WRTogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudEJ1c1RPUkVNT1ZFXG5cdFx0XHQub2ZFdmVudHMoW1xuXHRcdFx0XHRcdFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzU3dpdGNoTWFwKChldmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IGV2ZW50LmdldFNlbGVjdGVkUm93cygpO1xuXHRcdFx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgICAub25QcmVwYXJlZEl0ZW1zKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpLFxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBJdGVtRW50aXR5PigpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwLnNldChpdGVtc1tpXS5nZXRJZCgpLnRvU3RyaW5nKCksIGl0ZW1zW2ldKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZFJvd3MubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3QgaXRlbTogSXRlbUVudGl0eSA9IGl0ZW1zTWFwLmdldChzZWxlY3RlZFJvd3Nbal0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzZWxlY3RlZEl0ZW1zLnB1c2gobmV3IFNlbGVjdGVkUm93KGl0ZW0uZ2V0U291cmNlSXRlbSgpLCBqLCBpdGVtLmdldElkKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaWQ6IHN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtczogc2VsZWN0ZWRJdGVtc1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfTtcblx0XHRcdFx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHRcdFx0XHQgICApO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1hcC5zZXQoZS5pZC50b1N0cmluZygpLCBlLml0ZW1zKTtcblx0XHRcdFx0dGhpcy5zdWJqZWN0JC5uZXh0KHRoaXMubWFwKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1NvdXJjZVdhcmVob3VzZSwgRG9tYWluRXZlbnRCdXNdIGFzIGNvbnN0O1xuXG5cdG9uSXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxTZWxlY3RlZFJvdz4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5oYXMoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=