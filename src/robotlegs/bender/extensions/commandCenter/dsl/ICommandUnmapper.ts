// ------------------------------------------------------------------------------
//  Copyright (c) 2009-2013 the original author or authors. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

/**
 * @private
 */
export interface ICommandUnmapper {
    /**
     * Unmaps a Command
     * @param commandClass Command to unmap
     */
    fromCommand(commandClass: Object): void;

    /**
     * Unmaps all commands from this trigger
     */
    fromAll(): void;
}
