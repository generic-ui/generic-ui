import { Injectable } from '@angular/core';
import { EventRepository, hermesFilter, hermesMap, HermesSubject, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
import { SelectedRow } from './selected-row';
import { SelectedRowChangedEvent } from '../../domain/formation/selected-row-changed.event';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
import * as i2 from "../source.warehouse";
export class FormationEventRepository extends EventRepository {
    constructor(domainEventBus, sourceWarehouse) {
        super(domainEventBus);
        this.sourceWarehouse = sourceWarehouse;
        this.map = new Map();
        this.subject$ = new HermesSubject();
        domainEventBus
            .ofEvents([
            SelectedRowChangedEvent
        ])
            .pipe(hermesSwitchMap((event) => {
            const selectedRows = event.getSelectedRows();
            const structureId = event.getAggregateId();
            return this.sourceWarehouse
                .onPreparedEntities(structureId)
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
FormationEventRepository.ɵfac = function FormationEventRepository_Factory(t) { return new (t || FormationEventRepository)(i0.ɵɵinject(i1.DomainEventBus), i0.ɵɵinject(i2.SourceWarehouse)); };
FormationEventRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormationEventRepository, factory: FormationEventRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormationEventRepository, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventBus }, { type: i2.SourceWarehouse }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFrQixlQUFlLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk1SixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7QUFNNUYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGVBQXNEO0lBTW5HLFlBQVksY0FBOEIsRUFDdEIsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBREgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTG5DLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTS9DLGNBQWM7YUFDWixRQUFRLENBQUM7WUFDUix1QkFBOEI7U0FDOUIsQ0FDRDthQUNBLElBQUksQ0FDSixlQUFlLENBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7WUFFbEQsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzdDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUUzQyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUNyQixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9CLElBQUksQ0FDSixVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ2IsU0FBUyxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO2dCQUU1QyxNQUFNLGFBQWEsR0FBRyxFQUFFLEVBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUNyQixRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQTRCLENBQUM7Z0JBRWhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2hELE1BQU0sSUFBSSxHQUFxQixRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDM0U7Z0JBRUQsT0FBTztvQkFDTixFQUFFLEVBQUUsV0FBVztvQkFDZixLQUFLLEVBQUUsYUFBYTtpQkFDcEIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUNGLENBQUM7UUFDUixDQUFDLENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN6QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDOztnR0FqRVcsd0JBQXdCOzhFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QsIGhlcm1lc1N3aXRjaE1hcCwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YmplY3QkID0gbmV3IEhlcm1lc1N1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cblx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0Lm9mRXZlbnRzKFtcblx0XHRcdFx0XHRTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0XVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc1N3aXRjaE1hcCgoZXZlbnQ6IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSBldmVudC5nZXRTZWxlY3RlZFJvd3MoKTtcblx0XHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0ICAgLm9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKSxcblx0XHRcdFx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXNNYXAgPSBuZXcgTWFwPHN0cmluZywgT3JpZ2luSXRlbUVudGl0eT4oKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcC5zZXQoaXRlbXNbaV0uZ2V0SWQoKS50b1N0cmluZygpLCBpdGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWRSb3dzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkgPSBpdGVtc01hcC5nZXQoc2VsZWN0ZWRSb3dzW2pdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc2VsZWN0ZWRJdGVtcy5wdXNoKG5ldyBTZWxlY3RlZFJvdyhpdGVtLmdldFNvdXJjZUl0ZW0oKSwgaiwgaXRlbS5nZXRJZCgpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGlkOiBzdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXM6IHNlbGVjdGVkSXRlbXNcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGUpID0+IHtcblx0XHRcdFx0dGhpcy5tYXAuc2V0KGUuaWQudG9TdHJpbmcoKSwgZS5pdGVtcyk7XG5cdFx0XHRcdHRoaXMuc3ViamVjdCQubmV4dCh0aGlzLm1hcCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxTZWxlY3RlZFJvdz4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0JFxuXHRcdFx0XHQgICAudG9PYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5oYXMoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=