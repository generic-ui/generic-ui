import { CommandLogger } from '../domain/command/command.logger';
import { DomainEventLogger } from '../domain/event/domain-event.logger';
export declare const hermesApi = "hermesApi";
export declare class HermesApi {
    private platformId;
    private commandLogger;
    private eventLogger;
    constructor(platformId: Object, commandLogger: CommandLogger, eventLogger: DomainEventLogger);
}
