import { ImageResponse } from "next/og";
import { LogoSvg } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Full-bleed tile: iOS rounds the corners itself. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <LogoSvg size={180} rounded={false} />
      </div>
    ),
    size,
  );
}
