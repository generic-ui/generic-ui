import { OnDestroy } from '@angular/core';
import { CommandBus } from '../../../domain/command/command.bus';
import { Command } from '../../../domain/command/command';
import { CommandLogger } from '../../../domain/command/command.logger';
import { AggregateId } from '../../../domain/tactical/aggregate/aggregate-id';
import * as i0 from "@angular/core";
export declare class ConsoleCommandLogger extends CommandLogger implements OnDestroy {
    private enabled;
    private unsubscribe$;
    constructor(commandBus: CommandBus);
    ngOnDestroy(): void;
    start(): void;
    stop(): void;
    protected print(command: Command<AggregateId>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsoleCommandLogger, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConsoleCommandLogger>;
}
//# sourceMappingURL=console.command.logger.d.ts.map