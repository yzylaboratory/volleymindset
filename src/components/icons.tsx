import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  size?: number;
};

export function ArrowRightIcon({ className, size = 15 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownloadIcon({ className, size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 3V15M12 15L7 10M12 15L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChecklistIcon({ className }: IconProps) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M9 6H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 18H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M4 6L5.2 7.2L7.4 4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L5.2 13.2L7.4 10.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18L5.2 19.2L7.4 16.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropIcon({ className }: IconProps) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 3C12 3 6 10 6 14.5C6 18 8.7 21 12 21C15.3 21 18 18 18 14.5C18 10 12 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NextBallIcon({ className }: IconProps) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 5L13 12L5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 5L21 12L13 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn(className)}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="5.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function CommunityIcon({ className }: IconProps) {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3 20C3 16.5 5.5 14 8.5 14M21 20C21 16.5 18.5 14 15.5 14M8 20C8 16.7 9.8 14 12 14C14.2 14 16 16.7 16 20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12H19M19 12L14 7M19 12L14 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className, size = 19 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className, size = 19 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 3v11.2a3.3 3.3 0 1 1-2.4-3.17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 3c.6 2.6 2.4 4.4 5 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function YouTubeIcon({ className, size = 19 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
