import type * as Party from "partykit/server";

export default class Server implements Party.Server {
  constructor(readonly party: Party.Party) {}

  onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
    // When a user connects, we can send them the current state if we had one
    console.log(`Connected: ${conn.id}`);
  }

  onMessage(message: string, sender: Party.Connection) {
    // Broadcast the message to everyone else
    this.party.broadcast(message, [sender.id]);
  }
}

Server satisfies Party.Worker;
