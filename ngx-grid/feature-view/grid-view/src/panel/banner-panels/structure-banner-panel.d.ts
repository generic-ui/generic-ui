import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { StructureBannerPanelConfig } from './structure-banner-panel.config';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare abstract class StructureBannerPanel extends SmartComponent {
    bannerPanel$: HermesObservable<string>;
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    abstract onBannerPanelConfig(): HermesObservable<StructureBannerPanelConfig>;
    protected abstract getSelectorName(): string;
    initObservables(): void;
    private selectBannerPanelTemplate;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureBannerPanel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureBannerPanel, never, never, {}, {}, never, never, false, never>;
}
