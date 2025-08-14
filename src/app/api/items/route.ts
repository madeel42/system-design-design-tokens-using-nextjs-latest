import { NextResponse } from "next/server";

export async function GET() {
  // Mock items (normally from DB)
  const items = [
    { id: 1, name: "Dashboard" },
    { id: 2, name: "Analytics" },
    { id: 3, name: "Reports" },
  ];
  return NextResponse.json(items);
}
