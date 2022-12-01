import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureBannerPanelConfig } from './structure-banner-panel.config';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare abstract class StructureBannerPanel extends SmartComponent implements OnInit {
    bannerPanel: string | (() => string);
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    abstract onBannerPanelConfig(): HermesObservable<StructureBannerPanelConfig>;
    abstract getSelectorName(): string;
    abstract getPanelTitle(): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureBannerPanel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureBannerPanel, never, never, {}, {}, never, never, false, never>;
}
