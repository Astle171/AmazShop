import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import type { CartOwner } from "@/lib/cart-service";

const ANON_COOKIE = "amazshop-anon-id";

/**
 * Resolve cart owner from the current request.
 * Authenticated users are identified by userId; guests by anonymous cookie.
 */
export async function resolveCartOwner(): Promise<CartOwner | null> {
  const session = await auth();
  if (session?.user?.id) {
    return { userId: session.user.id };
  }

  const jar = await cookies();
  const anonId = jar.get(ANON_COOKIE)?.value;
  if (anonId) {
    return { anonymousId: anonId };
  }

  return null;
}
