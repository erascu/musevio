import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const filter = searchParams.get("filter") || "All";
  const query = searchParams.get("q") || "";

  const skip = (page - 1) * 12;
  const filterLogic = filter !== "All" && !query ? `&type=${filter}` : "";
  const searchLogic = query ? `&q=${encodeURIComponent(query)}` : "";

  const url = `https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=12&skip=${skip}${filterLogic}${searchLogic}`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "External API fetch failed" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
