import { forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { LinkProps as MuiLinkProps } from "@mui/material";

// `LinkProps` is the combination of the MUI `LinkProps` and the Next `LinkProps`
// We wanna use the `href` prop from `next/link` so we omit it from MUI's.
export type LinkProps = Omit<MuiLinkProps, "href"> &
  Omit<NextLinkProps, "as" | "passHref" | "children">;

/**
 * A convenience component that wraps the MUI `Link` component that provides
 * our look & feel with Next's router `Link`
 *
 * @see https://next.js.org/docs/api-reference/next/link
 */
const VGLink = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, replace, scroll, shallow, locale, children },
  ref
) {
  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      ref={ref}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {children}
    </NextLink>
  );
});

export default VGLink;
