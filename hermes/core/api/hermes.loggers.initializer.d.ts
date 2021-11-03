import { DomainEventLogger } from '../domain/event/domain-event.logger';
import { CommandLogger } from '../domain/command/command.logger';
import * as i0 from "@angular/core";
export declare class HermesLoggersInitializer {
    private platformId;
    private commandLogger;
    private eventLogger;
    constructor(platformId: any, commandLogger: CommandLogger, eventLogger: DomainEventLogger);
    start(): void;
    stop(): void;
    private loggersStart;
    private loggersStop;
    static ɵfac: i0.ɵɵFactoryDeclaration<HermesLoggersInitializer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HermesLoggersInitializer>;
}
//# sourceMappingURL=hermes.loggers.initializer.d.ts.map