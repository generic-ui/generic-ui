import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureBannerPanelConfig } from './structure-banner-panel.config';
import { HermesObservable } from '@generic-ui/hermes';
export declare abstract class StructureBannerPanel extends SmartComponent implements OnInit {
    bannerPanel: string | (() => string);
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    abstract onBannerPanelConfig(): HermesObservable<StructureBannerPanelConfig>;
    abstract getSelectorName(): string;
    abstract getPanelTitle(): string;
}
