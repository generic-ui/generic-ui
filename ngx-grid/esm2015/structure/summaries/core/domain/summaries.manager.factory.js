import { Inject, Injectable } from '@angular/core';
import { SUMMARIES_CALCULATORS } from './calculation/summaries.calculators.token';
import { SummariesManager } from './summaries.manager';
import * as i0 from "@angular/core";
export class SummariesManagerFactory {
    constructor(calculators) {
        this.calculators = calculators;
    }
    create(structureId) {
        return new SummariesManager(structureId, this.calculators);
    }
}
SummariesManagerFactory.ɵfac = function SummariesManagerFactory_Factory(t) { return new (t || SummariesManagerFactory)(i0.ɵɵinject(SUMMARIES_CALCULATORS)); };
SummariesManagerFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SummariesManagerFactory, factory: SummariesManagerFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummariesManagerFactory, [{
        type: Injectable
    }], function () { return [{ type: Array, decorators: [{
                type: Inject,
                args: [SUMMARIES_CALCULATORS]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUl2RCxNQUFNLE9BQU8sdUJBQXVCO0lBRW5DLFlBQTRELFdBQWlEO1FBQWpELGdCQUFXLEdBQVgsV0FBVyxDQUFzQztJQUM3RyxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7OzhGQVBXLHVCQUF1QixjQUVmLHFCQUFxQjs2RUFGN0IsdUJBQXVCLFdBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLFVBQVU7c0NBRytELEtBQUs7c0JBQWpFLE1BQU07dUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNVTU1BUklFU19DQUxDVUxBVE9SUyB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3JzLnRva2VuJztcbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXIgfSBmcm9tICcuL3N1bW1hcmllcy5tYW5hZ2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoU1VNTUFSSUVTX0NBTENVTEFUT1JTKSBwcml2YXRlIHJlYWRvbmx5IGNhbGN1bGF0b3JzOiBBcnJheTxTdW1tYXJpZXNDYWxjdWxhdG9yPGFueSwgYW55Pj4pIHtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdW1tYXJpZXNNYW5hZ2VyIHtcblx0XHRyZXR1cm4gbmV3IFN1bW1hcmllc01hbmFnZXIoc3RydWN0dXJlSWQsIHRoaXMuY2FsY3VsYXRvcnMpO1xuXHR9XG5cbn1cbiJdfQ==