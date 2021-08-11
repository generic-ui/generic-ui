import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureBannerPanelConfig } from './structure-banner-panel.config';
import { Observable } from 'rxjs';
export declare abstract class StructureBannerPanel extends SmartComponent implements OnInit {
    bannerPanel: string | (() => string);
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    abstract getBannerPanelConfig(): Observable<StructureBannerPanelConfig>;
    abstract getSelectorName(): string;
    abstract getPanelTitle(): string;
}
