import { Injectable } from '@angular/core';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValuesReadModel } from './unique-values.read-model';
import { UniqueValueReadModel } from './unique-value.read-model';
import * as i0 from "@angular/core";
import * as i1 from "./unique-values.archive";
export class UniqueFilterCalculatedEventHandler {
    constructor(uniqueValuesRepository) {
        this.uniqueValuesRepository = uniqueValuesRepository;
    }
    forEvent() {
        return UniqueFilterCalculatedEvent;
    }
    handle(calculatedEvent) {
        if (calculatedEvent.ofMessageType('UniqueFilterCalculatedEvent')) {
            const uvRM = new Map();
            calculatedEvent.getUniqueValues()
                .forEach((values, key) => {
                const valuesRM = values.map((uv) => {
                    return new UniqueValueReadModel(uv.getId(), uv.getDisplayValue(), uv.isEnabled());
                });
                uvRM.set(key, valuesRM);
            });
            const uniqueValues = new UniqueValuesReadModel(uvRM);
            this.uniqueValuesRepository.next(calculatedEvent.getAggregateId(), uniqueValues);
        }
    }
}
UniqueFilterCalculatedEventHandler.ɵfac = function UniqueFilterCalculatedEventHandler_Factory(t) { return new (t || UniqueFilterCalculatedEventHandler)(i0.ɵɵinject(i1.UniqueValuesArchive)); };
UniqueFilterCalculatedEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UniqueFilterCalculatedEventHandler, factory: UniqueFilterCalculatedEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniqueFilterCalculatedEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.UniqueValuesArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFM0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUdqRSxNQUFNLE9BQU8sa0NBQWtDO0lBRTlDLFlBQTZCLHNCQUEyQztRQUEzQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXFCO0lBQ3hFLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQTRDO1FBRWxELElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO1lBRWpFLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFFdkIsZUFBZSxDQUFDLGVBQWUsRUFBRTtpQkFDMUIsT0FBTyxDQUFDLENBQUMsTUFBMEIsRUFBRSxHQUFXLEVBQUUsRUFBRTtnQkFFcEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO29CQUMvQyxPQUFPLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDbkYsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7WUFHVCxNQUFNLFlBQVksR0FBRyxJQUFJLHFCQUFxQixDQUM3QyxJQUFJLENBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQzs7b0hBaENXLGtDQUFrQzt3RkFBbEMsa0NBQWtDLFdBQWxDLGtDQUFrQzt1RkFBbEMsa0NBQWtDO2NBRDlDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3VuaXF1ZS9jYWxjdWxhdGUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc0FyY2hpdmUgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZXMuYXJjaGl2ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi91bmlxdWUvdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlUmVhZE1vZGVsIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUucmVhZC1tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVuaXF1ZVZhbHVlc1JlcG9zaXRvcnk6IFVuaXF1ZVZhbHVlc0FyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGNhbGN1bGF0ZWRFdmVudDogVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoY2FsY3VsYXRlZEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1VuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHV2Uk0gPSBuZXcgTWFwKCk7XG5cblx0XHRcdGNhbGN1bGF0ZWRFdmVudC5nZXRVbmlxdWVWYWx1ZXMoKVxuXHRcdFx0XHRcdFx0ICAgLmZvckVhY2goKHZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWU+LCBrZXk6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdCAgIGNvbnN0IHZhbHVlc1JNID0gdmFsdWVzLm1hcCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCh1di5nZXRJZCgpLCB1di5nZXREaXNwbGF5VmFsdWUoKSwgdXYuaXNFbmFibGVkKCkpO1xuXHRcdFx0XHRcdFx0XHQgICB9KTtcblxuXHRcdFx0XHRcdFx0XHQgICB1dlJNLnNldChrZXksIHZhbHVlc1JNKTtcblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cblx0XHRcdGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwoXG5cdFx0XHRcdHV2Uk1cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMudW5pcXVlVmFsdWVzUmVwb3NpdG9yeS5uZXh0KGNhbGN1bGF0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCB1bmlxdWVWYWx1ZXMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=