import { ElementRef } from '@angular/core';
import { SelectOptionsCords } from './select-options.cords';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SelectOptionsGeometryService {
    private readonly platformId;
    private selectContainerGeometry?;
    private readonly selectOptionsCords$;
    constructor(platformId: any);
    onSelectOptionsCords(): Observable<SelectOptionsCords>;
    setGeometry(selectContainerRef: ElementRef): void;
    nextCords(element: ElementRef): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectOptionsGeometryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectOptionsGeometryService>;
}
