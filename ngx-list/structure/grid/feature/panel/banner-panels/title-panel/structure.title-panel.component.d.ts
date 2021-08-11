import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { StructureBannerPanel } from '../structure-banner-panel';
import { Observable } from 'rxjs';
import { StructureBannerPanelConfig } from '../structure-banner-panel.config';
export declare class StructureTitlePanelComponent extends StructureBannerPanel {
    private readonly structureTitlePanelConfigArchive;
    constructor(structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    getBannerPanelConfig(): Observable<StructureBannerPanelConfig>;
    getSelectorName(): string;
    getPanelTitle(): string;
}
