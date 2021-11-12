import { ElementRef, Injector } from '@angular/core';
export interface FabricModalConfig {
    injector?: Injector;
    afterCompCreation?: () => void;
    appendToElement?: ElementRef;
}
