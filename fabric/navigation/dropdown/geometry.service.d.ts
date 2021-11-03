import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Geometry } from './geometry';
import * as i0 from "@angular/core";
export declare class GeometryService {
    private geometryResults$;
    watchGeometry(): Observable<Geometry>;
    changeGeometry(container: ElementRef, menu: ElementRef, windowSize: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GeometryService>;
}
//# sourceMappingURL=geometry.service.d.ts.map