import type { NextRequest } from "next/server";

export function GET(_req: NextRequest) {
  const body = `User-agent: *
Allow: /
Sitemap: https://mbzolfaghari.ir/sitemap.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
