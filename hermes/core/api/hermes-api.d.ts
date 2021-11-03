import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
import * as i0 from "@angular/core";
export declare const hermesApi = "hermesApi";
export declare class HermesApi {
    private platformId;
    private commandLogger;
    private eventLogger;
    constructor(platformId: Object, commandLogger: CommandLogger, eventLogger: DomainEventLogger);
    static ɵfac: i0.ɵɵFactoryDeclaration<HermesApi, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HermesApi>;
}
//# sourceMappingURL=hermes-api.d.ts.map