import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { StructureBannerPanel } from '../structure-banner-panel';
import { StructureBannerPanelConfig } from '../structure-banner-panel.config';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructureTitlePanelComponent extends StructureBannerPanel {
    private readonly structureTitlePanelConfigArchive;
    constructor(structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    onBannerPanelConfig(): HermesObservable<StructureBannerPanelConfig>;
    getSelectorName(): string;
    getPanelTitle(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureTitlePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureTitlePanelComponent, "div[gui-structure-title-panel]", never, {}, {}, never, never, false, never>;
}
