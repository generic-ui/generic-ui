import { DomainEventLogger } from '../domain/event/domain-event.logger';
import { CommandLogger } from '../domain/command/command.logger';
export declare class HermesLoggersInitializer {
    private platformId;
    private commandLogger;
    private eventLogger;
    constructor(platformId: any, commandLogger: CommandLogger, eventLogger: DomainEventLogger);
    start(): void;
    stop(): void;
    private loggersStart;
    private loggersStop;
}
