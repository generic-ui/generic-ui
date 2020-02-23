import { PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeStyle, SafeUrl, SafeScript, SafeResourceUrl } from "@angular/platform-browser";
export declare class SafePipe implements PipeTransform {
    protected sanitizer: DomSanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl;
}
