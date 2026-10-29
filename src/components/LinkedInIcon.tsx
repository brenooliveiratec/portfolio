type LinkedInIconProps = {
  size?: number;
};

export default function LinkedInIcon({ size = 24 }: LinkedInIconProps) {
  return (
    <img
      src="/images/social/linkedin-white.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      draggable={false}
      style={{ objectFit: "contain", flexShrink: 0 }}
    />
  );
}
