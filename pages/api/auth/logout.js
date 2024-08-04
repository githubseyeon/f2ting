export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  res.setHeader("Set-Cookie", [
    "auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly",
  ]);

  res.status(200).json({ message: "Logged out successfully" });
}