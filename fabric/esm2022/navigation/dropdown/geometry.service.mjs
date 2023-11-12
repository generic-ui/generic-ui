import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Geometry } from './geometry';
import * as i0 from "@angular/core";
export class GeometryService {
    geometryResults$ = new Subject();
    watchGeometry() {
        return this.geometryResults$.asObservable();
    }
    changeGeometry(container, menu, windowSize) {
        const geometry = new Geometry(container, menu, windowSize);
        this.geometryResults$.next(geometry);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GeometryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GeometryService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GeometryService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9uYXZpZ2F0aW9uL2Ryb3Bkb3duL2dlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBR3RDLE1BQU0sT0FBTyxlQUFlO0lBRW5CLGdCQUFnQixHQUFHLElBQUksT0FBTyxFQUFZLENBQUM7SUFFbkQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBcUIsRUFBRSxJQUFnQixFQUFFLFVBQWtCO1FBRXpFLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0QyxDQUFDO3VHQWRXLGVBQWU7MkdBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5U2VydmljZSB7XG5cblx0cHJpdmF0ZSBnZW9tZXRyeVJlc3VsdHMkID0gbmV3IFN1YmplY3Q8R2VvbWV0cnk+KCk7XG5cblx0d2F0Y2hHZW9tZXRyeSgpOiBPYnNlcnZhYmxlPEdlb21ldHJ5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2VvbWV0cnlSZXN1bHRzJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZUdlb21ldHJ5KGNvbnRhaW5lcjogRWxlbWVudFJlZiwgbWVudTogRWxlbWVudFJlZiwgd2luZG93U2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeShjb250YWluZXIsIG1lbnUsIHdpbmRvd1NpemUpO1xuXG5cdFx0dGhpcy5nZW9tZXRyeVJlc3VsdHMkLm5leHQoZ2VvbWV0cnkpO1xuXG5cdH1cbn1cbiJdfQ==