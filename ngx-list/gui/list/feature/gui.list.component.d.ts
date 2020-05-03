import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { StructureSourceWarehouse } from '../../../lib/structure/feature-api/source/structure-source.warehouse';
export declare class GuiListComponent extends GuiListGateway {
    private platformId;
    private elementRef;
    private changeDetectorRef;
    private readonly structureSourceWarehouse;
    constructor(platformId: any, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, structureSourceWarehouse: StructureSourceWarehouse);
}
