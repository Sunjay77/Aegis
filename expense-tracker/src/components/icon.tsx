import type { SVGProps } from "react";

export function AegisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M64 8 108 24v32c0 29.1-18.2 53.8-44 64-25.8-10.2-44-34.9-44-64V24L64 8Z"
        fill="currentColor"
      />
      <path
        d="m64 27 25 9.1v19.7c0 16.9-9.6 31.7-25 39.2-15.4-7.5-25-22.3-25-39.2V36.1L64 27Z"
        fill="white"
        fillOpacity=".95"
      />
      <path
        d="m64 39 5.5 11.2 12.4 1.8-9 8.8 2.1 12.4L64 67.4l-11 5.8 2.1-12.4-9-8.8 12.4-1.8L64 39Z"
        fill="currentColor"
      />
    </svg>
  );
}