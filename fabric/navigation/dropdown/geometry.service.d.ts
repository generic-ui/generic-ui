import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Geometry } from './geometry';
export declare class GeometryService {
    private geometryResults$;
    watchGeometry(): Observable<Geometry>;
    changeGeometry(container: ElementRef, menu: ElementRef, windowSize: number): void;
}
