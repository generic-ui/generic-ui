import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Reactive } from '../../../../common/cdk/reactive';
export declare class StructureTitlePanelComponent extends Reactive {
    private structureTitlePanelConfigArchive;
    private readonly sanitizer;
    title: string | ((title: any) => string);
    safeHTML: SafeHtml;
    constructor(structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, sanitizer: DomSanitizer);
}
