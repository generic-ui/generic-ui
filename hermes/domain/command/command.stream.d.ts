import { Subject } from 'rxjs';
import { Command } from './command';
export declare class CommandStream extends Subject<Command> {
    next(value: Command): void;
}
