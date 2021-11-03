import { Injectable } from '@angular/core';
import { hermesTake } from '@generic-ui/hermes';
import { PagingWarehouse } from '../api/paging.warehouse';
import * as i0 from "@angular/core";
import * as i1 from "../api/read/paging.repository";
export class PagingDomainWarehouse extends PagingWarehouse {
    constructor(pagingRepository) {
        super();
        this.pagingRepository = pagingRepository;
    }
    onPaging(structureId) {
        return this.pagingRepository.on(structureId);
    }
    oncePaging(structureId) {
        return this.pagingRepository
            .on(structureId)
            .pipe(hermesTake(1));
    }
}
PagingDomainWarehouse.ɵfac = function PagingDomainWarehouse_Factory(t) { return new (t || PagingDomainWarehouse)(i0.ɵɵinject(i1.PagingRepository)); };
PagingDomainWarehouse.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PagingDomainWarehouse, factory: PagingDomainWarehouse.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingDomainWarehouse, [{
        type: Injectable
    }], function () { return [{ type: i1.PagingRepository }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4tcmVhZC9wYWdpbmcuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBb0IsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFJMUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQWU7SUFFekQsWUFBNkIsZ0JBQWtDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRG9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFL0QsQ0FBQztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQ2IsQ0FBQztJQUNSLENBQUM7OzBGQWhCVyxxQkFBcUI7MkVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uL2FwaS9yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RvbWFpbldhcmVob3VzZSBleHRlbmRzIFBhZ2luZ1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uUGFnaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbmNlUGFnaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=