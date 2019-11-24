import { OnDestroy } from '@angular/core';
import { CommandBus } from '../../../domain/command/command.bus';
import { Command } from '../../../domain/command/command';
import { CommandLogger } from '../../../domain/command/command.logger';
export declare class ConsoleCommandLogger extends CommandLogger implements OnDestroy {
    private enabled;
    private unsubscribe$;
    constructor(commandBus: CommandBus);
    ngOnDestroy(): void;
    start(): void;
    stop(): void;
    log(command: Command): void;
}
