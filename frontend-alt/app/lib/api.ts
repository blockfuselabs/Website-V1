// Base URL for the backend API.
// Set NEXT_PUBLIC_API_URL in .env.local to point at your server.
export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'

// Generic fetch wrapper — throws on non-2xx responses.
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  })
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`)
  return res.json() as Promise<T>
}
