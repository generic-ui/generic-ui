import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Geometry } from 'util/fabric/ui/form/modals/geometry';
export declare class GeometryService {
    private geometryResults$;
    watchGeometry(): Observable<Geometry>;
    changeGeometry(container: ElementRef, menu: ElementRef, windowSize: number): void;
}
