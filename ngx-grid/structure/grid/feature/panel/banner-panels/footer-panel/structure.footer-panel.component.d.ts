import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { StructureFooterPanelConfigArchive } from './structure.footer-panel.config-archive';
import { StructureBannerPanel } from '../structure-banner-panel';
import { StructureBannerPanelConfig } from '../structure-banner-panel.config';
import { HermesObservable } from '@generic-ui/hermes';
export declare class StructureFooterPanelComponent extends StructureBannerPanel {
    private readonly structureFooterPanelConfigArchive;
    constructor(structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    onBannerPanelConfig(): HermesObservable<StructureBannerPanelConfig>;
    getSelectorName(): string;
    getPanelTitle(): string;
}
