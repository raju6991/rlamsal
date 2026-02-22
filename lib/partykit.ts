import PartySocket from "partysocket";

const PARTYKIT_HOST = process.env.NEXT_PUBLIC_PARTYKIT_HOST || "127.0.0.1:1999";

export const createPlaygroundSocket = (roomId: string) => {
  return new PartySocket({
    host: PARTYKIT_HOST,
    room: roomId,
  });
};
