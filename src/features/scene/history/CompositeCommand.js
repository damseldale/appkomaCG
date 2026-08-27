export class CompositeCommand {
  constructor(commands = []) { this.commands = commands.filter(Boolean); }
  execute() { this.commands.forEach((command) => command.execute()); }
  undo() { [...this.commands].reverse().forEach((command) => command.undo()); }
  redo() { this.commands.forEach((command) => typeof command.redo === 'function' ? command.redo() : command.execute()); }
}
