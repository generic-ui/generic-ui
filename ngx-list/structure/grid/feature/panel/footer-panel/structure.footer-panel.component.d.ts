import { StructureFooterPanelConfigArchive } from './structure.footer-panel.config-archive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Reactive } from '../../../../../common/cdk/reactive';
export declare class StructureFooterPanelComponent extends Reactive {
    private structureFooterPanelConfigArchive;
    private readonly sanitizer;
    footerTitle: string | ((title: any) => string);
    safeHTML: SafeHtml;
    constructor(structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, sanitizer: DomSanitizer);
}
