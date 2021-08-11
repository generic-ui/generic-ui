import { ElementRef } from '@angular/core';
import { SelectOptionsCords } from './select-options.cords';
import { Observable } from 'rxjs';
export declare class SelectOptionsGeometryService {
    private readonly platformId;
    private selectContainerGeometry;
    private readonly selectOptionsCords$;
    constructor(platformId: any);
    onSelectOptionsCords(): Observable<SelectOptionsCords>;
    setGeometry(selectContainerRef: ElementRef): void;
    nextCords(element: ElementRef): void;
}
