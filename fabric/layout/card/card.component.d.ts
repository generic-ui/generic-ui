import * as i0 from "@angular/core";
export declare class FabricCardComponent {
    title: string;
    image?: string;
    alt?: string;
    contentBlock: Array<string>;
    isTitleEnabled(): boolean;
    isImgEnabled(): boolean;
    isContentBlockEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricCardComponent, "gui-card", never, { "title": { "alias": "title"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "contentBlock": { "alias": "contentBlock"; "required": false; }; }, {}, never, ["*"], false, never>;
}
