import { NextResponse } from "next/server";
import db from "@/lib/db.json";

export const GET = () => {
  return NextResponse.json({
    hero: db.hero,
    consoles: db.consoles,
    games: db.games,
    dualsense: db.dualsense,
    accessories: db.accessories,
  });
};
